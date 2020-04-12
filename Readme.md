## Microserviços Cinema





## Service ( Movies Service )

### Dependências do NodeJS
 - Express : Para construir servidores WEB;
 ~~~javascript
 $ npm install express
 ~~~
 - Mongodb : Para conexão com Banco de Dados;
 ~~~javascript
 $ npm install mongodb
 ~~~
 - Dotenv-safe : Para Carregamento de Variáveis de ambiente a partir de arquivos de configurações;
 ~~~javascript
 $ npm install dotenv-safe  
 ~~~
 - Tape : Biblioteca de Testes Unitários
 ~~~javascript
 $ npm install tape   
 ~~~
 - Tap-spec : 
 ~~~javascript
 $ npm install tap-spec  
 ~~~
  - Helmet : Módulo de Segurança
 ~~~javascript
 $ npm install helmet  
 ~~~
 - Morgan : Para fazer log de requisições no console
 ~~~javascript
 $ npm install morgan  
 ~~~
 - SuperTest : Para fazer teste de requisições http automatizadas
 ~~~javascript
 $ npm install supertest  
 ~~~

### Estrutura de pastas e arquivos
~~~
- movies-service/
  | - data/
  | - src/
     | - api/
         | - movies.js
         | - movies.test.js
     | - config/
         | - mongodb.js
         | - mongodb.test.js 
     | - repository/
         | - repository.js
         | - repository.test.js 
     | - server/
         | - server.js
     | - .env
     | - .env.example    
     | - index.js
     | - index.test.js 
     | - packages.json
~~~
### Função das pastas 

 - data : Banco de Dados do Serviço ( colocar no .gitignore)
 - src  :  
   - api : Guarda as lógicas de Apis 
   - config : Guarda módulos de configuração e conexão 
   - repository : Lógica de Dados 
   - server : Guarda o servidor WEb
    
### Modelos de Dados do Service ( Movies Service )
#### Nome do Banco de Dados 
movies-services




ultima aula assistida 14 13:50