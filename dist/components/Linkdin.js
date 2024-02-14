"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Linkdin = function Linkdin(props) {
  var width = props.width,
    height = props.height,
    fill = props.fill,
    icon_name = props.icon_name;
  console.log("props->>>", props, "->>>>sidebarData->>>>", _index.sidebarData);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _index.sidebarData.map(function (icon, key) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, icon.icon_name === icon_name ? /*#__PURE__*/_react["default"].createElement("svg", {
      key: key,
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      className: icon_name,
      width: width,
      height: height,
      fill: fill,
      viewBox: "0 0 50 50"
    }, icon.icon_svg) : '');
  }));
};
var _default = exports["default"] = Linkdin;