const getUser = () => {
  const existingUser = sessionStorage.getItem("userId");
  if (existingUser) {
    return existingUser;
  } else {
    const newUser = "user-" + new Date().getTime();
    sessionStorage.setItem("userId", newUser);
    return newUser;
  }
};

const getDatekey = () => {
  const userId = getUser();
  return `emaJojn/carts/${userId}`;
};

const getDatabaseCart = () => {
  const dataKey = getDatekey();
  const data = localStorage.getItem(dataKey);
  return JSON.parse(data);
};

const addToDAtabaseCart = (key, count) => {
  const currentCart = getDatabaseCart();
  currentCart[key] = count;
  localStorage.setItem(getDatekey(), JSON.stringify(currentCart));
};


const removeFromDatabaseCart = key => {
  const currentCart = getDatabaseCart();
  delete currentCart[key];
  localStorage.setItem(getDatekey(), JSON.stringify(currentCart))
}


const processOrder = (cart) => {
  localStorage.removeItem(getDatekey());
}


export {
  addToDAtabaseCart,
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder
}

// // use local storage to manage cart data
// const addToDb = id =>{
//   let shoppingCart = {};

//   //get the shopping cart from local storage
//   const storedCart = localStorage.getItem('shopping-cart');
//   if(storedCart){
//       shoppingCart = JSON.parse(storedCart);
//   }

//   // add quantity
//   const quantity = shoppingCart[id];
//   if(quantity){
//       const newQuantity = quantity + 1;
//       shoppingCart[id] = newQuantity;
//   }
//   else{
//       shoppingCart[id] = 1;
//   }
//   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id =>{
//   const storedCart = localStorage.getItem('shopping-cart');
//   if(storedCart){
//       const shoppingCart = JSON.parse(storedCart);
//       if(id in shoppingCart){
//           delete shoppingCart[id];
//           localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//       }
//   }
// }

// const deleteShoppingCart = () =>{
//   localStorage.removeItem('shopping-cart');
// }

// export {
//   addToDb,
//   removeFromDb,
//   deleteShoppingCart
// }
