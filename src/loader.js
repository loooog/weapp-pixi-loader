import * as PIXI from 'pixi.js';
import SparkMD5 from 'spark-md5';

export default class ResLoader {
  static RES_TYPE_TEXTURE = 0;
  static RES_TYPE_SPRITE_SHEET = 1;
  static RES_TYPE_FONT = 2;

  constructor(env, cloudPath, entryFileName) {
    wx.cloud.init({
      env: env
    });

    this.cloudPath = cloudPath;
    this.localPath = wx.env.USER_DATA_PATH;
    this.entryFileName = entryFileName;
    this.fs = wx.getFileSystemManager();

    this.resources = [];
  }

  async _syncLocalFile(filePath, md5) {
    const localFile = this.localPath + '/' + filePath;
    const cloudFile = this.cloudPath + '/' + filePath;
    let needDownload = false;

    try {
      this.fs.accessSync(localFile);
    } catch (error) {
      needDownload = true;
    }

    // check file md5

    if (!needDownload) {
      if (new SparkMD5.ArrayBuffer().append(this.fs.readFileSync(localFile)).end(false) === md5) {
        needDownload = false;
      } else {
        this.fs.unlinkSync(localFile);
        needDownload = true;
      }
    }

    // download file if needed

    if (needDownload) {
      const dirs = filePath.split('/').slice(0, -1);
      let dir = this.localPath + '/';

      for (const d of dirs) {
        dir += '/' + d;
        try {
          this.fs.accessSync(dir);
        } catch (error) {
          this.fs.mkdirSync(dir);
        }
      }

      await wx.cloud.downloadFile({
        fileID: cloudFile
      }).then((res) => {
        this.fs.saveFileSync(res.tempFilePath, localFile);
      }).catch(console.error);
    }
  }

  sync(onSyncComplete) {
    if (typeof onComplete === 'function') {
      this.onSyncComplete = onSyncComplete;
    }

    wx.cloud.downloadFile({
      fileID: this.cloudPath + '/' + this.entryFileName,
      success: (res) => {
        this.fs.saveFile({
          tempFilePath: res.tempFilePath,
          filePath: this.localPath + '/' + this.entryFileName,
          success: (res) => {
            this.fs.readFile({
              filePath: res.savedFilePath,
              encoding: 'utf-8',
              success: async (res) => {
                this.assetList = JSON.parse(res.data);
                let progress = 0;
                const total = this.assetList.length;

                for (const fileItem of this.assetList) {
                  await this._syncLocalFile(fileItem.filename, fileItem.md5);
                  if (typeof this.onSyncProgress === 'function') {
                    this.onSyncProgress(fileItem.filename, ++progress / total);
                  }
                }

                if (typeof this.onSyncComplete === 'function') {
                  this.onSyncComplete();
                }
              },
              fail: console.error
            });
          },
          fail: console.error
        });
      },
      fail: console.error
    });
  }

  addTexture(id, image) {
    this.resources.push({
      id: id.trim().length > 0 ? id.trim() : image.trim(),
      file: image.trim(),
      type: ResLoader.RES_TYPE_TEXTURE
    });

    return this;
  }

  addSpriteSheet(json, image) {
    this.resources.push({
      id: json,
      file: image.trim(),
      type: ResLoader.RES_TYPE_SPRITE_SHEET
    });

    return this;
  }

  addFont(font, image) {
    this.resources.push({
      id: font,
      file: image.trim(),
      type: ResLoader.RES_TYPE_FONT
    });

    return this;
  }

  _getFilePath(file) {
    let filePath = file;

    try {
      this.fs.accessSync(filePath);
    } catch (error) {
      filePath = this.localPath + '/' + file;
    }

    try {
      this.fs.accessSync(filePath);
    } catch (error) {
      if (typeof this.onLoadError === 'function') {
        this.onLoadError(file, 'resource file does not found');
      }

      return false;
    }

    return filePath;
  }

  async _loadBaseTexture(image) {
    const imagePath = this._getFilePath(image);

    if (imagePath) {
      return new Promise((resolve) => {
        const img = wx.createImage();

        img.src = imagePath;
        img.onload = () => resolve(new PIXI.BaseTexture(img));
      });
    }

    return false;
  }

  async loadTexture(id, image) {
    const texture = await this._loadBaseTexture(image);

    if (texture) {
      PIXI.BaseTexture.addToCache(texture, id);
      return true;
    }

    return false;
  }

  async loadSpritesheet(json, image) {
    const jsonFile = this._getFilePath(json);
    const texture = this._loadBaseTexture(image);

    if (jsonFile && texture) {
      return await new Promise((resolve) => {
        new PIXI.Spritesheet(
          texture,
          JSON.parse(this.fs.readFileSync(jsonFile, 'utf-8'))
        ).parse(resolve);
      });
    }

    return false;
  }

  // aysnc loadFont(font, url) {

  // }

  async load(onLoadComplete) {
    if (typeof onLoadComplete === 'function') {
      this.onLoadComplete = onLoadComplete;
    }

    const total = this.resources.length;
    let progress = 0;

    for (let i = 0; i < this.resources.length; i++) {
      const resource = this.resources[i];

      if (resource.type === ResLoader.RES_TYPE_TEXTURE) {
        await this.loadTexture(resource.id, resource.file);
      } else if (resource.type === ResLoader.RES_TYPE_SPRITE_SHEET) {
        await this.loadSpritesheet(resource.id, resource.file);
      } else if (resource.type === ResLoader.RES_TYPE_FONT) {
        await this.loadFont(resource.id, resource.file);
      }

      if (typeof this.onLoadProgress === 'function') {
        this.onLoadProgress(resource, ++progress / total);
      }
    }

    if (typeof this.onLoadComplete === 'function') {
      this.onLoadComplete();
    }
  }
}
