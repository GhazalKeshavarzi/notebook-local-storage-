//variables




//eventlisteners

eventListeners();
function eventListeners(){
    document.querySelector('#btn').addEventListener('submit',addNote);
}



//functions

function addNote(e) {
    e.preventDefault()
}