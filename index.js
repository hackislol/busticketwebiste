const buyBtn = document.getElementById('seatKebor');

buyBtn.addEventListener('click', function (){
    window.scrollTo({
        top: 1500,
        left: 0,
        behavior:'smooth'

    });
})


const openWondows = document.getElementById('nextClick');
const successClick = document.getElementById('successClick');
const applyInput = document.getElementById('apply-input');


openWondows.addEventListener('click', function(){
    successClick.style.display = 'block';
    
})

applyInput.addEventListener('click', function(){
    successClick.style.display = 'none';

})

window.addEventListener('click', function(e){
    if (e.target === successClick){
        successClick.style.display = 'none';
    }
})

