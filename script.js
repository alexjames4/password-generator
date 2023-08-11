function generatePassword(length) {
    let generatedPassword = ''
    let uppercaseLetters = ''
    let lowercaseLetters = ''
    let numbers = ''
    let symbols = ''

    if (document.querySelector('#incl-uppercase').checked) {
        uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (document.querySelector('#incl-lowercase').checked) {
        lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    }
    if (document.querySelector('#incl-numbers').checked) {
        numbers = '0123456789'
    }
    if (document.querySelector('#incl-symbols').checked) {
        symbols = '~`\'! @#$%^&*()_-+={[}]|\\:;"<,>.?/'
    }
  
    let mergedStringOfChars = ''
    mergedStringOfChars = mergedStringOfChars.concat(uppercaseLetters, lowercaseLetters, numbers, symbols)
    mergedStringOfCharsLength = mergedStringOfChars.length
    for (let i = 0; i < length; i++) {
        generatedPassword += mergedStringOfChars.charAt(Math.floor(Math.random() * mergedStringOfCharsLength))
    }
    return generatedPassword
}


let length = document.querySelector('#slider').value

document.querySelector('#password').value = generatePassword(length)
console.log(document.querySelector('#password').value)
