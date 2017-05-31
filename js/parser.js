var request = new XMLHttpRequest();
var output = "";
var data_json;

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function(){

	if((request.status==200) && (request.readyState==4)){
		data_json = JSON.parse(request.response);
		let count = 0;
		for(let i in data_json){
			let data = data_json[i];
			for(let j in data){
				let location = data[j][10];
				if(location =="Golden Gate Bridge"){
					count++;
					document.getElementById("result").innerHTML += "<h3>" + count + ". " + data[j][8] +
					 " (" + data[j][9] + ")</h3><p><i>" + data[j][12] + "</i></p><br>";					
				}
			}
		}
	}
}

request.send();
