import { Counter } from "../src/counter.js";
import { exportAllDeclaration } from "@babel/types";

describe("Counter", () => {
  test("should return array of change for 100, 25, 25", () => {
    const counter = new Counter();
    const changeAmount = 150;
    const correctAnswerArray = [ 100, 25, 25 ];
    const result = counter.getChange(changeAmount, []);
    expect(result).toEqual(correctAnswerArray);
  });

  test("should return array of change for 475", () => {
    const counter = new Counter();
    const changeAmount = 475;
    const correctAnswerArray = [ 100, 100, 100, 100, 25, 25, 25 ];
    const result = counter.getChange(changeAmount, []);
    expect(result).toEqual(correctAnswerArray);
  });
});
