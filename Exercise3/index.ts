// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonName: string = "muhammad kamran ali rana";

// step 1 show in lower case:

let lowercaseName: string = PersonName.toLowerCase();

console.log(lowercaseName);

// step 2 show name in uppercase

let uppercaseName: string = PersonName.toUpperCase();

console.log(uppercaseName);

// step 3 show name in titlecase

let words: string[] = PersonName.split(" ");
console.log(words)
console.log(words[0])
let titlecase = words[0].charAt(0).toUpperCase()
console.log(titlecase)

// let titlecaseName: string = ""

// for (let i = 0 ; i < words.length; i++) {
//     titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
// };




// console.log(titlecaseName)

// console.log(3 + +"3")

// comparison operatiors 



