const http = require('http');
const { createCanvas } = require('canvas');

const PORT = 3001;

const server = http.createServer((req, res) => {
  const canvas = createCanvas(400, 200);
  const ctx = canvas.getContext('2d');

  // Fondo
  ctx.fillStyle = '#1abc9c';
  ctx.fillRect(0, 0, 400, 200);

  // Texto
  ctx.fillStyle = '#ffffff';
  ctx.font = '20px Arial';
  ctx.fillText('Node.js Image App', 90, 90);
  ctx.fillText(new Date().toLocaleTimeString(), 140, 130);

  const buffer = canvas.toBuffer('image/png');

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length
  });

  res.end(buffer);
});

server.listen(PORT, () => {
  console.log(`Servidor de imágenes escuchando en puerto ${PORT}`);
});
