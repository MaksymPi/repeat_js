const string = "Hello Word!"

for (let i = 0; i < string.length; i++) {
  const asd = string[i];
  console.log(asd.toUpperCase());
}

const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  const result = arr[i];
  console.log(result);
}
for (let i = arr.length; i > 0; i--) {
  const result = arr[i - 1];
  console.log(result);
}

let x = 0;
while (x < 4) {
  console.log(x);
  x++;
  break; //приривает код
}

let word = '';
while (word.length < 5) {
  const value = prompt("enter a letter")
  word = word + value;
  console.log(word);
}


let y = 0;
do{
  console.log(y);
  y++;
}while(y < 4);


for (let letter of arr){
  console.log(letter);
}

const user ={
  name:'Jone',
  age: 21,
  isMarried: false,
};

for (let key in user) {
  console.log(key, user[key]);
}