# auth_teste
autenticação com node

<!-- iniciar o projeto em node -->
npm init -y

<!-- Cria a senha em uma hash/decodifica senha -->
npm i bcrypt

<!-- Cria arquivo de config na máquina (não versionado)-->
npm i dotenv 

<!-- Framework em js -->
npm i express 

<!-- Utilizado para manipular o token  
jmw JSON Web Token -->
npm i jsonwebtoken 

<!-- Drive do sb  -->
npm i mongoose 

<!-- axios para acessar api externa  -->
npm i axios 

<!-- Para execcutar o servidor local,  dev dependence pq não usa em prod somente em desenvolvimento-->
npm i --save-dev nodemon 

<!-- gerar hash com node, não funciona no powershell roda primeiro o comando node e depois o da sequencia-->

 require('crypto').randomBytes(64).toString('hex')
