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

    if (currentProfit > profit) profit = currentProfit;
  }

  return profit;
};
