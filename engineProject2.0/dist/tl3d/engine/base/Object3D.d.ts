import { Matrix3D } from "../math/Matrix3D";
import { EventDispatcher } from "../events/EventDispatcher";
export declare class Object3D extends EventDispatcher {
    protected _x: number;
    protected _y: number;
    protected _z: number;
    rx: number;
    ry: number;
    rz: number;
    protected _scaleX: number;
    protected _scaleY: number;
    protected _scaleZ: number;
    protected _rotationX: number;
    protected _rotationY: number;
    protected _rotationZ: number;
    posMatrix: Matrix3D;
    constructor($x?: number, $y?: number, $z?: number);
    toStringout(): String;
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
    set z(value: number);
    get z(): number;
    set scale(value: number);
    set scaleX(value: number);
    get scaleX(): number;
    set scaleY(value: number);
    get scaleY(): number;
    set scaleZ(value: number);
    get scaleZ(): number;
    set rotationX(value: number);
    get rotationX(): number;
    set rotationY(value: number);
    get rotationY(): number;
    set rotationZ(value: number);
    get rotationZ(): number;
    get px(): number;
    set px(val: number);
    get py(): number;
    set py(val: number);
    get pz(): number;
    set pz(val: number);
    updateMatrix(): void;
    updateRotationMatrix(): void;
}
