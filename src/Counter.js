export class Counter {
  construtor() {}
  //470
  getChange(amount) {
    let thisResult = [];

    const changeBot = () => {
      if (amount >= 500) {
        thisResult.push(500);
        changeBot((amount -= 500));
      } else if (amount >= 100) {
        thisResult.push(100);
        changeBot((amount -= 100));
      } else if (amount >= 25) {
        thisResult.push(25);
        changeBot((amount -= 25));
      } else if (amount >= 10) {
        thisResult.push(10);
        changeBot((amount -= 10));
      } else if (amount >= 5) {
        thisResult.push(10);
        changeBot((amount -= 5));
      } else if (amount >= 1) {
        thisResult.push(1);
        changeBot((amount -= 1));
      } else if (amount >= 0) {
        return thisResult;
      }
    };

    changeBot();
    return thisResult;
  }
}
