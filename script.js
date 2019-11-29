// console.log(posts);

// posts.forEach(post => {
//     console.log(post.id)
// })


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
newDivAuth.appendChild(newOrder);
newOrder.innerText = post.username;
const newList= document.createElement('li');
newList.classList.add("username");

newOrder.appendChild(newList);
const newUnorder= document.createElement('ul');
newUnorder.classList.add("linker");
newDivAuth.appendChild(newUnorder);
const newFacebook= document.createElement('li');
newDivAuth.appendChild(newUnorder);
newFacebook.classList.add("facebook");
newFacebook.innerText = post.like_count;
newUnorder.appendChild(newFacebook);
const newTwitter= document.createElement('li');
newTwitter.classList.add("twitter");
newUnorder.appendChild(newTwitter);
const newYoutube= document.createElement('li');
newYoutube.classList.add("youtube");
newUnorder.appendChild(newYoutube);
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


// const commentValue = () => {
//     posts.comments.forEach(comment => {
//         console.log(comment)
//     });
// }

for (let i = 0; i < post.comments.length; i++) {
    const newMess= document.createElement('li');
    newMess.classList.add("comment");
    newMess.innerHTML = "<i class='material-icons'>face</i>" + post.comments[i].message ;
    newComm.appendChild(newMess);
    
}

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





//const postsContainer = document.querySelector("");
//const postElement = createPostElement(posts[0]);
//postsContainer.appendChild(postElement);






const loadPosts = () => {
    let wipe = document.querySelector(".main")
    wipe.innerText = "";
    posts.forEach(post => {
        
        createPostElement(post)
        
    });
    
}

const former = document.getElementById('form1');
former.addEventListener('submit', function(evt) {
    //window.location.reload();
    evt.preventDefault();
    
    
    let user = document.getElementById("input1").value;
    let photoUrl = document.getElementById("input2").value;
    let msg = document.getElementById("input3").value;
    
    let postArr = {id: posts.length+1, username: user, message: msg, image_url: photoUrl, like_count:0, comments:[]};
    posts.push(postArr);
    
    loadPosts();
    
});
const url = 'https://instasam-one.herokuapp.com/api';

const userAction = async () => {
    const response = await fetch('https://instasam-one.herokuapp.com/api/insta_posts');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }
const userAction2 = async () => {
    const response = await fetch('https://instasam-one.herokuapp.com/api/insta_posts', {
      method: 'POST',
      body: {
        "username": "", 
        "message": "",
        "image_url": "",
        "comments": []
      }, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }