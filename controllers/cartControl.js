import { colCartDao as cartApi} from "../dao/index.js";
import { colProdDao as prodApi} from "../dao/index.js";

export async function create(req, res) {
    const result = await cartApi.createCart();
    res.status(200).json({"success" : "Carrito creado con ID "+ result._id})
}

export async function remove(req, res) {
    const { id } = req.params;
	const result = await cartApi.deleteCart(id);
    result 
    ? res.status(200).json({"success" : "Carrito Borrado"})
    : res.status(400).json({"error": "ID Inexistente"})
}

export async function addProduct(req, res) {
    const {id} = req.params;
    const {body} = req;
    const newProd = await prodApi.getById(body._id);
    if (newProd){
        const result = await cartApi.addToCart(id,newProd);
        result !== null
        ? res.status(200).json({"success" : "Producto Agregado"})
        : res.status(400).json({"error": "Carrito no encontrado ID Inexistente"})
    } else {
        res.status(400).json({"error": "ID Ingresado Inexistente"})
    }
}

export async function getProducts(req, res) {
    const {id} = req.params;
    const result = await cartApi.getById(id);
    result 
    ? res.status(200).json({"success" : "Carrito Encontrado",result})
    : res.status(404).json({"error": "ID Inexistente"})
}

export async function removeProduct(req, res) {
    const {id,id_prod} = req.params;
    const exists = await cartApi.getById(id);
    if(exists){
        const result = await cartApi.deleteById(id,id_prod);
        result 
    ? res.status(200).json({"success" : "Producto Borrado"})
    : res.status(404).json({"error": "ID Inexistente"})
        
    } else {
        res.status(404).json({"error": "Carrito no encontrado ID Inexistente"});
    }
}