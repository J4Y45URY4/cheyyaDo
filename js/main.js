function initiate() {
  let delLet = document.querySelector(".start-text .desc").innerHTML.split("");
  let delLetP = document.querySelector(".start-text p").innerHTML.split("");
  let startButton = document.querySelector(".start button");
  let delLetButton = startButton.innerHTML.split("");
  let delLetNum = delLetP.length;
  let addBtn = document.querySelector(".addbtnparent");
  startButton.style.transitionDuration = "1000ms";
  startButton.style.width = "0px";
  startButton.style.border = "0px";
  addBtn.style.display = "flex";

  for (let index = 0; index < delLetNum; index++) {
    setTimeout(function () {
      delLet.shift();
      delLetP.shift();
      delLetP.pop();
      delLetButton.pop();
      delLetButton.shift();
      document.querySelector(".start-text .desc").innerHTML = delLet.join("");
      document.querySelector(".start-text p").innerHTML =
        "‎ " + delLetP.join("");
      startButton.innerHTML = delLetButton.join("");
    }, 50 * index);
  }
  setTimeout(function () {
    addBtn.style.opacity = "100%";
  }, 1800);
  document.querySelector(".start").style.transform = "translate(0, -41vh)";
  document.querySelector(".start-text .logo").style.fontSize = "2.6rem";
  document.querySelector(".start").style.height = "3rem";
}
let listId = 0;
function addList() {
  document.querySelector(".addbtnparent p").style.display = "none";
  listId++;
  document
    .querySelector(".lists-parent")
    .insertAdjacentHTML(
      "beforeend",
      "<div class='list-container' id='list-" +
        listId +
        "'><input type='text' value='New List' class='list-title'></div>"
    );
  document.querySelector("#list-" + listId + " .list-title").focus();
  document.querySelector("#list-" + listId + " .list-title").select();
}
