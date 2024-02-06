package com.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.StringReader;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class Controller {

    @GetMapping("/about")
    public ResponseEntity<String> sayHello() {
//        System.out.println(id1);
        return ResponseEntity.ok("Hello ");
    }

    @GetMapping("/posts")
    public ResponseEntity<List<ResponseDto>> getPosts() {
        System.out.println("getPosts\n");

        ResponseDto response0 = new ResponseDto();
        response0.setId(0);
        response0.setName("Name0");
        response0.setAge(10);

        ResponseDto response1 = new ResponseDto();
        response1.setId(1);
        response1.setName("Name1");
        response1.setAge(11);


        ResponseDto response2 = new ResponseDto();
        response2.setId(2);
        response2.setName("Name2");
        response2.setAge(12);


        ResponseDto response3 = new ResponseDto();
        response3.setId(3);
        response3.setName("Name3");
        response3.setAge(13);


        List<ResponseDto> list = List.of(response0, response1, response2, response3);
        return ResponseEntity.ok(list);
    }

}
