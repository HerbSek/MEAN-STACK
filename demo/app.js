// GET, POST, PUT, DELETE == Http request methods 

const http = require('http')

const server = http.createServer((request,response)=>{
    response.writeHead(200, {'content-type': 'text/html'})

    if (request.method == 'POST'){
        response.write('POST')
    }
    if (request.method == 'GET'){
        response.write('GET')
    }
    if (request.method == 'PUT'){
        response.write('PUT')
    }
    if (request.method == 'DELETE'){
        response.write('DELETE')
    }


    
    response.end()
})


server.listen(3000, ()=> {
    console.log('localhost:3000')
})




