const showSportsTeam =()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal`;
    fetch(url)
    .then(res => res.json())
    .then (data => displayLeag(data));
}
showSportsTeam();
const displayLeag = data =>{
    const teams = data.teams;
    const col = document.getElementById('col');
    for(const team of teams){
        console.log(team);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card text-center p-5">
            <img src="${team.strTeamBadge}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
            <h3 class="card-title">${team.strTeam}</h3>
            <h5 class="card-title">${team.strLeague}</h5>
            <p class="card-text">${team.strStadiumDescription.slice(0,200)}</p>
            <h5 class="card-title"> Twitter :${team.strTwitter}</h5>
            </div>
        </div>
        `;
        col.appendChild(div);
        
    }

}