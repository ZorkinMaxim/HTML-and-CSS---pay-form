// function myFunction() {
//     document.getElementById("id_pay").style.color = 'red';
// }

document.querySelector('#push').onclick = () => {
    let n = document.querySelector('#fname').value;
    let s = document.querySelector('#lname').value;
    console.log(n + " " + s)
}

function show(shown, hidden, hidden_2) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(hidden_2).style.display = 'none';

    return false;
}

