// Blog 1.1 example:

type male = { gender: "male", name: string }
type female = { gender: "female", name: string }

type TeamMember = male | female;

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


// blog 1.2 example:

const User = { name: "Redwan", email: "redwan@example.com", role: "user" }
const Admin = { name: "Rabeya", email: "rabeya@example.com", role: "admin" }

type Participent = typeof User & typeof Admin;
const startMeeting = (participent: Participent) => {
    console.log(`Welcome ${participent.name} to the meeting.`)
}
const participent: Participent = { name: "Redwan", email: "redwan@example.com", role: "user" };
startMeeting(participent);