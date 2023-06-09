class Person{
	rollNumber
	name
	age
	bloodgroup
	nativePlace
	constructor (xl){
		this.name=xl.name;
		this.rollNumber=xl.rollNumber;
		this.age=xl.age;
		this.bloodgroup=xl.bloodgroup;
		this.nativePlace=xl.nativePlace;
	}
	getName(){
		return this.name;
	}
}


var inputs=document.querySelectorAll("input");
var sub=document.querySelector("button");
var people=[];
sub.addEventListener("click",function(e){
	e.preventDefault();
	let details={
	rollNumber:inputs[0].value,
	name:inputs[1].value,
	age:inputs[2].value,
	bloodgroup:inputs[3].value,
	nativePlace:inputs[4].value
}
people.push(new Person(details))
})


console.log(people);
