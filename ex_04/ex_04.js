function updateLicensePlates(agent, plates) {
    if (!agent.car) {
        agent.car = {};
    }
    agent.car.licensePlates = plates;
    return agent;
}

function showLicensePlates(agent) {
    const platesContainer = document.querySelector('.plates-container');

    if (agent.car && agent.car.licensePlates) {
        platesContainer.innerHTML = '';

        agent.car.licensePlates.forEach(plate => {
            const listItem = document.createElement('li');
            listItem.textContent = plate; 
            platesContainer.appendChild(listItem);
        });
    } else {
        console.error('Pas de plaques d\'immatriculation trouvées pour cet agent.');
    }
}

const agent = {}; 
const plates = ['LU 6789', '4711-EA-62', 'BMT 216A'];

updateLicensePlates(agent, plates);
showLicensePlates(agent);
