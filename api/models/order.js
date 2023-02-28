const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    order: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            price: { type: Number, required: true},
            quantity: Number
        }
    ],
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAddress' },
    orderDate: { type: Date, default: Date.now() },
    paymentType: String,
    paymentStatus: String,
    isOrderCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Order', orderSchema);

/**
* @swagger
* components:
*   schemas:
*     Order:
*       type: object
*       properties:
*         user:
*           type: ObjectId
*           ref: ["Admin"]
*         product:
*           type: string
*         price: [
*           type: number
*         quantity:
*           type: number
*         address:
*           type: ObjectId
*           ref: ["UserAddress"]
*         paymentType:
*           type:  {string}
*         paymentStatus:
*           type:  {string}
*        isOrderCompleted:
*           type: boolean 
*         orderDate: 
*           type: date
*/