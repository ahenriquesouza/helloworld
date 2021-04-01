const express = require('express')
const app = express()

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
  if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP 
      res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
  else //Se a requisição já é HTTPS 
      next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
