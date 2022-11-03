
// a basic version of the more complicated code below, only returns a jumbled quote.

/*const hustleQuoter = () => { 
    const beginning = ['Invest in ', 'Be ', 'Growth is ', 'Good morning ', 'Rise and grind, ', 'Success in business requires ', 'Its not about ', 'Good things happen ', 'Do ', 'What you lack in ', 'We are what we ', 'Build a habit of ', 'What separates the ', 'Never dream of ', 'Life is short, ', 'I never trust the ', 'Never accept the ', 'People have million dollar ', 'Without commitment, ', 'Ive always had that obsessive ', 'Learn how to ' ]

    const middle = ['yourself, ', 'hustlers, ', 'paper chasing, ', 'hustle, ', 'Elon Musk, ', 'crack cocaine, ', 'startup, ', 'online courses, ', 'business, ',  'waking up at 3 am, ', 'progress, ', 'at the top of the mountain, ', 'dreams, ', 'You cannot have ', 'will to win ']

    const end = ['you will never work a day in your life.', 'I got it out the mud.', 'I never sleep.', 'car prowling and armed robbery.', 'I need my chips.', 'to live like a baller.', 'I had to work for it.', 'it will make you a better person.', 'I had to grind for this view.', 'and dollar thoughts. Get after it. ', 'success.', 'depth in anything.', 'and a commitment to excellence.']

    let randomNumber1 = Math.floor(Math.random() * beginning.length)
    let randomNumber2 = Math.floor(Math.random() * middle.length)
    let randomNumber3 = Math.floor(Math.random() * end.length)


    //console.log( beginning[randomNumber1] + middle[randomNumber2] + end[randomNumber3])

    document.getElementById('output').innerHTML = ''
    document.getElementById('output').innerHTML = beginning[randomNumber1] + middle[randomNumber2] + end[randomNumber3]
} */



// generate random number to apply to properties' lengths to get a random word from the property array based on the length.

const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num)    
}

// Get an output to determine which of the two word banks

const getBinary = () => {
    if(Math.floor(Math.random() * 2) === 0){
         return 0
    } else {
         return 1
    }

}


// The two word banks that quotes will be drawn from

const goodHustle =  {
    quality: ['rockin', 'solid', 'dedicated', 'creative', 'ruthless', 'savage', 'animalistic', 'derranged', 'monumental', 'unsettling', 'hard' ],

    action: ['cop a rolex', 'adopt 27 chihuahuas', 'do donuts in the whip', 'hustle harder', 'invest in dividend-paying assets', 'buy a residential apartment building in outer space', 'buy an exotic pet on the darkweb', 'hit tags on cars at the Porsche dealership', 'release zoo animals', 'buy speedboats and joust with the homies on the open ocean', 'summon expensive demons', 'carry out a hostile takeover on Amazon', 'become the Pablo Escobar of alien drugs'],

    result: ['flex people senseless', 'go dumb', 'achieve legal king status in 17 countries', 'live like a boss', 'live better', 'determine who is the maddest', 'buy a castle', 'fight Elon Musk on live TV', 'be the GOAT', 'power the fuck up', 'open your third eye', 'join the illuminati']
}
     
const badHustle = {

    quality: ['whack', 'pathetic', 'goofy', 'useless', 'on broke mode', 'devoid of grind', 'unsatisfactory', 'juvenille', 'unacceptable', ],

    action: ['rob a senator', 'sell crack', 'learn code', 'steal cars', 'commit credit card fraud', 'get your priorities straight', 'learn discipline', 'sell booty pics', 'sell fake supplements', 'eat ass on IG live', 'steal groceries from Whole Foods', 'steal prescriptions from CVS', 'hack a flying taxi in Dubai'],

    result: ['get your money up', 'eat right', 'develop moderately acceptable hygeine', 'get a car that runs', 'get off my couch', 'stop arguing with people on social media', 'run over Jeff Bezos in a vintage Ferrari']
    
}




// Generates the rough output quote

const getQuote = () => {

    // create variable of the getBinary() function to determine which word bank will be drawn from 
    
    let binary = getBinary()
   
    if(binary === 0){
    
    // empty array that results will be pushed to 
    let hustleQuote = [];
    
        // create a random number to index based on the length of the wordbank's properties
    let randomNumber = getRandomNumber(goodHustle.quality.length);
        // pick a word from each property to be used in the quote
    hustleQuote.push(`Your hustle is ${goodHustle.quality[randomNumber]}. `);
        randomNumber = getRandomNumber(goodHustle.action.length);
    hustleQuote.push(`You should ${goodHustle.action[randomNumber]} `);
        randomNumber = getRandomNumber(goodHustle.result.length);
    hustleQuote.push(`so you can ${goodHustle.result[randomNumber]}.`);
    
    let doneQuote = hustleQuote.join('')
    

    document.getElementById('output').innerHTML = '';
    document.getElementById('output').innerHTML = doneQuote;

} else if (binary === 1){
    
    // empty array that results will be pushed to 
    let hustleQuote = [];

        // create a random number to index based on the length of the wordbank's properties
    let randomNumber = getRandomNumber(badHustle.quality.length);
        // pick a word from each property to be used in the quote
    hustleQuote.push(`Your hustle is ${badHustle.quality[randomNumber]}. `);
        randomNumber = getRandomNumber(badHustle.action.length);
    hustleQuote.push(`You should ${badHustle.action[randomNumber]} `);
        randomNumber = getRandomNumber(badHustle.result.length);
    hustleQuote.push(`so you can ${badHustle.result[randomNumber]}.`);

    let doneQuote = hustleQuote.join('')

    document.getElementById('output').innerHTML = '';
    document.getElementById('output').innerHTML = doneQuote;
    }
}

// Turn the quote function output into a variable for the final 'beatification'

/* let quote = getQuote()


// Join the array together with no quotes, brackets or commas

const joinedQuote = quote.join('')
    
const presentQuote = () => {

    document.getElementById('output').innerHTML = '';
    document.getElementById('output').innerHTML = joinedQuote;
} */




