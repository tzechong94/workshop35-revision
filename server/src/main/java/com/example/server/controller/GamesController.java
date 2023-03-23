package com.example.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.models.Game;
import com.example.server.service.GameService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/api")
public class GamesController {
    

    @Autowired
    private GameService gameSvc;

    @GetMapping(path="/games", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Game>> getGames(@RequestParam(defaultValue = "10")
        Integer limit, @RequestParam(defaultValue = "0") Integer offset) {
        
            List<Game> results = gameSvc.findAllGames(limit,offset);

            if (results.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            } else {
                return new ResponseEntity<>(results, HttpStatus.OK);
            }
    }

}
