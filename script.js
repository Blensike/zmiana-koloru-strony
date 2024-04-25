const bodyStyle = document.body.style;

function color(kolor) {
  if (kolor == "green") {
    bodyStyle.backgroundColor = kolor;
    bodyStyle.color = "white";
  } else if (kolor == "red") {
    bodyStyle.backgroundColor = kolor;
    bodyStyle.color = "#333";
  } else {
    bodyStyle.backgroundColor = kolor;
    // Для возврата цвета текста к изначальному
    bodyStyle.color = fontColor;
  }
}

function drukuj() {
  window.print();
}
