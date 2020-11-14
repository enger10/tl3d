import {ResCount} from "../base/ResCount"
import {Scene_data} from "../context/Scene_data"

    export class TextureRes extends ResCount {
        public texture: WebGLTexture;
        public width: number;
        public height: number;
        public destory(): void {
            Scene_data.context3D.deleteTexture(this.texture);
        }
    }
