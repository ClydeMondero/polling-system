let title = document.querySelector("#title");
let description = document.querySelector("#description");

let polls = JSON.parse(localStorage.getItem("polls") || "[]");

let addButton = document.querySelector("#add-poll");

addButton.addEventListener("click", function () {
  let newPoll = createPoll(title.value, description.value);

  polls.push(newPoll);

  localStorage.setItem("polls", JSON.stringify(polls));
});

function createPoll(title, description) {
  let poll = {
    title: title,
    description: description,
    numberOfVotes: 0,
    numberOfAgrees: 0,
    numberOfDisAgrees: 0,
  };

  return poll;
}
