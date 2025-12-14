import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Main {

    public static void main(String[] args) throws IOException {
        int port = 8082; // TERCER puerto diferente

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/", new HtmlHandler());
        server.setExecutor(null);
        server.start();

        System.out.println("Servidor HTML iniciado en el puerto " + port);
    }

    static class HtmlHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {

            String html = """
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Tercera App Java</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        text-align: center;
                        padding-top: 50px;
                    }
                    .card {
                        background: white;
                        padding: 20px;
                        margin: auto;
                        width: 300px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    }
                    h1 { color: #2c3e50; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>🚀 Tercera App</h1>
                    <p>Aplicación Java sirviendo HTML</p>
                    <p>Contenedor Docker #3</p>
                </div>
            </body>
            </html>
            """;

            exchange.getResponseHeaders().set("Content-Type", "text/html; charset=UTF-8");
            exchange.sendResponseHeaders(200, html.getBytes().length);

            OutputStream os = exchange.getResponseBody();
            os.write(html.getBytes());
            os.close();
        }
    }
}
