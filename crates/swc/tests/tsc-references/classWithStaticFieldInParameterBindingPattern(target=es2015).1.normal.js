//// [classWithStaticFieldInParameterBindingPattern.ts]
// https://github.com/microsoft/TypeScript/issues/36295
var _class;
(({ [(_class = class {
}, _class.x = 1, _class).x]: b = ""  })=>{})();
