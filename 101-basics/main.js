//console.log("Iam shashi")

// var x = 100
// console.log(typeof x)

// var x = "shashi"
// console.log(typeof x)


// var x = true
// console.log(typeof x)

// function add(x,y){
// return x+y;
// //console.log(x+y)
// }
// var z = add(10,20)
// console.log(z)


// var add = (x,y) =>{
// return x+y
// }
// console.log(add(10,20))

// var double = (x) => x*2
// console.log(double(10))

// var friends = ["foo", "bar","bam"]
// var[f1,f2,f3] = friends;

// friends[1] = "shashi";

//console.log(friends)
//console.log(friends[1])
//console.log(f2)

// var user = {
//     email : "shashi@gmail.com",
//     age : 32
// }
// var {email,age} = user

// age = 38
// console.log(user)

    //  var me = {
    //   firstName: "John",
    //   lastName: "Doe",
    //   address: {
    //     city: "Bengaluru",
    //     street: "201 Main Road, Marathahalli",
    //   },
    //   fruits: ["apple", "oranges", "papaya"],
    // };

    // var {firstName,
    //      lastName,
    //      address :{ city, street },
    //      fruits : [f1,f2,f3] 
    // } = me

    //    console.log(me)

// var users = [
//   { name: "Jenny", age: 28 },
//   { name: "James", age: 29 },
//   { name: "Johny", age: 30 },
// ];

// var [
//     { name: n1, age: a1 }, 
//     { name: n2, age: a2 }, 
//     { name: n3, age: a3 }
// ] = users;

// console.log(n2);


// let demo = (arr) => {

//     if(arr.length>2){
//         let LOAD = "loading"
//         console.log(FLASH)
//     }else{
//       let FLASH = "flashing"
//     }

// }
// demo([1,2,3,4,5])
      
// const u = "shashi"
//       u = "k"
// console.log(u)

//const user = {
    //name : "shashi"
//}
// user.name = "veeresh"
// console.log(user)

// const user = {
//     name : "shashi"
// }
// user = {
//     name : "king"
// }

// const display = (email,age, ...args) =>{
//    //console.log(email)
//    console.log(args[1])
   

//    }


// display("shashi@123",23,true,[1,2,3,4])


// let num = [3,4,5]
// let newnum = [1,2,num,6,7]

// let newnum = [1,2,...num,6,7]


// console.log(newnum)

// let userOne = {
//   email : "test@test.com",
//   age : 32
// }

// let userTwo = {
//   ...userOne,
//   address : "201 Main Road"
// }

// console.log(userTwo);

// let username = "Foo"
// let age =  32

// let str = `hello mr ${username}
// and Iam ${age} young boy`

// console.log(str)


//class

// class Person{

//     constructor(firstname , lastname){
//          this.firstname = firstname;
//          this.lastname = lastname;
//     }
//     getAllDetailes() {
//         return `fullname :${this.firstname} ${this.lastname}`
//     }
// }
// let foo = new Person("shashi","k")
// let baz = new Person("veeresh","k")

// console.log(foo.getAllDetailes())
// console.log(baz.getAllDetailes())


// class Person{

//     constructor(firstname , lastname){
//          this.firstname = firstname;
//          this.lastname = lastname;
//     }
//     getAllDetailes = () =>`fullname :${this.firstname} ${this.lastname}`
// }

// let foo = new Person("shashi","k")
// let baz = new Person("veeresh","k")

// console.log(foo.getAllDetailes())
// console.log(baz.getAllDetailes())


// //DOUBT

// class Person{

//     constructor(firstname , lastname){
//          this.firstname = firstname;
//          this.lastname = lastname;
//     }
//     getAllDetailes = () =>`fullname :${this.firstname} ${this.lastname} `
// }


// class Student extends Person{


//     id = "12";
//     constructor(firstname , lastname){
      
//         super(firstname,lastname)
//        // this.id=id
//     }
//     getAllDetailes = () =>` sid is : ${id} fullname :${this.firstname} ${this.lastname} `

// }

// let foo = new Student("shashi","k")
// let baz = new Student("veeresh","k")

// console.log(foo.getAllDetailes())
//console.log(foo.getid())
//console.log(baz.getAllDetailes())


//----------------------------------------------------------------------


// class Person{
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getDetails = () => `Full Name : ${this.firstName} ${this.lastName}`;
//   eats = () => `${this.firstName} eats when he is hungry`
// }

// class Student extends Person{
//   static studId = "ST000";
//   constructor(firstName, lastName){
//     super(firstName, lastName);
//     // this.studId = studId;
//   }
//   getDetails = () => `Full Name : ${Student.studId} - ${this.firstName} ${this.lastName}`;
//   eats = () => `${this.firstName} eats in class as well`
// }

// let foo = new Student("Foo", "Bar", );
// let baz = new Student("Baz", "Bam");
// console.log(foo.getDetails())
// console.log(baz.getDetails())
// console.log(foo.eats())


//-------------------------------------------------------------------------------------

// const math = require("./math")
// console.log(math.sum(10,20))


// const {mul, sum, div} = require("./math")
// console.log(mul(10,20))












        







