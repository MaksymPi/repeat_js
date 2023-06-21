let yearBorn = "1984";
const currentYear = 2030;
let fullName = 'Вязовска арина Сергіївна';

let year = +currentYear - +yearBorn;

let name = (fullName.slice(9,14)).toUpperCase();

let lastName = fullName.slice(15)

console.log(`У ${currentYear} році ${name} ${lastName} буде мати вік ${year} років`);




const PI = 3.141592653589793;

console.log(PI.toFixed(2))
console.log(PI.toFixed(4))
console.log(PI.toFixed(7)) 