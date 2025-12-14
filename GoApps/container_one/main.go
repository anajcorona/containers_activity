package main

import (
	"encoding/json"
	"net/http"
)

type Message struct {
	Message string `json:"message"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	response := Message{Message: "¡Hola desde Go en JSON!"}
	json.NewEncoder(w).Encode(response)
}

func main() {
	port := "8081" 
	http.HandleFunc("/", handler)
	http.ListenAndServe(":"+port, nil)
}
