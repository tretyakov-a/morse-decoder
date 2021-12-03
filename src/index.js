const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

const toSliceByTen = word => {
  const chunks = [];
  for (let i = 0; i < word.length; i += 10) {
    chunks.push(word.slice(i, i + 10));
  }
  return chunks;
};

const toTrimmedZeros = word => {
  return word.map(letter => letter.slice(letter.indexOf('1')));
};

const toDecoded = encodedWord => {
  const morseSymbolMap = {
    '10': '.',
    '11': '-'
  };
  return encodedWord
    .map(letter => {
      let morseEncoded = '';
      for (let i = 0; i < letter.length; i += 2) {
        morseEncoded += morseSymbolMap[letter.slice(i, i + 2)];
      }
      return MORSE_TABLE[morseEncoded];
    })
    .join('');
};

function decode(expr) {
  const space = '**********';
  
  return expr
    .split(space)
    .map(toSliceByTen)
    .map(toTrimmedZeros)
    .map(toDecoded)
    .join(' ');
}

module.exports = {
  decode
}