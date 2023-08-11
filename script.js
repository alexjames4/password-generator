function generatePassword(length) {
    let generatedPassword = ''
    let mergedStringOfChars = ''

    if (document.querySelector('#incl-uppercase').checked) {
        mergedStringOfChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (document.querySelector('#incl-lowercase').checked) {
        mergedStringOfChars += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (document.querySelector('#incl-numbers').checked) {
        mergedStringOfChars += '0123456789'
    }
    if (document.querySelector('#incl-symbols').checked) {
        mergedStringOfChars += '~`\'! @#$%^&*()_-+={[}]|\\:;"<,>.?/'
    }

    for (let i = 0; i < length; i++) {
        generatedPassword += mergedStringOfChars.charAt(Math.floor(Math.random() * mergedStringOfChars.length))
    }
    return generatedPassword
}

function determineStrength() {

    // const StrengthLevels = {
    //     1: 'Low',
    //     2: 'Med',
    //     3: 'High'
    // }

    // // const checkboxes = document.querySelectorAll('.checkbox:checked').length

    // document.querySelectorAll('.alert-box').forEach(alert => {
    //     const id = alert.id.charAt(11)
    //     if (id <= checkboxes) {

    //     }
    //     document.querySelector('.strength-level').textContent = StrengthLevels[checkboxes]
    // })

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
    if (checkedCounter == 0) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#24232b';
        document.querySelector('#alert-box-2').style.backgroundColor = '#24232b';
        document.querySelector('#alert-box-3').style.backgroundColor = '#24232b';
        document.querySelector('#alert-box-4').style.backgroundColor = '#24232b';
        document.querySelector('.strength-level').textContent = '';
    }
    if (checkedCounter == 1) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-2').style.backgroundColor = '#24232b';
        document.querySelector('#alert-box-3').style.backgroundColor = '#24232b';
        document.querySelector('#alert-box-4').style.backgroundColor = '#24232b';
        document.querySelector('.strength-level').textContent = 'WEAK';
    }
    if (checkedCounter == 2) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-2').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-3').style.backgroundColor = '#24232b';
        document.querySelector('#alert-box-4').style.backgroundColor = '#24232b';
        document.querySelector('.strength-level').textContent = 'OK';
    }
    if (checkedCounter == 3) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-2').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-3').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-4').style.backgroundColor = '#24232b';
        document.querySelector('.strength-level').textContent = 'GOOD';
    }
    if (checkedCounter == 4) {
        document.querySelector('#alert-box-1').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-2').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-3').style.backgroundColor = '#f7ce66';
        document.querySelector('#alert-box-4').style.backgroundColor = '#f7ce66';
        document.querySelector('.strength-level').textContent = 'STRONG';
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

document.querySelector('#slider').addEventListener('input', e => {
    document.querySelector('.slider-value').textContent = document.querySelector('#slider').value
})

document.querySelector('.slider-value').textContent = document.querySelector('#slider').value