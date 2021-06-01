// const data = [
//   {
//     id: 1,
//     ques: "Question1",
//     res: "Reponse1",
//   },
//   {
//     id: 2,
//     ques: "Question2",
//     res: "Reponse2",
//   },
//   {
//     id: 1,
//     ques: "Question3",
//     res: "Reponse3",
//   },
// ];
// import * as data from "./data.json";
// const region = data;
// console.log(region);
// import emojiPickerElement from "https://cdn.skypack.dev/emoji-picker-element";
// document
//   .querySelector("emoji-picker")
//   .addEventListener("emoji-click", (event) => console.log(event.detail));

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  // console.log(question);
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      //  console.log(item)
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// const newData = JSON.parse(data);
// console.log(newData);
// function load() {
//   let mydata = JSON.parse(data);
//   console.log("mydata[0].length:", mydata[0].length);
//   console.log("mydata.length:", mydata.length);
// }

// load();
