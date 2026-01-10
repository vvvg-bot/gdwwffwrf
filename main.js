let p = +prompt("Введите число");
for (let i = 1 ;i <= p ;i++){
    if ( i == 1 )  {
        
        console.log(i+" banana" );
   

    }
    else  {
           console.log(i+" bananas  ");

     
       }
}
let n = +prompt("Введите число");
let sum = 0;

for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}

console.log("Сумма: " + sum)


let nn = +prompt("Введите число");
let sun = +prompt('степень')
let summ;

for (let i = 0; i <= sun; i++) {



    summ = nn ** sun



}

console.log("Сумма: " + summ)
