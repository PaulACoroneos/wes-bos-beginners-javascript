const butts = document.querySelector(".butts");

function handleClick() {
  console.log("hi");
}

butts.addEventListener("click", handleClick);

butts.removeEventListener('click', handleClick)