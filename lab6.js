var button=document.getElementById("button")
var body=document.getElementById("result")


button.addEventListener("click",function(e){
	var userNumber=document.getElementById('Number').value;
	var userUnit=document.getElementById('Unit').value;
	body.appendChild(convertTemp(userNumber,userUnit));
})


function FtoC(number){
	return((number-32.0) * (5/9));

}


function CtoF(number){
	return((number*5/9)+32);
}


function convertTemp(number,unit){
	if(unit==="F"){
		return FtoC(number);
	}
	else{
		return CtoF(number);
	}
}
/*console.log (convertTemp(0,"C"));*/

function randomNumber(min,max){
	return Math.random()*(max-min)+min;
}
console.log(randomNumber)


