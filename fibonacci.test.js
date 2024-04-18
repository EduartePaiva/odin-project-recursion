import { expect, test } from "vitest";
import { fibonacciRecursive, fibonacciIteration } from "./fibonacci";

test("expect [0, 1, 1, 2, 3, 5, 8, 13] from the number 8", () => {
    expect(fibonacciIteration(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
test("expect [0, 1, 1, 2, 3, 5, 8, 13] from the number 8", () => {
    expect(fibonacciRecursive(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
