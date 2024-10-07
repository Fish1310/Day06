function addCarToAgent(agent, brand, model, color, power) {
    let car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };

    agent.car = car;

    shareThatBeauty(agent);

    return agent;
}

function shareThatBeauty(agent) {
    const resultParagraph = document.getElementById("result");
    if (resultParagraph) {
        resultParagraph.textContent = JSON.stringify(agent, null, 2);
    }
}

function addCarToAgentFromInputs() {
    const agentName = document.getElementById("agentName").value;
    const carBrand = document.getElementById("carBrand").value;
    const carModel = document.getElementById("carModel").value;
    const carColor = document.getElementById("carColor").value;
    const carPower = document.getElementById("carPower").value;

    const agent = { name: agentName };

    addCarToAgent(agent, carBrand, carModel, carColor, carPower);
}
