document.querySelector('#name').addEventListener('change', (e)=>{
    if(e.target.value.length < 5){
        // console.log(value);
        e.target.setCustomValidity('Name is too short, must be atleast 5 or more characters');
    }else{
        e.target.setCustomValidity('');
    }
})