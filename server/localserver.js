const http = require('http');

let servidor = http.createServer().listen(3000);

servidor.on('request', function (req, res) {
    res.writeHeader(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    let usuarios = {
        "results": [
            {"user": "Mariano"},
            {"user": "Eva"}
        ]
    };

    res.end(JSON.stringify(usuarios));
});

