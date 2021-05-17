const products = [
  { id: 21, name: "Product 1", price: 321 },
  {
    id: 34,
    name: "Product 2",
    price: 67,
  },
  {
    id: 49,
    name: "Product 3",
    price: 956,
  },
];

const getProduct = async (id) => {
  const product = products.find((v) => v.id == id);
  return product;
};

const createProduct = async (product) => {
  products.push(product);
  return true;
};

const updateProduct = async (id, product) => {
  let productIndex = products.findIndex((v) => v.id == id);
  if (productIndex == -1) return undefined;
  const oldProduct = products[productIndex];
  products[productIndex] = { ...oldProduct, ...product };
  return true;
};

const deleteProduct = async (id) => {
  let productIndex = products.findIndex((v) => v.id == id);
  if (productIndex == -1) return undefined;
  products.splice(productIndex, 1);
  return true;
};

export { getProduct, createProduct, updateProduct, deleteProduct };
