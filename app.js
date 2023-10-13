// refrance type and value type

// non primitive data types jo hoty hain wo refrance type hoty hain or jo value type hoty hain wo primitive dtata types hoty hain
// means that value type jo hoty hain wo value copy kerty hain
// reftance type jo hoty hain wo memory loction copy kr lety hain or parnet ko b chnage kr dety hain

// let x = "hasb";
// let y = x;
// y = "anil";
// console.log(x);
// console.log(y);
// when we copy a vairable then it copy its  value not a memory  loction
// wehn we copy  a obj then copy its memory loction
// we avoid  this we take a few steps these steps s that we make a shollow copy and deep copy
// obj copy hony k bad parent obj main koi chnage nhi ana chiya is ko solve krny k loya hum differnt ways use krty hain jis main sy 1 shollow copy ha or deep copy ha

// expalme here 1 copying values here

// let obj1 = {
//   user: "hasb",
//   pwd: 123,
// };
// let obj2 = obj1; // yahan pay wo os ki memory loction copy kr k original ko b chnage kr raha ha
// obj2.pwd = 345;
// console.log(obj1);

// let obj3 = {
//   rollNum: 786666,
//   sName: "GOVT School",
// };
// let obj4 = Object.assign({}, obj3); //  ye phala trika ha os ko destructure kr do then shollow copy bana dy ga wo or parent ko copy nhi kery ga
// obj4.sName = "Private School";
// console.log(obj3);
// console.log(obj4);

// const obj5 = {
//   location: "lahore",
//   adress: "fateh ghar",
//   pNumber: {
//     num1: 2333344463,
//     num2: 2134324235,
//   },
// };

// let obj6 = Object.assign({}, obj5); // yahan ye treka use nhi ho raha shollow copy wala q k nested object ha is k liy ahum deep copy use kery gay
// obj6.location = "gujrat";
// obj6.pNumber.num2 = 8989
// console.log(obj5);
// console.log(obj6);

// let obj8 = {
//   worker: 700,
//   developer: "web developer",
//   jobPackage: {
//     week1: "20k",
//     week2: "30k",
//   },
// };

// let obj9 = JSON.parse(JSON.stringify(obj8));
// obj9.jobPackage.week2 = "80k";
// console.log(obj8);
// console.log(obj9);

// let arr1 = [1,2,4] // yahan array k liya b same kam kia ha os nay  refrance coppy krr raha ha
// let arr2 = arr1
// arr2.push(5)
// console.log(arr1);

// let arr3 = [1,2,3]
// let arr4 = [...arr3]
// arr4.push(90)
// console.log(arr3);   // yahan spread opertopr laga k ye masla hal kr liya hum nay sholow copy bana li hoi ha is ki
// console.log(arr4);

// let arr5 = [1, 2, 3, [4, 5]];
// let arr6 = arr5;
// arr6.push([4, 5]);
// console.log(arr5);

//.........................end ...................................////

// let a = 10;
// let b = "10";
// console.log(a == b);

// let c = 10;
// let f = "10";
// console.log(c === f);

//.............................//......................................

// const btn = document.querySelector(".btnnn");
// btn.addEventListener("click", function () {
//   fetch("https://restcountries.com/v3.1/name/pakistan").then(function (
//     responce
//   ) {
//     return responce.json().then(function (data) {
//       console.log(data);
//     });
//   });
// });

//.....................Creat Dates............................................///

// const D = new Date();
// console.log(D);
// console.log(new Date("Oct 12 2023 19:14:05"));
// console.log(new Date("Oct 10 2022 "));
// console.log(new Date("Nov 12 2023"));






//..................................loop for.................................//
// 12/10/23

// diferent types of loops in js
// first loop is for lop

// for loop creat a loop with three optional expression
// EXP:
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }    // this is the santex

// expression one run only one time befour the exuction of the code block
// expression two run jo hum condion defirne krty hain os base pay body ko excute kery ga
//expression three run everytime after the code block has been excuted

// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }

// let ab = [1, 2, 3, 4];
// for (let i = 0; i <= ab.length; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 20; i++) {
//      const x = i
//      if (x == 4) {
//         console.log("4 is the best");
//      }
//      console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
// console.log(".......--__--........");
// for (let i = 2; i <= 10; i += 4) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     // console.log(`outer loop${i}`);
//   for (let j = 1; j <= 10; j++) {
//      console.log(i + "*" + j + "=" + i*j );
//   }
// }

// let sum = 0
// let n = 100

// for (let i = 0; i <= n; i++) {
//     sum += i
//     // sum = sum + i

// }

// console.log(sum);

// let num = 0;
// let num2 = 100;
// for (let i = num2; i >= 1; i--) {
//   num += i;
// }
// console.log(num);

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }

// for(let i = 5 ; i > 0 ; i--){
//     console.log(i);
// }

// let sum = 0
// for (let i = 0; i < 5; i++) {
// //    sum += i
// // }

// // console.log(sum);

// let table = 3;
// for (let i = 0; i <= 10; i++) {
//   console.log(table + "*" + i + "=" + i * table);
// }

// statment in the for loop is optional let check

// let x = 2;
// for (; x <= 10; x++) {
//   // ye hum nay bhair sy initilize kr diya ha os ko andr bayshak na kro first statements ko
//   console.log(x);
// }

// let x = 4;
// for (; ; x++) {
//  console.log(x);  // statements 2 is also optional
// break
// }

// let subject = ["math", "english", "urdu", "psychology"];
// let i = 0;
// let len = subject.length;
// let updateValue = "";
// for (; i < len; ) {
//   updateValue += subject[i + ""]; // statements 3 is also optional but it defined into body of the loop is nessarasy
//   i++;
// }
// console.log(updateValue);

//.........................................THIS KEYWORD................................////////

// this keyword reffer to the object

// in an object method this reffer to the object

// agr function main ho to globel object ko reffer kerta ha

// strict mood main this undefined hota ha

// non strict mood main ye object ko reffer kerta ha
// strict mood main ye 1 value rakhta ha apny pass

// this ki value os pay depand kery gi k ye kis contant main ha function main ha ya fr class main ha ye fr ye globel ha

// there are few way to use this keyword
// 1 call by itself
// when we call this not into function not in object whatevere no where  ye reffer kery ga window object ko globalyy

// console.log(this); // yahan pay is nay window object ko reefer kr diya ha globelly
// window jo object hota ha wo globel obkect hota ha jis main differnt ytypes ki propertys hoti hain jesa k console.log ho giya ye sab globel hain ye sasb browers k enviorments main acces kr sakty hain

// 2 way

// let obj = {
//   user1: "haseeb",
//   user2: "hamza",
//   user3: "hashmi",
//   fn: function () {
//     console.log(this);
//   },
// };
// obj.fn(); // concole mian ja kr dain gay to ye os object ko reffer kery ga is main ye define howa ha ye globel nhi jaye ga fr window waly main ye os waly main hi rahy ga jis main ye likha giya ho
// this no longer reffer to itself
// is main this jo ha wo object k method or properties ko acces krny k liya use ho ga but same objest hona chiya not a differnt obt mind it

// 3 way

// function xyz() {
//   console.log(this);
// }
// xyz(); // YAHAN  agr check kery concole main  to fr ye ja kr window object ko reffer krny laag jaye ga

// stirct moood main ye function main dalo to ye undefiend ho jaye ga

// 5 way

// jab hum is this ko event main lagay gay then ye reffer kery ga DOM k elements ko

// const btn = document.querySelector(".btnnn");
// btn.addEventListener("click", function () {
//   console.log(this);
// });
// ye DOM k elements ko reffer kr raha ha

//..................................DELETE key value PAIR...........................//

// there are differnt way to delete the key value pain in object

// 1 way

// simple use delete keyword to delete the key value piar
// delete using  two way which is . and []  way

// let obj = {
//   subscriber: "18M",
//   video: "100k",
//   like: "20k",
//   unlike: 0,
// };
// // delete obj.like;
// // console.log(obj);  // use delete reserved key for delete the key value pair

// delete obj["subscriber"]; // this the 2nd way to delet the key value pair
// console.log(obj);

// let thisIsObj = {
//   Cow: "baa",
//   Cat: "mew",
//   Dog: "bark",
// };

// const removeKeyFromObj = function (obj, key) {
//   if (key in obj) {
//     delete obj[key];
//   }
// };
// removeKeyFromObj(thisIsObj, "Cat");
// console.log(thisIsObj);

// 2 way

// in this way we destructured the object to delet the key value pair

// is main ye hota ha k wo naya object bana kr dy ga jis main wo value nhi ho gi jo desructured sy remove ki ha
// but the original object still carry that value

// const Obj = {
//   car: "bmw",
//   bike: "honda",
//   bus: "hino",
// };

// const { bike, ...newObj } = Obj;
// console.log(newObj);
// console.log(Obj);

// const vales = {
//   s1: 111,
//   s2: 222,
//   s3: 333,
//   s4: 444,
//   s5: 555,
// };

// const { s4, s2, ...updateValue } = vales;
// console.log(updateValue);
// console.log(vales);

//  3 way

//  1 or tareka ha jis ko reflect.delteproperty() kehty hain

// ye hum ko js ka builtin object deta ga jis ko hum reflect kehty hain

// const products = {
//   p1: "coumputer",
//   p2: "laptop",
//   p3: "tv",
//   p4: "lcd",
//   p5: "shop",
// };

// Reflect.deleteProperty(products, "p3", "p4");
// console.log(products);

//.....................................SWITCH STATEMENT....................................................//

// switch jo hoti ha wo only 1 time excuted hoti ha  life main

// is main jo expression ki value hoti ha wo hr case ki value ko apny sath  campre krtii ha

//  if there is a  match then  wo wala code block excuted krta ha

//if there is no match then efault block code excuted

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(`Today is ${day}`);

// let x = 2;
// switch (x) {
//   case 0:
//     x == "2";
//     console.log("case 0");
//     break;
//   case 1:
//     x == 3;
//     console.log("case 1");
//     break;
//   case 2:
//     x === 2;
//     console.log("case 2");
//     break;
//   default:
//     break;
// }

// console.log(`the value of x is : ${x}`);

// let vehicleColor = "green";
// let vehicleType;
// switch (vehicleColor) {
//   case "green":
//   case "red":
//   case "green":
//     vehicleType = "car";
//     break;
//   case "orange":
//   case "yellow":
//     vehicleType = "SUV";
//   default:
//     console.log("nothing match");
//     break;
// }
// console.log(`type  is ${vehicleType}`);

// let h = 200;
// switch (h) {
//   case h > 300:
//     console.log(`case 1 ${h}`);
//     break;
//   case h > 100:
//     console.log(`case 2 ${h}`);
//   case (h = 200):
//     console.log(`case 3 ${h}`);
//   default :
//     console.log("nothg match");
//     break;
// }
// console.log(h);

// let a = 2 * 4;

// switch (a) {
//   case 12:
//     console.log(` case 1 : to high  ${a}`);
//     break;
//   case 4:
//     console.log(` case 2 : to low ${a}`);
//     break;
//   case 8:
//     console.log(`case 3 : yes its is ${a}`);
//   default:
//     break;
// }

//...................................OBjECT DESTRUCTURING..................................//

// const someUser = {
//   firstName: "haseeb",
//   lastName: "hamza",
//   dateOfBirth: 1999,
// };
// const { firstName: fn, lastName: ln, dateOfBirth: dob } = someUser; //  we follow this step to destructure the object like that and assign a new name fn ln dob respectivelly
// console.log(fn, ln, dob);

// now  we assign a default  value to the varibale jis ki key exist hi nhi kerti object main

// const emp = {
//   firstname: "haseeb",
//   lastName: "hamza",
//   pay: 20000,
// };
// // const { firstname, lastName, country } = emp;
// // console.log("checking without set the devalut value");
// // console.log(firstname, lastName, country);

// const { firstname: fn, lastName: ln, country = "default counter" } = emp;
// console.log(fn, ln, country);

// nested objects

// let resturant = {
//   resturantName: "lahore foor street",
//   adress: {
//     city: "lahore",
//     street: 10,
//     hNum: {
//       houseNum: 54,
//     },
//   },
// };
// const { adress } = resturant;

// console.log(adress);

// const {
//   adress: { city },
// } = resturant;
// console.log(city);

// const {
//   adress: { hNum },
// } = resturant;
// console.log(hNum);

// const {
//   adress: {
//     hNum: { houseNum: hn },
//   },
// } = resturant;
// console.log(hn);
