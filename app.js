
const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000; 


app.use(express.static(path.join(__dirname, "public")));


/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})


app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))

/* es la forma antigua app.listen(3030, ()=>console.log("Servidor corriendo"))
app.use(express.static("public"));
app.get("/", (req, res)=>{
    res.send("El servidor no esta funcionando correctamente")
})
app.get("/home",(req, res)=>{
    res.sendFile(path.join(__dirname, "./HTML mercadolibre/views/home.html"))
})

OJO con el error en el package.json que te puede tirar, puede decirte que no encuentra el main,
 y lo tenes que cambiar por el app.js

*/
