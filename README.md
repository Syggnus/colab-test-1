Relatório de Progresso
----------------------

### Requisito Funcional

- **Listar os usuários e seus detalhes em uma interface web**

### Commits

-   Pedi a um amigo um guia padrão para os commits e ele sugeriu seguir o [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/).

### Frameworks Utilizados

-   De início, pensei em utilizar o [Next.js](https://nextjs.org/) e o [TailWindCss](https://tailwindui.com/) para o Front-End.
-   O Next.js foi escolhido porque a nova documentação do [React](https://beta.es.reactjs.org/) recomenda o uso de um framework desde o início e o Tailwind foi escolhido porque quis unir o útil ao agradável. Tenho um projeto da faculdade em que estou estudando Tailwind para construir o front-end.
-   Também utilizarei componentes prontos do [FlowBite](https://flowbite.com/) para agilizar a construção. Design Systems são uma maravilha.

### Design Responsivo

-   Pensando nesse quesito, considerei testar a metodologia do Mobile First.

### Construção da Tela

-   Sinceramente, é a parte mais chata. Tenho o costume de planejar a tela antes de codar. Como não houve um protótipo de tela no requisito, eu tenho que imaginar e criar uma. Nesse quesito, costumo pensar um pouco antes para não precisar ficar refatorando a tela e perder tempo com isso.
-   Então, de início, pensei em:
    1.  Colocar um componente Header com a logo.

    2.  Fazer uma lista de Cards para exibir uma parte dos usuários e suas informações.

    3.  Adicionar um botão para carregar mais usuários da API.

    4.  Adicionar um Footer.

    > Como o requisito funcional é somente "Listar os usuários e seus detalhes em uma interface web", pensei nessa forma simples de listá-los.

### Consumo da API

-   Utilizei o `fetch()` para fazer a requisição.
-   Na documentação, há um modo de obter múltiplos usuários.

> Falta fazer uma forma de tratar erros e apresentá-los ao usuário.

### Coisas Que Gostei

-   O fato de ser aberto utilizar qualquer tecnologia para o desafio.
-   Eu costumo pensar muito, e só nessa frase do requisito funcional, me fez pensar em um bocado de coisas para adicionar e me preocupar.
-   Consegui testar alguns componentes e me fez estudar outros que cogitei em adicionar.

### Coisas Que Não Gostei

-   O fato de não haver prazo de conclusão, a princípio pode ser bom, talvez faça a pessoa pensar que não é um critério acabar o mais rápido possível, mas sempre há aquele medo do tempo de conclusão ser parte do teste e de você precisar arrumar tempo na rotina diária.


Pré-requisitos
--------------

Para testar o site, você precisará ter o Node.js instalado em sua máquina. Você pode verificar se o Node.js está instalado executando o seguinte comando no seu terminal:

``` 
node -v 
``` 

Se o Node.js estiver instalado, o comando retornará a versão instalada. Caso contrário, você pode fazer o download e instalar o Node.js em [nodejs.org](https://nodejs.org/en/download/).

Além disso, você precisará ter o Visual Studio Code (VSCode) instalado em sua máquina. Você pode fazer o download e instalar o VSCode em [code.visualstudio.com](https://code.visualstudio.com/download).

Como testar o site
------------------

1.  Faça o download ou clone este repositório em sua máquina local.
2.  Abra a pasta do projeto no VSCode.
3.  Abra o terminal no VSCode e navegue até a pasta do projeto.
4.  Execute o seguinte comando no terminal para instalar as dependências do projeto:

``` 
npm install
``` 

1.  Após a instalação das dependências, execute o seguinte comando no terminal para iniciar o servidor:

``` 
npm run dev
``` 

1.  Abra o navegador e acesse a URL `http://localhost:3000` para visualizar o site em execução.