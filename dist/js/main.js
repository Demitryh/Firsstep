function addRow() {

    var table = document.getElementById("example");
    var test = document.getElementById('input').files[0];
    Papa.parse(test, {
        complete:function(results) {
            data=results.data;
            for (var i=0;i<=data.length;i++) {
                var newrow = table.insertRow(-1);

                for (var j = 0; j <= 7; j++) {
                    newrow.insertCell(-1).innerHTML = data[i][j];
                }
            }

        }
    });

}
