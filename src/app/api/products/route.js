import {initMongoose} from "../../../lib/mongoose";
import Product from "../../../models/Product";

 export async function GET(req, res) {
    await initMongoose();
    const { searchParams } = req.nextUrl;
    const ids = searchParams.get('ids');
    const categories = searchParams.get('categories');
    // console.log(ids);

    if(categories){
      const categoryArray = categories.split(',');
      // const count =  Math.random()*5 + 1;
      const topRecommendedProduct = await Product.find({'category' : {$in: categoryArray}}).limit(3).exec();
      // console.log(topRecommendedProduct);
      return new Response(JSON.stringify(topRecommendedProduct), {
        headers: {"Content-Type":"application/json"},
      });
    }
    if(ids){
      const idArray = ids.split(',');
      const productsInCart = await Product.find({'_id' : {$in: idArray}}).exec();
      // console.log(JSON.stringify(productsInCart));
      
      return new Response(JSON.stringify(productsInCart), {
        headers: {"Content-Type": "application/json"},
      });
    } else{
      if(ids == ''){
        // console.log(JSON.stringify({ message: "Your cart is empty" }));
        
        return new Response(JSON.stringify({ message: "Your cart is empty" }), {
          headers: { "Content-Type": "application/json" },
          // status: 404,
        });
      } else{  
      const products = await Product.find().exec();
      // console.log(products);
      
      return new Response(JSON.stringify(products), {
        headers: { "Content-Type": "application/json" },
      });
    }
    }
  }