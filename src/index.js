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
for (let i = 0; i < images.length; i++) {
    const image = images[i]
    console.log("Inside Images: ", image)
}
    renderCardImage(images)
  });
const bodyEl = document.querySelector("body")

function renderCardImage (image) {
   
}
