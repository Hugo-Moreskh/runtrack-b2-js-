function myChangeBackgroundColor() {
  let width = window.innerWidth;

  if (width >= 1337) {
    document.body.style.backgroundColor = "#ffb703";
  } else if (width >= 505 && width <= 1336) {
    document.body.style.backgroundColor = "#d90429";
  } else {
    document.body.style.backgroundColor = "#003049";
  }


}
myChangeBackgroundColor();
