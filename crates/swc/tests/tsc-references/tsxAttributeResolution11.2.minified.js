//// [tsxAttributeResolution11.tsx]
define([
    "require"
], function(require) {});
//// [react.d.ts]
define([
    "require"
], function(require) {});
//// [file.tsx]
//! 
//!   x Expected '>', got 'bar'
//!     ,----
//!  11 | var x = <MyComponent bar='world' />;
//!     :                      ^^^
//!     `----
