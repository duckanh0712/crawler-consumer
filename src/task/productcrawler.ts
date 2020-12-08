// const Axios = require('axios');
// const ShopeeProductModel = require('../models/products');

// const SHOPEE_API = process.env.SHOPEE_API;
// export dedfault (productId , shopId) => {
//     return new Promise(async (resolve, _reject) => {
//         try {
//             let product = await ShopeeProductModel.findById(productId);
            
//             if(product == null) {
//                 const productApiUrl = `${SHOPEE_API}/v2/item/get?itemid=${productId}&shopid=${shopId}`;

//                 try{
//                      const productRes = await Axios.get(productApiUrl);

//                      let product = productRes.data.item;
//                      product._id = productId;
//                      ShopeeProductModel.create(product).catch(_e => { });
//                      console.log('saving product: '+productId)

//                      resolve(1);
//                 }
//                 catch(e) {
//                     console.log('canot get:' + productId)
//                     resolve(1);
//                 }

//             }
//             else {
//                 console.log('saved product: ' + productId)
//                 resolve(1);
//             }
//         }
//         catch(e) {
//             resolve(0);
//         }
//     })
// }