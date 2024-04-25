function color(kolor) {
  if (kolor == "green") {
    document.bgColor = kolor;
    document.body.style.color = "white";
  } else if (kolor == "red") {
    document.bgColor = kolor;
    document.body.style.color = "#333";
  } else {
    document.bgColor = kolor;
  }
}
function drukuj() {
  window.print();
}
