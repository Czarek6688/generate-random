function generateRandomArray(lenght) {
  let array = [];

  for (let i = 0; i < lenght; i++) {
    let randomArray = Math.floor(Math.random() * 100) + 1;

    array.push(randomArray);
  }

  return array;
}

console.log(generateRandomArray(100));
