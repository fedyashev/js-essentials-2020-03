// let height = '42px';
// let num = +height.slice(0, -2);
// console.log(typeof(num));

// LIFO - STACK
// let stack = [];
// stack.push(1);
// stack.push('3');
// stack.push(true);
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);

// FIFO - Queue
// let q = [];
// q.push(1);
// q.push('3');
// q.push(true);
// console.log(q);
// q.shift();
// console.log(q);
// q.shift();
// console.log(q);

const nums = Array(10).fill(0).map(item => Math.floor(Math.random() * 100));
console.log(nums);

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

let i = 0
while (i < nums.length) {
    console.log(nums[i]);
    ++i;
}

nums.forEach(function(value, index) {
    console.log(index, value);
    value = 5;
});

console.log(nums);

nums.push(4);

console.log('4 in nums', nums.includes(4));
console.log('77 in nums', nums.includes(77));

console.log(nums.join('-'));

let str = 'Hello, World!';
console.log([...str].join('_'));

console.log(nums.filter(item => item > 50));

const result = nums.reduce(function (acc, cur) {
    return acc + cur;
}, 0);

let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(result, sum);
console.log(nums.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}));