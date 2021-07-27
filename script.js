// TODO: add code here
window.addEventListener('load',function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
        response.json().then(function(json) {
           
            let myCrewDiv = document.getElementById('container');
                for(let i = 0; i < json.length; i++){
                console.log(json[i]);

        myCrewDiv.innerHTML += `
         <div class = "astronaut">
             <div class = "bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
                <li>${json[i].hoursInSpace}</li>
                <li>${json[i].active}</li>
                <li>${json[i].skills}</li>
                </ul>
                <img class = "avatar" src = "${json[i].picture}">
            </div>
                </div>
    
            `
        }

        });
    });

});