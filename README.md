# Plataforma-Gestao-Analise-Pericial

## Introdução
O GOP - Gestão odontolegal pericial - serve para facilitar o dia a dia das autoridades, através de um design limpo e intuitivo feito especialmente para que todos os públicos possam usá-lo. Além disso, irá ajudar na organização dos casos, a fim de agilizá-los melhorando a visualização do mesmo. 

## Tecnologias
- **HTML**: Código fonte das páginas.
- **CSS**: Estilização das páginas.
- **Javascript**: Feito as funções para validação.
- **Bootstrap**: Framework para desenvolver interfaces.

## Funcionalidades
- Visualizar todos os casos com cores diferentes, conforme o status de cada caso.  
- Visualizar detalhes de um caso específico.  
- Adicionar um novo caso preenchendo um formulário completo.  
- Listar todas as evidências de um caso.  
- Gerar relatório de um caso encerrado.  
- Fazer download em PDF das evidências de um caso encerrado.  
- Visualizar informações detalhadas de uma evidência.  
- Fazer download individual de evidências.  
- Adicionar novas evidências a um caso, realizando upload de arquivos.  

## Instalação
Siga os passos abaixo para configurar o projeto localmente:
1. Clone o repositório:  
   ```git clone (url-do-repositório)```
   
3. Instale as dependências:  
  ```cd <nome-do-repositorio>```
4. Inicie o Live Server ou execute o projeto.

## Estrutura de pastas
- **`adm/cadastro-usuario/:`** Contém o código fonte da página de cadastro de usuário.  
  - `css/`: Estilo da página.  
    - `cadastro-usuario.css`  
  - `js/`: Funções para cadastro.  
    - `cadastro-usuario.js`  
  - `cadastro-usuario.html`  

- **`casos/cadastro-casos/`**: Contém o código fonte da página de cadastro de casos.  
  - `css/`: Estilo da página.  
    - `cadastro-caso.css`  
  - `js/`: Funções para cadastro de caso e validação.  
    - `cadastrar-caso.js`  
    - `validacao.js`  
  - `cadastro-caso.html`  

- **`casos/visualizacao-casos/`**: Contém o código fonte para visualizar detalhes de um caso.  
  - `css/`: Estilo da página.  
    - `style.css`  
  - `js/`: Funções de requisição e visualização de caso.  
    - `requisicao-http.js`  
    - `vis-caso-especifico.js`  
  - `visualizacao-de-caso.html`  

- **`casos/visualizacao-caso-especifico/`**: Contém o código fonte para visualização geral dos casos.  
  - `css`/: Estilo da página.  
    - `vis-casos.css`  
  - `js/`: Scripts de visualização de todos os casos.  
    - `script.js`  
    - `casos.json`  
  - `vis-casos.html`  

- **`login/`**: Contém o sistema de login.  
  - `assets/`: Contém imagens para a tela de login.  
    - digital-imagem.png  
  - `css/`: Estilo da tela de login.  
    - `login.css`  
  - `js/`: Scripts para autenticação.  
    - `login.js`  
  - `login.html`  

- **Arquivos na raiz do projeto:**  
  - `.gitignore`  
  - `README.md`  
  - `package-lock.json`  
  - `package.json`  

