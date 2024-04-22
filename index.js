document.addEventListener("DOMContentLoaded", function() {
    const fetchButton = document.getElementById('fetchButton');
    const outputDiv = document.getElementById('output');

    fetchButton.addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                outputDiv.innerHTML = ''; // Clear previous content

                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');

                    const titleElement = document.createElement('h2');
                    titleElement.textContent = post.title;

                    const bodyElement = document.createElement('p');
                    bodyElement.textContent = post.body;

                    postElement.appendChild(titleElement);
                    postElement.appendChild(bodyElement);

                    outputDiv.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    });
});
