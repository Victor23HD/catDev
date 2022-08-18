function showScreen(a,b){

    let newElement = document.createElement("div");
    let txt = document.createTextNode(`${a} ${b}`);
        newElement.appendChild(txt);

    let elementTarget = document.querySelector("#result");
    let elementFather = elementTarget.parentNode;

        elementFather.appendChild(newElement);

}

// --------------------------------------------------

let n1,n2,key;

let choose = {
    sum: function(){
        getNumber();
        let x = n1+n2;
        showScreen("Soma:",x);
    },
    subtraction: function(){
        getNumber();
        let x = n1-n2;
        showScreen("Subtração:",x);
    },
    multiplication: function(){
        getNumber();
        let x = n1*n2;
        showScreen("Multiplicação:",x);
    },
    division: function(){
        getNumber();
        let x = n1/n2;
        showScreen("Divisão:",x);
    }
}


function getNumber(){
    
    n1 = parseInt(document.querySelector("#valueOne").value);
    n2 = parseInt(document.querySelector("#valueTwo").value);
}

// ------------------------------------------------------

let test = {
    key: function(){
        getKey();
        let b1 = /\W|_/.test(key);
        let b2 = /["']/.test(key);
        console.log(b1,b2);
        if(key.length >= 8)
        {
            if(b1 == true && b2 == false)
            {
                showScreen("Senha permitida:",key);
               
            }else{
                showScreen("Senha invalida","");
            }
        }else{
            showScreen("Senha muito pequena!","");
        }
    },
    phone: function(){
        getKey();
        let b1 = /\d{6,7}-\d{4}/.test(key);
        let b2 = /\d{10,11}/.test(key);
        if(b1 == true || b2 == true){
            showScreen("Telefone aceito:",key);
        }else{
            showScreen("Telefone recusado","");
        }
    },
    email: function(){
        getKey();
        let b1 = /\w.{6,30}@\w{5,14}.com|com.br/.test(key);
        let b2 = /["']/.test(key);
        if(b1 == true && b2 == false){
            showScreen("Email permitido:",key)
        }else{
            showScreen("Email invalido!","");
        }
    }
}

function getKey(){
    key = document.querySelector("#valueThree").value;
}

//----------------------------------------------------------

let allButton = document.querySelectorAll("Button");

console.log(allButton);
