function* hello() {
    yield 1;
    yield 2;
    return 0;
}

let h = hello();

console.log(h.next());
console.log(h.next());
console.log(h.next());
console.log(h.next());
