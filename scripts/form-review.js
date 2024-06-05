
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastmodified').textContent = document.lastModified;

function updateReviewCount() {
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
    document.querySelector(".posted-reviews").textContent = numReviews;
}

document.addEventListener('DOMContentLoaded', function() {
    updateReviewCount();
});

updateReviewCount();