module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/BatmanIcon.tsx":
/*!***************************************!*\
  !*** ./src/components/BatmanIcon.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/BatmanIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BatmanIcon = () => __jsx("svg", {
  className: "batman-icon",
  version: "1.1",
  x: "0px",
  y: "0px",
  width: "500px",
  height: "174.916px",
  viewBox: "0 0 500 174.916",
  enableBackground: "new 0 0 500 174.916",
  xmlSpace: "preserve",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("path", {
  fill: "#242424",
  d: "M248.468,174.916c-1.915-5.667-3.515-11.724-5.962-17.418c-10.153-23.618-27.615-39.536-51.804-48.085   c-11.679-4.129-23.78-6.415-36.054-7.867c-21.129-2.5-42.311-2.353-63.508-1.186c-2.986,0.165-5.968,0.4-8.951,0.595   c-0.086,0.005-0.178-0.075,0.08,0.042c0.92-4.648,2.185-9.169,2.661-13.771c1.824-17.65-3.413-32.929-15.986-45.583   c-4.757-4.788-10.066-8.889-15.708-12.565C43.827,22.944,34.448,16.7,23.913,12.634C16.437,9.75,8.755,7.393,1.165,4.805   C0.782,4.674,0.385,4.583,0,4.26c0.424-0.027,0.849-0.08,1.273-0.08C57.282,4.175,113.29,4.171,169.299,4.176   c3.369,0,4.583,1.035,5.345,4.518c1.418,6.479,3.269,12.801,6.479,18.658c1.854,3.382,4.398,5.948,8.068,7.36   c10.999,4.235,22.266,7.14,34.152,7.044c4.396-0.036,5.725-0.693,6.767-4.998c1.279-5.279,2.216-10.68,2.779-16.083   c0.701-6.723,0.873-13.502,1.298-20.675c2.359,9.094,4.632,17.849,6.947,26.768c4.857-1.288,9.524-1.309,14.444,0.006   c2.23-8.885,4.43-17.647,6.63-26.411c0.188,0.008,0.373,0.016,0.559,0.024c0,2.626-0.095,5.258,0.018,7.88   c0.372,8.653,0.758,17.323,2.88,25.765c2.195,8.733,3.792,7.944,9.991,7.65c10.982-0.521,21.555-3.114,31.846-6.933   c3.751-1.392,6.338-3.984,8.223-7.408c3.12-5.664,4.902-11.793,6.363-18.042c0.236-1.015,0.521-2.037,0.941-2.985   c0.577-1.299,1.678-1.979,3.104-2.074c0.68-0.045,1.363-0.066,2.045-0.066C384.765,4.17,441.35,4.171,497.936,4.171   c0.663,0,1.324,0,1.986,0c0.026,0.125,0.053,0.249,0.078,0.373c-2.499,0.854-4.979,1.769-7.5,2.554   c-12.588,3.919-24.977,8.346-36.624,14.603c-11.805,6.342-22.892,13.686-31.865,23.808c-8.679,9.789-13.592,21.102-13.37,34.36   c0.11,6.622,1.561,13,3.891,19.186c0.219,0.58,0.425,1.165,0.706,1.938c-1.384-0.072-2.581-0.111-3.771-0.203   c-17.551-1.363-35.123-1.661-52.698-0.717c-14.164,0.759-28.203,2.513-42.022,5.878c-17.867,4.353-33.839,12.047-46.55,25.723   c-10.893,11.723-17.495,25.636-21.188,41.063C248.805,173.587,248.587,174.437,248.468,174.916z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (BatmanIcon);

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BatmanIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BatmanIcon */ "./src/components/BatmanIcon.tsx");
var _jsxFileName = "/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => __jsx("header", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h1", {
  className: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Batman"), __jsx(_BatmanIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Movies")));
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.tsx");
var _jsxFileName = "/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2180445996",
    __self: undefined
  }, "body{margin:0;padding:0;font-family:\"Libre Baskerville, serif\";font-size:15px;background:#c5c4c4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkbWlndWVsL0Rlc2t0b3AvcHJvamVjdHMvYmF0bWFuX21vdmllc19hcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVeUIsQUFHb0IsU0FDQyxVQUM2Qix1Q0FDeEIsZUFDSSxtQkFDckIiLCJmaWxlIjoiL2hvbWUvamRtaWd1ZWwvRGVza3RvcC9wcm9qZWN0cy9iYXRtYW5fbW92aWVzX2FwcC9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5pbnRlcmZhY2UgSUxheW91dFByb3BzIHt9XG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8SUxheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlLCBzZXJpZlwiO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzVjNGM0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/Layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
var _jsxFileName = "/home/jdmiguel/Desktop/projects/batman_movies_app/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import axios from "axios";



class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  /*static async getInitialProps() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=5d77a3a4cf8ca6ff499952f4eda298d9&query=batman"
    );
    return res;
  }*/
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("meta", {
      name: "theme-color",
      content: "#242424",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("meta", {
      name: "description",
      content: "Web site created using create-react-app",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Batman movies")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Contenido")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jdmiguel/Desktop/projects/batman_movies_app/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map