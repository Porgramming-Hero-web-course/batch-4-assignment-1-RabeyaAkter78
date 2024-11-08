// Q:01:Ans:
const sumOfArray = (array: number[]): number => {
    let sum = 1;
    for (let i = 1; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
};
console.log(sumOfArray([1, 2, 3, 4, 5]))