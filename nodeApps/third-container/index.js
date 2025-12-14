const http = require('http');

const PORT = 3000;

let counter = 0;

const server = http.createServer((req, res) => {
  counter++;

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Contador Node.js</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f4f8;
          text-align: center;
          padding-top: 50px;
        }
        .counter-box {
          display: inline-block;
          background: #2ecc71;
          color: white;
          padding: 40px;
          border-radius: 10px;
          font-size: 30px;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
      </style>
    </head>
    <body>
      <div class="counter-box">
        <p>Visitas a la página:</p>
        <strong>${counter}</strong>
      </div>
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.end(html);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor Contador escuchando en puerto ${PORT}`);
});
