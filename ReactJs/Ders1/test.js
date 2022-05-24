//mutable => içerik değiştirilebilir
//immutable => içerik değiştirilemez
//primitive => ilkel
//non-primitive => gelişmiş, pointer, object
//const => değer değiştirilemez
//let => değer değiştirilebilir


//bir değişken primitive ve constant ise onun içeriği herhangi bir şekilde değiştirilemez.

//primitive değişken tipleri
//string, number, boolean, null, undefined, symbol

/*
const people = ["ali", "ayse","fatma","berna"]
//0X4654645ZD = ["ali", "ayse","fatma","berna"]
people*=0X4654645ZD
console.log(people[1])
people[4]="mert" // non-primitive olmadığı için doğrudur */

/*
const a = [1,2,3]
// bellekte yer aç = a
//0x14565464 = [1,2,3]
//a*=0x14565464
const b=a
// a bir dizi değil a dizinin bellek adresine sahip
//b*= a*
b[0]=100
//bellekte saklanan bir dizi olduğu için o da 0x14565464 adresinde saklandığı için
//onun ilk elemanını 100'e çevirmektir
//0x14565464 = [100,2,3]
console.log(a)

console.log("*******************")


*/
//non-primitive değerler birbiriyle karşılaştırılırken içeriklerinin
//hiçbir önemi yoktur tamamen bellek adreslerinin aynı olup olmamasıyla ilgili bir kıyaslama gerçekleştirilir

/*
const x=[]
const y=[]
console.log("a"==="a")//true
console.log(x===y) //false=> adresleri farklı
console.log([]===[])//false => [] yazıldığı an da bellekte dizi oluşturulur ve adresleri farklıdır

console.log("*******************")

// const w = [[12,34],1, 2, 3, 4]
// const z = [w[0],1, 2, 3, 4]
// console.log(w)
// console.log(z)
// console.log(w[0]===z[0]) //true 
//console.log(w[1]===z[1]) //true (primitive olduğu için) a'yı nerde saklıyorsak 1 'i de orda saklıyoruz
const w = [[12,34],1, 2, 3, [4]]
const z = [w[0],1, 2, 3, [4]]

console.log(w[4]===z[4]) //false
console.log(w[4][0]===z[4][0])//true -> iki primitive değeri kıyaslıyoruz
*/

/*
//typeof string döndürür. dolayısıyla 2 primitive değeri kıyasladık

console.log(typeof "hakan" === typeof "ayse")

console.log("hakan"[5]) // undefined

const a = ["a","b","c"]
console.log(a[13]) // undefined -> ["a","b","c", undefined, undefined, undefined, undefined] olarak çalışır

console.log(typeof undefined === undefined) // typeof undefined'ın türü string

console.log(typeof(typeof undefined))//string
console.log(typeof(typeof null))//string
*/


// J S O N(JavaScript Object Notation) (GÖSTERİM BİÇİMİ)
//en önemli dezavantajı eğer normalizasyon yapılmazsa çok fazla hafıza tüketir.
//insanlar tarafından okunabilir.
//avantajı=> insanlar tarafından okunabilir.
// başı object içi array olabilir ya da tam terside olabilir.
//key'ler "a" şeklinde tırnak içinde yazılmalıdır.
//(key:string):(value:any)

/*
const person = {
    name:"hakan",
    surname:"özoglu",
    age:"30",
    location:"istanbul"
}

console.log("type of person is", typeof person)//object

const people=[person, person,person]
console.log("type of people is", typeof people) // object
 */

/*
const x = ["hakan", "ali","mert"]
console.log(x.sort()) // yeni dizi dönmez, mevcut dizi sıralanır.

*/
/*
const x = ["a","b","c",1,2,3]

function ilkVeSonEleman(dizi, baslık){
    console.log(baslık)
    console.log(dizi[0],dizi[dizi.length-1])
}

const ilkVeSonEleman2 = dizi=>{
    console.log(dizi[0],dizi[dizi.length-1])
}

const ilkVeSonEleman3 = function(dizi){
    console.log(dizi[0], dizi[dizi.length-1])
}

ilkVeSonEleman(x, "baslık verdik")
// ilkVeSonEleman2(x)
// ilkVeSonEleman3(x)

ilkVeSonEleman(["a","b","c",1,2,3])
*/

/*
// ... operand 
//spread(operand) =>sadece dizilerde kullanılır. operandı sadece dizi olabilir.
//rest(operand) => çıktısı bir dizidir.
// 5 + 6 + => operator 5 6 => operant

console.log("a","b","c",1,2,3)//a b c 1 2 3
console.log(["a","b","c",1,2,3]) //[ 'a', 'b', 'c', 1, 2, 3 ]
console.log(...["a","b","c",1,2,3]) // bir dizinin elemanlarını orada dizi yokmuşcasına dağıt demektir. //a b c 1 2 3

const harfler = ["a","b","c"]
const rakamlar = [1,2,3]
//const harflerVeRakamlar=[harfler,rakamlar] //[ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
const harflerVeRakamlar=[...harfler,...rakamlar] //[ 'a', 'b', 'c', 1, 2, 3 ]
//harfler = ["z", ...harfler] // değer değiştirlemez şeyin adresini değiştirmeye çalışıyoruz
*/

/*

//rest

const person = {
    name:"hakan",
    surname:"özoglu",
    age:"30",
    location:"istanbul"
}

//const name = person.name;
//const surname = person.surname;
//const {name, surname} = person //destruction(parçalama) => name,surname diye 2 değer yaratıldı ve person'daki karşılıklarına eşitlendi.
const {name, surname, ...personUnusedInformation} = person // rest of destruction'da parçalamadan geriye kalanlar 
console.log(personUnusedInformation) //{ age: '30', location: 'istanbul' }

const arr =["a","b","c",1,2,3]

//const [x,y,z]=arr
const [x,y,z,...restOfArrayDestruction]=arr
const q=x+y//ab
console.log(restOfArrayDestruction)//[ 1, 2, 3 ]

//REST YENİ BİR ŞEY ÜRETİRKEN => ortaya çıkan şey array
//SPREAD VAR OLAN BİR ŞEYİ PARÇALAR => arraylerle kullanabilirim
*/

function ilkVeSonEleman(title, ...dizi){
    console.log(title)
    console.log(dizi[1] + dizi[dizi.length-1])//15
}

ilkVeSonEleman("baslik",1,2,3,4,5,6,7,8,9,10,11,12,13) 


// meyvelerden oluşan bir dizi
const meyveler = ['Elma', 'Muz', 'Karpuz'];

// Spread operatörünü kullanarak dizi değerlerini gösterelim
console.log(...meyveler);
