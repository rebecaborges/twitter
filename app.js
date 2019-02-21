let saveMessage = document.getElementById('message');
let saveShowMessage = document.getElementById('showMessage');
let button = document.getElementById('buttonTweet')
let counter = document.getElementById('counter');




function eventText (evt){
    saveShowMessage.innerHTML=saveMessage.value
    evt.preventDefault()
}

button.addEventListener('click', eventText)


function clearContent(evt){
    saveMessage.value=''
    evt.preventDefault
}
button.addEventListener('click', clearContent)


function buttonDisabled(saveMessage){
    if(saveMessage===''){
        button.disabled=true;
    }else{
        button.disabled=false;
    }
}

function evtButton(evt){
    button.disabled=false;
    evt.preventDefault()
}

saveMessage.addEventListener('keyup', evtButton)



function sumCaracter(saveMessage){
    let max = 140;
    let msg = saveMessage.value.length
    let total = max-msg

    if(total < 0 || msg===''){
        button.disabled=true;   
    }else{
        button.disabled=false;
    }
    counter.innerHTML= total
}

function showCaracter (evt){
    sumCaracter(saveMessage)
    buttonDisabled(button)
    evt.preventDefault()
}
saveMessage.addEventListener('keyup', showCaracter)
