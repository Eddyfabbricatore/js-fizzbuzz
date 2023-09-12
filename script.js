const boxContainer = document.querySelector('.boxes');

for(let i = 0; i < 100; i++){
  const box = document.createElement('div');

  box.classList.add('box');

  box.append(i + 1);

  boxContainer.append(box);

  if( ((i + 1) % 3 === 0) && ((i + 1) % 5 === 0)){
    box.innerHTML = 'FizzBuzz'
    box.classList.add('bg-red');
  }else if( (i + 1) % 3 === 0){
    box.innerHTML = 'Fizz'
    box.classList.add('bg-green');
  }else if( (i + 1) % 5 === 0){
    box.innerHTML = 'Buzz'
    box.classList.add('bg-yellow');
  }
}