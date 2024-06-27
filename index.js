const http =require ("http")

function requestController(){
    console.log("Hola Mundo!")
}


const server= http.createServer(requestController)

server.listen(4000)