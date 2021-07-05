//VARIABLES
const doList=document.querySelector('#result');



//EVENTLISTENERS
eventListeners();
function eventListeners() {
    //submission
    document.querySelector('#btn1').addEventListener('click',addNote);

    //delete note
    document.querySelector('#dolist').addEventListener('click',deleteNote);
}




//FUNCTIONS

//add note to the list
function addNote(e) {
    e.preventDefault();
    const note=document.querySelector('#notebook1').value;

    // create remove buttton
    const remove=document.createElement("a");
    remove.textContent='X';
    remove.classList='remove_btn';
    console.log(remove);

    // create <li> tag
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(note));
    li.appendChild(remove);

    //add the lis to the do list
    doList.appendChild(li);


}
function deleteNote(e) {
    if (e.target.classList.contains('remove_btn')) {
        e.target.parentElement.remove();
    }
}