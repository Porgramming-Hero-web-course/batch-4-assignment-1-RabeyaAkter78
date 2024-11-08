// Q:03: Ans:

const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.toLocaleLowerCase().split(" ");
    return words.filter((w) => w === word).length;
};
console.log(countWordOccurrences("I love typescript", "typescript"));