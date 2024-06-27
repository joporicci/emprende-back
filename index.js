require('dotenv').config()
const http =require ("http")

function requestController(){
    console.log("Hola Mundo!")
}


const server= http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en el puerto :"+ PORT)
})