// Q:01:Ans:
const sumOfArray = (array: number[]): number => {
    let sum = 1;
    for (let i = 1; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
};
// console.log(sumOfArray([1, 2, 3, 4, 5]))


// Q:02:Ans:

const removeDuplicates = (array: number[]): number[] => {
    const newArray = array.filter((value, index) => array.indexOf(value) === index);
    return newArray;
};
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Q:03: Ans:

const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.toLocaleLowerCase().split(" ");
    return words.filter((w) => w === word).length;
};
// console.log(countWordOccurrences("I love typescript", "typescript"));

// Q:4:Ans:


type circle = {
    shape: "circle";
    radius: number;
};
type rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type shape = circle | rectangle;


const area = (value: shape): number => {
    if (value.shape === "circle") {
        const circleArea = 3.1416 * value.radius * value.radius;
        return circleArea;
    } else {
        const rectangleArea = value.width * value.height;
        return rectangleArea;
    }
};


// console.log(`Area Of Circle is ${area({
//     shape: "circle",
//     radius: 5
// })}`
// );

// console.log(`Area Of Rectangle is ${area({
//     shape: "rectangle",
//     width: 5,
//     height:5,
// })}`
// );
// ==================================
// Q:5:Ans:

const getProperty = <T, name extends keyof T>(obj: T, key: name): T[name] => {
    return obj[key]
};

const person = { name: "Alice", age: 30 }
// console.log(getProperty(person, "name"));


// Q:6:Ans:

interface Profile {
    name: string,
    age: number,
    email: string,
}

const updateProfile = (Profile: Profile, updates: Partial<Profile>): Profile => {
    const profile = { ...Profile, ...updates };
    return { ...profile };
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// Q:7:Ans:


class Car {
    make: string;
    model: string;
    year: number;


    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year
    }
}

const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge());

// Q:8:Ans:
const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
    return keys.every(key => key in obj);
};

const person2 = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person2, ["name", "age"]));




// Blog 1.1 example:

// type male = { gender: "male", name: string }
// type female = { gender: "female", name: string }

// type TeamMember = male | female;

// const getMember = (member: TeamMember) => {
//     if (member.gender === "male") {
//         console.log(`The Team Member is ${member.name}`)
//     } else {
//         console.log(`The Team Member is ${member.name}`)
//     }
// }
// const TeamMember1: TeamMember = { gender: "male", name: "Redwan" };
// const TeamMember2: TeamMember = { gender: "female", name: "Rabeya" };
// getMember(TeamMember1);
// getMember(TeamMember2);


// blog 1.2 example:

// const User = { name: "Redwan", email: "redwan@example.com", role: "user" }
// const Admin = { name: "Rabeya", email: "rabeya@example.com", role: "admin" }

// type Participent = typeof User & typeof Admin;
// const startMeeting = (participent: Participent) => {
//     console.log(`Welcome ${participent.name} to the meeting.`)
// }
// const participent: Participent = { name: "Redwan", email: "redwan@example.com", role: "user" };
// startMeeting(participent);