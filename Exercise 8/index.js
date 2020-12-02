/* 
    1. Array
*/

let angka = [1,2,3,4,5,6,7,8];
console.log(angka);
let buah = ['mangga','apel','jeruk'];
console.log(buah);

let arr = ['text',1, true];
console.log(arr)
let myfunc = function() {
    return "hello array";
}

let arr2 = ['text',1,true,myfunc()]
console.log(arr2[3]);

console.log(arr2.length); //untuk melihat panjang array
console.log(typeof arr2); //untuk melihat tipe data

//Deklarasi array menggunakan kata kunci new

let buah2 = new Array('salak','jambu','melon');
console.log(buah2);

//Manipulasi array
let mhs =[];
mhs[0]='John';
mhs[1]='Bob';
mhs[2]='Jane';
//Mengubah isi array
mhs[1]='donny';
//menghapus array
mhs[2]=undefined;
//menampilkan array
for (let i=0;i<mhs.length;i++){
    console.log(mhs[i]);
}

//Method pada array 
//   1. .length
//   2. .toString, mengubah isi array menjadi string
//   3. Join
console.log(mhs.join("-")) //konvert array ke string dengan pembatas yg bisa dipilih
//   4. push pop unshift shift

mhs.push('mayrra'); //tambah element paling belakang
mhs.pop(); //hapus elemen dari belakang
mhs.unshift('stenly'); //menambah dari depan
mhs.shift(); //menghapus dari depan

//concat

let buuah = ['mangga','apel','anggur'];
let sayur = ['kanglung','bayam','buncis'];
let biji = ['kedelai','kacangijo']

let makanan = sayur.concat(buah,biji);
//Splice dan slice

//array.splice(index,jumlah yang akan dihapus dimulai dari seteah index,item1,...,itemN)
buuah.splice(2,0,'melon','semangka');

//array.slice(index awal, index akhir(tidak diikutsertakan)) memotong array untuk diassign ke array baru
let buuah2= buah.slice(0,2);


//array.sort untuk tipe data string
let mobil = ["Xenia","Avanza","Terios","Panther"];

mobil.sort();
console.log(mobil);

//array.sort untuk tipe data number
let bilangan = [90, 45, 88, 24.6, 15.2, 255];


let smallerFirst = function(a, b) {
  return a - b;
};

let biggerFirst = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(smallerFirst));
console.log(bilangan.sort(biggerFirst));

//array.reverse untuk tipe data string
//sorting berdasarkan index terbesar lebih dahulu

mobil.reverse();
console.log(mobil);

//fungsi ini terlebih dahulu melakukan pengurutan, kemudian hasilnya akan dilakukan reverse.
mobil.sort().reverse();