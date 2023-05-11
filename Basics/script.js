let a="harry"
console.log(a)
const item={
    name:"sathwika",
    age:"20",
    friend:"priya"
}
console.log(item['name'])
console.log(item.age)
item['isteacher']="false"
console.log(item)
//let b=prompt("what is your age?")
//b=Number.parseInt(b)
//console.log(typeof(b))

//Functions

const sum=(p,q)=>{
    return p+q
}
let a1=1
let b1=5

console.log(sum(a1,b1))

let marks={
    harry:90,
    ravi:20,
    ram:30,
    sam:60
}
marks.saketh=30;
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i] + "=" + marks[Object.keys(marks)[i]])
}

for(let key in marks){
    console.log(key + "=" + marks[key])
}

let cn=4
let i
while(i!=cn){
    i=prompt("enter correct number")
}
console.log("you have enetered correct number")
//strings

let name="sathwika"
console.log(name[0])

let sentence=`${name} is a friend of mine`
console.log(sentence)

//escape sequence charcater

let fruit='Ban\'ana'
console.log(fruit)
console.log(name.length)
console.log(fruit.length) //property
console.log(name.toUpperCase()) //function
console.log(name.slice(2,4))
console.log(name.replace("sat","sath"))
let name2="ravi"
console.log(name.concat("is a friend of ",name2))
let name3="    meena"
console.log(name3)
console.log(name3.trim())

let friend="Deepika"
friend[3]='R'
console.log(friend) //friend is not changed because string is immutable


//Arrays  are mutable. They can change . Type is object
let arr=[1,2,3,"sathwika"]
console.log(arr.length)
//arr=arr.toString()
console.log(typeof(arr))
arr[0]=12  //can change elements 
console.log(arr)
arr[4]=91 //adding a new value to array 
console.log(arr) 

//Array methods
let c=arr.join("-")
console.log(c,typeof(c))
let num=arr.pop() //returns popped ele 
console.log(num,arr)
arr.push(56)
console.log(arr)
//shift-> removes and returns first element and modifies origin araay
//unshit->adds at starting of array
let r=arr.unshift(99)
console.log(arr)

console.log(arr.sort())  //takes as string and gives aplhabetical wise 1,12,2,23,24...



let number=[1,8,19,20]
number.forEach((element)=>{
    console.log(element*element)
})

let name1="sathwika"
let arr1=Array.from(name1)
console.log(arr1)

for(let i of number){  //for..of used to get values of array
    console.log(i)
}
for(let i in number){  // for ..in used to get keys 
    console.log(i)
    console.log(number[i])
}

//map filter and reduce

let arr2=number.map((value)=>{
    return value+1
})
console.log(arr2)

let arr3=number.filter((value)=>{
    return value<19
})
console.log(arr3)

let arr4=[1,2,3,5,2,1]
let newarr=arr4.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr)

alert("enter a number")
let q=prompt("enter a number")
q=Number.parseInt(q)
alert("You entered number ")
let write=confirm("Do you want to write it to document")
if(write){
document.write(q)
}
else{
    document.write("please request to write it to document")
}

//global scopes
var myglobal=10
function global(){
     var oopsglobal=5
}
function fun2(){
    var output=""
    if(typeof myglobal !="undefined"){
        output+=myglobal
    }
    if(typeof oopsglobal !="undefined"){
        output+=oopsglobal
    }
    console.log(output)
    
}
global()
fun2()

function localscope(){
    var n=10
    console.log(n)
}
localscope()
//console.log(n)  lolcal var takes precedence over global var
//a===b compares type . a==b does type conversion converts string to integer
function compare(a,b){
    if(a===b){
        console.log("Equal")
    }
    else{
        console.log("Not Equal")
    }
}
compare(10,"10")


//change card title to red

let ctitle=document.getElementsByClassName("card-title")[0]
ctitle.style.color="red"

let ctitles=document.querySelectorAll(".card-title")
ctitles[0].style.color="red"
ctitles[1].style.color="blue"
ctitles[2].style.color="green"

/*matches,closest,contains method
ele.matches-> check if ele matches with given css selector
ele.closest-> to look for nearest ancestor that matches given css selector
eleA.contains(eleB)-> return true if eleB is inside eleA
*/

let id=document.getElementById("id1")
console.log(id)
console.log(id.matches(".box"))

console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))

Array.from(document.getElementsByClassName("card-text")).forEach((element)=>{
    element.style.color="blue"
})

let a2=first.getAttribute("class")
console.log(a2)
console.log(first.hasAttribute("class"))
//first.setAttribute("hidden","true")