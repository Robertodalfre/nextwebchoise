"use strict";
(() => {
var exports = {};
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
var nodemailer = __webpack_require__(184);
let teste_ = "teste";
function handler(req, res) {
    let { email  } = req.query;
    res.status(200).json("Email Enviado com Sucesso!!");
    teste_ = email;
    var remetente = nodemailer.createTransport({
        host: "smtp.mail.yahoo.com",
        port: 587,
        secure: false,
        auth: {
            user: "robertodalfre@yahoo.com.br",
            pass: "cgrpnrybyzhzstqj"
        }
    });
    var emailASerEnviado = {
        from: "robertodalfre@yahoo.com.br",
        to: teste_,
        subject: "Contato JR Recicl\xe1veis",
        text: "Obrigado pelo Email enviado. Entraremos em contato o mais r\xe1pido poss\xedvel. Obrigado"
    };
    remetente.sendMail(emailASerEnviado, function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email enviado com sucesso.");
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(690));
module.exports = __webpack_exports__;

})();