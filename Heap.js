class MinHeap {
    constructor(values) {
        this.list = [-1];
        if (typeof values == "number") values = [values];
        values.forEach((value) => this.add(value));
    }
    add(value) {
        const len = this.list.length;
        // add value to heap
        this.list.push(value);
        if (len == 1) {
            return value;
        }
        // reorder from bottom to top
        this.heapifyUp();
        return this.list[1];
    }
    remove() {
        if (this.list.length == 1) return null;
        if (this.list.length == 2) return this.list.pop();
        const prevRoot = this.list[1];
        // bring last val to root
        this.list[1] = this.list.pop();
        // reorder top to bottom
        this.heapifyDown();
        return prevRoot;
    }
    heapifyUp() {
        let i = this.list.length - 1;
        const val = this.list[i];
        while (!this.isRoot(i) && this.getParentNode(i) > val) {
            // swap values
            [this.list[this.getParentIndex(i)], this.list[i]] = [
                val,
                this.getParentNode(i),
            ];
            i = this.getParentIndex(i);
        }
    }
    heapifyDown() {
        if (this.list.length < 3) return;
        let i = 1;
        const currentVal = this.list[1];
        let leftVal = this.getLeftNode(i);
        let rightVal = this.getRightNode(i);
        while (
            leftVal !== undefined &&
            (currentVal > leftVal || currentVal > rightVal)
        ) {
            if (
                currentVal > leftVal &&
                (rightVal === undefined || leftVal < rightVal)
            ) {
                [this.list[this.getLeftIndex(i)], this.list[i]] = [currentVal, leftVal];
                i = this.getLeftIndex(i);
            } else {
                [this.list[this.getRightIndex(i)], this.list[i]] = [
                    currentVal,
                    rightVal,
                ];
                i = this.getRightIndex(i);
            }
            leftVal = this.getLeftNode(i);
            rightVal = this.getRightNode(i);
        }
    }
    isRoot(index) {
        return index == 1;
    }
    getLeftIndex(index) {
        return 2 * index;
    }
    getLeftNode(index) {
        return this.list[this.getLeftIndex(index)];
    }
    getRightIndex(index) {
        return 2 * index + 1;
    }
    getRightNode(index) {
        return this.list[this.getRightIndex(index)];
    }
    getParentIndex(index) {
        return Math.floor(index / 2);
    }
    getParentNode(index) {
        return this.list[this.getParentIndex(index)];
    }

    sort() {
        const sorted = [];
        let nextVal;
        while ((nextVal = this.remove()) !== null) {
            sorted.push(nextVal);
        }
        return sorted;
    }
}

const heap = new MinHeap([1, 2, 3, -10, -100, 99, 0])

console.log(heap.remove())
// -100
console.log(heap.remove())
// -10
console.log(heap.add(-3))
// -3
console.log(heap.add(5))

console.log(heap.sort())
