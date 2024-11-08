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
console.log(updateProfile(myProfile, { age: 26 }));