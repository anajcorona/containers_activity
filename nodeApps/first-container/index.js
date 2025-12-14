const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const now = new Date().toLocaleString();

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>App Node.js</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #eef2f3;
          text-align: center;
          padding-top: 50px;
        }
        .box {
          background: white;
          padding: 20px;
          width: 320px;
          margin: auto;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>🟢 App Node.js</h1>
        <p>Servidor HTTP en Node</p>
        <p>Fecha y hora:</p>
        <strong>${now}</strong>
      </div>
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en puerto ${PORT}`);
});
