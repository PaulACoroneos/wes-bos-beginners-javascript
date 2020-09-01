// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement("ul");

// add three list items with the words "one, two three" in them
const li1 = document.createElement("li");
const li2 = li1.cloneNode(true);
const li3 = li2.cloneNode(true);
li1.innerText = "one";
li2.innerText = "two";
li3.innerText = "three";
ul.appendChild(li1)
  .appendChild(li2)
  .appendChild(li3);

// put that list into the above wrapper
div.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = "https://source.unsplash.com/random/300x300";
// set the width to 250
img.width = 200;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "cute puppy";
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const newDiv = `<div><p></p><p></p></div>`;
// put this div before the unordered list from above
div.insertAdjacentHTML("afterbegin", ul);

// add a class to the second paragraph called warning
// remove the first paragraph
div.firstElementChild.firstElementChild.classList.add("warning");
div.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return (
    `<div class="playerCard">
      <h2>${name - age}</h2>
      <p>
        They are ${height} and ${age} years old. In Dog years this person would be
        AGEINDOGYEARS. That would be a tall dog!
      </p>
    </div>`
  );
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards')

// Have that function make 4 cards
const card1 = generatePlayerCard('paul', 19, 180)
const card2 = generatePlayerCard('laup', 20, 181)
const card3 = generatePlayerCard('aupl', 21, 182)
const card4 = generatePlayerCard('apul', 22, 183)

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
cardDiv.appendChild(card1);
cardDiv.appendChild(card2);
cardDiv.appendChild(card3);
cardDiv.appendChild(card4);
wrapper.insertAdjacentHTML('afterBegin',cardDiv)

const button = document.createElement('button');
button.addEventListener('click', (event) => {
  event.target.remove();
})

card1.appendChild(button);
const button2 = button.cloneNode(true);
button2.addEventListener('click', (event) => {
  event.target.remove();
})

card2.appendChild(button2);

const button3 = button.cloneNode(true);
button3.addEventListener('click', (event) => {
  event.target.remove();
})

card3.appendChild(button3);


const button4 = button.cloneNode(true);
button4.addEventListener('click', (event) => {
  event.target.remove();
})

card4.appendChild(button2);


// select all the buttons!
// make out delete function
// loop over them and attach a listener
const allButtons = document.querySelectorAll('button')
