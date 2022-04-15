const secretKey = process.env.KEY_API_YAHOO_DEV;
const secretKeyEmail = process.env.KEY_EMAIL_API_YAHOO_DEV;
const secretKeyGmail = process.env.KEY_EMAIL_GMAIL;

var nodemailer = require('nodemailer');
let email_= 'email'
let msg_= 'msg'
let name_ = 'name'

export default function handler(req, res) {

  let {name} = req.query;
  let {msg} = req.query;
  let {email} = req.query;


  res.status(200).json('Email Enviado com Sucesso!!' )

  email_ = email;
  msg_ = msg;
  name_ = name;

var remetente = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 587,
  secure:false,
  auth:{
  user: secretKeyEmail,
  pass: secretKey
}
  });
  
  var emailASerEnviado = {
    from: secretKeyEmail,
    to: secretKeyGmail,
    subject: 'Site nextWebChoise - bkp',
    text: 'Nome do cabra=> ' + name_ + '    Email: ' + email_ + '           Mensagem: ' + msg_,
  };

  var emailASerEnviadoBKP = {
    from: secretKeyEmail,
    to: email_,
    subject: 'Contact',
    text: 'Thanks for the email, I will reply!',
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
      console.log('Email enviado com sucesso.=> ');
      }
    });

    remetente.sendMail(emailASerEnviadoBKP, function(error){
      if (error) {
      console.log(error);
      } else {
      console.log('Email enviado com sucesso.=> ');
      }
    });

  }


  