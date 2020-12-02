// console.log("Basic JavaScript");

//conditional JavaScript

// let firstName = "John";
// let isMarried = true;

// if (isMarried === true){
//     console.log(firstName + " is Married");
// } else {
//     console.log(firstName + " is not Married");
// }


// let firstName = "John";
// let job = "teacher";

// switch (job) {
//     case "teacher":
//         console.log (firstName + " is a teacher");
//         break;
//     case "driver":
//         console.log(firstName + " is a driver");
//         break;
//     case "istructor":
//         console.log(firstName + " is a istructor");
//         break;
//     default:
//         console.log(firstName + " does something else");
//         break;
// }

// let umur=25;



// switch (true)
// {
//     case umur <13:
//         console.log("Kategori anak-anak");
//         break;
//     case umur >=13 && umur <=16:
//         console.log("Kategori Remaja");
//         break;
//     case umur >=17 && umur <=25:
//         console.log("Kategori Orang Muda");
//         break;
//     case umur >=26 && umur <50:
//         console.log("Kategori Orang Dewasa");
//         break;
// }

//JavaScript function

//function helloWorld(){
//     console.log("Hello World function declaration");
// } 
// let age = 33;
// let helloWorld=function(nama){
    
//     console.log("Nama Saya " + nama + " umur saya adalah " + age);
// };

// console.log(age);
// helloWorld("John");


// if(umur < 13){
//     console.log("Kategori anak-anak");
// } else if(umur >=13 && umur <=16){
//     console.log("Kategori Remaja");
// } else if(umur >=17 && umur <=25){
//     console.log("Kategori Orang Muda");
// } else if(umur >=26 && umur <50){
//     console.log("Kategori Orang Dewasa");
// } 
function hitungBmi(){
    let beratBadan = prompt("Input Berat Anda (dalam kilogram) = ");
    let tinggiBadan = prompt("Input Tinggi Anda (dalam meter) = ");

    console.log (bmi = beratBadan / (tinggiBadan*tinggiBadan));
    if(bmi < 18.5){
        console.log("CLASSIFICATION UNDERWEIGHT");
    } else if(bmi >=18.5 && bmi <=24.9){
        console.log("CLASSIFICATION NORMAL RANGE");
    } else if(bmi >=25 && bmi <=29.9){
        console.log("CLASSIFICATION OVERWEIGHT");
    } else if(bmi >30){
        console.log("CLASSIFICATION OBESE");
    }
}

hitungBmi();