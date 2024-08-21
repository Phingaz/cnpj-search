# Busca de CNPJ

## Descrição

**Busca de CNPJ** é uma aplicação web que permite aos usuários buscar e exibir informações sobre empresas brasileiras usando o número do CNPJ (Cadastro Nacional da Pessoa Jurídica). A aplicação oferece uma interface intuitiva para buscar, exibir e, opcionalmente, editar as informações da empresa.

## Funcionalidades

- Busca de empresas usando o número de CNPJ
- Exibe informações detalhadas da empresa, incluindo:
  - Informações Básicas (Nome Fantasia, Razão Social, CNPJ, Data de Início de Atividade)
  - Informações de Atividade (Descrição do CNAE Fiscal, Natureza Jurídica)
  - Endereço
  - Informações de Contato (Telefone, Email)
- Interruptor para ativar/desativar a edição das informações exibidas
- Design responsivo para vários tamanhos de tela

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vite (para rodar a aplicação)

## Estrutura de Pastas

```
cnpj-search/
├── node_modules/
├── scripts/
│   ├── constants.js
│   ├── helpers.js
│   ├── main.js
├── styles/
│   ├── data.css
│   ├── empty-state.css
│   ├── loading.css
│   ├── main.css
│   ├── search.css
│   ├── toggle.css
│   ├── utils.css
├── .gitignore
├── index.html
```

## Configuração e Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Phingaz/cnpj-search.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd cnpj-search
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto:

   ```bash
   npm run dev
   ```

5. Pode navegar para `http://localhost:5173` no seu navegador para visualizar a aplicação.

## Uso

1. Insira um número de CNPJ válido no campo de busca.
2. Clique no botão "Pesquisar" ou pressione Enter.
3. Veja as informações da empresa exibidas na seção de resultados.
4. Para editar as informações, alterne o interruptor "Modo de Edição".
5. Faça as alterações necessárias nos campos editáveis.

## Integração com API

Este projeto foi desenvolvido para funcionar com uma API backend que fornece informações de empresas com base nos números de CNPJ. Certifique-se de configurar o endpoint apropriado no arquivo JavaScript responsável pela comunicação com a API.

`https://brasilapi.com.br/api/cnpj/v1/`

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `dev`: Roda a aplicação em modo de desenvolvimento utilizando o Vite.
- `build`: Cria uma versão otimizada do projeto para produção.
- `preview`: Executa uma pré-visualização da versão de produção.

## Agradecimentos

- [Font Awesome](https://fontawesome.com) pelos ícones
- [Google Fonts](https://fonts.google.com) pelas fontes Montserrat e Open Sans
