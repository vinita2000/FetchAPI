//get event listeners
const btnApi = document.getElementById('btnApi');
const postsList = document.getElementById('postsList');

let posts = []

//renders the data onto html
function renderPosts(n){
    postsList.innerHTML = '';
    for(let i=0; i<n; i++){
        let str = `<li id="postItem">
                    <h4 id="title">${posts[i].title}</h4>
                    <p id="body">${posts[i].body}</p>
                    <span id="userId">${posts[i].userId}</span>
                </li>`
        postsList.innerHTML += str;
    }
}

//chooses 20 or less posts to be rendered on the DOM
function ChoosePosts(posts){
    //render only 20 items from the list
    let n = posts.length;
    if(n>20){
        renderPosts(20)
    }
    else{
        renderPosts(n);
    }
    
}

//gets the api request response
function fetchApi(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        response = response.json();
        return response;
    })
    .then(data=>{
        posts = data;
        //render the data
        ChoosePosts(posts);
    })
    .catch(error => console.log(error));
}

btnApi.addEventListener('click', fetchApi);