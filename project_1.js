//variables

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes =[ { 
    quote: "In the middle of every difficulty lies opportunity.", 
    person: "Albert Einstein" 
},
{ 
    quote: "It always seems impossible until it’s done.", 
    person: "Nelson Mandela" 
},
{ 
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    person: "Winston Churchill" 
},
{ 
    quote: "Happiness depends upon ourselves.", 
    person: "Aristotle" 
},
{ 
    quote: "Do what you can, with what you have, where you are.", 
    person: "Theodore Roosevelt" 
},
{ 
    quote: "Don’t count the days, make the days count.", 
    person: "Muhammad Ali" 
},
{ 
    quote: "My little soda pop chik chik.", 
    person: "Ramlath Nisha" 
},
{ 
    quote: "If you tell the truth, you don’t have to remember anything.", 
    person: "Mark Twain" 
},
{ 
    quote: "The best way to predict your future is to create it.", 
    person: "Peter Drucker" 
},
{ 
    quote: "Everything you’ve ever wanted is on the other side of fear.", 
    person: "George Addair" 
}
];

btn.addEventListener('click',function(){

    let random=Math.floor(Math.random() * quotes.length);
    
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});





