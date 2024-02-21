# Desafio IA Labs - APP Labs Frontend - Vue 3 Geração de Ideias de Startups com ChatGPT

Este é o frontend do projeto AI Labs, desenvolvido em Vue 3


#  Instalação

Para começar, clone o repositório do projeto:
git clone https://github.com/emersonSantos98/app_labs_frontend.git


Em seguida, navegue até o diretório do projeto e instale as dependências:

    cd api_labs_frontend
    npm install
     
     Conferir 

##  Execução

Para iniciar o servidor de desenvolvimento, execute o seguinte comando: `npm run dev`

Isso iniciará o servidor de desenvolvimento do Vite e você poderá acessar o aplicativo em `http://localhost:5173/`.

## Verificando a URL da API

Se você estiver executando tanto o frontend quanto o backend localmente em sua máquina, é importante garantir que o frontend esteja se comunicando corretamente com a API. Aqui estão os passos para verificar se a URL da API está correta:

1.  **Verifique a URL da API no código**: Abra o arquivo `src/api/client.js` em seu editor de código e verifique a URL especificada na configuração do Axios. No exemplo fornecido, a URL da API é definida como `http://localhost:3030/api/v1/startups`. Certifique-se de que esta URL corresponda à porta em que o backend está sendo executado localmente.

2.  **Confira a porta da API**: Verifique em qual porta o backend está sendo executado localmente. Se você estiver usando o Express com Node.js, geralmente a porta padrão é `3000`. No entanto, se você especificou uma porta diferente, certifique-se de usar a mesma porta no frontend.

3.  **Inicie o backend**: Certifique-se de que o backend esteja sendo executado localmente. Se não estiver em execução, inicie o servidor backend para que o frontend possa se comunicar com ele.

4.  **Verifique se não há erros no console do navegador**: Abra o console do navegador (geralmente pressionando F12 ou clicando com o botão direito do mouse e selecionando "Inspecionar" e, em seguida, indo para a guia "Console") e verifique se há erros relacionados à comunicação com a API. Isso pode ajudar a identificar problemas de conexão.

## Build

Se você precisar buidar o aplicativo para produção, execute o seguinte comando:

    npm run build

Isso criará uma versão otimizada do aplicativo na pasta `dist`

##  Visualização

Para visualizar a versão de produção do aplicativo localmente, execute o seguinte comando: `npm run preview`

Isso iniciará um servidor local para visualização da versão de produção do aplicativo.

## Contribuindo
Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar uma solicitação de pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://chat.openai.com/c/LICENSE).
