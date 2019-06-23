function allPosts() {
    window.location.href= "./html/bloglist.html";
}

function createPost() {
    document.getElementById('newPostModal').style.display='block';
}

function closeNewPost() {
    document.getElementById('newPostModal').style.display='none';
}