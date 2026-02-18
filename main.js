let webLinks = [];

const inputElement = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("del-btn");
const tabBtn = document.getElementById("tab-btn");
const webList = document.getElementById("ul-el");

const placeholderText = "Enter your link here";
let placeholderIndex = 0;
let placeholderInterval = null;

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mx", `${e.clientX}px`);
  document.body.style.setProperty("--my", `${e.clientY}px`);
});

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.remove("ripple");
    void btn.offsetWidth;
    btn.classList.add("ripple");
    setTimeout(() => btn.classList.remove("ripple"), 400);
  });
});

function startPlaceholderTyping() {
  stopPlaceholderTyping();
  inputElement.placeholder = "";
  placeholderIndex = 0;

  placeholderInterval = setInterval(() => {
    if (placeholderIndex < placeholderText.length) {
      inputElement.placeholder += placeholderText.charAt(placeholderIndex);
      placeholderIndex++;
    } else {
      clearInterval(placeholderInterval);
    }
  }, 80);
}

function stopPlaceholderTyping() {
  if (placeholderInterval) {
    clearInterval(placeholderInterval);
    placeholderInterval = null;
  }
}

inputElement.addEventListener("focus", () => {
  inputElement.classList.add("typing");
});

inputElement.addEventListener("blur", () => {
  if (inputElement.value.trim() === "") {
    startPlaceholderTyping();
  }
});

startPlaceholderTyping();

const storedLinks = JSON.parse(localStorage.getItem("webLinks"));
if (storedLinks) {
  webLinks = storedLinks;
  render(webLinks);
}

function render(links) {
  let listItems = "";
  for (let i = 0; i < links.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${links[i]}">${links[i]}</a>
      </li>
    `;
  }
  webList.innerHTML = listItems;
}

tabBtn.addEventListener("click", async () => {
  const tabs = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });

  webLinks.push(tabs[0].url);
  localStorage.setItem("webLinks", JSON.stringify(webLinks));
  render(webLinks);
});

inputBtn.addEventListener("click", () => {
  if (inputElement.value.trim() === "") return;

  let url = inputElement.value.trim();

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  webLinks.push(url);
  inputElement.value = "";
  localStorage.setItem("webLinks", JSON.stringify(webLinks));
  render(webLinks);
});

deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  webLinks = [];
  render(webLinks);
});



























// function renderList(){
// 	let listItem =  "<li>" + inputElement.value + "</li>" + "\n" //Empty string (initialize to hold the html contents)
// 	webList.innerHTML += listItem 
// }

/*webList.innerHTML = listItems 
--->Performant, as it does
it once whereas, in previous 
innerHTML it was in loop which 
would've taken time (according
to the size of the array of lists).
*/

	/*<--Another Method for printing the list-->\
	1)Create the Element:
	const list = document.createElement("li")
	
	2)Set element context:
	list.textContent = webLinks[i]

	3)append to the ul(unordered list)
	webList.append(list)
	*/