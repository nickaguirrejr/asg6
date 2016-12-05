/**
 * 
 */

function myFunction() {
	var content;
	var url = new XMLHttpRequest();
	url.open("GET", "/app/path/solum", false);
	url.send();
	content = url.response;
	document.getElementById("tablespace").border = 1;
	var table = "<table width='50%' style='border-style : solid; border-width : 3px;'>" +
			"<tr>" +
			"<td bgcolor='#DDDDDD' style='border-style : solid; border-width : 3px;'>Years</td>" +
			"<td bgcolor='#DDDDDD' style='border-style : solid; border-width : 3px;'>Meetings</td>" +
			"</tr>";
	content = content.split("~");
	for (var i = 0; i < content.length - 1; i+=2){
		var year = content[i].substring(0, 4);
		var num = content[i+1];
		table += "<tr>" +
		"<td style='border-style : solid; border-width : 2px;'>" + year + "</td>" +
		"<td style='border-style : solid; border-width : 2px;'>" + num + "</td>" +
		"</tr>";
	}
	table += "</table>";
	document.getElementById("tablespace").innerHTML = table;
	
}