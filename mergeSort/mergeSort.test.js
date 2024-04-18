import { expect, test } from "vitest";
import { mergeSort } from "./mergeSort";

test("MergeSort test", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
test("MergeSort test2", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});
