// let x = parseInt(prompt('Введіть число'),10);

// if (isNaN(x)) {
//     console.log('Використано некоректний формат')
// }
// else if (x > 10){
//     console.log('x більше 10')
// }
// else if (x < 10){
//     console.log('x меньше 10')
// }
// else if (x = 10){
//     console.log('x дорівнює 10')
// }

let y = parseInt(prompt("Введіть число"), 10);
console.log(y);
switch (true) {
  case (y == 10):
    console.log("x дорівнює 10");
    break;
  case (y > 10):
    console.log("x більше 10");
    break;
  case (y < 10):
    console.log("x меньше 10");
    break;
    default:
    console.log('Num не известно')
}
