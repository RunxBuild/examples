package com.runxbuild.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@SpringBootApplication
@RestController
public class Application {

    public static void main(String[] args) {
        String port = System.getenv().getOrDefault("PORT", "8080");
        System.setProperty("server.port", port);
        System.setProperty("server.address", "0.0.0.0");

        SpringApplication.run(Application.class, args);
    }

    @GetMapping("/")
    public Map<String, String> home() {
        return Map.of(
                "message", "RunxBuild Java service running"
        );
    }
}
