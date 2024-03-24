class ProductManager {
  static #products = [];
  create(data) {
    const product = {
      id:
        ProductManager.#products.length === 0
          ? 1
          : ProductManager.#products[ProductManager.#products.length - 1].id +
            1,
      title: data.title,
      category: data.category,
      photo: data.photo,
      price: data.price,
      stock: data.stock,
    };
    ProductManager.#products.push(product);
    console.log("Productos creados con exito  ");
  }

  read() {
    return ProductManager.#products;
  }
}
const gestorDeProductos = new ProductManager();
const gestorDeProductos2 = new ProductManager();
const gestorDeProductos3 = new ProductManager();
const gestorDeProductos4 = new ProductManager();

gestorDeProductos.create({
  title: "zapatilla",
  category: "calzado",
  photo: "calzado.jpg",
  price: 1000,
  stock: 23,
});
gestorDeProductos2.create({
  title: "Cartera",
  category: "estetica",
  photo: "cartera.jpg",
  price: 500000,
  stock: 4,
});

gestorDeProductos3.create({
  title: "Medias",
  category: "vestimenta",
  photo: "media.jpg",
  price: 2000,
  stock:43,
});

gestorDeProductos4.create({
  title: "Remeras",
  category: "vestimenta",
  photo: "remera.jpg",
  price: 533,
  stock:7,
});

console.log(gestorDeProductos.read());
