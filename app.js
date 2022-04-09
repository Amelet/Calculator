let buttonsN = 16;
let button;
let btnList;
let display_math;
let store_result;
let bttn_names = [
"7", "8", "9", "/",
"4", "5", "6", "*",
"1", "2", "3", "+",
".", "0", "=", "-"]
let var1 = '';
let operator = '';
let var2 = '';
let fillVar1 = true;
let fillVar2 = false;
let rslt;
let math_oper = ["+", "-", "/", "*"];
let erasebtn;


function do_math(var1, operator, var2) {
    console.log("in function: "+var1+operator+var2)
    if (operator == "+") {
        return Number(var1)+Number(var2);
    } else if (operator == '-') {
        return Number(var1)-Number(var2)
    } else if (operator == '*') {
        return Number(var1)*Number(var2)
    } else if (operator == '/') {
        return Number(var1)/Number(var2)
    }

}


function erase () {
    var1 = '';
    operator = '';
    var2 = '';
    fillVar1 = true;
    fillVar2 = false;
    rslt = document.querySelector('.result');
    rslt.innerHTML = var1+operator+var2;
}


function clct(e) {
    button_id = e.target.id
    if (operator.length == 0 && var2.length == 0) {
        fillVar2 = false;
    }

    if (math_oper.indexOf(button_id) < 0 && button_id !== "=") {
        if (fillVar2 == false && fillVar1 == true) {
            var1 += button_id;
        } else if (fillVar2 == true) {var2 += button_id;}
    }

    else if (button_id == "=") {
        if (var2.length != 0) {
            var1 = do_math(var1,operator,var2);
            var2 = '';
            operator = '';
            fillVar2 = true;
            fillVar1 = false;
        } 

    } else {
        
        if (operator.length == 0) {
            operator = button_id;
            fillVar1 = false;
            fillVar2 = true;
            }

        else {
            
            var1 = do_math(var1,operator,var2);
            var2 = '';
            operator = button_id;
            fillVar2 = true; 
        }
    }

    console.log('v1: '+var1+' op: '+operator+' v2: '+var2);
    // display results
    rslt = document.querySelector('.result');
    rslt.innerHTML = var1+operator+var2;
}


function createButtons (buttonsN) {
    for (let i=0; i< buttonsN; i++) {
        button = document.createElement('button');
        button.setAttribute('id', bttn_names[i]);
        button.setAttribute('class', 'btn')
        button.textContent = bttn_names[i];
        document.getElementById('bttns').appendChild(button);
              
    }   
}

createButtons(buttonsN)

// attach function to each button
btnList = document.querySelectorAll('.btn');
for (let b=0; b<btnList.length; b++) {
    btnList[b].addEventListener('click', clct);
}

// attach erase function to a button
erasebtn = document.querySelector('.erase');
erasebtn.addEventListener('click', erase);