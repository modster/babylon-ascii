import "@babylonjs/core/Engines/Extensions/engine.dynamicTexture.js";
import "./asciiart.fragment";
import { AsciiArtPostProcess } from '@babylonjs/post-processes/asciiArt';
import { Camera } from "@babylonjs/core/Cameras/camera";
export default class MyAsciiArtPostProcess extends AsciiArtPostProcess {
    camera: Camera;
    onStart(): void;
}
