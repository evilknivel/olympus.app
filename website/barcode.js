var resultDiv;


document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
	var db = window.sqlitePlugin.openDatabase({name: "leistungskatalog.sqlite"});


      db.transaction(function(tx) {
        tx.executeSql('SELECT Subcategories FROM katalog LIMIT 20');
      

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
