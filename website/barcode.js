var resultDiv;


document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
	var db = window.sqlitePlugin.openDatabase({name: "leistungskatalog.sqlite"});


      db.transaction(function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS test_table');
      

    }, function(e) {
      console.log("ERROR: " + e.message);
    });
  
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
