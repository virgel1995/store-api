const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    parent: { type: String },
    createdAt: Date,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    updatedAt: Date,
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
});

module.exports = mongoose.model('Category', categorySchema);

/**
* @swagger
* components:
*   schemas:
*     Category:
*       type: object
*       properties:
*         name:
*           type: string
*         slug:
*           type: string
*         parent:
*           type: string
*         createdBy:
*           type: ObjectId
*           ref: ["Admin"]
*         updatedBy:
*           type: ObjectId
*           ref: ["Admin"]

*/