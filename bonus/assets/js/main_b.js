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
        let liElement = `<li>FizzBuzz</li>`;
        listElement.insertAdjacentHTML('beforebegin', liElement);
        // console.log('FizzBuzz');
    } else if (i % 3 == 0){
        let liElement = `<li>Fizz</li>`;
        listElement.insertAdjacentHTML('beforebegin', liElement);
        // console.log('Fizz');
    } else if (i % 5 === 0){
        let liElement = `<li>Buzz</li>`;
        listElement.insertAdjacentHTML('beforebegin', liElement);
        // console.log('Buzz');
    } else {
        let liElement = `<li>${i}</li>`;
        listElement.insertAdjacentHTML('beforebegin', liElement);
    }
    
    
}








