/**
 * merge sort recursive
 * @param {number[]} numbers array to sort
 * @returns {number[]}  a copy of the array sorted in place
 */
export function mergeSort(numbers) {
    if (numbers.length == 1) return numbers;

    // split the array in two
    const len = numbers.length;
    const half = Math.trunc(len / 2);
    const sorted1 = mergeSort(numbers.slice(0, half));
    const sorted2 = mergeSort(numbers.slice(half, len));

    let result = [];
    let pt1 = 0;
    let pt2 = 0;

    while (pt1 < sorted1.length || pt2 < sorted2.length) {
        if (pt1 < sorted1.length && pt2 < sorted2.length) {
            if (sorted1[pt1] < sorted2[pt2]) {
                result.push(sorted1[pt1]);
                pt1++;
            } else {
                result.push(sorted2[pt2]);
                pt2++;
            }
        } else if (pt1 < sorted1.length) {
            result.push(sorted1[pt1]);
            pt1++;
        } else if (pt2 < sorted2.length) {
            result.push(sorted2[pt2]);
            pt2++;
        }
    }
    return result;
}
