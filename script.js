function generatePassword(length) {
    let generatedPassword = ''
    let stringOfChars = ''

    if (document.querySelector('#incl-uppercase').checked) {
        stringOfChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (document.querySelector('#incl-lowercase').checked) {
        stringOfChars += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (document.querySelector('#incl-numbers').checked) {
        stringOfChars += '0123456789'
    }
    if (document.querySelector('#incl-symbols').checked) {
        stringOfChars += '~`\'! @#$%^&*()_-+={[}]|\\:;"<,>.?/'
    }

    for (let i = 0; i < length; i++) {
        generatedPassword += stringOfChars.charAt(Math.floor(Math.random() * stringOfChars.length))
    }
    return generatedPassword
}

function determineStrength() {
    const StrengthLevels = {
        0: '',
        1: 'WEAK',
        2: 'OK',
        3: 'GOOD',
        4: 'STRONG'
    }
    
    const checkedCounter = document.querySelectorAll('.checkbox:checked').length
    
    document.querySelectorAll('.alert-box').forEach(alert => {
        const id = alert.id.charAt(10)

        if (id <= checkedCounter) {
            alert.style.backgroundColor = '#f7ce66'
        } else {
            alert.style.backgroundColor = '#24232b'
        }
        document.querySelector('.strength-level').textContent = StrengthLevels[checkedCounter]
    })
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

document.querySelector('#slider').addEventListener('input', e => {
    document.querySelector('.slider-value').textContent = document.querySelector('#slider').value
})

document.querySelector('.slider-value').textContent = document.querySelector('#slider').value