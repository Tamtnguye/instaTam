console.log(posts);

posts.forEach(post => {
    console.log(post.id)
})

const createPostElement = (post) => {

const newDiv= document.createElement('div');
newDiv.classList.add("section");
const newSection = document.createElement('section');
newSection.classList.add("thepost")
newDiv.appendChild(newSection);
const newDivAuth= document.createElement('div');
newDivAuth.classList.add("author");
newDivAuth.setAttribute("id", post.id);
newDiv.appendChild(newDivAuth);
const newOrder= document.createElement('ol');
newOrder.classList.add("icons");
newDiv.appendChild(newOrder);
const newList= document.createElement('li');
newList.classList.add("username");
newList.innerText = post.username;
newDiv.appendChild(newList);
const newUnorder= document.createElement('ul');
newUnorder.classList.add("linker");
newDiv.appendChild(newUnorder);
const newFacebook= document.createElement('li');
newFacebook.classList.add("facebook");
newFacebook.innerText = post.like_count;
newDiv.appendChild(newFacebook);
const newTwitter= document.createElement('li');
newTwitter.classList.add("twitter");
newDiv.appendChild(newTwitter);
const newYoutube= document.createElement('li');
newYoutube.classList.add("youtube");
newDiv.appendChild(newYoutube);
const newFigure= document.createElement('figure');
newFigure.classList.add("bodypost");
newDiv.appendChild(newFigure);
const newImg= document.createElement('img');
newImg.setAttribute("src", post.image_url);
newDiv.appendChild(newImg);
const newFigcap= document.createElement('figcaption');
newFigcap.classList.add("caption");
newFigcap.innerHTML = '<p>' + post.message + '</p>';
newDiv.appendChild(newFigcap);
const newTheP= document.createElement('p');
newTheP.classList.add("origincomment")
newDiv.appendChild(newTheP);
const newComm= document.createElement('ol');
newComm.classList.add("order");
newDiv.appendChild(newComm);
const newMess= document.createElement('li');
newMess.classList.add("comment");
// const commentValue = () => {
//     posts.comments.forEach(comment => {
//         console.log(comment)
//     });
// }

for (let i = 0; i < post.comments.length; i++) {
    newMess.innerHTML = '<p>' + post.comments[i].message + '</p>';
}
newDiv.appendChild(newMess);
const newPicuser= document.createElement('i');
newPicuser.classList.add("material-icons");
newDiv.appendChild(newPicuser);
const newForm= document.createElement('form');
newForm.classList.add("form2");
newForm.setAttribute("action", "#");
newDiv.appendChild(newForm);
const newInput= document.createElement('input');
newInput.classList.add("enterMe");
newInput.setAttribute("id", "input4");
newInput.setAttribute("type", "text");
newInput.setAttribute("value", "Add a comments");
newDiv.appendChild(newInput);
const newSubmit= document.createElement('input');

newSubmit.setAttribute("type", "submit");
newSubmit.setAttribute("id", "bt1");
newDiv.appendChild(newSubmit);
document.querySelector('main').append(newDiv);
};

/*let former = document.getElementById('form1');
let event = former.addEventListener('submit', function(evt){
    evt.preventDefault();
    let msg = document.getElementById("input1").value;
    let commenter = document.querySelector(".comment");
   commenter.innerText
    console.log(text);
})*/


const loadPosts = () => {
    posts.forEach(post => {
        createPostElement(post)
        console.log(post)
    });
}
loadPosts();
//const postsContainer = document.querySelector("");
//const postElement = createPostElement(posts[0]);
//postsContainer.appendChild(postElement);