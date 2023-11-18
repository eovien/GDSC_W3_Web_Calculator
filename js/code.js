function num(value){
    document.getElementById('display').textContent+=value
}

function cleardata() {
    document.getElementById('display').textContent = '';
}
function equaldata() {
    try {
        document.getElementById('display').textContent = eval(document.getElementById('display').textContent);
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
    }
}
