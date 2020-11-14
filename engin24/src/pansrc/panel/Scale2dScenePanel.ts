import {ui} from "../../../../../zhuilong/src/ui/layaMaxUI"
import Sprite = laya.display.Sprite
import Image = laya.ui.Image
import Event = laya.events.Event
import {Vector2D} from "../../../pan3d/engine/math/Vector2D"
import {MouseType} from "../../../pan3d/engine/utils/KeyControl"
import {Rectangle} from "../../../pan3d/engine/math/Rectangle"
import {Override2dEngine} from "../../../pan3dinit/scene2d/override2d/Override2dEngine"
import {Engine} from "../../../pan3d/engine/Engine"
import {CharAction} from "../../../pan3d/baseprite/CharAction"
class FrameSceneWinPanel extends Laya.Sprite {
    constructor() {
        super()
        var $imag: Laya.Image = new Laya.Image("res/pan/background.jpg")
        this.addChild($imag);
        $imag.on(MouseType.MouseDown, this, this.onStartDrag);
    }
    private onStartDrag(e: Event): void {
        this.startDrag(this.dragRegion, true, 100);
    }
    private dragRegion: Laya.Rectangle;
}

class Scale2dScenePanel extends Laya.Sprite {
    constructor() {
        super();
        this.ape = new BaseWinPanel()
        this.addChild(this.ape);
 
        this.ape.pos(0, 0)

        this.layaSceneLevel = new BaseLaya3dSprite();
        this.addChild(this.layaSceneLevel)
        this.uiLayaSceneChar = this.addModelChar();
        this.uiLayaSceneChar.nameEnable = true

        this.addRandomRole()

        this.ape.on(MouseType.MouseDown, this, this.onStartDrag);
        this.ape.on(MouseType.MouseWheel, this, this.onMouseWheel);
    }

    private onMouseWheel(e: any): void {
        //鼠标中键盘控制2D场景的比例

        scene2d.Override2dEngine.htmlScale += (e.delta * 0.01)
        var $cale: number = scene2d.Override2dEngine.htmlScale*2
        this.ape.scale($cale, $cale)
        Engine.resetViewMatrx3D()
    }
    private roleItem: Array<Game2dChar>
    private addRandomRole(): void {
        this.roleItem = new Array()
        for (var i: number = 0; i < 10; i++) {
            var $baseChar: Game2dChar = new Game2dChar();
            this.layaSceneLevel.scene.addMovieDisplay($baseChar);
            $baseChar.setRoleUrl(getRoleUrl("dadaoshou"));
            $baseChar.set2dPos(random(500), random(500));  //坐标
            this.roleItem.push($baseChar)
        }


    }
    private uiLayaSceneChar: Game2dChar

    public render(context: Laya.RenderContext, x: number, y: number): void {
        super.render(context, x, y)
        this.layaSceneLevel.x = this.ape.x
        this.layaSceneLevel.y = this.ape.y
    }
    private ape: BaseWinPanel

    private onStartDrag(e: Event): void {
        var $v2d: Vector2D = new Vector2D((this.mouseX - this.ape.x), (this.mouseY - this.ape.y))
        this.uiLayaSceneChar = this.roleItem[random(this.roleItem.length)];
        this.uiLayaSceneChar.moveTopos($v2d);  //坐标
    }


    private layaSceneLevel: BaseLaya3dSprite
    private addModelChar(): Game2dChar {
        var $baseChar: Game2dChar = new Game2dChar();
        this.layaSceneLevel.scene.addMovieDisplay($baseChar);

        $baseChar.setRoleUrl(getRoleUrl("5103"));
        $baseChar.setMount("4104");
        $baseChar.setWing("902");
        $baseChar.setWeaponByAvatar(50011);
        $baseChar.play(CharAction.STAND_MOUNT);
        $baseChar.forceRotationY = 145

        $baseChar.set2dPos(200, 200);  //坐标
        return $baseChar
    }

}