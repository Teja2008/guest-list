var names_of_people_array = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	// use the push function as - names_of_people.push(GuestName);
    names_of_people_array.push(GuestName);
    document.getElementById("display_name").innerHTML= names_of_people_array
	console.log(names_of_people_array);    
    
    var lenght_of_name = names_of_people_array.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people_array.toString();
   }



function show()
{
	var i= names_of_people_array.join("<br>");
	console.log(names_of_people_array);
	document.getElementById("Show1").innerHTML=i.toString();
	
	
}


function sorting()
	{
		names_of_people_array.sort()           
		var i= names_of_people_array.join("<br>");
		console.log(names_of_people_array);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people_array.length; j++)
		{
			if(s==names_of_people_array[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
