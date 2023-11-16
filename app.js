require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = 5005;

const domainList = ['http://localhost:5173', 'https://effortless-salmiakki-807f97.netlify.app/']


server.use(middlewares);
server.use(morgan("dev"));
server.use((req, res, next) => {
  // Middleware to disable CORS
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use(router);
server.use(cors({origin: domainList}))

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
