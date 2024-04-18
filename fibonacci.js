/**
 * fibonacci iteration
 * @param {number} number number asked
 * @returns {number[]} return array
 */
export function fibonacciIteration(number) {
    /// O(n) solution

    /**@type {number[]} */
    let result = [];
    if (number > 0) result.push(0);
    if (number > 1) result.push(1);
    for (let i = 0; i < number - 2; i++) {
        const len = result.length;
        result.push(result[len - 1] + result[len - 2]);
    }
    return result;
}
/**
 * Recursive fibonacci
 * @param {number} number number
 * @returns {number[]} result
 */
export function fibonacciRecursive(number) {
    let result = Array.from({ length: number }).map(() => -1);
    if (number >= 1) result[0] = 0;
    if (number >= 2) result[1] = 1;

    /**
     * helper function
     * @param {number} number number
     * @returns {number} result
     */
    function helper(number) {
        if (result[number] !== -1) return result[number];
        const res = helper(number - 1) + helper(number - 2);
        result[number] = res;
        return res;
    }
    helper(number - 1);
    return result;
}
