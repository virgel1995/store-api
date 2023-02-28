const express = require('express');
const app = express()
const cors = require('cors');
const authenticate = require('./api/middleware/authenticate');

	const swaggerJsdoc = require( 'swagger-jsdoc');
const { serve, setup }=  require ('swagger-ui-express');
const {swaggerConfig ,allowedHeaders, printer, routeLogger }  = require("./api/helpers")
	const specDoc = swaggerJsdoc(swaggerConfig);


const adminRoutes = require('./api/routes/admins');
const categoryRoutes = require('./api/routes/categories');
const userRoutes = require('./api/routes/users');
const productRoutes = require('./api/routes/products');
const cartItemRoutes = require('./api/routes/cartItems');
const orderRoutes = require('./api/routes/orders');

app.use(cors());
app.use(express.json());

// allowed headers 
allowedHeaders(app);
// website routes 
app.use('/admin', adminRoutes);
app.use('/category', categoryRoutes);
app.use('/user', userRoutes); 
app.use('/products', productRoutes);
app.use('/cart', authenticate, cartItemRoutes);
app.use('/order', authenticate, orderRoutes);
/*
app.get("/",(req,res)=>{
res.status(200).json({
        message: 'server is running'
    })
});*/
// swagger ui 
app.use("/", serve);
app.get("/", setup(specDoc, { explorer: true }));

 printer(app)
 routeLogger(app)
// for 404 home page 
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})


module.exports = app;