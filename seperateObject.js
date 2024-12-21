// given an array of order objects with `orderId` and `products`, where each product has a `name` and `quantity`, return an array of orders, where each order contains its `orderId` and an array of product names, each with the quantity
// [{orderId: 1, products: [{name: "Laptop", quantity: 1}, {name: "Mouse", quantity: 2}]}, {orderId: 2, products: [{name: "Keyboard", quantity: 1}]}]
// => [{orderId: 1, products: ["Laptop x1", "Mouse x2"]}, {orderId: 2, products: ["Keyboard x1"]}]

const orderDetails = [{categoryName: "Fruits", items: [{name: "Apple"}, {name: "Banana"}]}, {categoryName: "Vegetables", items: [{name: "Carrot"}]}];

const product = function(product) {
  return [product.name, "x" + product.quantity].join(" ");
}

const summarizeOrderProducts = function (orders) {
  const orderObj = {};
  orderObj.orderId = orders.orderId;
  const productDetail = orders.products.map(product);
  orderObj.products = productDetail;
  return orderObj;
};

orderDetails.map(summarizeOrderProducts)


// given an array of categories where each category has a `categoryName` and `items` array, return a new array where each item is an object with the category name and an array of item names
// [{categoryName: "Fruits", items: [{name: "Apple"}, {name: "Banana"}]}, {categoryName: "Vegetables", items: [{name: "Carrot"}]}] 
// => [{categoryName: "Fruits", items: ["Apple", "Banana"]}, {categoryName: "Vegetables", items: ["Carrot"]}]
const getCategoryItems = function (categories) { };