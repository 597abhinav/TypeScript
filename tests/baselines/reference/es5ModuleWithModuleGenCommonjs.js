//// [es5ModuleWithModuleGenCommonjs.ts]
export class A
{
    constructor ()
    {
    }

    public B()
    {
        return 42;
    }
}

//// [es5ModuleWithModuleGenCommonjs.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.B = function () {
        return 42;
    };
    return A;
}());
exports.A = A;
