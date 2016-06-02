


function addRow() {
    var table = document.createElement("table");
    document.body.appendChild(table);
    var input = document.getElementById("input").files[0];

    Papa.parse(input, {
        complete:function(results) {
            var data = results.data;
            console.log(results);

            for (var i=0;i<=data.length;i++) {
                var newrow = table.insertRow(-1);

                for (var j = 0; j !=data[1].length; j++) {
                    newrow.insertCell(-1).innerHTML = data[i][j];
                }
            }

        }
    });


}

