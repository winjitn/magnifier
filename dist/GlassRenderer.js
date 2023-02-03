"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = _interopRequireDefault(require("./utils"));
var _Image = _interopRequireDefault(require("./Image"));
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GlassRenderer = function GlassRenderer(props) {
  var itemRef = props.itemRef,
    itemPosition = props.itemPosition,
    activePosition = props.activePosition,
    elementDimensions = props.elementDimensions,
    itemDimensions = props.itemDimensions,
    active = props.active,
    imageSrc = props.imageSrc,
    largeImageSrc = props.largeImageSrc,
    imageAlt = props.imageAlt,
    magnifierBorderSize = props.magnifierBorderSize,
    magnifierBorderColor = props.magnifierBorderColor,
    magnifierBackgroundColor = props.magnifierBackgroundColor,
    square = props.square,
    magnifierSize = props.magnifierSize,
    magnifierOffsetX = props.magnifierOffsetX,
    magnifierOffsetY = props.magnifierOffsetY,
    renderOverlay = props.renderOverlay,
    cursorStyle = props.cursorStyle,
    onImageLoad = props.onImageLoad,
    onLargeImageLoad = props.onLargeImageLoad,
    onLoadRefresh = props.onLoadRefresh;
  var legalSize = itemDimensions.width > elementDimensions.width;
  var isActive = legalSize && active;
  var magnifierSizeNum = _utils["default"].convertWidthToPx(magnifierSize, elementDimensions.width);
  var positionOffset = magnifierSizeNum / 2;
  var position = {
    x: itemPosition.x - activePosition.x + positionOffset - magnifierBorderSize,
    y: itemPosition.y - activePosition.y + positionOffset - magnifierBorderSize
  };
  var divPosition = {
    x: activePosition.x - positionOffset + magnifierOffsetX,
    y: activePosition.y - positionOffset + magnifierOffsetY
  };
  var borderRadius = square ? "0" : "50%";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: {
      width: "100%",
      display: "block",
      boxSizing: "border-box",
      cursor: legalSize ? cursorStyle : "default"
    },
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: onImageLoad,
    onLoadRefresh: onLoadRefresh
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(magnifierSizeNum, magnifierSizeNum, true)), {}, {
      visibility: !isActive ? "hidden" : "visible",
      borderRadius: borderRadius,
      zIndex: "1",
      border: "".concat(magnifierBorderSize, "px solid ").concat(magnifierBorderColor),
      transform: "translate(".concat(divPosition.x, "px, ").concat(divPosition.y, "px)"),
      backgroundColor: magnifierBackgroundColor,
      backgroundClip: "padding-box"
    })
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: _styles["default"].getLargeImageStyle(position.x, position.y, isActive),
    ref: itemRef,
    src: largeImageSrc || imageSrc,
    alt: imageAlt,
    onImageLoad: onLargeImageLoad,
    onLoadRefresh: onLoadRefresh
  })), renderOverlay ? renderOverlay(active) : null);
};
var _default = GlassRenderer;
exports["default"] = _default;