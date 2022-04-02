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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// export default function handler(req, res) {\n//   res.status(200).json({ name: 'John Doe' })\n// }\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nlet teste_ = \"teste\";\nfunction handler(req, res) {\n    let { email  } = req.query;\n    res.status(200).json(\"Email Enviado com Sucesso!!\");\n    teste_ = email;\n    var remetente = nodemailer.createTransport({\n        host: \"smtp.mail.yahoo.com\",\n        port: 587,\n        secure: false,\n        auth: {\n            user: \"robertodalfre@yahoo.com.br\",\n            pass: \"cgrpnrybyzhzstqj\"\n        }\n    });\n    var emailASerEnviado = {\n        from: \"robertodalfre@yahoo.com.br\",\n        to: teste_,\n        subject: \"Contato JR Recicl\\xe1veis\",\n        text: \"Obrigado pelo Email enviado. Entraremos em contato o mais r\\xe1pido poss\\xedvel. Obrigado\"\n    };\n    remetente.sendMail(emailASerEnviado, function(error) {\n        if (error) {\n            console.log(error);\n        } else {\n            console.log(\"Email enviado com sucesso.\");\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWxSZWNlaXZlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFFN0UsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQyxJQUFJO0FBRUosSUFBSUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZLENBQUM7QUFDdEMsSUFBSUMsTUFBTSxHQUFFLE9BQU87QUFDSixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLElBQUksRUFBQ0MsS0FBSyxHQUFDLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUN2QkYsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyw2QkFBNkIsQ0FBRTtJQUNwRFAsTUFBTSxHQUFHSSxLQUFLLENBQUM7SUFHakIsSUFBSUksU0FBUyxHQUFHVixVQUFVLENBQUNXLGVBQWUsQ0FBQztRQUN6Q0MsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsTUFBTSxFQUFDLEtBQUs7UUFDWkMsSUFBSSxFQUFDO1lBQ0xDLElBQUksRUFBRSw0QkFBNEI7WUFDbENDLElBQUksRUFBRSxrQkFBa0I7U0FBRTtLQUN6QixDQUFDO0lBR0YsSUFBSUMsZ0JBQWdCLEdBQUc7UUFDckJDLElBQUksRUFBRSw0QkFBNEI7UUFDbENDLEVBQUUsRUFBRWxCLE1BQU07UUFDVm1CLE9BQU8sRUFBRSwyQkFBd0I7UUFDaENDLElBQUcsRUFBRSwyRkFBcUY7S0FNNUY7SUFJQ1osU0FBUyxDQUFDYSxRQUFRLENBQUNMLGdCQUFnQixFQUFFLFNBQVNNLEtBQUssRUFBQztRQUNsRCxJQUFJQSxLQUFLLEVBQUU7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1NBQ2xCLE1BQU07WUFDUEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN6QztLQUNGLENBQUMsQ0FBQztDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHdlYmNob2lzZS8uL3BhZ2VzL2FwaS9lbWFpbFJlY2VpdmUuanM/OTQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4vLyAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyB9KVxyXG4vLyB9XHJcblxyXG52YXIgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcclxubGV0IHRlc3RlXz0gJ3Rlc3RlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgbGV0IHtlbWFpbH0gPSByZXEucXVlcnk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oJ0VtYWlsIEVudmlhZG8gY29tIFN1Y2Vzc28hIScgKVxyXG4gIHRlc3RlXyA9IGVtYWlsO1xyXG5cclxuXHJcbnZhciByZW1ldGVudGUgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgaG9zdDogJ3NtdHAubWFpbC55YWhvby5jb20nLFxyXG4gIHBvcnQ6IDU4NyxcclxuICBzZWN1cmU6ZmFsc2UsXHJcbiAgYXV0aDp7XHJcbiAgdXNlcjogJ3JvYmVydG9kYWxmcmVAeWFob28uY29tLmJyJyxcclxuICBwYXNzOiAnY2dycG5yeWJ5emh6c3RxaicgfVxyXG4gIH0pO1xyXG4gIFxyXG5cclxuICB2YXIgZW1haWxBU2VyRW52aWFkbyA9IHtcclxuICAgIGZyb206ICdyb2JlcnRvZGFsZnJlQHlhaG9vLmNvbS5icicsXHJcbiAgICB0bzogdGVzdGVfLFxyXG4gICAgc3ViamVjdDogJ0NvbnRhdG8gSlIgUmVjaWNsw6F2ZWlzJyxcclxuICAgIHRleHQ6ICdPYnJpZ2FkbyBwZWxvIEVtYWlsIGVudmlhZG8uIEVudHJhcmVtb3MgZW0gY29udGF0byBvIG1haXMgcsOhcGlkbyBwb3Nzw612ZWwuIE9icmlnYWRvJyxcclxuICAgIC8vIGF0dGFjaG1lbnRzOiBbe1xyXG4gICAgLy8gXHRmaWxlbmFtZTogJ3NjcmVlbnNob3QyMi5wbmcnLFxyXG4gICAgLy8gXHRwYXRoOiBfX2Rpcm5hbWUgKycvSW1hZ2Uvc2NyZWVuc2hvdDIyLnBuZycsXHJcbiAgICAvLyBcdGNpZDogJ3Rlc3RlJyAvL215IG1pc3Rha2Ugd2FzIHB1dHRpbmcgXCJjaWQ6bG9nb0BjaWRcIiBoZXJlISBcclxuICAgIC8vICB9XVxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgICByZW1ldGVudGUuc2VuZE1haWwoZW1haWxBU2VyRW52aWFkbywgZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnRW1haWwgZW52aWFkbyBjb20gc3VjZXNzby4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gICJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsInRlc3RlXyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsInJlbWV0ZW50ZSIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiZW1haWxBU2VyRW52aWFkbyIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0Iiwic2VuZE1haWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/emailReceive.js\n");

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