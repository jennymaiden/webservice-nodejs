const http = require('http');

//Listen por el puerto 8080 localmente- pero hay que cambiarlo cuando
//se suba a un servidor
http.createServer((req, res) => {


    //Regresar un json
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    let salida = {
        nombre: 'Jenny',
        edad: 25,
        url: req.url
    }

    //Escribir la respuesta en la pagina
    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');