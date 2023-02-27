import express from 'express';
import { readFileSync, existsSync } from 'fs';

const app = express();

app.get("/api/denfriebibel", (req, res) => {
    let book = req.query.book;
    let chapter = req.query.chapter;

    let text = { errors: [] };

    // The book shouldn't be able to have any special characters, otherwise hackers might be able to inject unwanted content.
    if (book === "all")
        text = JSON.parse(readFileSync('./texts/books.json'));
    else
    {
        let path = './texts/' + book + '/' + chapter + '.json';
        if (existsSync(path))
            text = JSON.parse(readFileSync(path));
        else
        {
            text.errors.push("Dette kapitel er ikke blevet oversat endnu...");
        }
    }

    res.json(text);
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});