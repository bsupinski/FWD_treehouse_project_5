const jpgImages = ["01", "02",  "03",  "04",  "05",  "06",  "07",  "08",  "09",  "10",  "11",  "12",];

for (item in jpgImages) {
  let newImg = document.createElement('img');
  newImg.setAttribute("src", `photos/thumbnail/${item}.jpg`);
  newImg.setAttribute("height", "400px");
  newImg.setAttribute("width", "400px");
  document.getElementsByClassName("img_wrap").appendChild("newImg");
}