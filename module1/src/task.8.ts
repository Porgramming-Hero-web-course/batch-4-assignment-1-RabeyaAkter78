// Q:8:Ans:
const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
    return keys.every(key => key in obj);
};

const person2 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person2, ["name", "age"]));