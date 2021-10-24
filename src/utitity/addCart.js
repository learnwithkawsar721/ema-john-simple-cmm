const addToDb = (id) => {
  const exisit = getDb();
  let item = {};
  if (!exisit) {
    item[id] = 1;
  } else {
    item = JSON.parse(exisit);
    const newItem = item[id] + 1;
    item[id] ? (item[id] = newItem) : (item[id] = 1);
  }
  updateDb(item);
};
const removeDb = (key) => {
  const exisit = getDb();
  if (exisit) {
    const shoping_cart = JSON.parse(exisit);
    delete shoping_cart[key];
    updateDb(shoping_cart);
  }
};

const clearCart = () => localStorage.removeItem("shopping_cart");
const getStoredItem = () => (getDb() ? JSON.parse(getDb()) : {});
const getDb = () => localStorage.getItem("shopping_cart");

const updateDb = (item) =>
  localStorage.setItem("shopping_cart", JSON.stringify(item));

export { addToDb, getStoredItem, removeDb, clearCart };
