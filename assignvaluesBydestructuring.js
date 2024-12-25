const project = {
  projectName: "AI Research",
  manager: {
    name: "Sophia",
    experience: 10,
    team: [
      {
        name: "Liam",
        role: "Data Scientist",
        skills: ["Python", "Machine Learning"],
      },
      {
        name: "Olivia",
        role: "Software Engineer",
        skills: ["JavaScript", "React", "Node.js"],
      },
      {
        name: "Ethan",
        role: "DevOps Engineer",
        skills: ["AWS", "Docker", "Kubernetes"],
      },
    ],
  },
  duration: "6 months",
  budget: 50000,
};

const { projectName: nameOfproject, budget: allocatedBudget } = project;
const {
  manager: { name: managerName, team: teamMembers },
} = project;

const { name: firstTeamMember, role: firstTeamMemRole } = teamMembers[0];

const { name: secondTeamMemberName, skills: skillOfSecondPerson } =
  teamMembers[1];

const { deadLine = "No fixed deadLine" } = teamMembers;
const display = console.log;

display("Project Name :", nameOfproject);
display("ALlocated budget :", allocatedBudget);
display("Manager name :", managerName);
display("Team Member: ", teamMembers);
display("firstTeam Member: ", firstTeamMember);
display("firstTeam Member Role: ", firstTeamMemRole);
display("secondTeamMem :", secondTeamMemberName);
display("skill Of second person :", skillOfSecondPerson);
display("deadLine :", deadLine);
