// add solution here
 function theBeatlesPlay(musicians, instruments) {
	var string = [];
	

 	for (e=0; e<musicians.length; e++) {
 	string[e] = "";
 		}

	for (i=0; i<musicians.length; i++) {
 		string[i] += musicians[i] + " plays " + instruments[i] ;
 	}
	
 return string;
 }