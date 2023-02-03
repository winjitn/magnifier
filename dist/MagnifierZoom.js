"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = _interopRequireDefault(require("./utils"));
var _styles = _interopRequireDefault(require("./styles"));
var _MagnifierContainer = require("./MagnifierContainer");
var _Image = _interopRequireDefault(require("./Image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function MagnifierZoom(props) {
  var imageSrc = props.imageSrc,
    imageAlt = props.imageAlt,
    className = props.className,
    style = props.style,
    _onImageLoad = props.onImageLoad,
    transitionSpeed = props.transitionSpeed;
  var _React$useContext = _react["default"].useContext(_MagnifierContainer.MagnifierContext),
    zoomImageDimensions = _React$useContext.zoomImageDimensions,
    zoomContainerDimensions = _React$useContext.zoomContainerDimensions,
    position = _React$useContext.position,
    onZoomImageLoad = _React$useContext.onZoomImageLoad,
    zoomRef = _React$useContext.zoomRef,
    zoomImageRef = _React$useContext.zoomImageRef,
    isActive = _React$useContext.isActive,
    inPlace = _React$useContext.inPlace;
  var invalidVertical = zoomImageDimensions.height <= zoomContainerDimensions.height;
  var invalidHorizontal = zoomImageDimensions.width <= zoomContainerDimensions.width;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread(_objectSpread(_objectSpread({}, _styles["default"].getMagnifierZoomStyle(isActive && !inPlace, transitionSpeed)), style), {}, {
      overflow: "hidden",
      pointerEvents: "none"
    }),
    ref: zoomRef
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    ref: zoomImageRef,
    style: _objectSpread({}, _styles["default"].getLargeImageStyle(invalidHorizontal ? 0 : position.x, invalidVertical ? 0 : position.y, true)),
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: function onImageLoad(e) {
      onZoomImageLoad(e);
      _onImageLoad(e);
    }
  }));
}
MagnifierZoom.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  onImageLoad: _propTypes["default"].func,
  transitionSpeed: _propTypes["default"].number
};
MagnifierZoom.defaultProps = {
  style: {},
  imageSrc: "",
  imageAlt: "",
  onImageLoad: _utils["default"].noop,
  transitionSpeed: 0.4
};
var _default = MagnifierZoom;
exports["default"] = _default;