import { order } from "./order.js";

console.log(order);

//* ### 2.1.

/**
 * Calculate the cost of products by category type of product
 * @param {Array} items - items of order
 * @param {String} productType  - product category
 * @returns Total price by product category
 */

const calculateProductsAmoutByType = (order, productType) =>
  order.items
    .filter((item) => item.type === productType)
    .reduce((acc, item) => {
      return acc + Number(item.quantity);
    }, 0);

console.log(
  "calculateOfProduct",
  calculateProductsAmoutByType(order, "clothing")
); // 1

console.log("calculateOfProduct", calculateProductsAmoutByType(order, "shoes")); // 8

//* ### 2.2.

const calculateTotalOrderPrice = (order) =>
  order.items
    .reduce((acc, item) => {
      return acc + Number(item.originalPrice);
    }, 0)
    .toFixed(2);

console.log("calculateTotalOrderPrice", calculateTotalOrderPrice(order)); // 510.49

//* ### 2.3.

/**
 * Calculate the final cost of the order after all discounts have been applied.
 * If the order amount is more than $100, free shipping applies.
 * If the total number of products is greater than or equal to 20, a 13% discount
  is applied to the order.
 * Discount and free shipping can be combined together.
 * @param {Array} items - items of order
 * @param {Object} shipping - shipping method
 * @returns Total cost
 */

const calculateTotalOrderPriceAfterDiscout = (order) => {
  const orderAmount = calculateTotalOrderPrice(order);
  return order.items
    .reduce((acc, item) => {
      return acc - Number(item.originalPrice - item.salePrice || 0);
    }, orderAmount)
    .toFixed(2);
};

console.log(
  "calculateTotalOrderPriceAfterDiscout",
  calculateTotalOrderPriceAfterDiscout(order)
); // 429.96

//* ### 2.4.

/**
 * Find out the number of different products that have the word {search word} in product name
 * @param {Array} items - items of order
 * @param {String} searchWord - search word
 * @returns Number of orders which exist with search word
 */

const findSearchWordInItemName = (items, searchWord) =>
  items.items.find((item) => item.name.includes(searchWord));

console.log(
  "findSearchWordInItemName",
  findSearchWordInItemName(order, "Nike")
); // 2

//* ### 2.5.

/**
 * Check that a product with some id exists or not in order.
 * @param {Array} items - items of order
 * @param {Number} searchId - product id
 * @returns Boolean
 */

const isIdIncludesInOrder = (items, searchId) =>
  !!items.items.find((item) => item.id === searchId);

console.log("isIdIncludesInOrder", isIdIncludesInOrder(order, 389)); // true
