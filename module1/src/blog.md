# Union  Vs Intersection Types in Typescript:

## Union And Intersection Types Are The most useful and Common topics in typescript. It helps Developers to write complex type in a eseir way.

 Sometimes ,we face a Common secnario, where we must show complex types that can not be provided with single type. These uniuon and Intersectioin Types helps us to solve this kind of problems.

Lets see how it works .

# Union Types:

suppose we are working on a team , and the team members will be male or Female. If i choose one member, the member can be either male or Female.
Then , The Union Types helps us to handle this type of Secnarios.

* Lets visual the topis with simple code:

```
const getMember = (member: TeamMember) => {
    if (member.gender === "male") {
        console.log(`The Team Member is ${member.name}`)
    } else {
        console.log(`The Team Member is ${member.name}`)
    }
}
const TeamMember1: TeamMember = { gender: "male", name: "Redwan" };
const TeamMember2: TeamMember = { gender: "female", name: "Rabeya" };
getMember(TeamMember1);
getMember(TeamMember2);


# Intersection Type:
## Intersection type allow us to combine type into one types.

Example: Suppose you are a Super Admin and want to setting up a meeting and taht can start when both user and admin are present. in that case, the Intersection types ensure the meeting participent has both user and Admin .

let visual this topic with code:

```
const User = { name: "Redwan", email: "redwan@example.com", role: "user" }
const Admin = { name: "Rabeya", email: "rabeya@example.com", role: "admin" }

type Participent = typeof User & typeof Admin;
const startMeeting = (participent: Participent) => {
    console.log(`Welcome ${participent.name} to the meeting.`)
}
const participent: Participent = { name: "Redwan", email: "redwan@example.com", role: "user" };
startMeeting(participent);