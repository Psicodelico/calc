/* function* test() {
    yield 1;
    return 2;
}
let a = test();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value); */

function getDivide(price, total) {
    return {
        ceil: Math.ceil(total / price),
        floor: Math.floor(total / price),
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

function sum(items) {
    return items.reduce((o, n) => o + n.price * n.count, 0);
}

function calc(arr, total) {
    let items = Array.from(arr);
    if (1 === items.length) {
        let item = items[0];
        if (!(total % item.price)) {
            let count = total / item.price;
            // if (count !== item.count) {
            item.count = count;
            return items;
            // }
        }
        return false;
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
            items[0].count = 1;
        }
    }

    return false;
}

function gen(items, total) {
    // 防止本次答案与上次相同
    if (sum(items) === total) {
        items[items.length - 2].count++;
    }
    return calc(items, total);
}

const prices = [2, 3, 4],
    total = 50;
const averageCount = getAverageCount(prices, total);

// console.log(1, averageCount);

let items = prices.map((t) => ({
    price: t,
    count: averageCount,
}));

let tmpItems = [
    {
        price: 2,
        count: 1,
    },
    {
        price: 3,
        count: 1,
    },
    {
        price: 4,
        count: 1,
    },
];

// console.log(gen(tmpItems, total));

let tmp = items;

const interval = setInterval(() => {
    tmp = gen(tmp, total);

    if (tmp) {
        let arr = Array.from(tmp);
        // console.log(arr);
        console.log(JSON.stringify(arr));
    } else {
        console.log('end');
        clearInterval(interval);
    }
}, 200);

/* let bool = true;
while (bool) {
    tmp = gen(tmp, total);

    if (tmp) {
        let arr = Array.from(tmp);
        // console.log(arr);
        console.log(JSON.stringify(arr));
    } else {
        console.log('end');
        bool = false;
    }
} */
