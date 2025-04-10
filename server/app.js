// This is an express.js web server
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// Formats incoming body content and exposes in req.body
import bodyParser from 'body-parser';

// This contains the path to the app folder (where app.js resides)
const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This is how to get client content relative to server folder.
// Paths are relative to server folder (where node app is located).
app.use(express.static('../client'));

// API calls...
// ============
// Root GET will return content needed for client.
// I.e. this gets called with url http://localhost:3000
app.get('/', (req, res) => {
    console.log("Return from slash...");
    // To return all files in public:
    res.sendFile(__dirname, '../client/');
});

app.listen(3000, () => {
    console.log('Node (express) server is running on 3000...');
});