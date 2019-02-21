let saveMessage = document.getElementById('message');
let saveShowMessage = document.getElementById('showMessage');
let button = document.getElementById('buttonTweet');
let counter = document.getElementById('counter');

button.addEventListener('click', createTag)

function createTag(e){
    let paragraph = document.createElement('p');
    let p =saveShowMessage.appendChild(paragraph);
    let value = document.getElementById('message').value;
    paragraph.innerHTML= value;

    console.log(value)

    saveMessage.value=''
    e.preventDefault()
    
}

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
saveMessage.addEventListener('keyup', showCaracter, evtColorCounter)


function colorCounter(counter){
    if (counter < 120){
       counter.style.color='red';
    }
}

function evtColorCounter(evt){
    colorCounter(counter)
    evt.preventDefault();
}