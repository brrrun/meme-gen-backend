require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = 5005;

server.use(middlewares);
server.use(morgan("dev"));
server.use(
  cors({
      origin: true,
      credentials: false,
      preflightContinue: false,
  })
);

server.options('*', cors());
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
