/* function* test() {
    yield 1;
    return 2;
}
let a = test();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value); */

const prices = [2, 3, 4],
    total = 50;

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

console.log(averageCount);

let items = prices.map((t) => ({
    price: t,
    count: averageCount
}));

console.log(items);

function sum(items) {
    return items.reduce((o, n) => o + n.price * n.count, 0);
}

// console.log(sum(items));

function calc(arr, total) {
    debugger;
    let items = Array.from(arr);
    console.log(items, total);
    if (1 === items.length) {
        let item = items[0],
            count = total / item.price;
        if (!(total % item.price)) {
            item.count = count;
            return items;
        } else {
            return false;
        }
    }
    let item = items.shift();
    let divide = getDivide(item.price, total).ceil;
    while (item.count < divide) {
        let res = calc(items, total - item.count * item.price);
        // console.log(`${item.price}循环结果${JSON.stringify(res)}`);
        if (res) {
            res.unshift(item);
            return res;
        } else {
            item.count++;
        }
    }

    return false;
}

/* if (sum(items) === total) {
    items[items.length - 2]++;
} */

console.log(calc(items, total));

/* let tmpItems = [
    {
        price: 2,
        count: 1
    },
    {
        price: 3,
        count: 1
    },
    {
        price: 4,
        count: 6
    }
];
let result = calc(tmpItems, total);
console.log(result);

let tmp = tmpItems;
const interval = setInterval(() => {
    tmp = calc(tmp, total);
    if (tmp) {
        console.log(tmp);
    } else {
        console.log('end');
        clearInterval(interval);
    }
}, 2000); */
