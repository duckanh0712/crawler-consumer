import mongoose from 'mongoose';
const mongoose = require('mongoose');

const ShopeeProductSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required:[true, ' Product ID is required!']
        }


    },
    {
        strict: false,
        timestamps: { createAt: 'created_at' , updateAt:'updated_at'}
    }

)
export default mongoose.model('product', ShopeeProductSchema);