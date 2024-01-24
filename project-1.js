// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."` ,
    person:` Steve Jobs`
},
{
    quote: `"The future belongs to those who believe in the beauty of their dreams."` ,
    person:` Eleanor Roosevelt`
},
{
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."` ,
    person:` Oprah Winfrey`
},
{
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."` ,
    person:` James Cameron`
},
{
    quote: `"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."` ,
    person:` John Lennon`
},
{
    quote: `"You must be the change you wish to see in the world."` ,
    person:` Mahatma Gandhi`
},
{
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."` ,
    person:` Mother Teresa
    `
},
{
    quote: `"The only thing we have to fear is fear itself."` ,
    person:` Franklin D. Roosevelt`
},
{
    quote: `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."` ,
    person:` Martin Luther King Jr.`
},
{
    quote: `"Do one thing every day that scares you."` ,
    person:` Eleanor Roosevelt`
},
{
    quote: `"Well done is better than well said."` ,
    person:` Benjamin Franklin`
},
{
    quote: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."` ,
    person:` Helen Keller`
},
{
    quote: `"It is during our darkest moments that we must focus to see the light."` ,
    person:` Aristotle`
},
{
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."` ,
    person:` Ralph Waldo Emerson`
},
{
    quote: `"Be yourself; everyone else is already taken."` ,
    person:` Oscar Wilde`
},
{
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."` ,
    person:` Dr. Seuss`
},
{
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking."` ,
    person:` Steve Jobs`
},
{
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up."` ,
    person:` Thomas A. Edison`
},
{
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."` ,
    person:` Winston S. Churchill`
},
{
    quote: `"Whatever the mind of man can conceive and believe, it can achieve."` ,
    person:` Napoleon Hill`
},
{
    quote: `"I didn't fail the test. I just found 100 ways to do it wrong."` ,
    person:` Benjamin Franklin`
},
{
    quote: `"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end."` ,
    person:` Aristotle`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})