var table = document.createElement('table');
table.setAttribute('id','table');
document.body.appendChild(table);


document.getElementById("table").style.display = "none";
window.onload =function () {


    document.getElementById("butt").style.display = "none";
    document.getElementById("inputInfo").style.display = "none";
}
var insertRow= table.insertRow(-1);
insertRow.insertCell(-1).innerHTML=('ФИО');
insertRow.insertCell(-1).innerHTML=('Статус');
insertRow.insertCell(-1).innerHTML=('Действия');

var actionButton = '<button onclick="fire()"> уволить </button>';
var dataBase ={
    "name":'',
    "status":true
};
function input() {
    document.getElementById("butt").style.display = "block";
    document.getElementById("inputInfo").style.display = "block";
}


function tableCreator() {
    document.getElementById("table").style.display = "table";
    insertRow= table.insertRow(-1);
    var info = document.getElementById('inputInfo').value;
    dataBase['name'] = info;
    console.log(dataBase);


    insertRow.insertCell(-1).innerHTML=(dataBase['name']);
    if (dataBase['status'] = true) {
        insertRow.insertCell(-1).innerHTML = ('Работает');
        insertRow.insertCell(-1).innerHTML=(actionButton);
    }
    else
    {
        insertRow.insertCell(-1).innerHTML = ('уволен');

    }
    document.getElementById("butt").style.display = "none";
    document.getElementById("inputInfo").style.display = "none";

}

function fire() {
    dataBase['status']= false;
    
}
