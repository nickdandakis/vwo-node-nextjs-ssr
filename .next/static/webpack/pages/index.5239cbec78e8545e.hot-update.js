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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _vwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vwo */ \"./vwo.js\");\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction IndexPage(param) {\n    var userID = param.userID;\n    _s();\n    var ref = (0,_vwo__WEBPACK_IMPORTED_MODULE_2__.useVWOExperiment)({\n        campaignKey: _config__WEBPACK_IMPORTED_MODULE_1__.VWO_EXPERIMENT_CAMPAIGN_KEY,\n        userID: userID\n    }), variation = ref.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Minimal repro of VWO SDK with broken SSR\"\n            }, void 0, false, {\n                fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Comment out the lines related to prefetching to get SSR to break.\"\n            }, void 0, false, {\n                fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"View this page's source to see SSR being broken.\"\n            }, void 0, false, {\n                fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            variation === _config__WEBPACK_IMPORTED_MODULE_1__.VWO_EXPERIMENT_CONTROL_VARIATION_KEY ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    color: \"gray\"\n                },\n                children: [\n                    \"Serving the control \",\n                    variation\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this) : variation === _config__WEBPACK_IMPORTED_MODULE_1__.VWO_EXPERIMENT_TEST_VARIATION_KEY ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    color: \"green\"\n                },\n                children: [\n                    \"Serving new variation \",\n                    variation\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    color: \"red\"\n                },\n                children: \"Serving no experiment\"\n            }, void 0, false, {\n                fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Configuration\"\n            }, void 0, false, {\n                fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                        children: \"VWO Account ID\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                        children: _config__WEBPACK_IMPORTED_MODULE_1__.VWO_ACCOUNT_ID\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                        children: \"VWO SDK key\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                        children: _config__WEBPACK_IMPORTED_MODULE_1__.VWO_SDK_KEY\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                        children: \"VWO campaign key\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                        children: _config__WEBPACK_IMPORTED_MODULE_1__.VWO_EXPERIMENT_CAMPAIGN_KEY\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                        children: \"VWO control variation key\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                        children: _config__WEBPACK_IMPORTED_MODULE_1__.VWO_EXPERIMENT_CONTROL_VARIATION_KEY\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                        children: \"VWO experiment variation key\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                        children: _config__WEBPACK_IMPORTED_MODULE_1__.VWO_EXPERIMENT_TEST_VARIATION_KEY\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                        children: [\n                            \"VWO user cookie (ie \",\n                            _vwo__WEBPACK_IMPORTED_MODULE_2__.VWO_UUID_COOKIE_NAME,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                        children: userID ? userID : \"No cookie found, are you running an adblocker?\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/vwo-node-nextjs-breaking-ssr/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(IndexPage, \"hlTRKHDDKQdoFhO3kLdf1882k30=\", false, function() {\n    return [\n        _vwo__WEBPACK_IMPORTED_MODULE_2__.useVWOExperiment\n    ];\n});\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQVNtQjtBQUtIOzs7QUFFRCxTQUFTTyxTQUFTLENBQUMsS0FBVSxFQUFFO1FBQVosTUFBUSxHQUFSLEtBQVUsQ0FBUkMsTUFBTTs7SUFDeEMsSUFBNEJGLEdBQXNFLEdBQXRFQSxzREFBZ0IsQ0FBQztRQUFFRyxXQUFXLEVBQUVQLGdFQUEyQjtRQUFFTSxNQUFNLEVBQU5BLE1BQU07S0FBRSxDQUFDLEVBQTFGRSxTQUFlLEdBQUtKLEdBQXNFLENBQTFGSSxJQUFJO0lBRVoscUJBQ0UsOERBQUNFLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLDBDQUF3Qzs7Ozs7b0JBQUs7MEJBQ2pELDhEQUFDQyxHQUFDOzBCQUFDLG1FQUVIOzs7OztvQkFBSTswQkFDSiw4REFBQ0EsR0FBQzswQkFBQyxrREFFSDs7Ozs7b0JBQUk7WUFFSEgsU0FBUyxLQUFLUix5RUFBb0MsaUJBQ2pELDhEQUFDWSxJQUFFO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxNQUFNO2lCQUFFOztvQkFBRSxzQkFDUjtvQkFBQ04sU0FBUzs7Ozs7O29CQUMzQixHQUNIQSxTQUFTLEtBQUtQLHNFQUFpQyxpQkFDakQsOERBQUNXLElBQUU7Z0JBQUNDLEtBQUssRUFBRTtvQkFBRUMsS0FBSyxFQUFFLE9BQU87aUJBQUU7O29CQUFFLHdCQUNQO29CQUFDTixTQUFTOzs7Ozs7b0JBQzdCLGlCQUVMLDhEQUFDSSxJQUFFO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxLQUFLO2lCQUFFOzBCQUFFLHVCQUU3Qjs7Ozs7b0JBQUs7MEJBR1AsOERBQUNDLElBQUU7MEJBQUMsZUFBYTs7Ozs7b0JBQUs7MEJBQ3RCLDhEQUFDQyxJQUFFOztrQ0FDRCw4REFBQ0MsSUFBRTtrQ0FBQyxnQkFBYzs7Ozs7NEJBQUs7a0NBQ3ZCLDhEQUFDQyxJQUFFO2tDQUFFckIsbURBQWM7Ozs7OzRCQUFNO2tDQUV6Qiw4REFBQ29CLElBQUU7a0NBQUMsYUFBVzs7Ozs7NEJBQUs7a0NBQ3BCLDhEQUFDQyxJQUFFO2tDQUFFcEIsZ0RBQVc7Ozs7OzRCQUFNO2tDQUV0Qiw4REFBQ21CLElBQUU7a0NBQUMsa0JBQWdCOzs7Ozs0QkFBSztrQ0FDekIsOERBQUNDLElBQUU7a0NBQUVuQixnRUFBMkI7Ozs7OzRCQUFNO2tDQUV0Qyw4REFBQ2tCLElBQUU7a0NBQUMsMkJBQXlCOzs7Ozs0QkFBSztrQ0FDbEMsOERBQUNDLElBQUU7a0NBQUVsQix5RUFBb0M7Ozs7OzRCQUFNO2tDQUUvQyw4REFBQ2lCLElBQUU7a0NBQUMsOEJBQTRCOzs7Ozs0QkFBSztrQ0FDckMsOERBQUNDLElBQUU7a0NBQUVqQixzRUFBaUM7Ozs7OzRCQUFNO2tDQUU1Qyw4REFBQ2dCLElBQUU7OzRCQUFDLHNCQUFvQjs0QkFBQ2Ysc0RBQW9COzRCQUFDLEdBQUM7Ozs7Ozs0QkFBSztrQ0FDcEQsOERBQUNnQixJQUFFO2tDQUFFYixNQUFNLEdBQUdBLE1BQU0sR0FBRyxnREFBZ0Q7Ozs7OzRCQUFNOzs7Ozs7b0JBQzFFOzs7Ozs7WUFDRCxDQUNQO0NBQ0Y7R0FqRHVCRCxTQUFTOztRQUNIRCxrREFBZ0I7OztBQUR0QkMsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ2Nvb2tpZS1zdG9yYWdlJztcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBkZWh5ZHJhdGUgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbmltcG9ydCB7XG4gIFZXT19BQ0NPVU5UX0lELFxuICBWV09fU0RLX0tFWSxcbiAgVldPX0VYUEVSSU1FTlRfQ0FNUEFJR05fS0VZLFxuICBWV09fRVhQRVJJTUVOVF9DT05UUk9MX1ZBUklBVElPTl9LRVksXG4gIFZXT19FWFBFUklNRU5UX1RFU1RfVkFSSUFUSU9OX0tFWSxcbn0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7XG4gIFZXT19VVUlEX0NPT0tJRV9OQU1FLFxuICB1c2VWV09FeHBlcmltZW50LFxuICBwcmVmZXRjaFZXT0V4cGVyaW1lbnQsXG59IGZyb20gJy4uL3Z3byc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSh7IHVzZXJJRCB9KSB7XG4gIGNvbnN0IHsgZGF0YTogdmFyaWF0aW9uIH0gPSB1c2VWV09FeHBlcmltZW50KHsgY2FtcGFpZ25LZXk6IFZXT19FWFBFUklNRU5UX0NBTVBBSUdOX0tFWSwgdXNlcklEIH0pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPk1pbmltYWwgcmVwcm8gb2YgVldPIFNESyB3aXRoIGJyb2tlbiBTU1I8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIENvbW1lbnQgb3V0IHRoZSBsaW5lcyByZWxhdGVkIHRvIHByZWZldGNoaW5nIHRvIGdldCBTU1IgdG8gYnJlYWsuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVmlldyB0aGlzIHBhZ2UncyBzb3VyY2UgdG8gc2VlIFNTUiBiZWluZyBicm9rZW4uXG4gICAgICA8L3A+XG5cbiAgICAgIHt2YXJpYXRpb24gPT09IFZXT19FWFBFUklNRU5UX0NPTlRST0xfVkFSSUFUSU9OX0tFWSA/IChcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+XG4gICAgICAgICAgU2VydmluZyB0aGUgY29udHJvbCB7dmFyaWF0aW9ufVxuICAgICAgICA8L2gyPlxuICAgICAgKSA6IHZhcmlhdGlvbiA9PT0gVldPX0VYUEVSSU1FTlRfVEVTVF9WQVJJQVRJT05fS0VZID8gKFxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+XG4gICAgICAgICAgU2VydmluZyBuZXcgdmFyaWF0aW9uIHt2YXJpYXRpb259XG4gICAgICAgIDwvaDI+XG4gICAgICApIDogKFxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxuICAgICAgICAgIFNlcnZpbmcgbm8gZXhwZXJpbWVudFxuICAgICAgICA8L2gyPlxuICAgICAgKX1cbiAgICAgIFxuICAgICAgPGgzPkNvbmZpZ3VyYXRpb248L2gzPlxuICAgICAgPGRsPlxuICAgICAgICA8ZHQ+VldPIEFjY291bnQgSUQ8L2R0PlxuICAgICAgICA8ZGQ+e1ZXT19BQ0NPVU5UX0lEfTwvZGQ+XG4gICAgICAgIFxuICAgICAgICA8ZHQ+VldPIFNESyBrZXk8L2R0PlxuICAgICAgICA8ZGQ+e1ZXT19TREtfS0VZfTwvZGQ+XG5cbiAgICAgICAgPGR0PlZXTyBjYW1wYWlnbiBrZXk8L2R0PlxuICAgICAgICA8ZGQ+e1ZXT19FWFBFUklNRU5UX0NBTVBBSUdOX0tFWX08L2RkPlxuXG4gICAgICAgIDxkdD5WV08gY29udHJvbCB2YXJpYXRpb24ga2V5PC9kdD5cbiAgICAgICAgPGRkPntWV09fRVhQRVJJTUVOVF9DT05UUk9MX1ZBUklBVElPTl9LRVl9PC9kZD5cblxuICAgICAgICA8ZHQ+VldPIGV4cGVyaW1lbnQgdmFyaWF0aW9uIGtleTwvZHQ+XG4gICAgICAgIDxkZD57VldPX0VYUEVSSU1FTlRfVEVTVF9WQVJJQVRJT05fS0VZfTwvZGQ+XG5cbiAgICAgICAgPGR0PlZXTyB1c2VyIGNvb2tpZSAoaWUge1ZXT19VVUlEX0NPT0tJRV9OQU1FfSk8L2R0PlxuICAgICAgICA8ZGQ+e3VzZXJJRCA/IHVzZXJJRCA6ICdObyBjb29raWUgZm91bmQsIGFyZSB5b3UgcnVubmluZyBhbiBhZGJsb2NrZXI/J308L2RkPlxuICAgICAgPC9kbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxIH0pIHtcbiAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXE/LmhlYWRlcnM/LmNvb2tpZSB8fCBbXSk7XG4gIGNvbnN0IHVzZXJJRCA9IGNvb2tpZXNbVldPX1VVSURfQ09PS0lFX05BTUVdO1xuXG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbiAgY29uc29sZS5sb2coJ3VzZXJJRCcsIHVzZXJJRCk7XG4gIFxuICAvLyBTU1Igb2YgVldPIGNhdXNlcyB0aGUgYXBwIHRvIGNyYXNoIHdpdGggRUNPTk5SRVNFVCxcbiAgLy8gdW5jb21tZW50IGJlbG93IHRvIHJlcHJvZHVjZSB0aGUgY3Jhc2hcbiAgaWYgKHVzZXJJRCkge1xuICAgIGF3YWl0IHByZWZldGNoVldPRXhwZXJpbWVudCh7XG4gICAgICBxdWVyeUNsaWVudCxcbiAgICAgIGNhbXBhaWduS2V5OiBWV09fRVhQRVJJTUVOVF9DQU1QQUlHTl9LRVksXG4gICAgICB1c2VySUQsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB1c2VySUQ6IHVzZXJJRCA/PyAnJyxcbiAgICAgIGRlaHlkcmF0ZWRTdGF0ZTogZGVoeWRyYXRlKHF1ZXJ5Q2xpZW50KSxcbiAgICB9LFxuICB9XG59Il0sIm5hbWVzIjpbIlZXT19BQ0NPVU5UX0lEIiwiVldPX1NES19LRVkiLCJWV09fRVhQRVJJTUVOVF9DQU1QQUlHTl9LRVkiLCJWV09fRVhQRVJJTUVOVF9DT05UUk9MX1ZBUklBVElPTl9LRVkiLCJWV09fRVhQRVJJTUVOVF9URVNUX1ZBUklBVElPTl9LRVkiLCJWV09fVVVJRF9DT09LSUVfTkFNRSIsInVzZVZXT0V4cGVyaW1lbnQiLCJJbmRleFBhZ2UiLCJ1c2VySUQiLCJjYW1wYWlnbktleSIsImRhdGEiLCJ2YXJpYXRpb24iLCJkaXYiLCJoMSIsInAiLCJoMiIsInN0eWxlIiwiY29sb3IiLCJoMyIsImRsIiwiZHQiLCJkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});