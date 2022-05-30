const extensions = [ "jpg", "png", "jpeg", "bmp", "webm", "gif"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randInde = getRandomInt(extensions.length);

const el = document.createElement("div");
document.body.append(el);

window.onload = (e) =>{
    console.log(document.querySelector("iframe").contentWindow.document.querySelector("body"));
};

document.querySelector(".output").innerText = "." + extensions[randInde];