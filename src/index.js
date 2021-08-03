// write your code here
// Instructions
// - Use this template as a starting point. Make sure you download it into your laptop =>
// https:codesandbox.io/s/instabool-template-cwhm7?file=/index.html
// - Set up your json-server using the files in the db folder; You must start the server on your local machine, 
//using this exact command from the terminal on the root of your project folder:  json-server --watch db/db.json --routes db/routes.json 
// - Dynamically render the posts using the card HTML portion that you'll find in the index.html
// - Try to use the same CSS classes to achieve the desired look
// - Have the like button adding 1 like to the respective counter each time you click it
// - Have the comments form to add another comment to the respective post
// - The data must be persisted in the server so that when you refresh the page it doesn't go away

fetch("http://localhost:3000/images")
  .then((res) => res.json())
  .then((images) => {
    console.log("Inside GET Fetch: ", images);

    renderCardImage(images)
  });
  

const containerEl = document.querySelector(".image-container")
console.log("conrainerEl: ", containerEl)

function renderCardImage (datas) {
  for (let i = 0; i < datas.length; i++){
const data = datas[i]
// console.log("inside data: ", data)
const articleEl = document.createElement("article")
articleEl.className = "image-card"
containerEl.append(articleEl)
console.log("articleEl: ", articleEl)

const titleEl = document.createElement("h2")
titleEl.className = "title"
titleEl.innerText = data.title
articleEl.append(titleEl)

const imageEl = document.createElement("img")
imageEl.src = data.image
imageEl.className = "image"
articleEl.append(imageEl)

const frameEl = document.createElement("div")
frameEl.className = "likes-section"
articleEl.append(frameEl)

const spanEl = document.createElement("span")
spanEl.className = "likes"
spanEl.innerText = data.likes
frameEl.append(spanEl)

const buttonEl = document.createElement("button")
buttonEl.className = "like-button"
buttonEl.innerText = "♥"
frameEl.append(buttonEl)
buttonEl.addEventListener("click", () => {;
  console.log("buttonEl: ", buttonEl)
});


const ulEl = document.createElement("ul")
ulEl.className = "comments"
articleEl.append(ulEl)


data.comments.forEach((item) => {
    const listEl = document.createElement("li")
    listEl.innerText = item.content
    ulEl.append(listEl)
});

const formEl = document.createElement("form")
formEl.className = "comment-form", "image-card"
containerEl.append(formEl)

const commentFormEl = document.createElement("form")
commentFormEl.className = "comment-form"
articleEl.append(commentFormEl)

const inputEl = document.createElement("input")
inputEl.className = "comment-input"
inputEl.type = "text"
inputEl.name = "comment"
inputEl.placeholder = "Add a comment..."
commentFormEl.append(inputEl)

const btnEl = document.createElement("button")
btnEl.className = "comment-button"
btnEl.type = "submit"
btnEl.innerText = "Post"
btnEl.addEventListener("click", () => {;
  console.log("Inside btnEl: ", btnEl)
});
commentFormEl.append(btnEl)
}
}
