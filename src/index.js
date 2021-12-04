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

const MORSE_SYMBOL_TABLE = {
  '10': '.',
  '11': '-'
};
const SPACE = '**********';

const sliceBySize = (str, chunkSize) => {
  let chunks = [], chunk = '';
  for (let i = 0; i < str.length; i += 1) {
    chunk += str[i];
    if ((i + 1) % chunkSize === 0) {
      chunks.push(chunk);
      chunk = '';
    }
  }
  return chunks;
};

const toSliceByTen = word => {
  return sliceBySize(word, 10);
};

const toTrimmedZeros = word => {
  return word.map(letter => letter.slice(letter.indexOf('1')));
};

const toDecodedLetter = encodedLetter => {
  const morseEncoded = sliceBySize(encodedLetter, 2)
    .map(el => MORSE_SYMBOL_TABLE[el])
    .join('');
  return MORSE_TABLE[morseEncoded];
};

const toDecoded = encodedWord => {
  return encodedWord
    .map(toDecodedLetter)
    .join('');
};

function decode(expr) { 
  return expr
    .split(SPACE)
    .map(toSliceByTen)
    .map(toTrimmedZeros)
    .map(toDecoded)
    .join(' ');
}

module.exports = {
  decode
}