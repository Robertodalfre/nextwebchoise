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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst secretKey = process.env.KEY_API_YAHOO_DEV;\nconst secretKeyEmail = process.env.KEY_EMAIL_API_YAHOO_DEV;\nconst secretKeyGmail = process.env.KEY_EMAIL_GMAIL;\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nlet email_ = \"email\";\nlet msg_ = \"msg\";\nlet name_ = \"name\";\nfunction handler(req, res) {\n    let { name  } = req.query;\n    let { msg  } = req.query;\n    let { email  } = req.query;\n    res.status(200).json(\"Email Enviado com Sucesso!!\");\n    email_ = email;\n    msg_ = msg;\n    name_ = name;\n    var remetente = nodemailer.createTransport({\n        host: \"smtp.mail.yahoo.com\",\n        port: 587,\n        secure: false,\n        auth: {\n            user: secretKeyEmail,\n            pass: secretKey\n        }\n    });\n    var emailASerEnviado = {\n        from: secretKeyEmail,\n        to: secretKeyGmail,\n        subject: \"Site nextWebChoise - bkp\",\n        text: \"Nome do cabra=> \" + name_ + \"    Email: \" + email_ + \"           Mensagem: \" + msg_\n    };\n    var emailASerEnviadoBKP = {\n        from: secretKeyEmail,\n        to: email_,\n        subject: \"Contact\",\n        text: \"Thanks for the email, I will reply!\"\n    };\n    remetente.sendMail(emailASerEnviado, function(error) {\n        if (error) {\n            console.log(error);\n        } else {\n            console.log(\"Email enviado com sucesso.=> \");\n        }\n    });\n    // setTimeout(function(){\n    // .3000\n    // })\n    remetente.sendMail(emailASerEnviadoBKP, function(error) {\n        if (error) {\n            console.log(error);\n        } else {\n            console.log(\"Email enviado com sucesso.=> \");\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWxSZWNlaXZlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7QUFDL0MsTUFBTUMsY0FBYyxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csdUJBQXVCO0FBQzFELE1BQU1DLGNBQWMsR0FBR0wsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGVBQWU7QUFFbEQsSUFBSUMsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZLENBQUM7QUFDdEMsSUFBSUMsTUFBTSxHQUFFLE9BQU87QUFDbkIsSUFBSUMsSUFBSSxHQUFFLEtBQUs7QUFDZixJQUFJQyxLQUFLLEdBQUcsTUFBTTtBQUVILFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFeEMsSUFBSSxFQUFDQyxJQUFJLEdBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBQ3RCLElBQUksRUFBQ0MsR0FBRyxHQUFDLEdBQUdKLEdBQUcsQ0FBQ0csS0FBSztJQUNyQixJQUFJLEVBQUNFLEtBQUssR0FBQyxHQUFHTCxHQUFHLENBQUNHLEtBQUs7SUFHdkJGLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsNkJBQTZCLENBQUU7SUFFcERYLE1BQU0sR0FBR1MsS0FBSyxDQUFDO0lBQ2ZSLElBQUksR0FBR08sR0FBRyxDQUFDO0lBQ1hOLEtBQUssR0FBR0ksSUFBSSxDQUFDO0lBRWYsSUFBSU0sU0FBUyxHQUFHZCxVQUFVLENBQUNlLGVBQWUsQ0FBQztRQUN6Q0MsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsTUFBTSxFQUFDLEtBQUs7UUFDWkMsSUFBSSxFQUFDO1lBQ0xDLElBQUksRUFBRXhCLGNBQWM7WUFDcEJ5QixJQUFJLEVBQUU3QixTQUFTO1NBQ2hCO0tBQ0UsQ0FBQztJQUVGLElBQUk4QixnQkFBZ0IsR0FBRztRQUNyQkMsSUFBSSxFQUFFM0IsY0FBYztRQUNwQjRCLEVBQUUsRUFBRTFCLGNBQWM7UUFDbEIyQixPQUFPLEVBQUUsMEJBQTBCO1FBQ25DQyxJQUFJLEVBQUUsa0JBQWtCLEdBQUd0QixLQUFLLEdBQUcsYUFBYSxHQUFHRixNQUFNLEdBQUcsdUJBQXVCLEdBQUdDLElBQUk7S0FDM0Y7SUFFRCxJQUFJd0IsbUJBQW1CLEdBQUc7UUFDeEJKLElBQUksRUFBRTNCLGNBQWM7UUFDcEI0QixFQUFFLEVBQUV0QixNQUFNO1FBQ1Z1QixPQUFPLEVBQUUsU0FBUztRQUNsQkMsSUFBSSxFQUFFLHFDQUFxQztLQU01QztJQUlDWixTQUFTLENBQUNjLFFBQVEsQ0FBQ04sZ0JBQWdCLEVBQUUsU0FBU08sS0FBSyxFQUFDO1FBQ2xELElBQUlBLEtBQUssRUFBRTtZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7U0FDbEIsTUFBTTtZQUNQQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQzVDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixLQUFLO0lBRUxqQixTQUFTLENBQUNjLFFBQVEsQ0FBQ0QsbUJBQW1CLEVBQUUsU0FBU0UsS0FBSyxFQUFDO1FBQ3JELElBQUlBLEtBQUssRUFBRTtZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7U0FDbEIsTUFBTTtZQUNQQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQzVDO0tBQ0YsQ0FBQyxDQUFDO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0d2ViY2hvaXNlLy4vcGFnZXMvYXBpL2VtYWlsUmVjZWl2ZS5qcz85NDU1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlY3JldEtleSA9IHByb2Nlc3MuZW52LktFWV9BUElfWUFIT09fREVWO1xyXG5jb25zdCBzZWNyZXRLZXlFbWFpbCA9IHByb2Nlc3MuZW52LktFWV9FTUFJTF9BUElfWUFIT09fREVWO1xyXG5jb25zdCBzZWNyZXRLZXlHbWFpbCA9IHByb2Nlc3MuZW52LktFWV9FTUFJTF9HTUFJTDtcclxuXHJcbnZhciBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpO1xyXG5sZXQgZW1haWxfPSAnZW1haWwnXHJcbmxldCBtc2dfPSAnbXNnJ1xyXG5sZXQgbmFtZV8gPSAnbmFtZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgbGV0IHtuYW1lfSA9IHJlcS5xdWVyeTtcclxuICBsZXQge21zZ30gPSByZXEucXVlcnk7XHJcbiAgbGV0IHtlbWFpbH0gPSByZXEucXVlcnk7XHJcblxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbignRW1haWwgRW52aWFkbyBjb20gU3VjZXNzbyEhJyApXHJcblxyXG4gIGVtYWlsXyA9IGVtYWlsO1xyXG4gIG1zZ18gPSBtc2c7XHJcbiAgbmFtZV8gPSBuYW1lO1xyXG5cclxudmFyIHJlbWV0ZW50ZSA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICBob3N0OiAnc210cC5tYWlsLnlhaG9vLmNvbScsXHJcbiAgcG9ydDogNTg3LFxyXG4gIHNlY3VyZTpmYWxzZSxcclxuICBhdXRoOntcclxuICB1c2VyOiBzZWNyZXRLZXlFbWFpbCxcclxuICBwYXNzOiBzZWNyZXRLZXlcclxufVxyXG4gIH0pO1xyXG4gIFxyXG4gIHZhciBlbWFpbEFTZXJFbnZpYWRvID0ge1xyXG4gICAgZnJvbTogc2VjcmV0S2V5RW1haWwsXHJcbiAgICB0bzogc2VjcmV0S2V5R21haWwsXHJcbiAgICBzdWJqZWN0OiAnU2l0ZSBuZXh0V2ViQ2hvaXNlIC0gYmtwJyxcclxuICAgIHRleHQ6ICdOb21lIGRvIGNhYnJhPT4gJyArIG5hbWVfICsgJyAgICBFbWFpbDogJyArIGVtYWlsXyArICcgICAgICAgICAgIE1lbnNhZ2VtOiAnICsgbXNnXyxcclxuICB9O1xyXG5cclxuICB2YXIgZW1haWxBU2VyRW52aWFkb0JLUCA9IHtcclxuICAgIGZyb206IHNlY3JldEtleUVtYWlsLFxyXG4gICAgdG86IGVtYWlsXyxcclxuICAgIHN1YmplY3Q6ICdDb250YWN0JyxcclxuICAgIHRleHQ6ICdUaGFua3MgZm9yIHRoZSBlbWFpbCwgSSB3aWxsIHJlcGx5IScsXHJcbiAgICAvLyBhdHRhY2htZW50czogW3tcclxuICAgIC8vIFx0ZmlsZW5hbWU6ICdzY3JlZW5zaG90MjIucG5nJyxcclxuICAgIC8vIFx0cGF0aDogX19kaXJuYW1lICsnL0ltYWdlL3NjcmVlbnNob3QyMi5wbmcnLFxyXG4gICAgLy8gXHRjaWQ6ICd0ZXN0ZScgLy9teSBtaXN0YWtlIHdhcyBwdXR0aW5nIFwiY2lkOmxvZ29AY2lkXCIgaGVyZSEgXHJcbiAgICAvLyAgfV1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmVtZXRlbnRlLnNlbmRNYWlsKGVtYWlsQVNlckVudmlhZG8sIGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0VtYWlsIGVudmlhZG8gY29tIHN1Y2Vzc28uPT4gJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgIC8vIC4zMDAwXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHJlbWV0ZW50ZS5zZW5kTWFpbChlbWFpbEFTZXJFbnZpYWRvQktQLCBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFbWFpbCBlbnZpYWRvIGNvbSBzdWNlc3NvLj0+ICcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgIl0sIm5hbWVzIjpbInNlY3JldEtleSIsInByb2Nlc3MiLCJlbnYiLCJLRVlfQVBJX1lBSE9PX0RFViIsInNlY3JldEtleUVtYWlsIiwiS0VZX0VNQUlMX0FQSV9ZQUhPT19ERVYiLCJzZWNyZXRLZXlHbWFpbCIsIktFWV9FTUFJTF9HTUFJTCIsIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwiZW1haWxfIiwibXNnXyIsIm5hbWVfIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJxdWVyeSIsIm1zZyIsImVtYWlsIiwic3RhdHVzIiwianNvbiIsInJlbWV0ZW50ZSIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiZW1haWxBU2VyRW52aWFkbyIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwiZW1haWxBU2VyRW52aWFkb0JLUCIsInNlbmRNYWlsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/emailReceive.js\n");

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