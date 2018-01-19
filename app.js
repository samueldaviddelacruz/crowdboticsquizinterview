const http = require("http");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

//routes
const indexRouter = require("./routes/index");
const quizRouter = require("./routes/Quiz");



const app = express();

//set view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//set body parser and cookie parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//set public files directory (js,css,images etc)..
app.use(express.static(path.join(__dirname, 'public') ) );

app.use('/',indexRouter);
app.use('/quiz',quizRouter);

//create server and ports to listen to

const server = http.createServer(app);

server.on('listening', ()=>{
    console.log(`listening on port ${port}`)
});

server.listen(port)


