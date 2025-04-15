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
//ok app.use(express.static('../client'));
// This works better. I relocated app.js to top folder. 
// // I think the ".." sometimes causes issues...
app.use(express.static('./client'));

// API calls...
// ============
// Root GET will return content needed for client.
// I.e. this gets called with url http://localhost:5000
app.get('/', (req, res) => {
    console.log("Return from slash... __dirname = " + __dirname);
    // --dirname = "/home/scott-unix/digital-ocean-test/server"
    // To return all files in client:
    // This was working, and now not working. Manually specifying path does work.
    res.sendFile(__dirname, './client/');
    // res.sendFile("/home/scott-unix/digital-ocean-test/client/");
});

app.get('/msg', (req, res) => {
    console.log("Return from msg... __dirname = " + __dirname);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: "Json return string" }));
});

app.listen(5000, () => {
    console.log('Node (express) server is running on 5000...');
});