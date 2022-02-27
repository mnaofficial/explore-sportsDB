const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;

    const url = ` https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue} `;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
};

const showPlayerDetails = (players) => {
    for (const player of players) {
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `
       <div class="card border m-3 p-3">
          <div class="pro-pick">
             <img class="w-50" src="${player.strThumb}" alt="">
          </div>
            <h2>Name: ${player.strPlayer}</h2>
            <h5>Country: ${player.strNationality}</h5>
            <p></p>
         <div class="all-button">
           <button class="btn btn-danger">Delete</button>
           <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
         </div>
      </div>
    `;
        parent.appendChild(div);
    };
}
const details = (id) => {
    const url = ` https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id} `;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]))
};
const setDetails = (info) => {
    document.getElementById('details-container').innerHTML = `
    <div>
       <img class="w-50" src="${info.strThumb}" alt="">
       <h1>Name: ${info.strPlayer} </h1>
    </div>
    `
}