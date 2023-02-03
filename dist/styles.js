"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getLargeImageStyle(positionX, positionY, active) {
  return {
    position: "absolute",
    boxSizing: "border-box",
    display: "block",
    top: 0,
    left: 0,
    transform: "translate(".concat(positionX, "px, ").concat(positionY, "px)"),
    zIndex: "1",
    visibility: !active ? "hidden" : "visible",
    width: "200%",
    backgroundColor: "#F6F6F6"
  };
}
function getZoomContainerStyle(width, height, inPlace, switchSides) {
  var style = {
    position: "absolute",
    boxSizing: "border-box",
    pointerEvents: "none",
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    top: "0",
    overflow: "hidden"
  };
  if (inPlace) {
    style.left = "0px";
  } else if (switchSides) {
    style.right = "".concat(width, "px");
  } else {
    style.left = "".concat(width, "px");
  }
  return style;
}
function getOverlayCenterStyle(width, height, left, top, opacity, transitionSpeed, color, backgroundImage, backgroundImageSize) {
  var backgroundStyle = {};
  if (backgroundImage) {
    backgroundStyle.backgroundImage = "url(\"".concat(backgroundImage, "\")");
  }
  if (backgroundImageSize) {
    backgroundStyle.backgroundSize = backgroundImageSize;
  }
  return _objectSpread({
    position: "absolute",
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    left: 0,
    top: 0,
    boxSizing: "border-box",
    transform: "translate(".concat(left, "px, ").concat(top, "px)"),
    border: "1px solid ".concat(color),
    opacity: opacity,
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    zIndex: "15",
    pointerEvents: "none"
  }, backgroundStyle);
}
function getOverlayTopStyle(width, height, opacity, transitionSpeed, backgroundColor) {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0,
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    zIndex: "10",
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}
function getOverlayLeftStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    width: "".concat(width, "px"),
    top: "".concat(top, "px"),
    left: 0,
    height: "".concat(height, "px"),
    zIndex: "10",
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}
function getOverlayRightStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: "".concat(top, "px"),
    right: 0,
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    zIndex: "10",
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}
function getOverlayBottomStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: "".concat(top, "px"),
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    zIndex: "10",
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}
function getMagnifierZoomStyle(active, transitionSpeed) {
  return {
    position: "relative",
    opacity: active ? 1 : 0,
    transition: "opacity ".concat(transitionSpeed, "s ease")
  };
}
var _default = {
  getLargeImageStyle: getLargeImageStyle,
  getZoomContainerStyle: getZoomContainerStyle,
  getOverlayCenterStyle: getOverlayCenterStyle,
  getOverlayTopStyle: getOverlayTopStyle,
  getOverlayLeftStyle: getOverlayLeftStyle,
  getOverlayRightStyle: getOverlayRightStyle,
  getOverlayBottomStyle: getOverlayBottomStyle,
  getMagnifierZoomStyle: getMagnifierZoomStyle
};
exports["default"] = _default;