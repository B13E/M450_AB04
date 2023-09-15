function reverseString(stringToReverse) {
    return stringToReverse.split('').reverse().join('');
}

function validateEmail(emailAddress) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(emailAddress);
}

function validatePassword(passwordToCheck) {
    if(passwordToCheck.length < 12) {
        return false;
    }

    if(!/[a-z]/.test(passwordToCheck)) {
        return false;
    }

    if(!/[A-Z]/.test(passwordToCheck)) {
        return false;
    }

    if(!/[0-9]/.test(passwordToCheck)) {
        return false;
    }

    let specialCharacterPattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!specialCharacterPattern.test(passwordToCheck)) {
        return false;
    }

    return true;
}

module.exports = { reverseString, validateEmail, validatePassword };
