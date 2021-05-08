
function getColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }
  
  function setBackground() {
   let bgColor = getColor();
    // document.body.style.background = bgColor;
    document.getElementsByClassName("generatedcolor").style.background = bgColor;
  }
  const btngenerate=document.getElementById("btngenerate");
  
  btngenerate.addEventListener("click", setBackground);