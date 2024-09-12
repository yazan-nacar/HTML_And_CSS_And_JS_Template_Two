//up buttton settings 
let span = document.querySelector(".up");
window.onscroll = function () {
  if(this.scrollY >= document.documentElement.clientHeight) {
    span.classList.add("show");
  }else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    Behavior : "smooth"
  })
};







//scroller settings 

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight ;

window.addEventListener("scroll" , () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});


