package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{
			"message": "RunxBuild Go Service running",
		})
	})

	log.Printf("Server running on %s\n", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
