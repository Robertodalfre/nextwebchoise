"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_55199_Documents_nextwebchoise_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_55199_Documents_nextwebchoise_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_55199_Documents_nextwebchoise_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nfunction Home() {\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_55199_Documents_nextwebchoise_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var data, endpoint, options, response, result;\n            return C_Users_55199_Documents_nextwebchoise_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        data = {\n                            email: event.target.email.value,\n                            name: event.target.name.value,\n                            msg: event.target.msg.value\n                        };\n                        endpoint = \"/api/emailReceive/?email=\".concat(data.email, \"&name=\").concat(data.name, \"&msg=\").concat(data.msg);\n                        options = {\n                            method: \"GET\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        };\n                        _ctx.next = 6;\n                        return fetch(endpoint, options);\n                    case 6:\n                        response = _ctx.sent;\n                        _ctx.next = 9;\n                        return response.json();\n                    case 9:\n                        result = _ctx.sent;\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                            type: \"text\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Email..\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 40,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            placeholder: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"msg\",\n                            children: \"Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().textarea),\n                            id: \"msg\",\n                            name: \"msg\",\n                            placeholder: \"Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 44,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 46,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 1\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 1\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                class: \"col-6\",\n                children: \"Ol\\xe1 de novo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    href: \"https://github.com/Robertodalfre\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by \\xa0\\xa0  \",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/Frame.svg\",\n                                alt: \"FrameDalfre Logo\",\n                                width: 350,\n                                height: 110\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\55199\\\\Documents\\\\nextwebchoise\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw0RUFBQ21DLEdBQUM7b0JBQ0FDLElBQUksRUFBQyxrQ0FBa0M7b0JBQ3ZDekIsTUFBTSxFQUFDLFFBQVE7b0JBQ2YwQixHQUFHLEVBQUMscUJBQXFCOzt3QkFDMUIsdUJBQzBCO3dCQUFDLEdBQUc7c0NBQzdCLDhEQUFDQyxNQUFJOzRCQUFDbEIsU0FBUyxFQUFFcEIscUVBQVc7c0NBQzFCLDRFQUFDRCxtREFBSztnQ0FBQ3lDLEdBQUcsRUFBQyxZQUFZO2dDQUFDQyxHQUFHLEVBQUMsa0JBQWtCO2dDQUFDQyxLQUFLLEVBQUUsR0FBRztnQ0FBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7O29DQUFJOzs7OztnQ0FDckU7Ozs7Ozt3QkFDTDs7Ozs7b0JBQ0c7Ozs7OztZQUVMLENBRVA7Q0FDRjtBQWhFdUIxQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSxcclxuICAgICAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLnZhbHVlLFxyXG4gICAgICAgICAgbXNnOiBldmVudC50YXJnZXQubXNnLnZhbHVlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBgL2FwaS9lbWFpbFJlY2VpdmUvP2VtYWlsPSR7ZGF0YS5lbWFpbH0mbmFtZT0ke2RhdGEubmFtZX0mbXNnPSR7ZGF0YS5tc2d9YDtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG5cclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCBvcHRpb25zKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbjxkaXY+XHJcbjxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cclxuPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsLi5cIiAvPlxyXG5cclxuPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbjxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XHJcblxyXG48bGFiZWwgaHRtbEZvcj1cIm1zZ1wiPk1lc3NhZ2U8L2xhYmVsPlxyXG48dGV4dGFyZWEgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWF9IGlkPVwibXNnXCIgbmFtZT1cIm1zZ1wiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiID48L3RleHRhcmVhPlxyXG5cclxuPGJyLz5cclxuPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxyXG48L2Zvcm0+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgT2zDoSBkZSBub3ZvXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1JvYmVydG9kYWxmcmVcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBvd2VyZWQgYnkgJm5ic3A7Jm5ic3A7ICB7JyAnfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvRnJhbWUuc3ZnXCIgYWx0PVwiRnJhbWVEYWxmcmUgTG9nb1wiIHdpZHRoPXszNTB9IGhlaWdodD17MTEwfSAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApXHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiSG9tZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiZGF0YSIsImVuZHBvaW50Iiwib3B0aW9ucyIsInJlc3BvbnNlIiwicmVzdWx0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsIm1zZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJiciIsImJ1dHRvbiIsImNsYXNzIiwiZm9vdGVyIiwiYSIsImhyZWYiLCJyZWwiLCJzcGFuIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});