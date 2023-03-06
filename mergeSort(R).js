const array = [1, 5, 2, 6, -100, 4, 0, 8, 10, 7, 20, 21]

function mergeSort(arr) {
    const length = arr.length

    if (length <= 1) {
        const result = arr[0]
        return result;
    }

    let array = []

    for (let i = 0; i < length; i += 2) {
        const firstArray = arr[i]
        const secondArray = arr[i + 1]
        const subArray = secondArray !== undefined ?
            merge(firstArray, secondArray) : firstArray
        array.push(subArray)
    }

    return mergeSort(array)
}
console.log(mergeSort(array))


function merge(arr1, arr2) {
    let res = [],
        i = 0,
        j = 0;

    if (typeof arr1 == "number") arr1 = [arr1];
    if (typeof arr2 == "number") arr2 = [arr2];

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


function Test(num) {
    let number = num
    number = number + 1
    if (number > 5) {
        console.log(num)
        console.log(number)
        return number
    }
    return Test(number)
}
const num = 1
console.log(Test(num))

