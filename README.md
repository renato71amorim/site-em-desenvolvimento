# Site em desenvolvimento

Página de manutenção para sites em construção, com foco em **captura de contatos** via e-mail e WhatsApp. Ideal para manter uma presença online profissional enquanto o projeto principal está sendo desenvolvido.

## 📌 Objetivo

Este projeto oferece uma página simples e funcional que pode ser usada como placeholder em sites em desenvolvimento. Além de informar o visitante, permite captar leads e redirecionar para canais de contato.

## 📲 Integração com API de Envio de Mensagens

Este projeto permite o envio de mensagens via WhatsApp utilizando a API da [Comunite](https://comunite.com.br). A integração é feita por meio de requisições HTTP com autenticação via token.

### 🔐 Configuração do `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
API_URL=https://comunite.com.br:443/backend/api/messages/send
API_TOKEN=seu_token_aqui


## ⚙️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização responsiva
- **JavaScript**: Interações básicas e integração com APIs
- **Bootstrap 5** *(sugestão)*: Para layout rápido e responsivo
- **Docker**: Containerização do ambiente
- **Nginx**: Servidor web
- **API externa**: Integração com serviços de e-mail e WhatsApp
- **Banco de dados** *(opcional)*: Para armazenar contatos captados

## 📁 Estrutura de Diretórios

```
site-em-desenvolvimento/
├── index.html
├── style/
│   └── main.css
├── scripts/
│   └── app.js
├── assets/
│   ├── images/
│   │   └── logo.png
│   └── icons/
│       └── social-icons.svg
├── fonts/
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── LICENSE
└── README.md
```

## 🚀 Como Executar com Docker

```bash
# Build do container
docker build -t site-em-desenvolvimento .

# Executar com Docker Compose
docker-compose up -d


## Contato & Suporte

Renato Amorim  
Gestor de Negócios – sieca.net  
📞 (31) 98961-4186  
📧 contato@sieca.net

SIECA LTDA  
CNPJ: 04.509.420/0001-59  
Endereço: Avenida Senador Levindo Coelho, 2605 Apt 202 Ernesto do Nascimento  
Belo Horizonte – MG – 30668-533

## Roadmap

- [ ] Finalizar layout responsivo e componentes visuais
- [ ] Integração com sistemas externos
- [ ] Auditoria e histórico de propostas

---

## Changelog

- **v0.1**: Estrutura inicial do projeto, layout estático, scripts de reset
- *Novas versões serão documentadas nesta seção.*

---

## Documentação Técnica

- Estrutura de pastas e arquivos: ver árvore do projeto


## 🤝 Contribua

Contribuições são bem-vindas! Se você quiser melhorar este projeto, corrigir bugs, adicionar funcionalidades ou sugerir melhorias, siga os passos abaixo:

1. **Fork** este repositório
2. Crie uma **branch** com sua feature ou correção: `git checkout -b minha-contribuicao`
3. Faça os **commits** das suas alterações: `git commit -m 'Minha contribuição'`
4. Faça o **push** para sua branch: `git push origin minha-contribuicao`
5. Abra um **Pull Request**

Antes de enviar, verifique se:
- O código está limpo e bem documentado
- As alterações não quebram funcionalidades existentes
- O estilo visual segue a proposta do projeto

Se tiver dúvidas ou quiser discutir ideias antes de implementar, sinta-se à vontade para abrir uma **issue**.

