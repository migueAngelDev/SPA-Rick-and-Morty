const $main = document.querySelector(".main");

const getUrl = new URLSearchParams(window.location.search);

id = getUrl.get("id");

const url = "https://rickandmortyapi.com/api/character";

fetch(`${url}/${id}`)
  .then((Response) => Response.json())
  .then((datas) => {
    $main.innerHTML = `

        <div>
        <img src="${datas.image}" alt="${datas.name}">
        </div>
        
        
        
        <div>

          <button class="btn-back" id="home"> ← back</button>
          <br />
          <p>Name: ${datas.name}</p>
          <br />
          <p>Gender: ${datas.gender}</p>                        
          <br />
          <p>Status: ${datas.status}</p>                        
          <br />
          <p>Species: ${datas.species}</p>                        
          <br />
          <p>Type: ${datas.type || "?"} </p>                        
          <br />
          <p>Origin: ${datas.origin.name}</p>                        
          <br />
          <p>Location: ${datas.location.name}</p>                        
          <br />
          <p>Episodes: ${datas.episode.length}</p>                        
          <br />
          <p>Created: ${datas.created}</p>                   
                   
          </div>

          `;

    const btnHome = document.getElementById("home");
    btnHome.addEventListener("click", (e) => {
      window.location.href = `/index.html`;
    });
  });
