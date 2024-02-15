const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
  resetProducts();
});

describe('Adding Products', () => {
  it('should add a product', () => {
    expect(addProduct('Producto 1', 5)).toEqual([{ nombre: 'Producto 1', precio: 5 }]);
  });

  it('should fail when adding a repeated product', () => {
    expect(() => addProduct('Producto 1', 5)).toThrowError('product must be different');
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
    expect()
  });
});

describe('Getting a single product', () => {
  it('should get a product', () => {
    expect()
  });
});

describe('Updating Products', () => {
  it('should update a product', () => {
    expect()
  });

  it('should fail when updating a product that does not exist', () => {
    expect()
  });

  it('should only update the price', () => {
    expect()
  });

  it('should only update the name', () => {
    expect()
  });
});