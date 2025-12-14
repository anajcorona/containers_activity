from flask import Flask, send_file
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont
import random

app = Flask(__name__)

@app.route('/')
def imagen_dinamica():
    # Crear imagen RGB
    img = Image.new('RGB', (400, 200), color=(73, 109, 137))
    d = ImageDraw.Draw(img)

    # Texto dinámico
    texto = f"Número aleatorio: {random.randint(1, 100)}"
    
    # Fuente por defecto
    try:
        font = ImageFont.truetype("arial.ttf", 24)
    except:
        font = ImageFont.load_default()
    
    d.text((50, 80), texto, fill=(255, 255, 0), font=font)

    # Guardar en memoria
    buf = BytesIO()
    img.save(buf, format='PNG')
    buf.seek(0)
    
    return send_file(buf, mimetype='image/png')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)
