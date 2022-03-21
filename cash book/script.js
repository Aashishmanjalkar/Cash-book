let cashIn = document.getElementById('cashIn');
let cashOut = document.getElementById('cashOut');
let calculator = document.querySelector('.calculator');
let amount = document.getElementById('Amount');
let remark = document.getElementById('Remark');
let save1 = document.getElementById('save1');
let save2 = document.getElementById('save2');
let amountIn = document.querySelector('.amountIn');
let amountOut = document.querySelector('.amountOut');
let entryAmount = document.getElementById('entryAmount');
let entryReceived = document.getElementById('entryRemark');
let entry = document.querySelector('.entries');
let balance = document.getElementById('balance');
let buttons = document.querySelector('.buttons');
let totalIn = document.getElementById('totalIn');
let totalOut = document.getElementById('totalOut');
let arr = [];
let date = document.getElementById('date')

cashIn.addEventListener('click', () => {
    buttons.style.display = 'none';
    amountOut.style.display = 'none';
    calculator.style.display = 'block';
});
save1.addEventListener('click', () => {
let d = new Date();
 
    let html = `<div id="entryAmount" style="color: rgb(118, 235, 72)"> + ${amount.value}</div>
    <div id="entryRemark">${remark.value} ${d.toLocaleTimeString()} </div>`;
    date.innerHTML = d.toDateString();
    entry.innerHTML += html;
    calculator.style.display = 'none';
    buttons.style.display = 'block';
    amountOut.style.display = 'block';
    Push();
    amount.value = ""
    remark.value = ""
    console.log("cash in");
});

cashOut.addEventListener('click', () => {
    buttons.style.display = 'none';
    calculator.style.display = 'block';
    amountIn.style.display = 'none';
});
save2.addEventListener('click', () => {
let d = new Date();

    let html = `<div id="entryAmount" style="color: rgb(223, 49, 49)"> - ${amount.value}</div>
    <div id="entryRemark">${remark.value }  ${d.toLocaleTimeString()} </div>`;
    entry.innerHTML += html;
    balance.innerHTML = amount.value;
    calculator.style.display = 'none';
    buttons.style.display = 'block';
    amountIn.style.display = 'block';
    remove();
    amount.value = ""
    remark.value = ""
    console.log('cash out')
});

function Push() {
    let add = parseInt(amount.value);
    arr.push(add);
    let concat = 0;
    for (let i = 0; i < arr.length; i++) {
        concat = concat + arr[i]
        console.log(arr[i])
    }
    totalIn.innerHTML = concat + " rs" ;
    // console.log(concat-amount.value,"total Enteries")
    if(arr.length !==1){
        balance.innerHTML =(concat-amount.value + " Rs" ) ;
    }else{
        balance.innerHTML = concat + " Rs";
    }


}
let ar = []
function remove() {
    let concat = 0;
    for (let i = 0; i < arr.length; i++) {
        concat = concat + arr[i]
    }
    console.log(concat,"concat out")
    console.log(amount.value,"amount out") 
    let ad = parseInt(amount.value);
    ar.push(ad);
    let con = 0;
    for(let t=0; t< ar.length; t++){
        con = con + ar[t]
    }
    totalOut.innerHTML = (con + " rs");
    balance.innerHTML = (concat - con + " Rs");
}
