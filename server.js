require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const supplierRoutes = require('./routes/suppliers');
const orderRoutes = require('./routes/orders');

const cors = require('cors');

const app =express();
const allowedOrigins = ['http://localhost:5173',"https://invotab.vercel.app"]
app.use(cors({
  origin: function(origin,callback){
    if(!origin) return callback(null,true);
    if(allowedOrigins.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error("not allowed by cors"));
    }
  },
  methods:["GET","POST","PUT","DELETE","PATCH"],  
  credentials: true                 
}));
connectDB();
app.use(express.json()); 
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth',authRoutes)
app.use('/api/products', productRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/orders', orderRoutes);

app.use(express.json());
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));