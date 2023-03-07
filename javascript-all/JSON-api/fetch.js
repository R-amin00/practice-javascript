// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// function loadFetch(){
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => displayUsers(data))
//       // .then(data => console.log(data))
// }
// // loadFetch()

// function displayUsers(users){
//       const ul = document.getElementById('users-list');
//       for(const user of users){
//             console.log(user.name);
//             const li = document.createElement('li');
//             li.innerText = 'user';
//             ul.appendChild(li)
//       }
// }



// Post Review
function loadFetchPost(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => displayPosts(data))
}
function displayPosts(posts){
      const postContainer = document.getElementById('post-container');
      for(const post of posts){
            console.log(post);
            const div = document.createElement('div');
            div.innerHTML = `
                  <h4>${post.userId}</h4>
                  <h5>${post.title}</h5>
                  <p>${post.body}</p>
            `;
            postContainer.appendChild(div)
      }
}

loadFetchPost()