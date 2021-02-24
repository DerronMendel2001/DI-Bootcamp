// let x=3 //creates a variable. This is an integer.
// const y=5 //creates a constant. Can't be reassigned
// x=1 //reassignes a variable

// console.log(x+y) //gives an output in the console

// let a="Hello"; //string. Always in "" or ''
// let b="World";
// let z=" "
// let c=a+z+b;

// console.log(c)

// let longString="This is a long string that \
// needs to wrap around to multiple lines because \
// otherwise my code is unreadable."

// console.log(longString)
// console.log(longString.indexOf("long"))	
// console.log()

// let addressNumber=857;
// let addressStreet=" Russet Drive";
// let country=" United States";

// let blank="";
// // let global_address=addressNumber+z+addressStreet+z+country;
// let global_address=blank.concat(addressNumber, addressStreet, country);
// console.log(global_address);


// let birthYear=2001;
// let futureYear=2050;
// let age=futureYear-birthYear;

// console.log("I will be "+age+" in "+futureYear);


// let info=[addressNumber, addressStreet, country, birthYear];

// console.log(info[3]);


// let pets=["cat", "dog", "rabbit", "cow"];
// console.log(pets[3]);
// pets.splice(2, 1, "horse");
// console.log(pets);
// console.log(pets.length);

// let age=parseInt(prompt("Please input your age."));
// console.log(typeof(age));

let age=parseInt(prompt("How old are you?"));

let today=new Date();
let date=JSON.stringify(today)
let year=date.split("-");
year=year[0].split("\"");
// console.log(year[1]);

let birthYear=year[1]-age;
let futureAge=2050-birthYear;
// console.log(futureAge)
alert("You will be "+futureAge+" in 2050!");

// console.log(today)
// console.log(date)