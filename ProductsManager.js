class ProductsManager {
  static quantity = 0;
  static #prodcutos = [];
  create(data) {
    const pro = {
           id: ProductsManager.quantity === 0
            ? 1 
            : ProductsManager.#prodcutos[ProductsManager.quantity - 1].id +1,
            type:data.type || "to do ",
            date: data.date || new Date(),
            text:data.text,
            category :data.category 
          
    };
   
    !data.text ? 
    console.log("Ingrese Titulo") :  (

    ProductsManager.#prodcutos.push(pro) &&
    ProductsManager.quantity++);
    
    !data.category ? 
   console.log("Ingrese Categoria") : (
   ProductsManager.#prodcutos.push(pro) );
    
  }
  read() {
    return ProductsManager.#prodcutos;
 
}
}

const prodcutos = new ProductsManager();
prodcutos .create({ text: "Mi primer producto " });
prodcutos .create({ text: "Mi segundo producto" });
prodcutos .create({ text : "Mi tercer prodcuto  " });
prodcutos .create({  });

console.log(prodcutos.read());
