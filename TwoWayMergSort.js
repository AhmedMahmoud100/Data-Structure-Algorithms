function TwoWayMergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mainArray = [];

    for (let i = 0; i < arr.length; i += 2) {
        const subArray = []
        if (arr[i] < arr[i + 1]) {
            subArray[0] = arr[i];
            subArray[1] = arr[i + 1];
        } else {
            subArray[0] = arr[i + 1];
            subArray[1] = arr[i];
        }
        mainArray.push(subArray);
    }
    return mergeSort(mainArray)
}

console.log(TwoWayMergeSort([70, 50, 30, 20, 40, 60, -5, 0, 100, -20]));

function merge(arr1, arr2) {
    let res = [],
        i = 0,
        j = 0;
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

function mergeSort(subArrays) {

    let arr1 = subArrays[0]
    for (let i = 1; i < subArrays.length; i++) {
        let arr2 = subArrays[i];
        arr1 = merge(arr1, arr2);
    }
    return arr1
}