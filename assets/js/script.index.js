class Client{
    constructor(name, table, description){
        this.name = name;
        this.table = table;
        this.description = description;
    }
}
class ClientList{
    constructor(){
        this.clientList = [];
    }
    addClient(client){
        this.clientList.push(client);
    }
}
const clientList = new ClientList();
function createClient(){
    const name = document.getElementById('name').value;
    const table = document.getElementById('table').value;
    const description = document.getElementById('description').value;
    const client = new Client(name, table, description);
    clientList.addClient(client);
}
function anyInputs(){
    const name = document.getElementById('name').value;
    const table = document.getElementById('table').value;
    const description = document.getElementById('description').value;
    if(name === '' || table === '' || description === ''){
        return true;
    }
}