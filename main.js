let profileButton = document.getElementById("profile-button");
let iconsButton = document.getElementById("icons-button");
let profileSection = document.querySelector(".profile-section");
let shareSection = document.querySelector(".share-section");
profileButton.addEventListener("click", function(){
  console.log("This button works1");
  profileSection.classList.toggle("hidden");
  shareSection.classList.toggle("active");
  profileButton.classList.toggle("button-active");
});
iconsButton.addEventListener("click", function(){
  console.log("This button works!");
  shareSection.classList.toggle("active");
  profileSection.classList.toggle("hidden");
});