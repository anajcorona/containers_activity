import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.time.LocalDateTime;

public class Main {

    public static void main(String[] args) throws IOException {
        int port = 8081; // Puerto interno DIFERENTE

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/info", new InfoHandler());
        server.setExecutor(null);
        server.start();

        System.out.println("Servidor JSON iniciado en el puerto " + port);
    }

    static class InfoHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {

            String jsonResponse = """
            {
              "app": "Java JSON App",
              "status": "OK",
              "timestamp": "%s",
              "container": "segundo-contenedor"
            }
            """.formatted(LocalDateTime.now());

            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, jsonResponse.getBytes().length);

            OutputStream os = exchange.getResponseBody();
            os.write(jsonResponse.getBytes());
            os.close();
        }
    }
}
