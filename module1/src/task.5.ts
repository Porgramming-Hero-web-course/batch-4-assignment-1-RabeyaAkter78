// Q:5:Ans:

const getProperty = <T, name extends keyof T>(obj: T, key: name): T[name] => {
    return obj[key]
};

const person = { name: "Alice", age: 30 }
console.log(getProperty(person, "name"));