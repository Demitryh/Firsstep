window.onload =function () {
    document.getElementById("butt").style.display = "none";
    document.getElementById("inputInfo").style.display = "none";
};
var table = document.createElement('table');
table.setAttribute('id','table');
document.body.appendChild(table);
var oTable = document.getElementById('table');
var i=0;
var insertRow = table.insertRow(-1);
var dataBase =[];
var dataNum=[];
var actionButton = '<button onclick="fire()"> Уволить </button>';
// var butt = '<button onclick="fire()"> уволить </button>';
var tabCreator={
    createTab:function () {

        insertRow.insertCell(-1).innerHTML = ('Работает');
        insertRow.insertCell(-1).innerHTML = (actionButton);
        console.log(i+'i');
    }
};
tabRefresher={
    refreshTab:function () {
        check = oTable.rows[i].cells[2];
        k=check.getAttribute('data-num');
        if (k==true) {
            for (var j = 0; j < dataBase.length; j++) {
                console.log(dataBase.length + 'lgth');
                console.log(j + 'j');
                console.log(i + 'i');
                console.log(dataBase);
                console.log(dataNum);
                if (dataNum[ck] = j) {
                    console.log('YEP_' + ck + "_" + dataNum[j])
                }

                if (dataBase[j]['status'] == false) {
                    var cellsCount = oTable.rows[[dataNum[j]]].cells[1];
                    cellsCount = cellsCount.innerHTML = ('fired');
                    console.log(i + 'i');
                    console.log(j + 'j');
                    console.log(dataNum[j] + 'Num');
                    console.log(dataBase);
                }

            }
        }
    }
};
oTable.style.display = "none";
insertRow.insertCell(-1).innerHTML=('ФИО');
insertRow.insertCell(-1).innerHTML=('Статус');
insertRow.insertCell(-1).innerHTML=('Действия');
// var actionButton = document.createElement('input');

function input() {
    document.getElementById("butt").style.display = "block";
    document.getElementById("inputInfo").style.display = "block";
    document.getElementById('inputInfo').value='';
}


function adder() {
    oTable.style.display = "table";
    document.getElementById("butt").style.display = "none";
    document.getElementById("inputInfo").style.display = "none";
    var info = document.getElementById('inputInfo').value;
    insertRow = table.insertRow(-1);

    function Employee(name, status) {
        this.name = info;
        this.status = true;
    }
    var newEmp = new Employee(info, true);
    dataBase.push(newEmp);
    console.log(dataBase);
    insertRow.insertCell(-1).innerHTML = (dataBase[i]['name']);
    tabCreator.createTab();
    // check = oTable.rows[i].cells[2];
    i++;
    // button = document.getElementById('fire');


    // k=check.getAttribute('data-num');
    // dataNum.push(k);
    // console.log(dataNum);
    console.log(i+'i');

}
function fire(){
    check.setAttribute('data-num',true);

};



