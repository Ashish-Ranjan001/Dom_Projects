const form = document.querySelector('form')

form.addEventListener('submit',function(e){
e.preventDefault();

const height = document.querySelector('#height').value;
const weight = document.querySelector('#weight').value;
const result = document.querySelector('#results');

if(height ==='' || height<0 || isNaN(height)){
result.innerHTML = 'Please give a valid height'
}
else if(weight ==='' || weight < 0 || isNaN(weight)){
result.innerHTML = 'Please give a valid weight'
}
else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;
    const msg = document.querySelector('.msg')

    if(bmi<=18.6){
        msg.innerHTML=`You Falls in Under Weight Category, Your bmi should be more than ${bmi}`
        }
        if(bmi>=18.6 && bmi<=24.9){
        msg.innerHTML=`You Falls in Normal Range Category, Your bmi is Perfect`
        }
        if(bmi>24.9){
        msg.innerHTML=`You Falls in OverWeight Category, Your bmi should be less than ${bmi}`
        }
}

})

