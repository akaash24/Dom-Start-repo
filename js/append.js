// where to add
const placesList = document.getElementById("places-list");
// what to be added
const li = document.createElement("li");
li.innerText = "Bangla Bhumi";
// add the child
placesList.appendChild(li);

const mainContent = document.getElementById("main-content");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Food List";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "vaat";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "dail";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Diim";
ul.appendChild(li3);

section.appendChild(ul);

mainContent.appendChild(section);

// set inner HTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My Fev Dresses</h1>
<ul>
<li> T-shirt </li>
<li>Lungi</li>
<li>Pant</li>
</ul>
`;
mainContent.appendChild(sectionDress);
