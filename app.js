const color = document.getElementById("renk");
const container= document.getElementById("container");
const text = document.getElementById("text");
color.addEventListener("input" , () => {
    container.style.backgroundColor = color.value ;
    text.style.color = color.value;
})
