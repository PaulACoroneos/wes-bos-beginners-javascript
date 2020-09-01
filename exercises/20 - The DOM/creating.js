console.log('it works');

const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special')

console.log(myParagraph)

const myImage = document.createElement('img')

myImage.src = "https://source.unsplash.com/random/300x300"
myImage.alt = "hell world"
console.log(myImage)

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

//oh shoot! we need to add something!

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin',heading)

const ul = document.createElement('ul');
const li = document.createElement('li');

for(let i =0; i < 5; i++) {
  const liNew = li.cloneNode(true);
  liNew.textContent= i+1
  ul.appendChild(liNew)
}
myDiv.appendChild(ul);