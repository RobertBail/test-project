function generateRandomPassword(length, options) {
    const characters = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        special: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    let selectedCharacters = '';
    if (options.includeUppercase) selectedCharacters += characters.uppercase;
    if (options.includeLowercase) selectedCharacters += characters.lowercase;
    if (options.includeNumbers) selectedCharacters += characters.numbers;
    if (options.includeSpecial) selectedCharacters += characters.special;

    if (selectedCharacters === '') {
        return 'Please select at least one character type!';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
        password += selectedCharacters[randomIndex];
    }
    return password;
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    if (length < 8 || length > 128) {
        document.getElementById('result').textContent = 'Please enter a length between 8 and 128.';
        return;
    }
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecial: document.getElementById('includeSpecial').checked
    };

    const randomPassword = generateRandomPassword(length, options);
    document.getElementById('result').textContent = 'Generated Password: ' + randomPassword;
});