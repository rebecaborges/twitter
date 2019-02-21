let saveMessage = document.getElementById('message');
let saveShowMessage = document.getElementById('showMessage');
let button = document.getElementById('buttonTweet')
let counter = document.getElementById('counter');

function showText(evt){
    saveShowMessage.innerHTML=saveMessage.value;

    evt.preventDefault()
}

button.addEventListener('click', showText)


// function enableButton (evt){
//     if(saveMessage ===''){
//     button.disabled=true
//     }else{button.disabled=false}  

//     evt.preventDefault();

// }
// saveMessage.addEventListener('click', enableButton)

function sumCaracter(saveMessage){
    let max = 140;
    let msg = saveMessage.value.length
    let total = max-msg

    if(total < 0){
        button.disabled=true;   
           console.log(button)
    }else{
        button.disabled=false;
    }
    counter.innerHTML= total
}

function showCaracter (evt){
    sumCaracter(saveMessage)
    evt.preventDefault()
}
saveMessage.addEventListener('keyup', showCaracter)
