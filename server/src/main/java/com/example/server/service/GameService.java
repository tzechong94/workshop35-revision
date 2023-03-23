package com.example.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.models.Game;
import com.example.server.repo.GameRepo;

@Service
public class GameService {
    
    @Autowired
    private GameRepo gameRepo;


    public List<Game> findAllGames(int limit, int offset) {
        return gameRepo.findAllGames(limit, offset)
                            .stream()
                            .map(g -> Game.create(g))
                            .toList();
    }

    
}
