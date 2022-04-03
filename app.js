let buttonsN = 16;
let button;


function createButtons (buttonsN) {

    for (let i=0; i< buttonsN; i++) {
        console.log(i)
        button = document.createElement('button');
        button.setAttribute('id', i);
        button.setAttribute('class', 'btn')
        button.textContent = 'btn_name';
        console.log(button);
        document.getElementById('bttns').appendChild(button);
    }
}

createButtons(buttonsN)