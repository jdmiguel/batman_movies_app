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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/BatmanIcon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const BatmanIcon = () => __jsx("svg", {
  version: "1.1",
  x: "0px",
  y: "0px",
  width: "500px",
  height: "174.916px",
  viewBox: "0 0 500 174.916",
  enableBackground: "new 0 0 500 174.916",
  xmlSpace: "preserve",
  className: "jsx-2030011144" + " " + "batman-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("path", {
  fill: "#242424",
  d: "M248.468,174.916c-1.915-5.667-3.515-11.724-5.962-17.418c-10.153-23.618-27.615-39.536-51.804-48.085   c-11.679-4.129-23.78-6.415-36.054-7.867c-21.129-2.5-42.311-2.353-63.508-1.186c-2.986,0.165-5.968,0.4-8.951,0.595   c-0.086,0.005-0.178-0.075,0.08,0.042c0.92-4.648,2.185-9.169,2.661-13.771c1.824-17.65-3.413-32.929-15.986-45.583   c-4.757-4.788-10.066-8.889-15.708-12.565C43.827,22.944,34.448,16.7,23.913,12.634C16.437,9.75,8.755,7.393,1.165,4.805   C0.782,4.674,0.385,4.583,0,4.26c0.424-0.027,0.849-0.08,1.273-0.08C57.282,4.175,113.29,4.171,169.299,4.176   c3.369,0,4.583,1.035,5.345,4.518c1.418,6.479,3.269,12.801,6.479,18.658c1.854,3.382,4.398,5.948,8.068,7.36   c10.999,4.235,22.266,7.14,34.152,7.044c4.396-0.036,5.725-0.693,6.767-4.998c1.279-5.279,2.216-10.68,2.779-16.083   c0.701-6.723,0.873-13.502,1.298-20.675c2.359,9.094,4.632,17.849,6.947,26.768c4.857-1.288,9.524-1.309,14.444,0.006   c2.23-8.885,4.43-17.647,6.63-26.411c0.188,0.008,0.373,0.016,0.559,0.024c0,2.626-0.095,5.258,0.018,7.88   c0.372,8.653,0.758,17.323,2.88,25.765c2.195,8.733,3.792,7.944,9.991,7.65c10.982-0.521,21.555-3.114,31.846-6.933   c3.751-1.392,6.338-3.984,8.223-7.408c3.12-5.664,4.902-11.793,6.363-18.042c0.236-1.015,0.521-2.037,0.941-2.985   c0.577-1.299,1.678-1.979,3.104-2.074c0.68-0.045,1.363-0.066,2.045-0.066C384.765,4.17,441.35,4.171,497.936,4.171   c0.663,0,1.324,0,1.986,0c0.026,0.125,0.053,0.249,0.078,0.373c-2.499,0.854-4.979,1.769-7.5,2.554   c-12.588,3.919-24.977,8.346-36.624,14.603c-11.805,6.342-22.892,13.686-31.865,23.808c-8.679,9.789-13.592,21.102-13.37,34.36   c0.11,6.622,1.561,13,3.891,19.186c0.219,0.58,0.425,1.165,0.706,1.938c-1.384-0.072-2.581-0.111-3.771-0.203   c-17.551-1.363-35.123-1.661-52.698-0.717c-14.164,0.759-28.203,2.513-42.022,5.878c-17.867,4.353-33.839,12.047-46.55,25.723   c-10.893,11.723-17.495,25.636-21.188,41.063C248.805,173.587,248.587,174.437,248.468,174.916z",
  className: "jsx-2030011144",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2030011144",
  __self: undefined
}, ".batman-icon.jsx-2030011144{width:200px;}@media screen and (max-width:500px){.batman-icon.jsx-2030011144{width:150px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkbWlndWVsL0Rlc2t0b3AvcHJvamVjdHMvYmF0bWFuX21vdmllc19hcHAvc3JjL2NvbXBvbmVudHMvQmF0bWFuSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQixBQUdxQixBQUlFLFlBSGhCLEFBSUUiLCJmaWxlIjoiL2hvbWUvamRtaWd1ZWwvRGVza3RvcC9wcm9qZWN0cy9iYXRtYW5fbW92aWVzX2FwcC9zcmMvY29tcG9uZW50cy9CYXRtYW5JY29uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQmF0bWFuSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT1cImJhdG1hbi1pY29uXCJcbiAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICB4PVwiMHB4XCJcbiAgICB5PVwiMHB4XCJcbiAgICB3aWR0aD1cIjUwMHB4XCJcbiAgICBoZWlnaHQ9XCIxNzQuOTE2cHhcIlxuICAgIHZpZXdCb3g9XCIwIDAgNTAwIDE3NC45MTZcIlxuICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDUwMCAxNzQuOTE2XCJcbiAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPVwiIzI0MjQyNFwiXG4gICAgICBkPVwiTTI0OC40NjgsMTc0LjkxNmMtMS45MTUtNS42NjctMy41MTUtMTEuNzI0LTUuOTYyLTE3LjQxOGMtMTAuMTUzLTIzLjYxOC0yNy42MTUtMzkuNTM2LTUxLjgwNC00OC4wODUgICBjLTExLjY3OS00LjEyOS0yMy43OC02LjQxNS0zNi4wNTQtNy44NjdjLTIxLjEyOS0yLjUtNDIuMzExLTIuMzUzLTYzLjUwOC0xLjE4NmMtMi45ODYsMC4xNjUtNS45NjgsMC40LTguOTUxLDAuNTk1ICAgYy0wLjA4NiwwLjAwNS0wLjE3OC0wLjA3NSwwLjA4LDAuMDQyYzAuOTItNC42NDgsMi4xODUtOS4xNjksMi42NjEtMTMuNzcxYzEuODI0LTE3LjY1LTMuNDEzLTMyLjkyOS0xNS45ODYtNDUuNTgzICAgYy00Ljc1Ny00Ljc4OC0xMC4wNjYtOC44ODktMTUuNzA4LTEyLjU2NUM0My44MjcsMjIuOTQ0LDM0LjQ0OCwxNi43LDIzLjkxMywxMi42MzRDMTYuNDM3LDkuNzUsOC43NTUsNy4zOTMsMS4xNjUsNC44MDUgICBDMC43ODIsNC42NzQsMC4zODUsNC41ODMsMCw0LjI2YzAuNDI0LTAuMDI3LDAuODQ5LTAuMDgsMS4yNzMtMC4wOEM1Ny4yODIsNC4xNzUsMTEzLjI5LDQuMTcxLDE2OS4yOTksNC4xNzYgICBjMy4zNjksMCw0LjU4MywxLjAzNSw1LjM0NSw0LjUxOGMxLjQxOCw2LjQ3OSwzLjI2OSwxMi44MDEsNi40NzksMTguNjU4YzEuODU0LDMuMzgyLDQuMzk4LDUuOTQ4LDguMDY4LDcuMzYgICBjMTAuOTk5LDQuMjM1LDIyLjI2Niw3LjE0LDM0LjE1Miw3LjA0NGM0LjM5Ni0wLjAzNiw1LjcyNS0wLjY5Myw2Ljc2Ny00Ljk5OGMxLjI3OS01LjI3OSwyLjIxNi0xMC42OCwyLjc3OS0xNi4wODMgICBjMC43MDEtNi43MjMsMC44NzMtMTMuNTAyLDEuMjk4LTIwLjY3NWMyLjM1OSw5LjA5NCw0LjYzMiwxNy44NDksNi45NDcsMjYuNzY4YzQuODU3LTEuMjg4LDkuNTI0LTEuMzA5LDE0LjQ0NCwwLjAwNiAgIGMyLjIzLTguODg1LDQuNDMtMTcuNjQ3LDYuNjMtMjYuNDExYzAuMTg4LDAuMDA4LDAuMzczLDAuMDE2LDAuNTU5LDAuMDI0YzAsMi42MjYtMC4wOTUsNS4yNTgsMC4wMTgsNy44OCAgIGMwLjM3Miw4LjY1MywwLjc1OCwxNy4zMjMsMi44OCwyNS43NjVjMi4xOTUsOC43MzMsMy43OTIsNy45NDQsOS45OTEsNy42NWMxMC45ODItMC41MjEsMjEuNTU1LTMuMTE0LDMxLjg0Ni02LjkzMyAgIGMzLjc1MS0xLjM5Miw2LjMzOC0zLjk4NCw4LjIyMy03LjQwOGMzLjEyLTUuNjY0LDQuOTAyLTExLjc5Myw2LjM2My0xOC4wNDJjMC4yMzYtMS4wMTUsMC41MjEtMi4wMzcsMC45NDEtMi45ODUgICBjMC41NzctMS4yOTksMS42NzgtMS45NzksMy4xMDQtMi4wNzRjMC42OC0wLjA0NSwxLjM2My0wLjA2NiwyLjA0NS0wLjA2NkMzODQuNzY1LDQuMTcsNDQxLjM1LDQuMTcxLDQ5Ny45MzYsNC4xNzEgICBjMC42NjMsMCwxLjMyNCwwLDEuOTg2LDBjMC4wMjYsMC4xMjUsMC4wNTMsMC4yNDksMC4wNzgsMC4zNzNjLTIuNDk5LDAuODU0LTQuOTc5LDEuNzY5LTcuNSwyLjU1NCAgIGMtMTIuNTg4LDMuOTE5LTI0Ljk3Nyw4LjM0Ni0zNi42MjQsMTQuNjAzYy0xMS44MDUsNi4zNDItMjIuODkyLDEzLjY4Ni0zMS44NjUsMjMuODA4Yy04LjY3OSw5Ljc4OS0xMy41OTIsMjEuMTAyLTEzLjM3LDM0LjM2ICAgYzAuMTEsNi42MjIsMS41NjEsMTMsMy44OTEsMTkuMTg2YzAuMjE5LDAuNTgsMC40MjUsMS4xNjUsMC43MDYsMS45MzhjLTEuMzg0LTAuMDcyLTIuNTgxLTAuMTExLTMuNzcxLTAuMjAzICAgYy0xNy41NTEtMS4zNjMtMzUuMTIzLTEuNjYxLTUyLjY5OC0wLjcxN2MtMTQuMTY0LDAuNzU5LTI4LjIwMywyLjUxMy00Mi4wMjIsNS44NzhjLTE3Ljg2Nyw0LjM1My0zMy44MzksMTIuMDQ3LTQ2LjU1LDI1LjcyMyAgIGMtMTAuODkzLDExLjcyMy0xNy40OTUsMjUuNjM2LTIxLjE4OCw0MS4wNjNDMjQ4LjgwNSwxNzMuNTg3LDI0OC41ODcsMTc0LjQzNywyNDguNDY4LDE3NC45MTZ6XCJcbiAgICAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5iYXRtYW4taWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIC5iYXRtYW4taWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhdG1hbkljb247XG4iXX0= */\n/*@ sourceURL=/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/BatmanIcon.tsx */"));

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BatmanIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BatmanIcon */ "./src/components/BatmanIcon.tsx");
var _jsxFileName = "/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("header", {
  className: "jsx-4101041200",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-4101041200" + " " + "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-4101041200",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Batman"), __jsx(_BatmanIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-4101041200",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Movies"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4101041200",
  __self: undefined
}, "header.jsx-4101041200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo.jsx-4101041200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;text-transform:uppercase;color:#242424;font-size:1.8em;line-height:0;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:700;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkbWlndWVsL0Rlc2t0b3AvcHJvamVjdHMvYmF0bWFuX21vdmllc19hcHAvc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFHc0IsQUFLQSwwRUFKVSxBQUtBLG1HQUpKLEFBS0EsNkZBSnJCLEFBS1csU0FDZ0IseUJBQ1gsY0FDRSxnQkFDRixjQUNLLDZGQUNILGdCQUNsQiIsImZpbGUiOiIvaG9tZS9qZG1pZ3VlbC9EZXNrdG9wL3Byb2plY3RzL2JhdG1hbl9tb3ZpZXNfYXBwL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYXRtYW5JY29uIGZyb20gXCIuL0JhdG1hbkljb25cIjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8aGVhZGVyPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPHNwYW4+QmF0bWFuPC9zcGFuPlxuICAgICAgICA8QmF0bWFuSWNvbiAvPlxuICAgICAgICA8c3Bhbj5Nb3ZpZXM8L3NwYW4+XG4gICAgICA8L2gxPlxuICAgIDwvaGVhZGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogIzI0MjQyNDtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/Header.tsx */"));
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
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3579281063",
  __self: undefined
}, "body{margin:0;padding:0;font-family:\"Libre Baskerville, serif\";font-size:15px;background:#c5c4c4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkbWlndWVsL0Rlc2t0b3AvcHJvamVjdHMvYmF0bWFuX21vdmllc19hcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXdUIsQUFHa0IsU0FDQyxVQUM2Qix1Q0FDeEIsZUFDSSxtQkFDckIiLCJmaWxlIjoiL2hvbWUvamRtaWd1ZWwvRGVza3RvcC9wcm9qZWN0cy9iYXRtYW5fbW92aWVzX2FwcC9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5pbnRlcmZhY2UgSUxheW91dFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudCB8IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudD47XG59XG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8SUxheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxIZWFkZXIgLz5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlLCBzZXJpZlwiO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjNWM0YzQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/Layout.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Thumb.tsx":
/*!**********************************!*\
  !*** ./src/components/Thumb.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jdmiguel/Desktop/projects/batman_movies_app/src/components/Thumb.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Thumb = ({
  title
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (Thumb);

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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _components_Thumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Thumb */ "./src/components/Thumb.tsx");
var _jsxFileName = "/home/jdmiguel/Desktop/projects/batman_movies_app/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://api.themoviedb.org/3/search/movie?api_key=5d77a3a4cf8ca6ff499952f4eda298d9&query=batman");
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.results.length}`);
    return {
      movies: data.results
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("meta", {
      name: "theme-color",
      content: "#242424",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("meta", {
      name: "description",
      content: "Web site created using create-react-app",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Batman movies")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, this.props.movies.map(movie => __jsx(_components_Thumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: movie.id,
      title: movie.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }))));
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

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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