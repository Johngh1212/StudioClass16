//TODO: Add Your Code Below
window.addEventListener('load', function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('container');
            for (let i = 0; i < data.length; i++) {
                const astronaut = data[i];
                const astronautDiv = document.createElement('div');
                astronautDiv.className = 'astronaut';
                astronautDiv.innerHTML = `
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                `;
                container.appendChild(astronautDiv);
            }
        })
        .addEventListener('error', error => {
            console.error('Error fetching data:', error);
            // Handle the error (e.g., display a message to the user)
        });
});
