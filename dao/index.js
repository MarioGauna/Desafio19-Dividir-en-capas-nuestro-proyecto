import dotenv from 'dotenv';
dotenv.config();

let colProdDao
    switch (process.env.DB_NAME) {
        case 'mongoDB':
            import('../models/productsMongoDao.js').then(({initProd})=>{
                colProdDao = new initProd()
            })
            break;
        default:
            break;
    }

    let colCartDao
    switch (process.env.DB_NAME) {
        
        case 'mongoDB':
            import('../models/cartMongoDao.js').then(({initCart})=>{
                colCartDao = new initCart()
            })
            break;
        default:
            break;
    }

export {colProdDao,colCartDao};