function fullPost() {
  window.location.href = "./post.html";
}

function deletePost() {
  document.getElementById("deletePostPrompt").style.display = "block";
}

function closeDeleteClicked() {
  document.getElementById("deletePostPrompt").style.display = "none";
}
