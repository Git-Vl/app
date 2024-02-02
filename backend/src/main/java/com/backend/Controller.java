package com.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

public class Controller {
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/about")
    public ResponseEntity<String> sayHello() {
//        System.out.println(id1);
        return ResponseEntity.ok("Hello " );
    }

}
