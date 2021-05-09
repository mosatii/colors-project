
const body = document.body;
const pallete = document.getElementById("pallete");
const pallete2 = document.getElementById("pallete2");
const pallete3 = document.getElementById("pallete3");
const pallete4 = document.getElementById("pallete4");

//Random Color
function randomColor() {
  let randomize = Math.floor(Math.random() * 16777215).toString(16);
  let randomize2 = Math.floor(Math.random() * 16777215).toString(16);
  let randomize3 = Math.floor(Math.random() * 16777215).toString(16);
  let randomize4 = Math.floor(Math.random() * 16777215).toString(16);
  pallete.innerHTML = `#${randomize}`;
  pallete2.innerHTML = `#${randomize}`;
  pallete3.innerHTML = `#${randomize}`;
  pallete4.innerHTML = `#${randomize}`;
  body.style.background = `linear-gradient(to right, #${randomize} 0%, #${randomize} 25%, #${randomize2} 25%, #${randomize2} 50%, #${randomize3} 50%, #${randomize3} 80%,#${randomize4} 80%, #${randomize4} 100%)`;
}

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
//icon changing 
function change (iconID){
  if(document.getElementById(iconID).className=="fa fa-lock"){
    document.getElementById(iconID).className = "fa fa-unlock";
  }else{
    document.getElementById(iconID).className = "fa fa-lock";
  }
}
//Saving our data 
const inpKey = document.getElementById("palettetext");
const save = document.getElementById("save");
const IsOutput = document.getElementById("IsOutput");

save.onclick = function(){
  const Pcolor1 =  ;
  
  const key = inpKey.value;
  console.log(Pcolor1);


  console.log(key);


} 
// function getColor() {
//   return (
//     "#" +
//     Math.random()
//       .toString(16)
//       .slice(2, 8)
//   );
// }

// function setBackground() {
//  let bgColor = getColor();
//   // document.body.style.background = bgColor;
//   document.getElementById("pallete").style.background = bgColor;
//   pallete.inner
//   document.getElementById("pallete1").style.background = bgColor;
//   document.getElementById("pallete2").style.background = bgColor;
//   document.getElementById("pallete3").style.background = bgColor;
//   document.getElementById("pallete4").style.background = bgColor;
// }
// const btngenerate=document.getElementById("btngenerate");

// btngenerate.addEventListener("click", setBackground);