'use strict';

// write code here

const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');

// console.log({...list[0].dataset});

function sortList(list) {
  return [...list].sort((a, b) => {
    return b.salary - a.salary;
  });
}

function getEmployees(list) {
  return [...list].map((item) => {
    return {
      ...item.dataset,
      salary: +item.dataset.salary.slice(1).replaceAll(',', ''),
      name: item.textContent,
    };
  });
}

ul.innerHTML = '';

sortList(getEmployees(lists)).forEach((item) => {
  const li = document.createElement('li');

  li.setAttribute('data-position', item.position);
  li.setAttribute('data-salary', `$${item.salary.toLocaleString('en-US')}`);
  li.setAttribute('data-age', item.age);

  li.textContent = item.name;

  ul.append(li);
});
