const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
  resetProducts();
});

describe('Adding Products', () => {
  it('should add a product', () => {
    expect(addProduct('Producto 1', 5)).toEqual([{ name: 'Producto 1', price: 5 }]);
  });

  it('should fail when adding a repeated product', () => {
    addProduct('Producto 1', 5);

    expect(() => addProduct('Producto 1', 5)).toThrow('product must be different');
  });

  it('should fail when adding a product with no name', () => {
    expect(() => addProduct('', 5)).toThrow('product must have a name');
  });

  it('should fail when adding a product with no price', () => {
    expect(() => addProduct('Producto 1')).toThrow('product must have a price');
  });
});

describe('Removing Products', () => {
  it('should remove a product', () => {
    addProduct('Producto 1', 2);
    addProduct('Producto 2', 5);

    expect(removeProduct(1)).toEqual([{ name: 'Producto 1', price: 2 }]);
  });
});

describe('Getting a single product', () => {
  it('should get a product', () => {
    addProduct('Producto 1', 2);
    addProduct('Producto 2', 5);

    expect(getProduct(0)).toEqual({ name: 'Producto 1', price: 2 });
  });
});

describe('Updating Products', () => {
  it('should update a product', () => {
    addProduct('Producto 1', 2);
    addProduct('Producto 2', 5);

    expect(updateProduct(0, 'Producto Uno', 3)).toEqual([{ name: 'Producto Uno', price: 3 }, { name: 'Producto 2', price: 5 }]);
  });

  it('should fail when updating a product that does not exist', () => {
    expect(() => updateProduct(1, 'Producto X', 63)).toThrow('product must exist');
  });
});