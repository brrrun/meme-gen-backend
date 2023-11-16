require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ noCors: true });
const PORT = 5005;

server.use(middlewares);
server.use(morgan("dev"));

server.use(cors())
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
