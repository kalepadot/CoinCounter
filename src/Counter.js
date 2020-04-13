export class Counter {
  construtor() {}
  //470
  getChange(amount, result) {
    const changeDrawer = [ 500, 100, 25, 10, 5, 1 ];

    if (amount <= changeDrawer[0]) {
      getChange(amount - changeDrawer[0], result.push(changeDrawer[0]));
    } else if (amount <= changeDrawer[1]) {
      getChange(amount - changeDrawer[1], result.push(changeDrawer[1]));
    } else if (amount <= changeDrawer[2]) {
      getChange(amount - changeDrawer[2], result.push(changeDrawer[2]));
    } else if (amount <= changeDrawer[3]) {
      getChange(amount - changeDrawer[3], result.push(changeDrawer[3]));
    } else if (amount <= changeDrawer[4]) {
      getChange(amount - changeDrawer[4], result.push(changeDrawer[4]));
    } else if (amount <= changeDrawer[5]) {
      getChange(amount - changeDrawer[5], result.push(changeDrawer[5]));
    } else {
      return result;
    }
  }
}


