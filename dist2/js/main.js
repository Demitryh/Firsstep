


function addRow() {
    var table = document.createElement("table");
    document.body.appendChild(table);
    var input = document.getElementById("input").files[0];
    

    Papa.parse(input, {
        complete:function(results) {
            data=results.data;


            for (var i=0;i<=data.length;i++) {
                var newrow = table.insertRow(-1);

                for (var j = 0; j <=7 ; j++) {
                    newrow.insertCell(-1).innerHTML = data[i][j];
                }
            }

        }
    });


}

