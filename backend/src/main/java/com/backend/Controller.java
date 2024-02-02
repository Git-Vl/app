package com.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

public class Controller {
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/q/{id1}")
    public ResponseEntity<String> sayHello(@PathVariable String id1) {
        System.out.println(id1);
        return ResponseEntity.ok("Hello " + id1 );
    }

}
