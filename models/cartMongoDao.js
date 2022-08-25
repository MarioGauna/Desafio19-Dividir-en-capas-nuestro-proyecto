//import mongoose from "mongoose";
import contCart from "../services/classMongoCarrito.js";

export class initCart extends contCart{
    constructor(){
        super('carrito',{
            timestamp:{type:Date,default: Date.now},
            products: []
        })
    }
}