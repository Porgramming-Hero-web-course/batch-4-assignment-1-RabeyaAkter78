// Q:02:Ans:

const removeDuplicates = (array: number[]): number[] => {
    const newArray = array.filter((value, index) => array.indexOf(value) === index);
    return newArray;
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));