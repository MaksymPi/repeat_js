const firstNumber = () => {
  let input = prompt("Введіть перше число");
  let num = parseFloat(input);

  if (isNaN(num)) {
    alert("Введено некоректне значення. Будь ласка, введіть число.");
    return firstNumber();
  }
  return num;
};



const secondNumber = () => {
  let input = prompt("Введіть друге число");
  let num = parseFloat(input);

  if (isNaN(num)) {
    alert("Введено некоректне значення. Будь ласка, введіть число.");
    return firstNumber();
  }
  return num;
};



const calculate = () => {
  let num_1 = firstNumber();
  let num_2 = secondNumber();

  const addition = num_1 + num_2;
  const subtraction = num_1 - num_2;
  const multiplication = num_1 * num_2;

  if (num_2 === 0) {
    alert("Ділення на нуль неможливо.");
  } else {
    const division = num_1 / num_2;

    console.log(` 
    Addition: ${addition}, 
    Subtraction: ${subtraction},
    Multiplication: ${multiplication},
    Division: ${division}
    `);
  }
};
calculate();