let agentInfo = {
    "age": 57,
    "codeName": "007",
    "firstName": "James",
    "lastName": "Bond",
}

window.onload = function displayAgentInfo(agent){
    let tag = document.createElement("p");
    tag.innerText = "My name is Bond " + agent.firstName + " ! I'm the agent " + agent.codeName + " and I'm " + agent.age + " years old.";
    var element = document.getElementById("container");
    element.appendChild(tag);
}