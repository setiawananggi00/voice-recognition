const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = [
    'what do you care, you never leave house anyways'
];

const feeling = [
    'im good you little piece of shit',
    'so, this is what you do, when you could be doing serious work and get your life together and create something actually usefull but now you lost direction of who you truly are and what you mean for the world, i hate you'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated, you can talk now');
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

// add a listener to button
btn.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(massage) {
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = 'what are you talking about';
    if(massage.includes('how is the weather like')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }else if (massage.includes('how are you doin')) {
        const finalText = feeling[Math.floor(Math.random() * feeling.length)];
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}