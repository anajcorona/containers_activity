package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sync/atomic"
)

type Message struct {
	Message string `json:"message"`
	Visits  uint64 `json:"visits"`
}

var counter uint64

func handler(w http.ResponseWriter, r *http.Request) {
	atomic.AddUint64(&counter, 1)
	w.Header().Set("Content-Type", "application/json")
	response := Message{
		Message: "¡Bienvenido a la app contador en Go!",
		Visits:  counter,
	}
	json.NewEncoder(w).Encode(response)
}

func main() {
	port := "8082"
	http.HandleFunc("/", handler)
	fmt.Printf("Servidor corriendo en puerto %s\n", port)
	http.ListenAndServe(":"+port, nil)
}
