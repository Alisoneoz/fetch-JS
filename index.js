const apiEndpoint = "https://jsonplaceholder.typicode.com/users";
const display= document.querySelector("#display-data");
const input = document.querySelector("#input");

const getData = async () => {
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    return data 
}


const displayUsers = async () => {
    
    let query = input.value;
    console.log("Query::", query);

    const payload = await getData();

    console.log(payload)
    
    let dataDisplay = payload.filter((eventData)=>{
        if (query === "") { 
        return eventData
        } else if (eventData.name.toLowerCase().includes(query.toLowerCase())) {
            return eventData
        }
    }).map((object)=>{
        const {name, username} = object;
        return `<div class= container>
        <p>Name: ${name}</p>
        <p>Userrname: ${username}</p>
        </div>`
    }).join("");

    display.innerHTML = dataDisplay
}

displayUsers();