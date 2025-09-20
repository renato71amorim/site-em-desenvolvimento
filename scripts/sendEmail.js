// scripts/sendEmail.js
require('dotenv').config();
const nodemailer = require('nodemailer');

async function enviarEmail(destinatario, assunto, mensagemHtml) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_PORT === '465', // true para 465, false para outras
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: destinatario,
    subject: assunto,
    html: mensagemHtml
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado:', info.messageId);
    return info;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw error;
  }
}

// Exemplo de uso:
// enviarEmail('destinatario@exemplo.com', 'Assunto do e-mail', '<p>Mensagem em HTML</p>');
