function myDisplayText() {
  let inputText = document.getElementById("input-text").value;
  document.getElementById("text-displayer").innerText = inputText;
}


function myTurnBold() {
  let turnBold = document.getElementById("text-displayer");
  turnBold.style.fontWeight = "bold";
}


function myTurnItalic() {
  let turnItalic = document.getElementById("text-displayer");
  turnItalic.style.fontStyle = "italic";
}

function myClearText() {
  let clearText = document.getElementById("text-displayer");
  clearText.style.fontWeight = "normal";
  clearText.style.fontStyle = "normal";
  clearText.style.textDecoration = "none";
}

