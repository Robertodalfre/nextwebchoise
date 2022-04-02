"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/emailReceive";
exports.ids = ["pages/api/emailReceive"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/emailReceive.js":
/*!***********************************!*\
  !*** ./pages/api/emailReceive.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// export default function handler(req, res) {\n//   res.status(200).json({ name: 'John Doe' })\n// }\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nlet teste_ = \"teste\";\nfunction handler(req, res) {\n    let { email  } = req.query;\n    console.log(\"req.query\", req.query);\n    res.status(200).json({\n        email\n    });\n    teste_ = email;\n    console.log(\"teste_\", teste_);\n    var remetente = nodemailer.createTransport({\n        host: \"smtp.mail.yahoo.com\",\n        port: 587,\n        secure: false,\n        auth: {\n            user: \"robertodalfre@yahoo.com.br\",\n            pass: \"cgrpnrybyzhzstqj\"\n        }\n    });\n    var emailASerEnviado = {\n        from: \"robertodalfre@yahoo.com.br\",\n        to: teste_,\n        subject: \"Enviando Email de teste\",\n        text: \"Estou te enviando este email para testar meu aplicativo!!!! ! Favor Desconsiderar. Obrigado!!!!    - Roberto Dalfr\\xe9\"\n    };\n    remetente.sendMail(emailASerEnviado, function(error) {\n        if (error) {\n            console.log(error);\n        } else {\n            console.log(\"Email enviado com sucesso.\");\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWxSZWNlaXZlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFFN0UsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQyxJQUFJO0FBRUosSUFBSUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZLENBQUM7QUFDdEMsSUFBSUMsTUFBTSxHQUFFLE9BQU87QUFDSixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLElBQUksRUFBQ0MsS0FBSyxHQUFDLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFTCxHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDO0lBQ3BDRixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFFO1FBQUNMLEtBQUs7S0FBQyxDQUFFO0lBQy9CSixNQUFNLEdBQUdJLEtBQUssQ0FBQztJQUVqQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFUCxNQUFNLENBQUMsQ0FBQztJQUU5QixJQUFJVSxTQUFTLEdBQUdaLFVBQVUsQ0FBQ2EsZUFBZSxDQUFDO1FBQ3pDQyxJQUFJLEVBQUUscUJBQXFCO1FBQzNCQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxNQUFNLEVBQUMsS0FBSztRQUNaQyxJQUFJLEVBQUM7WUFDTEMsSUFBSSxFQUFFLDRCQUE0QjtZQUNsQ0MsSUFBSSxFQUFFLGtCQUFrQjtTQUFFO0tBQ3pCLENBQUM7SUFHRixJQUFJQyxnQkFBZ0IsR0FBRztRQUNyQkMsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQ0MsRUFBRSxFQUFFcEIsTUFBTTtRQUNWcUIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQ0MsSUFBSSxFQUFFLHdIQUFxSDtLQU01SDtJQUlDWixTQUFTLENBQUNhLFFBQVEsQ0FBQ0wsZ0JBQWdCLEVBQUUsU0FBU00sS0FBSyxFQUFDO1FBQ2xELElBQUlBLEtBQUssRUFBRTtZQUNYbEIsT0FBTyxDQUFDQyxHQUFHLENBQUNpQixLQUFLLENBQUMsQ0FBQztTQUNsQixNQUFNO1lBQ1BsQixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0YsQ0FBQyxDQUFDO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0d2ViY2hvaXNlLy4vcGFnZXMvYXBpL2VtYWlsUmVjZWl2ZS5qcz85NDU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pXHJcbi8vIH1cclxuXHJcbnZhciBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpO1xyXG5sZXQgdGVzdGVfPSAndGVzdGUnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBsZXQge2VtYWlsfSA9IHJlcS5xdWVyeTtcclxuICBjb25zb2xlLmxvZyhcInJlcS5xdWVyeVwiLCByZXEucXVlcnkpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKCB7ZW1haWx9IClcclxuICB0ZXN0ZV8gPSBlbWFpbDtcclxuXHJcbmNvbnNvbGUubG9nKFwidGVzdGVfXCIsIHRlc3RlXyk7XHJcblxyXG52YXIgcmVtZXRlbnRlID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gIGhvc3Q6ICdzbXRwLm1haWwueWFob28uY29tJyxcclxuICBwb3J0OiA1ODcsXHJcbiAgc2VjdXJlOmZhbHNlLFxyXG4gIGF1dGg6e1xyXG4gIHVzZXI6ICdyb2JlcnRvZGFsZnJlQHlhaG9vLmNvbS5icicsXHJcbiAgcGFzczogJ2NncnBucnlieXpoenN0cWonIH1cclxuICB9KTtcclxuICBcclxuXHJcbiAgdmFyIGVtYWlsQVNlckVudmlhZG8gPSB7XHJcbiAgICBmcm9tOiAncm9iZXJ0b2RhbGZyZUB5YWhvby5jb20uYnInLFxyXG4gICAgdG86IHRlc3RlXyxcclxuICAgIHN1YmplY3Q6ICdFbnZpYW5kbyBFbWFpbCBkZSB0ZXN0ZScsXHJcbiAgICB0ZXh0OiAnRXN0b3UgdGUgZW52aWFuZG8gZXN0ZSBlbWFpbCBwYXJhIHRlc3RhciBtZXUgYXBsaWNhdGl2byEhISEgISBGYXZvciBEZXNjb25zaWRlcmFyLiBPYnJpZ2FkbyEhISEgICAgLSBSb2JlcnRvIERhbGZyw6knLFxyXG4gICAgLy8gYXR0YWNobWVudHM6IFt7XHJcbiAgICAvLyBcdGZpbGVuYW1lOiAnc2NyZWVuc2hvdDIyLnBuZycsXHJcbiAgICAvLyBcdHBhdGg6IF9fZGlybmFtZSArJy9JbWFnZS9zY3JlZW5zaG90MjIucG5nJyxcclxuICAgIC8vIFx0Y2lkOiAndGVzdGUnIC8vbXkgbWlzdGFrZSB3YXMgcHV0dGluZyBcImNpZDpsb2dvQGNpZFwiIGhlcmUhIFxyXG4gICAgLy8gIH1dXHJcbiAgfTtcclxuXHJcblxyXG5cclxuICAgIHJlbWV0ZW50ZS5zZW5kTWFpbChlbWFpbEFTZXJFbnZpYWRvLCBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFbWFpbCBlbnZpYWRvIGNvbSBzdWNlc3NvLicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsInRlc3RlXyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJyZW1ldGVudGUiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsImVtYWlsQVNlckVudmlhZG8iLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsInNlbmRNYWlsIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/emailReceive.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/emailReceive.js"));
module.exports = __webpack_exports__;

})();