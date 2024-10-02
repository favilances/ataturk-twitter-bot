const Twit = require('twit');
const ataturkWords = require('ataturk-words');
const config = require('./config');
const quotes = require('./words');

const T = new Twit(config);

const sendQuote = () => {
  const testCases = [
      {
        options: { min: 1, max: 2, quotesPerString: 1 }
      }
    ];
    testCases.forEach((testCase, index) => {
      randomQuote = quotes(testCase.options)
    });}


function tweetAtaturkWord() {

  T.post('statuses/update', { status: randomQuote }, function (err, data, response) {
    if (err) {
      console.log('Bir hata oluştu:', err);
    } else {
      console.log('Başarıyla tweet atıldı:', randomQuote);
    }
  });
}

// İlk çalıştırmada hemen tweet at
tweetAtaturkWord();

// Her 1 saatte bir tweet at (3600000 milisaniye)
setInterval(tweetAtaturkWord, 3600000);
