function checkRobo(text) {
    let myRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$")
    return myRegex.test(text);
  }


// Name field is required, and must have a length that is greater than 5
document.querySelector('#name').addEventListener('change', (e)=>{
    if(e.target.value.length < 5){
        // console.log(value);
        e.target.setCustomValidity('Name is too short, must be atleast 5 or more characters');
    }else{
        e.target.setCustomValidity('');
    }
})

// password field is required, and must have be greater than 6 characters, but less than 15
document.querySelector('#password').addEventListener('change', (e)=>{
    if(e.target.value.length < 6 || e.target.value.length > 15){
        e.target.setCustomValidity('Password must be at least 6 characters and less than 15');
    }else{
        e.target.setCustomValidity('');
    }
})

// about me isn't required, its a textarea that has a max length of 250 characters
document.querySelector('#aboutMe').addEventListener('change', (e)=>{
    if(e.target.value.length > 250){
        e.target.setCustomValidity(`Must be 250 characters or less, there is currently ${e.target.value.length}`);
    }else{
        e.target.setCustomValidity('');
    }
})

// about me isn't required, its a textarea that has a max length of 250 characters
document.querySelector('#robo').addEventListener('change', (e)=>{
    if(!checkRobo(e.target.value)){
        e.target.setCustomValidity('Robo must be atleast 8 char long, with 1 upper, 1 lower and one special character!');
    }
})