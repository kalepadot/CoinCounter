export class Counter {
  getChange(startingAmount) {
    const coinValues = [ 1000, 500, 100, 25, 10, 5, 1 ];

    const buildChange = (amount, index = 0, result = []) => {
      if (amount > 0) {
        if (amount >= coinValues[index]) {
          const newTotal = (amount -= coinValues[index]);

          const addCoin = [ coinValues[index] ];
          const newArr = result.concat(addCoin);

          return buildChange(newTotal, index, newArr);
        } else {
          return buildChange(amount, (index += 1), result);
        }
      } else {
        const finishedChange = result;
        console.log("buildChange: ", finishedChange);
        return finishedChange;
      }
    };

    const finalResult = buildChange(startingAmount);
    console.log("Final: ", finalResult);
    return finalResult;
  }
}

// spit ballin:

// const coinTypeAmount = (coinType) => {
//   return (amount => {
//     return amount / coinType;
//   }
// }

// const quarter = coinTypeAmount(25);
// const dime = coinTypeAmount(10);
// const nickel = coinTypeAmount(5);
// const penny = cointTypeAmount(1);

// const numberOfNickels = nickel(800);
