define([
    "require",
    "exports",
    "foo",
    "foo-bar",
    "./directory/foo-bar",
    "foo2",
    "foo3",
    "foo4",
    "foo5"
], function(require, exports, _foo, _fooBar, _fooBar1, _foo2, _foo3, _foo4, _foo5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        test: ()=>test,
        test2: ()=>test2
    });
    _foo2 = _foo2;
    _foo3 = /*#__PURE__*/ _interopRequireWildcard(_foo3, true);
    var test;
    var test2 = 5;
    _foo4.bar;
    _foo5.foo;
    _foo2;
});
