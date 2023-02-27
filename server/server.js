import express from 'express';
import { readFileSync } from 'fs';

const app = express();

app.get("/api/denfriebibel", (req, res) => {
    let book = req.query.book;
    let chapter = req.query.chapter;

    let text;

    // The book shouldn't be able to have any special characters, otherwise hackers might be able to inject unwanted content.
    if (book === "all")
        text = JSON.parse(readFileSync('./texts/books.json'));
    else
        text = JSON.parse(readFileSync('./texts/' + book + '/' + chapter + '.json'));

    res.json(text);
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});