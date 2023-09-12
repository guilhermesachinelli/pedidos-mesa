class Client {
    constructor(name, table, description) {
        this.id = this.randomId();
        this.name = name;
        this.table = table;
        this.description = description;
    }
    randomId() {
        return Math.floor(Math.random() * 1000);
    }
}
class ClientList {
    constructor() {
        this.clientList = [];
    }
    addClient(client) {
        if (anyInputs()) {
            envieMsg('Preencha todos os campos', 'error');
        } else {
            this.clientList.push(client);
            showClients();
            clearFields();
            envieMsg('Cliente adicionado com sucesso', 'success');
        }
    }
    list() {
        return this.clientList;
    }
    attClient(id, name, table, description) {
        const client = this.getClient(id);
        client.name = name;
        client.table = table;
        client.description = description;
        return client;
    }
    getClient(id) {
        return this.clientList.find(client => client.id == id);
    }
    deleteClient(id) {
        return (this.clientList = this.clientList.filter((client) => client.id != id));
    }
    countClients() {
        return this.clientList.length;
    }
}
const clientList = new ClientList();
function createClient() {
    const name = document.getElementById('client').value;
    const table = document.getElementById('table').value;
    const description = document.getElementById('description').value;
    const client = new Client(name, table, description);
    clientList.addClient(client);
}
function showClients() {
    const content = document.getElementById('client-content');
    content.innerHTML = '';
    clientList.clientList.forEach((client) => {
        const clientDiv = `
        <div class="client-card">
        <p>ID: ${client.id}</p>
        <p>Nome: ${client.name}</p>
        <p>Mesa: ${client.table}</p>
        <p>Descrição: ${client.description}</p>
        <button onclick="editClient(${client.id})">Editar</button>
        <button onclick="deleteClient(${client.id})">Deletar</button>
        </div>
        `
        content.innerHTML += clientDiv;
        const conunt = clientList.countClients()
        document.getElementById("count").innerHTML = `Total: ${conunt   }`;
    });
}
function anyInputs() {
    const name = document.getElementById('client').value;
    const table = document.getElementById('table').value;
    const description = document.getElementById('description').value;
    if (name === '' || table === '' || description === '') {
        return true;
    } else {
        return false;
    }
}
function clearFields() {
    document.getElementById('client').value = '';
    document.getElementById('table').value = '';
    document.getElementById('description').value = '';
}
function envieMsg(msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";
    let msgParaTela = `
    <p class="${tipoMsg}">${msg}</p> `
    msgDiv.innerHTML += msgParaTela;
    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}
function deleteClient(id){
    clientList.deleteClient(id);
    showClients();  
}
let aux = null;
function editClient(id){
    const client = clientList.getClient(id);

    console.log(client);
    document.getElementById('client').value = client.name;
    document.getElementById('table').value = client.table;
    document.getElementById('description').value = client.description;
    document.getElementById('register').classList.add('hidden');
    document.getElementById('edit').classList.remove('hidden');
    aux = id;
}
function  attClient(){
    const name = document.getElementById('client').value;
    const table = document.getElementById('table').value;
    const description = document.getElementById('description').value;
    clientList. attClient(aux, name, table, description);
    clientList.list();
    document.getElementById('register').classList.remove('hidden');
    document.getElementById('edit').classList.add('hidden');
    clearFields();
    showClients();
    aux = null;
}