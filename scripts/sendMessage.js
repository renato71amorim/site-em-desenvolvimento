require('dotenv').config();
const fetch = require('node-fetch');

async function enviarMensagem(numero, mensagem) {
  const url = process.env.API_URL;
  const token = process.env.API_TOKEN;

  const payload = {
    number: numero, // Ex: "558599999999"
    body: mensagem, // Ex: "Olá, tudo bem?"
    saveOnTicket: true,
    linkPreview: true
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const resultado = await response.json();
    console.log('Resposta da API:', resultado);
    return resultado;
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    throw error;
  }
}

// Exemplo de uso
// enviarMensagem('558599999999', 'Olá! Esta é uma mensagem de teste.');
