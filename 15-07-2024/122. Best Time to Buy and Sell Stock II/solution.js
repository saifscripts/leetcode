/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let buyingPrice = prices[0];
  let sellingPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice < buyingPrice) {
      buyingPrice = currentPrice;
      sellingPrice = currentPrice;
    } else if (currentPrice > sellingPrice) {
      sellingPrice = currentPrice;
    }

    const currentProfit = sellingPrice - buyingPrice;

    if (currentProfit > 0) {
      profit += currentProfit;
      buyingPrice = currentPrice;
      sellingPrice = currentPrice;
    }
  }

  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
