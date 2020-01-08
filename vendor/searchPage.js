//showDates = function() {
//just a test;
//console.log(document.getElementById('calendar').value);
//calendardateMash();	
//}
calendarDateMash = function() {
	str = document.getElementById('calendar').value;
	year1 = str.substring(6, 10);
	month1 = str.substring(0, 2);
	day1 = str.substring(3, 5);
	//console.log(month1 + ' ' + day1 + ' ' + year1);
	year2 = str.substring(19, 23);
	month2 = str.substring(13, 15);
	day2 = str.substring(16, 18);
	//console.log(month2 + ' ' + day2 + ' ' + year2);
	date1 = year1 + month1 + day1;
	date1 = Number(date1);
	date2 = year2 + month2 + day2;
	date2 = Number(date2);
	//console.log(dateMash()[0] + ' and ' + dateMash()[1]);
	return [date1, date2];
}

ifSiteExists = function(x) {
	if (document.getElementById(x)) {
		dateText = document.getElementById(x).textContent;
		return dateText;
	} else {
		date1 = 'DNE';
		return dateText;
	}
}

sitesDateMash = function (x) {
	newDate = x.substring(6, 10) + x.substring(0, 2) + x.substring(3, 5);
	return newDate;
}
searchIt = function() {	
	reset();
	var searchDates = calendarDateMash();
	search1 = searchDates[0];
	search2 = searchDates[1];
	for ( var i=1; i < 9; i++) {
		theNumber = i.toString();
		date1id = 'site' + theNumber + 'date' + '1';
		date2id = 'site' + theNumber + 'date' + '2';
		console.log('date1id is ' + date1id + ' and date2id is ' + date2id);
		date1 = ifSiteExists(date1id);
		date2 = ifSiteExists(date2id);
		console.log('step 1: date1 is ' + date1 + ' and date2 is ' + date2);
		if (date1 == "DNE" || date2 =="DNE") {
			console.log('date1 or date2 DNE!!!');
		} else {
			date1New = sitesDateMash(date1);
			date2New = sitesDateMash(date2);
			console.log('date1New and date2New are ' + date1New + ' ' + date2New );
			console.log('step 2: search1 ' + search1 + ' >= ' + date1New + ' && ' + date2New + ' >= ' + search2 + ' : site ' + theNumber + '...');
			if ( search1 >= date1New && date2New >= search2 ) {
				console.log('step 2: search1 ' + search1 + ' >= ' + date1New + ' && ' + date2New + ' >= ' + search2 + ' : site ' + theNumber + ' matched');
				linkDate1 = CDM()[0];
				linkDate2 = CDM()[1];
				datesLinkGen('link' + theNumber, linkDate1, linkDate2);

			} else {
				nowId = 'site' + theNumber;
				console.log('nowId is ' + nowId);
				console.log('step2: no match, nowId = ' + nowId);
				document.getElementById(nowId).style.display = 'none';
			}
		}	
	}	

}

reset = function () {
	//	var total = document.querySelectorAll(.get);
	//	for (var x = 0; x < total.length; x++);
	//		total[x].style.display = "block";
	//	//document.querySelectorAll('.get').style.display = "block";
	//	Array.from(document.querySelectorAll(".get"));
	//	    .forEach(function(val) {
	//				        val.style.display = "block";
	//			});
	//	const elms = document.querySelectorAll(".get");
	//		[...elms].forEach((elm) => {
	//		console.log(elm);
	//			elm.style.block = "block";
	//	});
	//}
	var total = document.querySelectorAll(".get");
	console.log(total);
	for (var x = 0; x < total.length; x++){
		total[x].style.display = "block";
	}	
}

CDM = function() {
	str = document.getElementById('calendar').value;
	console.log(str);
	year1 = str.substring(6, 10);
	month1 = str.substring(0, 2);
	day1 = str.substring(3, 5);
	//console.log(month1 + ' ' + day1 + ' ' + year1);
	year2 = str.substring(19, 23);
	month2 = str.substring(13, 15);
	day2 = str.substring(16, 18);
	//console.log(month2 + ' ' + day2 + ' ' + year2);
	date1 = year1 + '-' + month1 + '-' + day1;
	date2 = year2 + '-' + month2 + '-' + day2;
	//console.log(dateMash()[0] + ' and ' + dateMash()[1]);
	return [date1, date2];
}
datesLinkGen = function(givenId, searched1, searched2) {
	//get existing element ids
 	document.getElementById(givenId).innerHTML = '<a href="https://docs.google.com/forms/d/e/1FAIpQLSfTO7eJVeZv4_eDyy3RoxpyZknNEolZ8TWiYrRjLMSZhexKTQ/viewform?usp=pp_url&entry.1048484071=' + givenId + '&entry.235344755=' + searched1 + '&entry.2092486078=' + searched2 + '">Register This Site and These Dates</a>';
}
	//
 //	var searched1 = CDM()[0];
 //	var searched2 = CDM()[1];
 //	searchedFormated = searched1;	
 //	document.getElementById('link{{forloop.index}}').innerHTML = '<a href="https://docs.google.com/forms/d/e/1FAIpQLSfTO7eJVeZv4_eDyy3RoxpyZknNEolZ8TWiYrRjLMSZhexKTQ/viewform?usp=pp_url&entry.1048484071=Site+{{forloop.index}}&entry.235344755=' + searched1 + '&entry.2092486078=' + searched2 + '">Register This Site and These Dates</a>';
 //}
