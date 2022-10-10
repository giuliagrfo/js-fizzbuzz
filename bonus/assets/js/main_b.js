// stampare numeri da 1 a 100
// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }   

// stampare Fizz per numeri multipli di 3
//stampare Buzz per numeri multipli di 5
// stampare FizzBuzz per numeri multipli sia di 3 che di 5
const listElement = document.querySelector('ul.list');

for (let i = 1; i <= 100; i++){
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0){
        const ul = document.querySelector('ul.list');
        const li = document.createElement('li');
        li.className = 'fizzbuzz'
        li.append('Fizzbuzz');
        ul.append(li);
        // console.log('FizzBuzz');
    } else if (i % 3 == 0){
        const ul = document.querySelector('ul.list');
        const li = document.createElement('li');
        li.className = 'fizz'
        li.append('Fizz');
        ul.append(li);
        // console.log('Fizz');
    } else if (i % 5 === 0){
        const ul = document.querySelector('ul.list');
        const li = document.createElement('li');
        li.className = 'buzz'
        li.append('Buzz');
        ul.append(li);
        // console.log('Buzz');
    } else {
        const ul = document.querySelector('ul.list');
        const li = document.createElement('li');
        li.className = 'number'
        li.append(`${i}`);
        ul.append(li);
     
    }
    
}








