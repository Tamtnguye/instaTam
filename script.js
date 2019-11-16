console.log(posts);

posts.forEach(post => {
    console.log(post.id)
})

const createPostElement = () => {

const newDiv= document.createElement('div');
newDiv.classList.add("section");
const newSection = document.createElement('section');
newSection.classList.add("thepost")
const newDivAuth= document.createElement('div');
newDivAuth.classList.add("author");
newDivAuth.setAttribute("id", posts.id);
const newOrder= document.createElement('ol');
newOrder.classList.add("icons");
const newList= document.createElement('li');
newList.classList.add("username");
newList.innerText(posts.username);

const newUnorder= document.createElement('ul');
newUnorder.classList.add("linker");
const newFacebook= document.createElement('li');
newFacebook.classList.add("facebook");
newFacebook.innerText(posts.like_count);
const newTwitter= document.createElement('li');
newTwitter.classList.add("twitter");
const newYoutube= document.createElement('li');
newYoutube.classList.add("youtube");

const newFigure= document.createElement('figure');
newFigure.classList.add("bodypost");
const newImg= document.createElement('img');
newImg.setAttribute("src", posts.image_url);
imageContainer.appendChild(newImg);
const newFigcap= document.createElement('figcaption');
newFigcap.classList.add("caption");
newFigcap.innerText(posts.message)
const newTheP= document.createElement('p');
newTheP.classList.add("origincomment")

const newComm= document.createElement('ol');
newComm.classList.add("order");
const newMess= document.createElement('li');
newMess.classList.add("comment");
const newPicuser= document.createElement('i');
newPicuser.classList.add("material-icons");
const newForm= document.createElement('form');
newForm.classList.add("form2");
newForm.setAttribute("action", "#");

const newInput= document.createElement('input');
newInput.classList.add("enterMe");
newInput.setAttribute("id", "input4");
newInput.setAttribute("type", "text");
newInput.setAttribute("value", "Add a comments");
const newSubmit= document.createElement('input');

newSubmit.setAttribute("type", "submit");
newSubmit.setAttribute("id", "bt1");

}

/*let former = document.getElementById('form1');
let event = former.addEventListener('submit', function(evt){
    evt.preventDefault();
    let msg = document.getElementById("input1").value;
    let commenter = document.querySelector(".comment");
   commenter.innerText
    console.log(text);
})*/


const postsContainer = document.querySelector("");
const postElement = createPostElement(posts[0]);
postsContainer.appendChild(postElement);