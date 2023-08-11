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

function determineStrength() {
    let strengthArray = [
        document.querySelector('#incl-uppercase').checked, 
        document.querySelector('#incl-lowercase').checked, 
        document.querySelector('#incl-numbers').checked, 
        document.querySelector('#incl-symbols').checked
    ]
    let checkedCounter = 0
    strengthArray.forEach(checkbox => {
        if (checkbox == true) {
            checkedCounter++
        }
    })
    if (checkedCounter == 1) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#f7ce66';
    }
    if (checkedCounter == 2) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-2').style.backgroundColor = '#f7ce66';
    }
    if (checkedCounter == 3) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-2').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-3').style.backgroundColor = '#f7ce66';
    }
    if (checkedCounter == 4) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-2').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-3').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-4').style.backgroundColor = '#f7ce66';
    }

}

document.querySelector('#incl-uppercase').addEventListener('click', () => {
    determineStrength()
})
document.querySelector('#incl-lowercase').addEventListener('click', () => {
    determineStrength()
})
document.querySelector('#incl-numbers').addEventListener('click', () => {
    determineStrength()
})
document.querySelector('#incl-symbols').addEventListener('click', () => {
    determineStrength()
})

document.querySelector('.generate-password-btn').addEventListener('click', e => {
    e.preventDefault()
    let length = document.querySelector('#slider').value
    document.querySelector('#password').value = generatePassword(length)
    
})

document.querySelector('.copy-btn').addEventListener('click', e => {
    e.preventDefault()
    let copiedPassword = document.querySelector('#password').value
    navigator.clipboard.writeText(copiedPassword)
})
document.querySelector('#slider').addEventListener('click', e => {
    document.querySelector('.slider-value').textContent = document.querySelector('#slider').value
})