import searchFilters from "./search_filter.js";

const $Data = document.getElementById("datos");

const ul = document.createElement("ul");

const url = "https://rickandmortyapi.com/api/character";

fetch(url)
  .then((Response) => Response.json())

  .then((users) => {
    const datas = users.results;

    datas.forEach((data) => {
      const element = document.createElement("li");

      element.setAttribute("class", "filter-li");

      element.innerHTML = `

      <button class="btn-name"  id="${data.id}">${data.name}</button>

      <br /> <br />

      <img src="${data.image}" alt="${data.name}">

      `;

      ul.appendChild(element);

      const btnUrl = document.getElementById(`${data.id}`);

      btnUrl.addEventListener("click", (e) => {
        window.location.href = `/character.html?id=${data.id}`;
      });
    });
  });

document.addEventListener("DOMContentLoaded", (e) => {
  searchFilters(".search-filter", ".filter-li");
});

$Data.appendChild(ul);
