/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functional/Palette.js":
/*!*******************************!*\
  !*** ./functional/Palette.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ \"./functional/Tools.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Palette = function Palette(context) {\n  var _this = this;\n\n  _classCallCheck(this, Palette);\n\n  this.context = context;\n  this.canvas = {};\n  this.canvasLength = 0;\n  this.initBackground = '';\n  this.colorWheel = {};\n  this.colorWheelValue = '';\n  this.matrixSizeMap = new Map();\n  this.selectedTool = 'Pencil';\n  this.initColorsArr = ['#000000', '#ffffff', '', '#e74c3c', '#2980b9'];\n  this.sizebarDiv = {};\n  this.colorbarDiv = {};\n  this.toolbarDiv = {};\n  this.tools = {};\n\n  this.init = function () {\n    _this.canvas = document.getElementById('canvas');\n    _this.sizebarDiv = document.getElementById('sizebar');\n    _this.colorbarDiv = document.getElementById('colorbar');\n    _this.toolbarDiv = document.getElementById('toolbar');\n    _this.colorWheel = document.getElementById('colorWhell');\n    _this.canvasLength = _this.canvas.offsetWidth;\n    _this.initBackground = '#ffffff';\n\n    _this.matrixSizeMap.set('4x4', 4);\n\n    _this.matrixSizeMap.set('16x16', 16);\n\n    _this.matrixSizeMap.set('32x32', 32);\n\n    _this.tools = new _Tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.context, _this.canvas);\n\n    _this.tools.init();\n\n    _this.canvas.addEventListener('mousedown', _this.tools.mouseDownHandler);\n\n    _this.canvas.addEventListener('mousedown', _this.setCurrentColor);\n\n    _this.canvas.addEventListener('mousemove', _this.tools.mouseMoveHandler);\n\n    _this.canvas.addEventListener('mouseup', _this.tools.mouseUpHandler);\n\n    var sizeBarArr = document.getElementsByClassName('select-list__item');\n\n    for (var i = 0; i < sizeBarArr.length; i += 1) {\n      sizeBarArr[i].addEventListener('click', _this.changeMatrixSize);\n    }\n\n    var colorBarArr = document.getElementsByClassName('colors-bar__item');\n\n    for (var _i = 0; _i < colorBarArr.length; _i += 1) {\n      colorBarArr[_i].addEventListener('click', _this.changeColorHandler);\n    }\n\n    for (var _i2 = 0; _i2 < _this.colorbarDiv.children.length; _i2 += 1) {\n      if (_this.initColorsArr[_i2]) {\n        _this.colorbarDiv.children[_i2].children[0].setAttribute('style', \"background-color:\".concat(_this.initColorsArr[_i2]));\n      }\n    }\n\n    for (var _i3 = 0; _i3 < _this.toolbarDiv.children.length; _i3 += 1) {\n      _this.toolbarDiv.children[_i3].addEventListener('click', _this.changeToolhandler);\n    }\n\n    _this.colorWheelValue = '#554433';\n    _this.colorWheel.value = _this.colorWheelValue;\n\n    _this.colorWheel.addEventListener('change', _this.setColorWheelColor);\n\n    document.addEventListener('keydown', function (e) {\n      var code = e.code;\n      var arr = ['Pencil', 'Paint bucket', 'Choose color'];\n\n      switch (code) {\n        case 'KeyB':\n          _this.changeToolhandler(arr[1]);\n\n          break;\n\n        case 'KeyC':\n          _this.changeToolhandler(arr[2]);\n\n          break;\n\n        case 'KeyP':\n          _this.changeToolhandler(arr[0]);\n\n          break;\n\n        default:\n          break;\n      }\n    });\n  };\n\n  this.setCurrentColor = function () {\n    if (_this.tools.colorPickerValue !== undefined && _this.tools.colorPickerValue !== '') {\n      var currentColorDiv = _this.colorbarDiv.children.item(0).children.item(0);\n\n      currentColorDiv.setAttribute('style', \"background-color:\".concat(_this.tools.colorPickerValue));\n    }\n  };\n\n  this.setColorWheelColor = function (e) {\n    _this.colorWheelValue = e.target.value;\n  };\n\n  this.getCanvas = function () {\n    if (_this.canvas !== undefined) {\n      return _this.canvas;\n    }\n\n    return null;\n  };\n\n  this.getMatrixSizeMap = function () {\n    return _this.matrixSizeMap;\n  };\n\n  this.getContext = function () {\n    return _this.context;\n  };\n\n  this.getCanvasLength = function () {\n    return _this.canvasLength;\n  };\n\n  this.changeMatrixSize = function (e) {\n    var target = e.target;\n    var name = target.children.item(1).innerHTML;\n\n    switch (name) {\n      case '4x4':\n        _this.sizebarDiv.childNodes.forEach(function (el) {\n          if (el.nodeName === 'DIV') {\n            if (el.id === name) {\n              el.classList.add('select-list__item_active');\n\n              _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\n            } else {\n              el.classList.remove('select-list__item_active');\n            }\n          }\n        });\n\n        break;\n\n      case '16x16':\n        _this.sizebarDiv.childNodes.forEach(function (el) {\n          if (el.nodeName === 'DIV') {\n            if (el.id === name) {\n              el.classList.add('select-list__item_active');\n\n              _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\n            } else {\n              el.classList.remove('select-list__item_active');\n            }\n          }\n        });\n\n        break;\n\n      case '32x32':\n        _this.sizebarDiv.childNodes.forEach(function (el) {\n          if (el.nodeName === 'DIV') {\n            if (el.id === name) {\n              el.classList.add('select-list__item_active');\n\n              _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\n            } else {\n              el.classList.remove('select-list__item_active');\n            }\n          }\n        });\n\n        break;\n\n      default:\n        break;\n    }\n  };\n\n  this.changeColorHandler = function (e) {\n    var target = e.target;\n\n    var currentColorDiv = _this.colorbarDiv.children.item(0).children.item(0);\n\n    var currentColor = currentColorDiv.style.backgroundColor;\n\n    var prevColorDiv = _this.colorbarDiv.children.item(1).children.item(0);\n\n    var clickedDiv = target.children.item(0);\n    var divName = target.nodeName === 'INPUT' ? target.id : target.children.item(1).innerHTML;\n\n    switch (divName) {\n      case 'red':\n        currentColorDiv.setAttribute('style', \"background-color:\".concat(clickedDiv.style.backgroundColor));\n        prevColorDiv.setAttribute('style', \"background-color:\".concat(currentColor));\n\n        _this.tools.setColor(clickedDiv.style.backgroundColor);\n\n        break;\n\n      case 'blue':\n        currentColorDiv.setAttribute('style', \"background-color:\".concat(clickedDiv.style.backgroundColor));\n        prevColorDiv.setAttribute('style', \"background-color:\".concat(currentColor));\n\n        _this.tools.setColor(clickedDiv.style.backgroundColor);\n\n        break;\n\n      case 'Prev color':\n        currentColorDiv.setAttribute('style', \"background-color:\".concat(clickedDiv.style.backgroundColor));\n\n        _this.tools.setColor(clickedDiv.style.backgroundColor);\n\n        break;\n\n      case 'Color selection':\n        prevColorDiv.setAttribute('style', \"background-color:\".concat(currentColor));\n        currentColorDiv.setAttribute('style', \"background-color:\".concat(_this.colorWheelValue));\n\n        _this.tools.setColor(_this.colorWheelValue);\n\n        break;\n\n      case 'Current color':\n      default:\n        break;\n    }\n  };\n\n  this.changeToolhandler = function (e) {\n    var name = '';\n\n    if (e.target !== undefined) {\n      var target = e.target;\n      name = target.children[1].innerHTML;\n    } else {\n      name = e;\n    }\n\n    switch (name) {\n      case 'Pencil':\n        _this.toolbarDiv.childNodes.forEach(function (el) {\n          if (el.nodeName === 'DIV') {\n            if (el.children[1].innerHTML === name) {\n              el.classList.add('tools-bar__item_active');\n              _this.selectedTool = name;\n\n              _this.tools.setSelectedTool(_this.selectedTool);\n            } else {\n              el.classList.remove('tools-bar__item_active');\n            }\n          }\n        });\n\n        break;\n\n      case 'Paint bucket':\n        _this.toolbarDiv.childNodes.forEach(function (el) {\n          if (el.nodeName === 'DIV') {\n            if (el.children[1].innerHTML === name) {\n              el.classList.add('tools-bar__item_active');\n              _this.selectedTool = name;\n\n              _this.tools.setSelectedTool(_this.selectedTool);\n            } else {\n              el.classList.remove('tools-bar__item_active');\n            }\n          }\n        });\n\n        break;\n\n      case 'Choose color':\n        _this.toolbarDiv.childNodes.forEach(function (el) {\n          if (el.nodeName === 'DIV') {\n            if (el.children[1].innerHTML === name) {\n              el.classList.add('tools-bar__item_active');\n              _this.selectedTool = name;\n\n              _this.tools.setSelectedTool(_this.selectedTool);\n            } else {\n              el.classList.remove('tools-bar__item_active');\n            }\n          }\n        });\n\n        break;\n\n      default:\n        break;\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Palette);\n\n//# sourceURL=webpack:///./functional/Palette.js?");

/***/ }),

/***/ "./functional/Tools.js":
/*!*****************************!*\
  !*** ./functional/Tools.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Tools = function Tools(context, canvas) {\n  var _this = this;\n\n  _classCallCheck(this, Tools);\n\n  this.canvas = canvas;\n  this.ctx = context;\n  this.selectedTool = 'Pencil';\n  this.colorPickerValue = '';\n  this.canvasLength = 0;\n  this.matrixSize = 0;\n  this.color = '';\n  this.isDrawing = false;\n  this.pointState = {\n    initx: 0,\n    inity: 0\n  };\n\n  this.init = function () {\n    _this.canvasLength = _this.canvas.offsetWidth;\n    _this.matrixSize = 4;\n    _this.color = '#000000';\n  };\n\n  this.setSelectedTool = function (tool) {\n    _this.selectedTool = tool;\n  };\n\n  this.mouseDownHandler = function (e) {\n    var offsetX = e.offsetX,\n        offsetY = e.offsetY;\n\n    switch (_this.selectedTool) {\n      case 'Pencil':\n        _this.isDrawing = true;\n        _this.pointState.initx = offsetX;\n        _this.pointState.inity = offsetY;\n        break;\n\n      case 'Paint bucket':\n        _this.pointState.initx = offsetX;\n        _this.pointState.inity = offsetY;\n\n        _this.fill();\n\n        break;\n\n      case 'Choose color':\n        _this.colorPicker(offsetX, offsetY);\n\n        break;\n\n      default:\n        break;\n    }\n  };\n\n  this.mouseMoveHandler = function (e) {\n    var offsetX = e.offsetX,\n        offsetY = e.offsetY;\n\n    if (_this.isDrawing) {\n      _this.drawLine(_this.pointState.initx, _this.pointState.inity, offsetX, offsetY);\n\n      _this.pointState.initx = offsetX;\n      _this.pointState.inity = offsetY;\n    }\n  };\n\n  this.mouseUpHandler = function () {\n    _this.isDrawing = false;\n    _this.pointState.initx = 0;\n    _this.pointState.inity = 0;\n  };\n\n  this.toggleDrawing = function () {\n    if (_this.isDrawing) {\n      _this.isDrawing = false;\n    } else {\n      _this.isDrawing = true;\n    }\n  };\n\n  this.getDrawingStatus = function () {\n    return _this.isDrawing;\n  };\n\n  this.setMatrixSize = function (size) {\n    _this.matrixSize = size;\n  };\n\n  this.setColor = function (color) {\n    _this.color = color;\n  };\n\n  this.setCanvasLength = function (length) {\n    _this.canvasLength = length;\n  };\n\n  this.drawLine = function (x1, y1, x2, y2) {\n    var x;\n    var y;\n    var px;\n    var py;\n    var xe;\n    var ye;\n    var i;\n    var dx = x2 - x1;\n    var dy = y2 - y1;\n    var dx1 = Math.abs(x2 - x1);\n    var dy1 = Math.abs(y2 - y1);\n    px = 2 * dy1 - dx1;\n    py = 2 * dx1 - dy1;\n\n    if (dy1 <= dx1) {\n      if (dx >= 0) {\n        x = x1;\n        y = y1;\n        xe = x2;\n      } else {\n        x = x2;\n        y = y2;\n        xe = x1;\n      }\n\n      _this.drawPxl(x, y);\n\n      for (i = 0; x < xe; i += 1) {\n        x += 1;\n\n        if (px < 0) {\n          px += 2 * dy1;\n        } else {\n          if (dx < 0 && dy < 0 || dx > 0 && dy > 0) {\n            y += 1;\n          } else {\n            y -= 1;\n          }\n\n          px += 2 * (dy1 - dx1);\n        }\n\n        _this.drawPxl(x, y);\n      }\n    } else {\n      if (dy >= 0) {\n        x = x1;\n        y = y1;\n        ye = y2;\n      } else {\n        x = x2;\n        y = y2;\n        ye = y1;\n      }\n\n      _this.drawPxl(x, y);\n\n      for (i = 0; y < ye; i += 1) {\n        y += 1;\n\n        if (py <= 0) {\n          py += 2 * dx1;\n        } else {\n          if (dx < 0 && dy < 0 || dx > 0 && dy > 0) {\n            x += 1;\n          } else {\n            x -= 1;\n          }\n\n          py += 2 * (dx1 - dy1);\n        }\n\n        _this.drawPxl(x, y);\n      }\n    }\n  };\n\n  this.drawPxl = function (x, y) {\n    var pxlSize = _this.canvasLength / _this.matrixSize;\n    _this.ctx.fillStyle = _this.color;\n\n    if (_this.matrixSize === 512) {\n      var x1 = x;\n      var y1 = y;\n\n      _this.ctx.fillRect(x1, y1, pxlSize, pxlSize);\n    } else {\n      var _this$getPixelSize = _this.getPixelSize(x, y),\n          _this$getPixelSize2 = _slicedToArray(_this$getPixelSize, 2),\n          _x = _this$getPixelSize2[0],\n          _y = _this$getPixelSize2[1];\n\n      _this.ctx.fillRect(_x, _y, pxlSize, pxlSize);\n    }\n  };\n\n  this.getPixelSize = function (coord1, coord2) {\n    var arr = [];\n    var columnSize = _this.canvasLength / _this.matrixSize;\n    arr.push(Math.floor(coord1 / columnSize) * columnSize, Math.floor(coord2 / columnSize) * columnSize);\n    return arr;\n  };\n\n  this.clear = function () {\n    _this.ctx.clearRect(0, 0, _this.canvasLength, _this.canvasLength);\n  };\n\n  this.fill = function () {\n    _this.ctx.fillStyle = _this.color;\n    var pxlSize = _this.canvasLength / _this.matrixSize;\n\n    for (var i = 0; i < _this.matrixSize; i += 1) {\n      for (var j = 0; j < _this.matrixSize; j += 1) {\n        _this.ctx.fillRect(pxlSize * j, pxlSize * i, pxlSize, pxlSize);\n      }\n    }\n  };\n\n  this.colorPicker = function (x, y) {\n    var pixel = _this.ctx.getImageData(x, y, 1, 1);\n\n    var data = pixel.data;\n    var rgba = \"rgba(\".concat(data[0], \",\").concat(data[1], \",\").concat(data[2], \",\").concat(data[3] / 255, \")\");\n    _this.colorPickerValue = rgba;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tools);\n\n//# sourceURL=webpack:///./functional/Tools.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functional_Palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functional/Palette */ \"./functional/Palette.js\");\n\n\n\nwindow.onload = function () {\n  var canvas = document.getElementById('canvas');\n  var ctx = canvas.getContext('2d');\n  var palette = new _functional_Palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  palette.init();\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.scss?");

/***/ })

/******/ });