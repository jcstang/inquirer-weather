const listOfQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your quest?",
    name: "quest"
  },
  {
    type: "input",
    message: "What is your favorite color?",
    name: "color"
  },
  // Here we create a basic password-protected text prompt.
  {
    type: "password",
    message: "Set your password",
    name: "password"
  },
  // Here we give the user a list to choose from.
  {
    type: "list",
    message: "Which Pokemon do you choose?",
    choices: ["Bulbasaur", "Squirtle", "Charmander"],
    name: "pokemon"
  },
  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
  }
];


module.exports = {
  questions: listOfQuestions
}
