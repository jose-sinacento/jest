let products = [];
let id = 0;

const addProduct = (name, price) => {
  const newID = products.length;
  const existingProduct = products.find((product) => product.name === name);

  if (existingProduct) {
    throw new Error('product must be different');
  }

  if (!name) {
    throw new Error('product must have a name');
  }

  if (!price) {
    throw new Error('product must have a price');
  }

  products[newID] = {
    name: name,
    price: price
  }

  return products;
}

const resetProducts = () => {
  products = [];

  return products;
}

const removeProduct = (id) => {
  products.splice(id, 1);

  return products;
}

const getProducts = () => {
  return products;
}

const getProduct = (id) => {
  return products[id];
}

const updateProduct = (id, name, price) => {
  if (!products[id]) {
    throw new Error('product must exist');
  }

  products[id] = {
    name: name,
    price: price
  };

  return products;
}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };