const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item0 = document.getElementById("item0");
const content0 = document.getElementById("content0");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");
const content5 = document.getElementById("content5");

function hideAllContents() {
  content1.classList.remove("active");
  content2.classList.remove("active");
  content3.classList.remove("active");
  content4.classList.remove("active");
  content5.classList.remove("active");
  content0.classList.remove("active");
}

item1.onclick = function () {
  hideAllContents();
  content1.classList.add("active");
};

item2.onclick = function () {
  hideAllContents();
  content2.classList.add("active");
};

item3.onclick = function () {
  hideAllContents();
  content3.classList.add("active");
};
item4.onclick = function () {
  hideAllContents();
  content4.classList.add("active");
};
item5.onclick = function () {
  hideAllContents();
  content5.classList.add("active");
};
item0.onclick = function () {
  hideAllContents();
  content0.classList.add("active");
};
