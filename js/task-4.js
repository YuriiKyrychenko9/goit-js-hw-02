function getShippingCost(country) {
  switch (country) {
    case 'China':
      price = 100;
      console.log(`Shipping to China will cost ${price} credits`);
      break;
    case 'Chile':
      price = 250;
      console.log(`Shipping to Chile will cost ${price} credits`);
      break;
    case 'Australia':
      price = 170;
      console.log(`Shipping to Australia will cost ${price} credits`);
      break;
    case 'Jamaica':
      price = 120;
      console.log(`Shipping to Jamaica will cost ${price} credits`);
      break;
    default:
      console.log(`Sorry, there is no delivery to your country`);
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Сорри, не является уникальным для вашей страны"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Сорри, не является уникальным для вашей страны"
