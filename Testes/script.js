function multplication(x){
    return function(y){
        return x * y;
    }
}

function multiplicationTable(n1)
{   
    document.write(`<p style="font-size:22pt;justify-content:center; text-align:center">Tabuada do ${n1}</p>`);
    for(let i = 1; i <= 10 ; i++)
    {
        let number = multplication(i);
        document.write(`<div style="font-size:16pt;justify-content:center;text-align:center"> ${n1} X ${i} = ${number(n1)}</div>`);
    }
}   

var table = document.getElementById("showTable");
table.style.fontSize="22pt";
table.style.justifyContent="center";
table.style.textAlign="center";
