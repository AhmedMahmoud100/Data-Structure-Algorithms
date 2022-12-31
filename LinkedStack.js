function LinkedStack() {
    this.head = null
}

LinkedStack.prototype.push = function (val) {
    let node = {
        value: val,
        next: { ...this.head }
    }
    this.head = { ...node }
}

LinkedStack.prototype.pop = function () {
    const next = this.head.next
    delete this.head
    this.head = { ...next }
}

ll = new LinkedStack()
// add
ll.push(235);
ll.push(245);
ll.push(123);

console.log(ll.head);  //Object value: 123
console.log(ll.head.next); //Object value: 245
console.log(ll.head.next.next) //object value: 235
ll.pop()
console.log(ll.head);  // object value : 245