const databaseConnction = require("./database")
const { printer,routeLogger } =  require("./printer")
const swaggerConfig = require("./swagger.config")
const allowedHeaders=  require("./headers")

module.exports = {
	databaseConnction,
	printer,
	routeLogger,
	swaggerConfig,
	allowedHeaders
}