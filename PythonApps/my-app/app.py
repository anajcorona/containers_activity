from flask import Flask, render_template_string

app = Flask(__name__)
visitas = 0

HTML = """
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Contador de Visitas</title>
    <style>
      body { font-family: Arial; text-align: center; margin-top: 50px; }
      h1 { color: #2E86C1; }
      p { font-size: 20px; }
    </style>
  </head>
  <body>
    <h1>¡Bienvenido a mi app en Docker!</h1>
    <p>Has visitado esta página {{ visitas }} veces.</p>
  </body>
</html>
"""

@app.route('/')
def home():
    global visitas
    visitas += 1
    return render_template_string(HTML, visitas=visitas)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
