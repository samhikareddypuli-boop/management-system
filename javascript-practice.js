// console.log(name)
// let name="Sam"
// console.log(name)
// name="Puli"
// console.log(name)

// function greet(){
//     var a ="Welcome"
//     console.log(a)
// }
// console.log(a)

// if(true){
//     var c=100
//     console.log(c)
// }
// console.log(c)

// let a=10
// a+=10
// console.log(a)
// console.log(a++)
// console.log(a)

// const a = 10
// console.log(typeof a)
// const b = "10"
// console.log(typeof b)
// console.log(a==b)

// const c = 70
// const checking = c > 50 ? "Yes" : "No"
// console.log(checking)

// const age = 12
// if(age >= 18){
//     console.log("You are eligible to vote") 
// }
// else{
//     console.log("You are not eligible to vote")
// }

//Greatest of three numbers
// const a = 10
// const b = 20
// const c = 15
// if(a > b && a > c){
//     console.log("a is the greatest")
// }else if(b > a && b > c){
//     console.log("b is the greatest")
// }else{
//     console.log("c is the greatest")
// }

//Check for driving license eligibility
//  const age = 16
//  const license = true
//  if(age >= 16){   
//         if(license){
//             console.log("You are eligible to drive")
//         }
//     }
// else{                      
//         console.log("You are not eligible to drive")
// }

//Switch statement example
// const day = 3
// switch(day){
//     case 1: console.log("Monday")       
//             break
//     case 2: console.log("Tuesday")
//             break
//     case 3: console.log("Wednesday")
//             break
//     case 4: console.log("Thursday")
//             break
//     case 5: console.log("Friday")
//             break   
//     case 6: console.log("Saturday")
//             break
//     case 7: console.log("Sunday")
//             break
//     default: console.log("Invalid day")
// }

//for loop example
// for(let i=0; i<5; i++){
//     console.log(i)
// }

//while loop example
// let i=0
// while(i<10){
//     console.log(i)
//     i++
// }

//do while loop example
// let i=0
// do{
//     console.log(i)
//     i++
// }while(i<5)

//for..of loop example
// let colors = ["Red", "Green", "Blue"]
// for(let color of colors){
//     console.log(color)
// }

//for..in loop example
// const arr = ["john", "sam", "manasa", "manisha"]
// for(let index in arr){
//     console.log(index)
// }

// const object = {
//     name: "Samsung",
//     description: "Good camera",
//     price: 40000
// }
// for(let mobile in object){
//     console.log(mobile)
// }
// for(let mobile in object){
//     console.log(object[mobile])
// }

// const arr2 = [{
//     name: "Samsung",
//     description: "Stylish",
//     price: 40000
//     },{
//     name: "Vivo",
//     description: "Good camera",
//     price: 30000
//     },{
//     name: "Nokia",
//     description: "Indestructible",
//     price: 20000
// }]
// for(let mobile of arr2){
//     for(let details in mobile){
//         console.log(mobile[details])
//     }
// }


// const arr2 = [{
//     name: "Samsung",
//     description: "Stylish",
//     price: 40000
//     },{
//     name: "Vivo",
//     description: "Good camera",
//     price: 30000
//     },{
//     name: "Nokia",
//     description: "Indestructible",
//     price: 20000
// }]
// for(let mobile of arr2){
//     console.log(mobile)   
// }

//Functions declaration example
// mern()
// function mern(){
//     console.log("Welcome to mern stack classes")
// }
// mern()

//Function expression example
// const frontend = function() {
//     console.log("You are learning frontend")
//     return "Frontend Completed"
// }
// const a = frontend()
// console.log(a)

// const backend = function() {
//     console.log("Let's start with backend")
//     return "Backend Completed"
// }
// const b = backend()
// console.log(b)

//Arrow function
// const backend = () => "Backend Completed"
// const b = backend()
// console.log(b)

//Arrow funstion example
// const fullstack = () =>{
//     console.log("Learning full stack")
//     return "Fullstack Completed"
// }
// const backend = () => "Backend Completed"
// const b = backend()
// console.log(b)

//Callback function example
//A function is acting like a parameter to the other function
// const higherorderfunction = (a) => {
//     console.log("You are in Higher Order Function")
//     a()
// }
// const callbackfunction = () => {
//     console.log("I'm in Callback Function")
// }
// higherorderfunction(callbackfunction)

// const x = (a) => {
//     console.log("You are in x")
//     a()
// }
// const y = () => {
//     console.log("I'm in y")
// }
// x(y)

//map is a function that is applied to an array
//The map function allows a parameter but the parameter must be a function
// const arr = [20, 15, 30, 56]
// const arr2 = arr.map(function(num) {
//     return num*2
// })
// console.log(arr2)

//Same example in a different way using arrow function
// const arr = [20, 15, 30, 56]
// const arr2 = arr.map((num)=>num*2)
// console.log(arr2)

//Another way
// const arr = [20, 15, 30, 56]
// const arr2 = arr.map((num)=>console.log(num))
// console.log(arr2)


//ARRAY METHODS
//Add/Remeove methods
//Array push() method
// const arr = [10, 5, 500, 600, 45, [5, 3, 25]]
// arr.push(6)
// console.log(arr)

// const arr = [10, 5, 500, 600, 45, [5, 3, 25]]
// console.log(arr.push(6))
// console.log(arr)


//Array pop() method
// const arr = [10, 5, 500, 600, 45, [5, 3, 25]]
// arr.pop()
// console.log(arr)

// const arr = [10, 5, 500, 600, 45, [5, 3, 25]]
// console.log(arr.pop())
// console.log(arr)


//Array unshift() method
// const arr = [10, 5, 500, 600, 45, [5, 3, 25]]
// arr.unshift("Sam")
// console.log(arr)

// const arr = [10, 5, 500, 600, 45, [5, 3, 25]]
// console.log(arr.unshift("Sam"))
// console.log(arr)


//Array shift() method
// const arr = [10, 5, 500, 600, 45, [5, 3, 25]]
// arr.shift("Sam")
// console.log(arr)

// const arr = [10, 5, 500, 600, 45, [5, 3, 25]]
// console.log(arr.shift("Sam"))
// console.log(arr)


//Array splice() method
// const arr2 = [10, 5, 500, 600, 45, 12, 67]
// arr2.splice(2,1)
// console.log(arr2)

// const arr2 = [10, 5, 600, 45, 12, 67]
// arr2.splice(0,2)
// console.log(arr2)

// const arr2 = [10, 5, 600, 45, 12, 67]
// arr2.splice(2)
// console.log(arr2)


//Searching methods
//Array includes() method 
// const arr3 = ["arun", "vamshi", "anusha"]
// console.log(arr3.includes("anusha"))


//Array indexOf() method
// const arr3 = ["arun", "vamshi"]
// console.log(arr3.indexOf("anusha"))


//Array find() method
// const arr = [
//     {
//         rollno: "24AG1A6655",
//         name: "Sam",
//         department: "CSM"
//     },
//      {
//         rollno: "24AG1A6630",
//         name: "Manasa",
//         department: "CSM"
//      },
//      {
//         rollno: "24AG1A67D0",
//         name: "Manisha",
//         department: "CSD"
//      }
// ]
// const student = arr.find(
//     s => s.name === "Sam"
// )
// console.log(student)


//Array findIndex() method









//Iteration methods
//Array forEach() method
// const arr = [
//     {
//         rollno: "24AG1A6655",
//         name: "Sam",
//         department: "CSM"
//     },
//      {
//         rollno: "24AG1A6630",
//         name: "Manasa",
//         department: "CSM"
//      },
//      {
//         rollno: "24AG1A67D0",
//         name: "Manisha",
//         department: "CSD"
//      }
// ]
// arr.forEach(student => {
//     console.log(student)
// })


//Array map() method
// const arr = [
//     {
//         rollno: "24AG1A6655",
//         name: "Sam",
//         department: "CSM"
//     },
//      {
//         rollno: "24AG1A6630",
//         name: "Manasa",
//         department: "CSM"
//      },
//      {
//         rollno: "24AG1A67D0",
//         name: "Manisha",
//         department: "CSD"
//      }
// ]
// const modify = arr.map(student => student.name)
// console.log(modify)

// const arrx = [2,50,18]
// const modarrx = arrx.map(element => element + 5)
// console.log(modarrx)


//Array filter() method
// const arr = [
//     {
//         rollno: "24AG1A6655",
//         name: "Sam",
//         department: "CSM"
//     },
//      {
//         rollno: "24AG1A6630",
//         name: "Manasa",
//         department: "CSM"
//      },
//      {
//         rollno: "24AG1A67D0",
//         name: "Manisha",
//         department: "CSD"
//      },
//           {
//         rollno: "24AG1A6659",
//         name: "Chaturya",
//         department: "CSM"
//      },
//           {
//         rollno: "24AG1A67D1",
//         name: "John",
//         department: "CSD"
//      }
// ]
// const filter_arr = arr.filter(student => student.department === "CSM")
// console.log(filter_arr)
// console.log(filter_arr.length)


//Transformation methods
//Array reduce() method
// const marks = [10, 20, 30, 40, 50, 60]
// const total = marks.reduce(
//     (sum, current) => sum + current, 0
// )
// console.log(total)


//Array sort() method
// const arr = [37, 48, 79, 10, 204, 84, 91, 55, 67]
// console.log(arr)
// console.log(arr.sort())
// arr.sort(                       //Ascending order
//     (a,b) => a-b
// )
// console.log(arr)
// arr.sort(                       //Descending order
//     (a,b) => b-a
// )
// console.log(arr)


//Question 1
// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
//   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
//   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
//   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

//   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
//   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
//   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
//   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
//   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

//   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
//   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
//   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
//   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
//   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

//   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
//   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
//   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
//   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
//   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

//   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
//   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
//   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
//   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
//   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

//   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
//   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
//   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
//   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
//   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// ];
// const filter_arr = students.filter(student => student.marks >= 35)
// console.log(filter_arr)
// console.log(filter_arr.length)
// const filter_arr2 = students.filter(student => student.marks >= 35 && student.department === "CSE")
// console.log(filter_arr2)
// console.log(filter_arr2.length)
// const filter_arr3 = students.filter(student => student.marks >= 35 && student.department === "CSD")
// console.log(filter_arr3)
// console.log(filter_arr3.length)
// const filter_arr4 = students.filter(student => student.marks >= 35 && student.department === "CSM")
// console.log(filter_arr4)
// console.log(filter_arr4.length)
// const filter_arr5 = students.filter(student => student.marks >= 35 && student.department === "IT")
// console.log(filter_arr5)
// console.log(filter_arr5.length)
// const filter_arr6 = students.filter(student => student.marks >= 35 && student.department === "CSO")
// console.log(filter_arr6)
// console.log(filter_arr6.length)


//Question 2
// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ];
// const placedStudents = students.filter(student => student.placed === true)
// console.log(placedStudents)
// console.log(placedStudents.length)

// const placedStudents1 = students.filter(student => student.placed === true)
// const placedStudentsNames = placedStudents1.map(student => ({
//     name: student.name,
//     package : student.package
// }))
// console.log(placedStudentsNames)

// const placedStudents2 = students.filter(student => student.placed === true)
// const totalPackage = placedStudents2.reduce(
//   (sum, student) => sum + student.package,
//   0
// )
// const averagePackage = totalPackage / placedStudents2.length;
// console.log(averagePackage)

// const placedStudents3 = students.filter(student => student.placed === true)
// const highestPackage = placedStudents3.reduce((max, student) => {
//   return student.package > max.package ? student : max
// })
// console.log(highestPackage.package)

// const filter_arr = students.filter(student => student.placed === true && student.package > 10)
// const placedStudentsNames1 = filter_arr.map(student => ({
//     name: student.name
// }))
// console.log(filter_arr)
// console.log(filter_arr.length)
// console.log(placedStudentsNames1)


//DOM(Document Object Model)
//Creating Elements
//We must create an element which is paragraph element with the inner text as 'like'

let isColor = false
 let p=document.createElement("p")
p.innerText = "Like"
const conatiner=document.getElementById("container")    
const paragraph =document.getElementById("paragraph")
const heart =document.getElementById("heart")
heart.addEventListener("onclick")
function heartColorChange(){
    const heart = document.getElementById("heart")
    if(isColor){
        heart.src = "data:image/png;base64,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"
        isColor = false
        p.innerText="dislike"
        conatiner.appendChild(p) 
        paragraph.remove()
    }
    else{
        heart.src = "data:image/png;base64,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"
        isColor = true
        p.innerText="like"
    }
}


