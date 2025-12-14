package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "¡Hola desde Go en Docker!")
}

func main() {
	port := "8080"
	http.HandleFunc("/", handler)
	fmt.Printf("Servidor corriendo en http://localhost:%s\n", port)
	http.ListenAndServe(":"+port, nil)
}
