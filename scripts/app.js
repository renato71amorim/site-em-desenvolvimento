document.getElementById('cadastroForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;

  const mensagem = `Olá ${nome}, obrigado por se cadastrar! Em breve entraremos em contato.`;

  try {
    await enviarMensagem(telefone, mensagem);
    await enviarEmail(email, 'Confirmação de Cadastro', `<p>${mensagem}</p>`);
    document.getElementById('mensagemStatus').innerText = 'Dados enviados com sucesso!';
  } catch (error) {
    document.getElementById('mensagemStatus').innerText = 'Erro ao enviar os dados. Tente novamente.';
  }
});
