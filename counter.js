
let add = document.getElementById('plus');
let remove = document.getElementById('minus');

let int = document.getElementById('number');
let integer = 0;


add.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;
})


remove.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
})