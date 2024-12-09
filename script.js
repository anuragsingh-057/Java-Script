// function sayHello() {alert("Hello World")}
// <html>
//     <head>
//         <title>Untitled</title>
//         {/* <script type="text/javascript">
//             function sayHello() {alert("Hello World")}
//         </script> */}
//     </head>

//     <body>
//         <input type="button" onclick="sayHello()" value="Say Hello"></input>
//         <script lang="javascript">
//             document.write("<h1> This is my first JavaScript Page </h1>");
//         </script>
//     </body>
// </html>



// var pi=3.14;
// var person="are you GOOD";
// var answer='Yes I am!';
// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");



// function myFunction()
// {
//     var carname="<h1>Hello</h1>";
//     document.getElementById("demo").innerHTML=carname;
// }



// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num="Anurag Singh";
// console.log(num);
// console.log(typeof(num));
// num=null;
// console.log(num);
// console.log(typeof(num));
// num=undefined;
// console.log(num);
// console.log(typeof(num));



// //String
// var companyName="Google";
// //number
// var pi=3.14;
// var year=2013;
// //boolean
// var flag=true;
// var FALSE=false;
// //function
// var sayHello=function() {
//     alert("Hello World");
// }
// //array
// var numberArray=[1,2,3];
// var animals=new Array("cat","dog","mouse","lion");
// //object
// var person={
//     name:'Barak Hussein Obama II',
//     age: '51',
//     title: '44th President of the United States',
// }
// document.write(companyName + "<br>");
// document.write(pi + "<br>");
// document.write(year + "<br>");
// document.write(flag + "<br>");
// document.write(FALSE + "<br>");
// //document.write( + "<br>");
// document.write(numberArray + "<br>");
// document.write(animals + "<br>");
// document.write(person.name + "<br>");
// document.write(person.age + "<br>");
// document.write(person.title + "<br>");



//Create an object:
var person={
    firstName:"<h1>John",
    lastName:"Doe <h1>",
    id:5566,

    //access multiple properties of objects:
    getinfo: function() {
        return this.firstName + " " + this.lastName;
    }
};
//Display data from the object:
document.getElementById("demo").innerHTML=person.getinfo();