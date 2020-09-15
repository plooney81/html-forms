// document.querySelector("form").addEventListener('submit', (e)=>{
//         e.preventDefault();
//         value = 0;
//         value = e.target.userName.value.length;
//         console.log(value);
//         if(value > 15){
//             console.log(value);
//             e.target.userName.setCustomValidity('User name is too long, must be less than 15 characters');
//         }else{
//             document.querySelector('#form').submit();
//         }
//     })

document.querySelector('#userName').addEventListener('change', (e)=>{
    if(e.target.value.length > 15){
        // console.log(value);
        e.target.setCustomValidity('User name is too long, must be less than 15 characters');
    }else{
        e.target.setCustomValidity('');
    }
})