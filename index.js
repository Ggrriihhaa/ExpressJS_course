import express from "express";
import path from "path";
import {requestTime, logger}from './middleware/middleware.js'
import serverRouters from "./routes/server.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log(app.get('views'))
 



app.use(express.static(path.relative(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(serverRouters)



app.get('/', (req, res) => {
   res.render('index', {title: 'Main', active: 'main'}) 
})

app.get('/features', (req, res) => {
    res.render('features', {title: 'Feature Page', active: 'features'}) 
 })
 


// app.get("/", (req, res) => {
//   // res.send('<h1> Hello Express!</h1>')
//   res.sendFile(path.resolve(__dirname, "static", "index.html"));
// });

// app.get("/features", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "static", "features.html"));
// });

// app.get("/download", (req, res) => {
//     console.log(req.requestTime)
//   res.download(path.resolve(__dirname, "static", "index.html"));
// });





app.listen(3000, () => {
  console.log(`Server has been started ${PORT}...`);
});
