
function saveText(evt){
    let saveMessage = document.getElementById('message').value;
    let saveShowMessage = document.getElementById('showMessage');

    saveShowMessage.innerHTML=saveMessage;

    evt.preventDefault()
}

let button = document.getElementById('buttonTweet')
button.addEventListener('click', saveText)




