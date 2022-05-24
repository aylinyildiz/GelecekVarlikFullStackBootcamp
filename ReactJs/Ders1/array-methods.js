//concat
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];

// console.log( arr1.concat(arr2)) //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// //entries() // key/value çiftleri döndürür
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries(); //0,Banana 1,Orange 2,Apple 3,Mango

// //every => tüm elemanlar şartı geçmeli
// const arr = [1,2,3];

const person1 = {
  name: "hakan",
  surname: "özoğlu",
  age: "30",
  location: "istanbul",
  gender: "man",
  score: 10,
  workingDays: 90,
  books: 9,
};

const person2 = {
  name: "akif",
  surname: "özoğlu",
  age: "32",
  location: "istanbul",
  gender: "man",
  score: 17,
  workingDays: 17,
  books: 9,
};
const person3 = {
  name: "beyza",
  surname: "özoğlu",
  age: "16",
  location: "trabzon",
  gender: "woman",
  score: 28,
  workingDays: 64,
  books: 178,
};

const people = [person1, person2, person3];

/*
const names = ['hakan', 'akif', 'beyza']
const ages = [30,32,16]
const greatings = [
    "hi hakan how are you gentleman",
]*/

/************* Map******************** */
const output1 = people.map(function (person) {
  return person.name;
});

const output2 = people.map(function ({ age, gender,name }) {
  let youngOrOld = "";
  if (age <= 30) {
    youngOrOld = "young";
  } else {
    youngOrOld = "old";
  }
  let ladyOrGentleman = ""
  if(gender==="woman"){
      ladyOrGentleman="lady"
  }else{
      ladyOrGentleman="gentleman"
  }
  return `hi ${name} how are you ${youngOrOld} ${ladyOrGentleman}`
});

console.log(output2)
//mapin çıktısı dizidir, girdiği fonksiyondur.
//her bir eleman parametre tek tek gönderilir
//her bir return tek tek yeni dizinin indexine kaydedilir.

const i = people.indexOf(
    {
        name: "beyza",
        surname: "özoğlu",
        age: "16",
        location: "trabzon",
        gender: "woman",
        score: 28,
        workingDays: 64,
        books: 178,
    }
)
console.log(i) // -1 verir. pointer kıyaslandığı için

const ii = people.findIndex(function(person){
    if(person.name==='beyza'){
        return true
    }else return false
}
    
)
console.log("sıra no", ii)

const iii = people.find(function(person){
    if(person.name==='beyza'){
        return true
    }else return false
}
)
console.log("find no", iii)

console.log(iii === person3)

console.log(
    people.every(function({age}){
        if(age>=18) return true
        else return false
    })
)//false -> tümü için şartı doğru olmalı

console.log(
    people.some(function({age}){
        if(age>=18) return true
        else return false
    })
)//en az bir tane true olduğu için true döner.

//filter=> yeni dizi döner
console.log(
    people.filter(function({age}){
        if(age>=18) return true
        else return false
    })
)
// foreach = yanetki fonksiyonudur. sonuç üretmez ama bir yan etkisi vardır.
people.forEach(function(person){
    person.name=person.name.toUpperCase()
})
console.log(people)

//includes // varsa true yoksa false döner
const prArr=[1,2,3,4,34,5]
prArr.includes(34)

// bir arrayden array dışında bir şey üretmeye yarar.
//arrayde üretilebilir.

