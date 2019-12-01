// console.log(posts);

// posts.forEach(post => {
//     console.log(post.id)
// })

const url = 'https://instasam-one.herokuapp.com/api/insta_posts';

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
newUnorder.innerText = post.like_count;
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
newInput.setAttribute("placeholder", "Add a comments");
newForm.appendChild(newInput);
const newSubmit= document.createElement('input');

newForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(post.id)
  let addComm = newInput.value;
  const urlcomm = 'https://instasam-one.herokuapp.com/api/insta_posts/' + post.id + '/comments';
  let blank = {
    "message": addComm
  }
  let fetchData = { 
    method: 'POST', 
    body: JSON.stringify(blank),
    headers: {
      'Content-Type': 'application/json'
    }}
  fetch(urlcomm, fetchData)
      .then(() => {
        return fetch(url)
      })
      .then(response => response.json())
      .then(allS => loadPosts(allS))
      .catch((err)=>console.log(err))

})

newSubmit.setAttribute("type", "submit");
newSubmit.setAttribute("id", "bt1");
newForm.appendChild(newSubmit);
document.querySelector('main').append(newDiv);
};


   




//const postsContainer = document.querySelector("");
//const postElement = createPostElement(posts[0]);
//postsContainer.appendChild(postElement);






const loadPosts = (b) => {
    let wipe = document.querySelector(".main")
    wipe.innerText = "";
    b.forEach(post => {
        
        createPostElement(post)
        
    });
    
}



const former = document.getElementById('form1');
former.addEventListener('submit', function(evt) {
    //window.location.reload();
    evt.preventDefault();
    const url = 'https://instasam-one.herokuapp.com/api/insta_posts';
    
    
    let user = document.getElementById("input1").value;
    let photoUrl = document.getElementById("input2").value;
    let msg = document.getElementById("input3").value;

    let data = {
      "username": user, 
      "message": msg,
      "image_url": photoUrl,
      "comments": []
    }

    let fetchData = { 
      method: 'POST', 
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
  }
    /*
    let postArr = {id: posts.length+1, username: user, message: msg, image_url: photoUrl, like_count:0, comments:[]};
    posts.push(postArr);
    */
    
    fetch(url, fetchData)
        .then(() => {
          return fetch(url)
        })
        .then(response => response.json())
        .then(allS => loadPosts(allS))
        .catch((err)=>console.log(err))
        
    
    
});
  

  


fetch(url)
.then(response => response.json())
.then(allS => loadPosts(allS))
.catch((err)=>console.log(err))