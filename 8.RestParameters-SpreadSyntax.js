function sum(...args) {
    return args.reduce((a,b) => a + b, 0);
  }
  
  const numbers = [1, 2, 3];


  console.log(sum(numbers[0], numbers[1], numbers[2]));

  //No se si el console.log lo puedo modificar, si se puede quedaría así:

//   console.log(sum(...numbers));