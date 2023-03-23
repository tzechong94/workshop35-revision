package com.example.server.repo;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class GameRepo {
    

    @Autowired
    private MongoTemplate template;

    public List<Document> findAllGames(Integer limit, Integer offset) {
        // create a criteria
        Query query =  new Query().limit(limit).skip(offset);
        return template.find(query, Document.class, "games");
    }



    
}
