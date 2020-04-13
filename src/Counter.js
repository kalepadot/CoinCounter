export class Counter {
  construtor() {}
  //470
  getChange(amount, result = [ 0, 0, 0, 0 ], counter = 0) {
    const coinValues = [ 500, 100, 25, 10, 5, 1 ];
    if (amount <= 0) {
      console.log(result);
      return result;
    } else if (amount >= coinValues[counter]) {
      const currentTotal = (amount -= coinValues[counter]);
      // const addCoin = 5;
      result[counter] = coinValues[counter];
      const addCoin = result.concat(coinValues[counter]);
      return this.getChange(currentTotal, result, counter + 1);
    }
    console.log(result);
    return result;

    // let thisResult = [];

    // const changeBot = () => {
    //   if (amount >= 500) {
    //     thisResult.push(500);
    //     changeBot((amount -= 500));
    //   } else if (amount >= 100) {
    //     thisResult.push(100);
    //     changeBot((amount -= 100));
    //   } else if (amount >= 25) {
    //     thisResult.push(25);
    //     changeBot((amount -= 25));
    //   } else if (amount >= 10) {
    //     thisResult.push(10);
    //     changeBot((amount -= 10));
    //   } else if (amount >= 5) {
    //     thisResult.push(10);
    //     changeBot((amount -= 5));
    //   } else if (amount >= 1) {
    //     thisResult.push(1);
    //     changeBot((amount -= 1));
    //   } else if (amount >= 0) {
    //     return thisResult;
    //   }
    // };

    // changeBot();
    // return thisResult;
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
