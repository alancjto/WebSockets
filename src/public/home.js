const socket = io();

const input = document.getElementById('textbox');
const form = document.getElementById('form');

input.addEventListener('keyup', evt=>{
    const {key} = evt;
    evt.target.value = "";
    socket.emit ('message1', key);
});

socket.on ('log', data=>{
    log.innerHTML+=data;
});