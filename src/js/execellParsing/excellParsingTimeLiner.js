/**
 * 
 */



/*




1 . when we generate a testcase then numeric parameters , text parameters should be and common simple



A:::numeric_input->8 B:::text_input->text, C:::plain 


2. in ctrAlloption 
	a crtOptionCtr should carry the information like of been numeric , text or common by the followings 
		

*/


var PROJECT_BANK =[];
var PROJECT_BANK_GOOGLE = [];


function transaction( ){
   this.person;
   this.year;
	this.month;
	this.day;
   this.time;
	this.transcation;
	this.affarer;
	this.transcationType;
};



//var drop = document.getElementById('drop');



function handleDrop(e) {
	
	    e.stopPropagation();
	    e.preventDefault();
	    var files = e.dataTransfer.files;
	    var i,f;
	    for (i = 0, f = files[i]; i != files.length; ++i) {
	    	var workbook ;
	        var reader = new FileReader();
	        var name = f.name;
	        reader.onload = function(e) {
	            var data = e.target.result;

	            workbook = XLSX.read(data, {type: 'binary'});
	            process_wb(workbook);
				
	            /* DO SOMETHING WITH workbook HERE */
	          };
	          reader.readAsBinaryString(f);
	        //reader.readAsBinaryString(f);
	       // reader.readAsArrayBuffer(f);

	 }
}



function process_wb(workbook){
	
var sheetIteration = 0 ; ////// to be removed Haris
	var sheet_name_list = workbook.SheetNames;
    var temporary_hack_to_read_first_sheet_only = 0 ; 
	sheet_name_list.forEach(function(y) { /* iterate through sheets */
		


	   var sheet = workbook.Sheets[y];
	   var range = XLSX.utils.decode_range(sheet['!ref']); // get the range
	   
	   var C = 0 ;
	   var R= 0;
	   if ( temporary_hack_to_read_first_sheet_only == 0){
		   haveFunWithNombers(sheet, C, R);
		   temporary_hack_to_read_first_sheet_only= 1;
	   }

	   sheetIteration++;
	
	});
	
	   


}


function handleDragover(e) {

	e.stopPropagation();
	e.preventDefault();
	e.dataTransfer.dropEffect = 'copy';
}

/*
if(drop.addEventListener) {
	
	drop.addEventListener('dragenter', handleDragover, false);
	drop.addEventListener('dragover', handleDragover, false);
	drop.addEventListener('drop', handleDrop, false);
}
*/
var xlf = document.getElementById('xlf');
function handleFile(e) {

	


	
	var files = e.target.files;
	var f = files[0];
	{
		
		  	var workbook ;
	        var reader = new FileReader();
	        var name = f.name;
	           
	        reader.onload = function(e) {

		            var data = e.target.result;
		            
					var arr = fixdata(data);
					workbook = XLSX.read(btoa(arr), {type: 'base64'})
					
		           // workbook = XLSX.read(data, {type: 'binary'});
		            process_wb(workbook);
					
					//var worker = new Worker('generateAllTCWW.js');
					//worker.postMessage();
					
		            /* DO SOMETHING WITH workbook HERE */
		          };
		        //  reader.readAsBinaryString(f);
				
	            /* DO SOMETHING WITH workbook HERE */
	          //reader.readAsBinaryString(f);
	        reader.readAsArrayBuffer(f);

	
	}

}
if(xlf.addEventListener) xlf.addEventListener('change', handleFile, false);


function fixdata(data) {
	var o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
	return o;
}





function  haveFunWithNombers(sheet, C, R){


   this.person;
   this.year;
   this.month;
   this.day;
   this.time;
   this.transcation;
   this.affarer;
   this.transcationType;
    
	  for(var rowIndex = 1; rowLast != 1 ; ++rowIndex) {		    
	
		  var cellref = XLSX.utils.encode_cell({c:C+0, r:rowIndex});
		   	if(sheet[cellref]){
		   			var cell = sheet[cellref];
		   			if(typeof cell.v !== 'undefined' && cell.v  && cell.v.toString().replace(/\s+/g, '') != ""){
		   				team  = cell.v;
		   				if ( rowIndex == 1 ) {
		   					team = team;
		   				}
		   			}else{
				   		
				   		alert(" done parsing ");
				   		rowLast = 1;
				   		break;
				   	}
		   	}else{
		   		
		   		console.log(" done setting rowLast ");
		   		rowLast = 1;
		   		break;
		   	}

	
   			var cellref = XLSX.utils.encode_cell({c:C+1, r:rowIndex});
   			if(sheet[cellref]){
   				product = sheet[cellref].v;
   				console.log(" product " + product);
   			}
   				
   			
   			var cellref = XLSX.utils.encode_cell({c:C+2, r:rowIndex});
   			if(sheet[cellref]){
   				prt_month  = sheet[cellref].v;
   			}
   			
   			
   			var cellref = XLSX.utils.encode_cell({c:C+3, r:rowIndex});
   			if(sheet[cellref]){
   				prt_planned  =sheet[cellref].w;
   				var dateArray = prt_planned.split("/");
   				var years = 2000 + parseInt(dateArray[2]);
   				var date = dateArray[0]+"/"+dateArray[1]+"/"+years;
   				prt_planned = new Date ( date);
   				
   				
   			}
   				
		  
   			var cellref = XLSX.utils.encode_cell({c:C+4, r:rowIndex});
   			if(sheet[cellref]){
   				prt_actual  =sheet[cellref].w;
   				var dateArray = prt_actual.split("/");
   				var years = 2000 + parseInt(dateArray[2]);
   				var date = dateArray[0]+"/"+dateArray[1]+"/"+years;
   				prt_actual = new Date ( date);
   				
   			}
   				
		  
   			var cellref = XLSX.utils.encode_cell({c:C+5, r:rowIndex});
   			if(sheet[cellref]){
   				prx_month  = sheet[cellref].v;
   			}
   				
		
   			var cellref = XLSX.utils.encode_cell({c:C+6, r:rowIndex});
   			if(sheet[cellref]){
   				prx_date = sheet[cellref].w;
   			}
   				
   			
   			var cellref = XLSX.utils.encode_cell({c:C+7, r:rowIndex});
   			if(sheet[cellref]){
   				pra_month = sheet[cellref].v;
   			}
   				
		  
   			var cellref = XLSX.utils.encode_cell({c:C+8, r:rowIndex});
   			if(sheet[cellref]){
   				pra_planned  = sheet[cellref].w;
   				var dateArray = pra_planned.split("/");
   				var years = 2000 + parseInt(dateArray[2]);
   				var date = dateArray[0]+"/"+dateArray[1]+"/"+years;
   				pra_planned = new Date ( date);   			}
   				
		
   			var cellref = XLSX.utils.encode_cell({c:C+9, r:rowIndex});
   			if(sheet[cellref]){
   				pra_actual  = sheet[cellref].w;
   				var dateArray = pra_actual.split("/");
   				var years = 2000 + parseInt(dateArray[2]);
   				var date = dateArray[0]+"/"+dateArray[1]+"/"+years;
   				pra_actual = new Date ( date);
   				
   			}
   				

   			var cellref = XLSX.utils.encode_cell({c:C+10, r:rowIndex});
   			if(sheet[cellref]){
   				ga_month = sheet[cellref].v;
   			}
   				
		  
   			var cellref = XLSX.utils.encode_cell({c:C+11, r:rowIndex});
   			if(sheet[cellref]){
   				ga_planned  = sheet[cellref].w;
   			}
   				
		
   			var cellref = XLSX.utils.encode_cell({c:C+12, r:rowIndex});
   			if(sheet[cellref]){
   				ga_actual = sheet[cellref].w;
   			}
   				
   		 
   			var cellref = XLSX.utils.encode_cell({c:C+13, r:rowIndex});
   			if(sheet[cellref]){
   				status  = sheet[cellref].v;
   			}
   				
		
   			var cellref = XLSX.utils.encode_cell({c:C+14, r:rowIndex});
   			if(sheet[cellref]){
   				responsible = sheet[cellref].v;
   			}
   			
   			// one project for prt 
   			
   		
   			var prtPP = new Project();
   			prtPP.product = product;
   			prtPP.team = team;
   			prtPP.status = status;
   			prtPP.responsible = responsible;
   			prtPP.ga_actual  = 0;
   			prtPP.ga_planned = 0;
   			prtPP.ga_month = 0;
   			prtPP.pra_actual  = 0;
   			prtPP.pra_planned = 0;
   			prtPP.pra_month = 0;
   			prtPP.prt_actual  = prt_actual;
   			prtPP.prt_planned = prt_planned;
   			prtPP.prt_month = prt_month;
   			prtPP.startDate =prt_planned ;
 
   			PROJECT_BANK.push(prtPP);
	  
   			// pra project 
   			
   			var praPP = new Project();
   			praPP.product = product;
   			praPP.team = team;
   			praPP.status = status;
   			praPP.responsible = responsible;
   			praPP.ga_actual  = 0;
   			praPP.ga_planned = 0;
   			praPP.ga_month = 0;
   			praPP.pra_actual  = pra_actual;
   			praPP.pra_planned = pra_planned;
   			praPP.pra_month = pra_month;
   			praPP.prt_actual  = 0;
   			praPP.prt_planned = 0;
   			praPP.prt_month = 0;
   			praPP.startDate =pra_planned ;

   			PROJECT_BANK.push(praPP);
	  
	  }		
	  
	  document.getElementById('vijTimeLine').style.visibility 	= 'visible';
	  document.getElementById('googleWorkLoad').style.visibility= 'visible';
}
	  
