var resultDiv;


document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
	
	//window.plugins.sqlDB.copy("leistungskatalog.sqlite",copysuccess,copyerror);
	
}
<!--
function copysuccess() {
	
	var db = window.sqlitePlugin.openDatabase({name: "leistungskatalog.sqlite", createFromLocation: 1});


      db.transaction(function(tx) {
        tx.executeSql('SELECT Subcategories FROM katalog LIMIT 20');
      

    }, function(e) {
      alert("ERROR: " + e.message);
    });
  
}
-->
function copyerror(e)
{
        //db already exists or problem in copying the db file. Check the Log.
        alert("Error Code = " + e.code);
        alert("Error Code = " + e.message);
        alert("Error Code = " + e);
        //e.code = 516 => if db exists
}

function startScan() {


	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var s = "<h3>Result: " + result.text + "</h3>";
			resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);


}
