require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = 5005;

const domainList = [
  "http://localhost:5173",
  "https://effortless-salmiakki-807f97.netlify.app/",
];

server.use(middlewares);
server.use(morgan("dev"));
server.use((req, res, next) => {
  let origin = req.headers.origin;
  console.log(origin);
  if (domainList.includes(origin)) {
    console.log(origin);
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
