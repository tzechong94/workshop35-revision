package com.example.server.models;

import org.bson.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    private String _id;
    private Integer gid;
    private String name;
    private Integer year;
    private Integer ranking;
    private Integer usersRated;
    private String url;
    private String image;


    public static Game create(Document doc) {
        Game game = new Game();
        if (doc == null) {
            return null;
        }
        game.set_id(doc.getObjectId("_id").toString());
        game.setGid(doc.getInteger("gid"));
        game.setName(doc.getString("name"));
        game.setYear(doc.getInteger("year"));
        game.setRanking(doc.getInteger("ranking"));
        game.setUsersRated(doc.getInteger("users_rated"));
        game.setUrl(doc.getString("url"));
        game.setImage(doc.getString("image"));

        return game;
    }

}
