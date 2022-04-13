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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// export default function handler(req, res) {\n//   res.status(200).json({ name: 'John Doe' })\n// }\nlet secretKey = process.env.KEY_API_YAHOO_DEV;\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nlet teste_ = \"teste\";\nfunction handler(req, res) {\n    let { email  } = req.query;\n    res.status(200).json(\"Email Enviado com Sucesso!!\");\n    teste_ = email;\n    var remetente = nodemailer.createTransport({\n        host: \"smtp.mail.yahoo.com\",\n        port: 587,\n        secure: false,\n        auth: {\n            user: \"robertodalfre@yahoo.com.br\",\n            pass: secretKey\n        }\n    });\n    console.log(\"remetente\", remetente);\n    //${process.env.BACKEND_API_URL_DEV}\n    var emailASerEnviado = {\n        from: \"robertodalfre@yahoo.com.br\",\n        to: teste_,\n        subject: \"Contact\",\n        text: \"Thanks for the email\"\n    };\n    remetente.sendMail(emailASerEnviado, function(error) {\n        if (error) {\n            console.log(error);\n        } else {\n            console.log(\"Email enviado com sucesso.=> LOGGG\");\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWxSZWNlaXZlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFFN0UsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQyxJQUFJO0FBRUosSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBRzdDLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBQ3RDLElBQUlDLE1BQU0sR0FBRSxPQUFPO0FBRUosU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxJQUFJLEVBQUNDLEtBQUssR0FBQyxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDdkJGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsNkJBQTZCLENBQUU7SUFDcERQLE1BQU0sR0FBR0ksS0FBSyxDQUFDO0lBR2pCLElBQUlJLFNBQVMsR0FBR1YsVUFBVSxDQUFDVyxlQUFlLENBQUM7UUFDekNDLElBQUksRUFBRSxxQkFBcUI7UUFDM0JDLElBQUksRUFBRSxHQUFHO1FBQ1RDLE1BQU0sRUFBQyxLQUFLO1FBQ1pDLElBQUksRUFBQztZQUNMQyxJQUFJLEVBQUUsNEJBQTRCO1lBQ2xDQyxJQUFJLEVBQUVyQixTQUFTO1NBQ2hCO0tBQ0UsQ0FBQztJQUNGc0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFVCxTQUFTLENBQUMsQ0FBQztJQUdwQyxvQ0FBb0M7SUFFcEMsSUFBSVUsZ0JBQWdCLEdBQUc7UUFDckJDLElBQUksRUFBRSw0QkFBNEI7UUFDbENDLEVBQUUsRUFBRXBCLE1BQU07UUFDVnFCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCQyxJQUFJLEVBQUUsc0JBQXNCO0tBTTdCO0lBSUNkLFNBQVMsQ0FBQ2UsUUFBUSxDQUFDTCxnQkFBZ0IsRUFBRSxTQUFTTSxLQUFLLEVBQUM7UUFDbEQsSUFBSUEsS0FBSyxFQUFFO1lBQ1hSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxLQUFLLENBQUMsQ0FBQztTQUNsQixNQUFNO1lBQ1BSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDakQ7S0FDRixDQUFDLENBQUM7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHR3ZWJjaG9pc2UvLi9wYWdlcy9hcGkvZW1haWxSZWNlaXZlLmpzPzk0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuLy8gICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG5hbWU6ICdKb2huIERvZScgfSlcclxuLy8gfVxyXG5cclxubGV0IHNlY3JldEtleSA9IHByb2Nlc3MuZW52LktFWV9BUElfWUFIT09fREVWO1xyXG5cclxuXHJcbnZhciBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpO1xyXG5sZXQgdGVzdGVfPSAndGVzdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgbGV0IHtlbWFpbH0gPSByZXEucXVlcnk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oJ0VtYWlsIEVudmlhZG8gY29tIFN1Y2Vzc28hIScgKVxyXG4gIHRlc3RlXyA9IGVtYWlsO1xyXG5cclxuXHJcbnZhciByZW1ldGVudGUgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgaG9zdDogJ3NtdHAubWFpbC55YWhvby5jb20nLFxyXG4gIHBvcnQ6IDU4NyxcclxuICBzZWN1cmU6ZmFsc2UsXHJcbiAgYXV0aDp7XHJcbiAgdXNlcjogJ3JvYmVydG9kYWxmcmVAeWFob28uY29tLmJyJyxcclxuICBwYXNzOiBzZWNyZXRLZXlcclxufVxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwicmVtZXRlbnRlXCIsIHJlbWV0ZW50ZSk7XHJcbiAgXHJcblxyXG4gIC8vJHtwcm9jZXNzLmVudi5CQUNLRU5EX0FQSV9VUkxfREVWfVxyXG5cclxuICB2YXIgZW1haWxBU2VyRW52aWFkbyA9IHtcclxuICAgIGZyb206ICdyb2JlcnRvZGFsZnJlQHlhaG9vLmNvbS5icicsXHJcbiAgICB0bzogdGVzdGVfLFxyXG4gICAgc3ViamVjdDogJ0NvbnRhY3QnLFxyXG4gICAgdGV4dDogJ1RoYW5rcyBmb3IgdGhlIGVtYWlsJyxcclxuICAgIC8vIGF0dGFjaG1lbnRzOiBbe1xyXG4gICAgLy8gXHRmaWxlbmFtZTogJ3NjcmVlbnNob3QyMi5wbmcnLFxyXG4gICAgLy8gXHRwYXRoOiBfX2Rpcm5hbWUgKycvSW1hZ2Uvc2NyZWVuc2hvdDIyLnBuZycsXHJcbiAgICAvLyBcdGNpZDogJ3Rlc3RlJyAvL215IG1pc3Rha2Ugd2FzIHB1dHRpbmcgXCJjaWQ6bG9nb0BjaWRcIiBoZXJlISBcclxuICAgIC8vICB9XVxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgICByZW1ldGVudGUuc2VuZE1haWwoZW1haWxBU2VyRW52aWFkbywgZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnRW1haWwgZW52aWFkbyBjb20gc3VjZXNzby49PiBMT0dHRycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgIl0sIm5hbWVzIjpbInNlY3JldEtleSIsInByb2Nlc3MiLCJlbnYiLCJLRVlfQVBJX1lBSE9PX0RFViIsIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwidGVzdGVfIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwicmVtZXRlbnRlIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJjb25zb2xlIiwibG9nIiwiZW1haWxBU2VyRW52aWFkbyIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0Iiwic2VuZE1haWwiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/emailReceive.js\n");

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