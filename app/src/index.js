const prices = [12, 14, 15, 20],
    total = 500;

function getDivide(price, total) {
    return {
        ceil: Math.ceil(total / price),
        floor: Math.floor(total / price)
    };
}

function getAverageCount(prices, total) {
    const sumPrice = prices.reduce((o, n) => {
        return o + n;
    }, 0);
    // console.log(sumPrice);
    if (sumPrice > total) {
        alert(
            `因每个物品至少要有一个，需保证每个物品只有一个时，价值之和不能超过总价。`
        );
    }
    return getDivide(sumPrice, total).floor;
}

const averageCount = getAverageCount(prices, total);

// console.log(averageCount);

const items = prices.map((t) => ({
    price: t,
    count: averageCount
}));

// console.log(items);

function sum(items) {
    return items.reduce((o, n) => o + n.price * n.count, 0);
}

// console.log(sum(items));

function calc(items, total) {
    if (1 === items.length) {
        let item = items[0];
        if (!(total % item.price)) {
            item.count = total / item.price;
            return items;
        } else {
            return false;
        }
    }

    let item = items.shift();
    // console.log(item);
    let divide = getDivide(item.price, total).ceil;
    // console.log(divide);
    while (item.count < divide) {
        let res = calc(items, total - item.count * item.price);
        // console.log(res);
        if (res) {
            res.unshift(item);
            return res;
        } else {
            item.count++;
        }
    }
}

let result = calc(items, 500);
console.log(result);

/* function* test() {
    yield 1;
    return 2;
}
let a = test();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value); */
