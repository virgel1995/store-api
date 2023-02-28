const http = require('http');
const app = require('./app');
const {
	databaseConnction
} = require("./api/helpers")
const port = process.env.PORT || 2023;

const server = http.createServer(app);



(async () => {
await databaseConnction();
server.listen(port, ()=> {
	console.log("server conncted")
});
})();