//classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
//remove - remove class
// toggle - toggle class

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener('click', function(){
  sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click",function(){
  sidebar.classList.remove("show-sidebar")
})