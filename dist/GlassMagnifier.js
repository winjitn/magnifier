"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = _interopRequireDefault(require("./utils"));
var _reactInputPosition = _interopRequireWildcard(require("react-input-position"));
var _GlassRenderer = _interopRequireDefault(require("./GlassRenderer"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GlassMagnifier = function GlassMagnifier(props) {
  var imageSrc = props.imageSrc,
    largeImageSrc = props.largeImageSrc,
    imageAlt = props.imageAlt,
    magnifierBorderSize = props.magnifierBorderSize,
    magnifierBorderColor = props.magnifierBorderColor,
    magnifierBackgroundColor = props.magnifierBackgroundColor,
    magnifierSize = props.magnifierSize,
    magnifierOffsetX = props.magnifierOffsetX,
    magnifierOffsetY = props.magnifierOffsetY,
    square = props.square,
    cursorStyle = props.cursorStyle,
    renderOverlay = props.renderOverlay,
    allowOverflow = props.allowOverflow,
    style = props.style,
    className = props.className,
    onImageLoad = props.onImageLoad,
    onLargeImageLoad = props.onLargeImageLoad,
    onZoomStart = props.onZoomStart,
    onZoomEnd = props.onZoomEnd;
  return /*#__PURE__*/_react["default"].createElement(_reactInputPosition["default"], {
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: "relative",
      overflow: allowOverflow ? "visible" : "hidden"
    }),
    className: className,
    touchActivationMethod: _reactInputPosition.TOUCH_ACTIVATION.TOUCH,
    mouseActivationMethod: _reactInputPosition.MOUSE_ACTIVATION.HOVER,
    onActivate: onZoomStart,
    onDeactivate: onZoomEnd,
    trackItemPosition: true,
    alignItemOnActivePos: true,
    itemPositionLimitBySize: true
  }, /*#__PURE__*/_react["default"].createElement(_GlassRenderer["default"], {
    magnifierBorderSize: magnifierBorderSize,
    magnifierBorderColor: magnifierBorderColor,
    magnifierBackgroundColor: magnifierBackgroundColor,
    magnifierSize: magnifierSize,
    imageSrc: imageSrc,
    largeImageSrc: largeImageSrc,
    imageAlt: imageAlt,
    square: square,
    magnifierOffsetX: magnifierOffsetX,
    magnifierOffsetY: magnifierOffsetY,
    renderOverlay: renderOverlay,
    cursorStyle: cursorStyle,
    onImageLoad: onImageLoad,
    onLargeImageLoad: onLargeImageLoad
  }));
};
GlassMagnifier.propTypes = {
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  allowOverflow: _propTypes["default"].bool,
  magnifierBorderSize: _propTypes["default"].number,
  magnifierBorderColor: _propTypes["default"].string,
  magnifierBackgroundColor: _propTypes["default"].string,
  magnifierSize: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  magnifierOffsetX: _propTypes["default"].number,
  magnifierOffsetY: _propTypes["default"].number,
  square: _propTypes["default"].bool,
  cursorStyle: _propTypes["default"].string,
  renderOverlay: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onImageLoad: _propTypes["default"].func,
  onLargeImageLoad: _propTypes["default"].func
};
GlassMagnifier.defaultProps = {
  imageSrc: "",
  largeImageSrc: "",
  imageAlt: "",
  allowOverflow: false,
  magnifierBorderSize: 3,
  magnifierBorderColor: "rgba(255,255,255,.5)",
  magnifierBackgroundColor: "rgba(225,225,225,.5)",
  magnifierSize: "25%",
  magnifierOffsetX: 0,
  magnifierOffsetY: 0,
  square: false,
  cursorStyle: "none",
  onImageLoad: _utils["default"].noop,
  onLargeImageLoad: _utils["default"].noop
};
var _default = GlassMagnifier;
exports["default"] = _default;