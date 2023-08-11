function generatePassword(length) {
    let generatedPassword = ''
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '~`! @#$%^&*()_-+={[}]|\:;"<,>.?/'
    let mergedStringOfChars = ''
    mergedStringOfChars = mergedStringOfChars.concat(uppercaseLetters, lowercaseLetters, numbers, symbols)
    mergedStringOfCharsLength = mergedStringOfChars.length
    for (let i = 0; i < length; i++) {
        generatedPassword += mergedStringOfChars.charAt(Math.floor(Math.random() * mergedStringOfCharsLength))
    }
    return generatedPassword
}
    console.log(generatePassword(24))