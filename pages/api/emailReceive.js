// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

var nodemailer = require('nodemailer');
let teste_= 'teste'
export default function handler(req, res) {
  let {email} = req.query;
  res.status(200).json('Email Enviado com Sucesso!!' )
  teste_ = email;


var remetente = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 587,
  secure:false,
  auth:{
  user: 'robertodalfre@yahoo.com.br',
  pass: 'cgrpnrybyzhzstqj' }
  });
  

  var emailASerEnviado = {
    from: 'robertodalfre@yahoo.com.br',
    to: teste_,
    subject: 'Contact',
    text: 'Thanks for the email',
    // attachments: [{
    // 	filename: 'screenshot22.png',
    // 	path: __dirname +'/Image/screenshot22.png',
    // 	cid: 'teste' //my mistake was putting "cid:logo@cid" here! 
    //  }]
  };



    remetente.sendMail(emailASerEnviado, function(error){
      if (error) {
      console.log(error);
      } else {
      console.log('Email enviado com sucesso.=> LOGGG');
      }
    });

  }


  