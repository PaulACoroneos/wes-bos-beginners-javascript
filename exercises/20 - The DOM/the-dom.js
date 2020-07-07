function init(){
  const p = document.querySelector('p');
  console.log(p);
  const imgs = document.querySelectorAll('img');
  console.log(imgs);
  const heading = document.querySelector('h2');
  console.log(heading.textContent);
  heading.textContent = 'Paul is cool';
  console.log(heading.innerText);
  console.log(heading.innerHTML);
  console.log(heading.outerHTML);

  const pizzaList = document.querySelector('.pizza');

  console.log(pizzaList.textContent);

  // pizzaList.textContent = `${pizzaList.textContent} 🍕`
  pizzaList.insertAdjacentText('afterbegin','🍕')
  pizzaList.insertAdjacentText('beforeend','🍕')
}

document.addEventListener('DOMContentLoaded', init)