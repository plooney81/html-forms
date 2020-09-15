document.querySelector('#userName').addEventListener('change', (e)=>{
    if(e.target.value.length > 15){
        // console.log(value);
        e.target.setCustomValidity('User name is too long, must be less than 15 characters');
    }else{
        e.target.setCustomValidity('');
    }
})