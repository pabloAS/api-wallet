const http = require("http");
const app = require("../server/app");

const httpServer = http.createServer(app);

httpServer.listen(3333);
console.log("Api na porta 3333 🖥️");
