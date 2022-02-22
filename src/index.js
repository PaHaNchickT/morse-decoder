const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

// function decode(expr) {
//     let out = ''
//     let words = expr.split(' ')
//     words.forEach(elem => {
//         let sym = []
//         let word = elem.split('')
//         word.forEach(e => {
//             for (let keys in MORSE_TABLE) {
//                 if (MORSE_TABLE[keys] === e) {
//                     sym.push(keys)
//                 }
//             }
//         });
//         sym.forEach(e => {
//             let temp2 = ''
//             let temp = e.split('')
//             temp.forEach(el => {
//                 if (el === '.') {
//                     temp2 = temp2 + '10'
//                 } else { temp2 = temp2 + '11' }
//             })
//             let i = temp2.length
//             while (i < 10) {
//                 temp2 = '0' + temp2
//                 i = temp2.length
//             }
//             out = out+temp2
//         })
//         out = out+'**********'
//     })
//     out = out.slice(0,out.length-10)
//     console.log(out)
// }

function decode(expr) {
    let out = ''
    let words = expr.split('**********')
    words.forEach(el => {
        let word = []
        let i = el.length
        while (i > 0) {
            word.push(el.slice(0,10))
            el = el.slice(10, el.length)
            i = el.length
        }
        let final = []
        word.forEach(e => {
            let count = e.length
            let letter = []
            while (count > 0) {
                letter.push(e.slice(0,2))
                e = e.slice(2, e.length)
                count = e.length
            }
            letter = letter.filter(ee => {
                return ee !== '00'
            })
            let temp=''
            letter.forEach(element => {
                if (element === '10') {
                    temp = temp+'.'
                } else {
                    temp = temp+'-'
                }
            })
            final.push(temp)
        })
        final.forEach(element => {
            for (let keys in MORSE_TABLE) {
                if (keys === element) {
                    out=`${out}${MORSE_TABLE[keys]}`
                }
            }
        })
        out=`${out} `
    });
    return(out.slice(0,out.length-1))
}

module.exports = {
    decode
}