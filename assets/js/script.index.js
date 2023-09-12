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