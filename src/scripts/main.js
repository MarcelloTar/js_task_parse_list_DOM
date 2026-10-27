'use strict';

// write code here

const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');

// console.log({...list[0].dataset});

function sortList(list) {
  const dataSort = getEmployees(list);

  return [...dataSort]
    .sort((a, b) => {
      return b.salary - a.salary;
    })
    .map((item) => {
      return `
        <li
          data-position="${item.position}"
          data-salary="$${item.salary.toLocaleString('en-US')}"
          data-age="${item.age}"
        >
          ${item.name}
        </li>
      `;
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

sortList(lists).forEach((item) => {
  ul.innerHTML += item;
});
