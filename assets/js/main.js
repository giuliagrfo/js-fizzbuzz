// stampare numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    console.log(i);
}   

// stampare Fizz per numeri multipli di 3
//stampare Buzz per numeri multipli di 5
// stampare FizzBuzz per numeri multipli sia di 3 che di 5

for (let i = 1; i <= 100; i++){
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 == 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    }
     
}




