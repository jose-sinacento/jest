let products = [];
let id = 0;

const addProduct = (nombre, precio) => {
  const newID = products.length;
  const existingProduct = products.find((product) => product.nombre === nombre);

  if (existingProduct) {
    throw new Error('El producto ya existe');
  }

  products[newID] = {
    nombre,
    precio
  }

  return products;
}

const resetProducts = () => {
  products = [];

  return products;
}

const removeProduct = () => {

}

const getProducts = () => {
  return products;
}

const getProduct = () => {

}

const updateProduct = () => {

}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };