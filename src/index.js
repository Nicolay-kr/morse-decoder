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

function decode(expr) {
    expr = expr.split('**********')
    for(let i in expr){
        expr[i] = expr[i].match(/.{10}/g)
    }
    for(let i in expr ){
        for(let j in expr[i]){
            expr[i][j] = expr[i][j].replace(/00/g, "").replace(/10/g,".").replace(/11/g,"-")
        }
    }
    for(let i in expr ){
        for(let j in expr[i]){
            expr[i][j] = MORSE_TABLE[expr[i][j]]
        }
    }
    for(let i in expr ){
        expr[i] = expr[i].join('')
    }
    expr = expr.join(' ')


    return expr
}

module.exports = {
    decode
}
