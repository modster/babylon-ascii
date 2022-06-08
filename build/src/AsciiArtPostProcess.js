"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@babylonjs/core/Engines/Extensions/engine.dynamicTexture.js");
require("./asciiart.fragment");
var asciiArt_1 = require("@babylonjs/post-processes/asciiArt");
var decorators_1 = require("../decorators");
var MyAsciiArtPostProcess = /** @class */ (function (_super) {
    __extends(MyAsciiArtPostProcess, _super);
    function MyAsciiArtPostProcess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyAsciiArtPostProcess.prototype.onStart = function () {
        this.camera.
        ;
    };
    __decorate([
        (0, decorators_1.fromScene)("camera")
    ], MyAsciiArtPostProcess.prototype, "camera", void 0);
    return MyAsciiArtPostProcess;
}(asciiArt_1.AsciiArtPostProcess));
exports.default = MyAsciiArtPostProcess;
/**
 * AsciiArtPostProcess is the helper class used to easily create your ascii art post process.
 * @see https://doc.babylonjs.com/how_to/how_to_use_postprocesses#ascii-art
 * @param name The name of the effect.
 * @param font The font to use following the w3c font definition.
 * @param text The text to render.
 * @param options The required width of the output texture or an object with
 * width, height (both being optional)
 */
// import { visibleInInspector } from "../decorators";
var myAscii = new asciiArt_1.AsciiArtPostProcess("myAscii", camera);
//# sourceMappingURL=AsciiArtPostProcess.js.map