/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.jsx":
/*!**************************!*\
  !*** ./pages/signup.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_shotatogawa_workspace_udemy_social_media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ \"./components/Common/WelcomeMessage.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/shotatogawa/workspace/udemy/social_media/pages/signup.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_shotatogawa_workspace_udemy_social_media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Signup = function Signup() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: '',\n    password: '',\n    email: '',\n    bio: '',\n    facebook: '',\n    youtube: '',\n    twitter: '',\n    instagram: ''\n  }),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var name = user.name,\n      email = user.email,\n      password = user.password,\n      bio = user.bio;\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showSocialLinks = _useState2[0],\n      setShowSocialLinks = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showPassword = _useState3[0],\n      setShowPassword = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      errorMsg = _useState4[0],\n      setErrorMsg = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      username = _useState5[0],\n      setUsername = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      usernameLoading = _useState6[0],\n      setUsernameLoading = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      formLoading = _useState7[0],\n      setFormLoading = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      usernameAvailable = _useState8[0],\n      setUsernameAvailable = _useState8[1];\n\n  var handleSubmit = function handleSubmit() {};\n\n  var handleChange = function handleChange(event) {\n    var _event$target = event.target,\n        name = _event$target.name,\n        value = _event$target.value;\n    setUser(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), {}, (0,_Users_shotatogawa_workspace_udemy_social_media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value));\n    });\n  };\n\n  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {\n    loading: formLoading,\n    error: errorMsg !== null,\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {\n    error: true,\n    header: \"Oops\",\n    content: errorMsg,\n    onDismiss: function onDismiss() {\n      return setErrorMsg('');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {\n    label: \"Name\",\n    placeholder: \"Name\",\n    name: \"name\",\n    value: name,\n    onChange: handleChange,\n    fluid: true,\n    icon: \"user\",\n    iconPosition: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {\n    required: true,\n    label: \"email\",\n    placeholder: \"email\",\n    name: \"email\",\n    value: email,\n    onChange: handleChange,\n    fluid: true,\n    icon: \"envelope\",\n    iconPosition: \"left\",\n    type: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {\n    required: true,\n    label: \"password\",\n    placeholder: \"password\",\n    name: \"password\",\n    value: password,\n    onChange: handleChange,\n    fluid: true,\n    icon: {\n      name: 'eye',\n      circular: true,\n      link: true,\n      onClick: function onClick() {\n        setShowPassword(!showPassword);\n      }\n    },\n    iconPosition: \"left\",\n    type: showPassword ? \"tesxt\" : \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 21\n    }\n  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(Signup, \"iI3jBB7EQmqVeaYOuHM/8zOlCe4=\");\n\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\nvar _c;\n\n$RefreshReg$(_c, \"Signup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzeD8zODA0Il0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsInBhc3N3b3JkIiwiZW1haWwiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwidXNlciIsInNldFVzZXIiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lTG9hZGluZyIsInNldFVzZXJuYW1lTG9hZGluZyIsImZvcm1Mb2FkaW5nIiwic2V0Rm9ybUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWxhYmxlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXYiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDT0MsK0NBQVEsQ0FBQztBQUM3QkMsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxZQUFRLEVBQUUsRUFGbUI7QUFHN0JDLFNBQUssRUFBRSxFQUhzQjtBQUk3QkMsT0FBRyxFQUFFLEVBSndCO0FBSzdCQyxZQUFRLEVBQUUsRUFMbUI7QUFNN0JDLFdBQU8sRUFBRSxFQU5vQjtBQU83QkMsV0FBTyxFQUFFLEVBUG9CO0FBUTdCQyxhQUFTLEVBQUU7QUFSa0IsR0FBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsTUFZVFQsSUFaUyxHQVlzQlEsSUFadEIsQ0FZVFIsSUFaUztBQUFBLE1B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LE1BQUMseURBQUQ7QUFDSSxZQUFRLE1BRFo7QUFFSSxTQUFLLEVBQUMsVUFGVjtBQUdJLGVBQVcsRUFBQyxVQUhoQjtBQUlJLFFBQUksRUFBQyxVQUpUO0FBS0ksU0FBSyxFQUFFeEIsUUFMWDtBQU1JLFlBQVEsRUFBRXdCLFlBTmQ7QUFPSSxTQUFLLE1BUFQ7QUFRSSxRQUFJLEVBQUU7QUFDRnpCLFVBQUksRUFBRSxLQURKO0FBRUY4QixjQUFRLEVBQUUsSUFGUjtBQUdGQyxVQUFJLEVBQUUsSUFISjtBQUlGQyxhQUFPLEVBQUUsbUJBQU07QUFBQ25CLHVCQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQStCO0FBSjdDLEtBUlY7QUFjSSxnQkFBWSxFQUFDLE1BZGpCO0FBZUksUUFBSSxFQUFFQSxZQUFZLEdBQUcsT0FBSCxHQUFhLFVBZm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QkosQ0FGSixDQUhKLEVBa0RJLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxESixDQURKO0FBc0RILENBcEZEOztHQUFNZCxNOztLQUFBQSxNO0FBc0ZOLCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2lnbnVwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgTWVzc2FnZSwgU2VnbWVudCwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IEZvb3Rlck1lc3NhZ2UsIEhlYWRlck1lc3NhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZSdcblxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBiaW86ICcnLFxuICAgICAgICBmYWNlYm9vazogJycsXG4gICAgICAgIHlvdXR1YmU6ICcnLFxuICAgICAgICB0d2l0dGVyOiAnJyxcbiAgICAgICAgaW5zdGFncmFtOiAnJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcbiAgICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLCBzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLCBzZXRVc2VybmFtZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XG5cbiAgICAgICAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj0nT29wcycgY29udGVudD17ZXJyb3JNc2d9IG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2coJycpfSAvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0ndXNlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdlbnZlbG9wZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdleWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge3NldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRlc3h0XCIgOiBcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxuICAgICAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.jsx\n");

/***/ })

});