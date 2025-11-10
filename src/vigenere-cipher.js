const {NotImplementedError} = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const messageUpper = message.toUpperCase();
        const keyUpper = key.toUpperCase();
        let result = '';
        let keyIndex = 0;
        for (let i = 0; i < messageUpper.length; i++) {
            if (alphabet.indexOf(messageUpper[i]) === -1) {
                result += messageUpper[i];
            } else {
                const messageIndex = alphabet.indexOf(messageUpper[i]);
                const keyChar = keyUpper[keyIndex % keyUpper.length];
                const keyIndexInAlphabet = alphabet.indexOf(keyChar);
                const encryptedCharIndex =
                    (messageIndex + keyIndexInAlphabet) % alphabet.length;
                result += alphabet[encryptedCharIndex];
                keyIndex++;
            }
        }
        return this.type ? result : result.split('').reverse().join('');
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const messageUpper = message.toUpperCase();
        const keyUpper = key.toUpperCase();
        let result = '';
        let keyIndex = 0;
        for (let i = 0; i < messageUpper.length; i++) {
            if (alphabet.indexOf(messageUpper[i]) === -1) {
                result += messageUpper[i];
            } else {
                const messageIndex = alphabet.indexOf(messageUpper[i]);
                const keyChar = keyUpper[keyIndex % keyUpper.length];
                const keyIndexInAlphabet = alphabet.indexOf(keyChar);
                const encryptedCharIndex =
                    (messageIndex + alphabet.length - keyIndexInAlphabet) %
                    alphabet.length;
                result += alphabet[encryptedCharIndex];
                keyIndex++;
            }
        }
        return this.type ? result : result.split('').reverse().join('');
    }
}

module.exports = {
    directMachine: new VigenereCipheringMachine(),
    reverseMachine: new VigenereCipheringMachine(false),
    VigenereCipheringMachine,
};
