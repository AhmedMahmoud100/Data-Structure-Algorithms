//merging two arrays appropriately.
function merge(arr1, arr2) {
    //make a new array and have two value pointers
    let res = [],
        i = 0,
        j = 0;

    //sorting the first array.
    if (arr1.length > 1) arr1.sort((a, b) => a - b)

    //sorting the second array.
    if (arr2.length > 1) arr2.sort((a, b) => a - b)

    //Value comparison.
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    //pushing the rest of arr1.
    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }

    //pushing the rest of arr2.
    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }

    return res;
}

const arr1 = [4, 1, -4]
const arr2 = [10, 2, 3, 5]

console.log(merge(arr1, arr2));