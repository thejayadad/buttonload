

let btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    this.classList.add("loading");
    this.innerHTML = "<span class='icon'>&#8635</span> Processing....";
    
})
