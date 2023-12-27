const boxesContainer = document.querySelector('.boxes');

for(let i = 0; i < 100; i++){
  const box = document.createElement('div');

  box.classList.add('box');

  box.innerHTML = `<span>${i + 1}</span>`;

  boxesContainer.append(box);

  if( !((i + 1) % 3) && !((i + 1) % 5) ){
    box.innerHTML = 'FizzBuzz'
    box.classList.add('bg-red');
  }else if( !((i + 1) % 3) ){
    box.innerHTML = 'Fizz'
    box.classList.add('bg-green');
  }else if( !((i + 1) % 5) ){
    box.innerHTML = 'Buzz'
    box.classList.add('bg-yellow');
  }
}