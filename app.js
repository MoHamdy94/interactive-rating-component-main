let submit = document.querySelector('#submit')
let containerOne = document.querySelector('#containerOne')
let containerTwo = document.querySelector('#containerTwo')
let rate = document.querySelectorAll('.circle')
let clientRating = document.querySelector('.rat-out')
let rateNumber = 0

function changeColor(e){
    if(document.querySelectorAll('.active').length){
        document.querySelector('.active').classList.remove("active");
        rateNumber = 0;
    }
    e.currentTarget.classList.add("active")
    
    rateNumber = e.currentTarget.innerHTML;
}  




function onSubmit(){
    containerOne.style.display= 'none';
    containerTwo.style.removeProperty('display');
    clientRating.append(rateNumber)


}
