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

const person4 = {
    name: 'alp',
    surname: 'öztürk',
    age: '28',
    location: 'aydın',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
  }
  const person5 = {
    name: 'serdar',
    surname: 'çakır',
    age: '22',
    location: 'istanbul',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
  }
  const person6 = {
    name: 'rümeysa',
    surname: 'türkan',
    age: '22',
    location: 'istanbul',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
  }
  const person7 = {
    name: 'mehmet ali',
    surname: 'tunay',
    age: '30',
    location: 'istanbul',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
  }
  const person8 = {
    name: 'furkan',
    surname: 'atsan',
    age: '23',
    location: 'ankara',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
  }
  const person9 = {
    name: 'kader',
    surname: 'arslan',
    age: '24',
    location: 'adana',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
  }
  const person10 = {
    name: 'uğurcan',
    surname: 'uçar',
    age: '24',
    location: 'trabzon',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
  }


const people = [person1, person2, person3, person4,person5,person6, person7,person8,person9,person10];

console.log(
  "en uzun çalışan kişi",

  people.reduce(function (prev, person) {
    if (person.workingDays > (prev?.workingDays || 0)) {
      return person
      //return person.workingDays
    }
  }, {})
);

//erkeklerin çalışma günü ortalaması

console.log(
    "erkeklerin çalışma ortalaması",
    people.reduce(function({avg,sum,count}, person){
        if(person.gender==='man'){
            count++
            sum = sum+person.workingDays
            avg=sum/count
        }
        return{
            count,
            sum,avg
        }        
    },{
        count:0,
        sum:0,
        avg:0
    })
)

//diziden dizi olmayan bir şey yapıcaz.Reduce kullanıyoruz
const raw = [
    ["Name Surname", "Company", "Email", "Date", "Country", "City"],
    [
        [
            "Hakan Özoğlu",
            "Grapecity Inc.",
            "hakanozzoglu@grapecity.com",
            "5/11/1992",
            "Turkey",
            "Trabzon"
        ],
        [
            "Hyacinth Vincent",
            "Duis Corparation",
            "iaculis.enim@magnaCrasconvallis.ca",
            "28/06/2022",
            "Eritrea",
            "Lyubertsy"
        ],
        [
            "Brenden Martinez",
            "Volutpat Nunc Assocites",
            "iaclis@estMauris.org",
            "24/03/2021",
            "British Indian Ocean Territory",
            "Colwood"
        ]
    ]

]

console.log(
    raw[1].map(function(person){
        return person.reduce(function(prev, item, index){
            prev[raw[0][index]] = item
            return prev
        },{})
    })
)


console.log("cinsiyete göre gruplama",
    people.reduce(function(prev,person){
        if(person.gender==='woman'){
            prev.woman.push(person)
        }else{
            prev.man.push(person)
        }
        return prev
    }, {man:[], woman:[]})
)

//isminin baş harfine göre gruplama reduce
// yaşadıkları şehre göre gruplama
console.log(
    "yasadıgı sehre göre gruplama",
    people.reduce(function(prev, person){
        if(!prev[person.location]){
            prev[person.location]=[]         
        }
        prev[person.location].push(person)
        return prev
    },{})
)

