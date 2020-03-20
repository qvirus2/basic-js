class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct
    }
    encrypt(word, key) {
        if (!word || !key) throw new Error()
        let keyArr = key.toUpperCase().split('')
        let wordArr = word.toUpperCase().split('')
        let keyIndex = 0
        let maskArr = []
        let encryptedArr = []
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i].match(/[a-z]/gi)) {
                if (keyIndex >= keyArr.length) keyIndex = 0
                maskArr.push(keyArr[keyIndex])
                keyIndex++
            } else {
                maskArr.push('~')
            }
        }

        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i].match(/[a-z]/gi)) {
                let asciiCode = wordArr[i].charCodeAt() + maskArr[i].charCodeAt() - 65
                encryptedArr.push(String.fromCharCode(asciiCode > 64 && asciiCode < 91 ? asciiCode : asciiCode - 26))

            } else {
                encryptedArr.push(wordArr[i])
            }
        }
        return this.direct ? encryptedArr.join('') : encryptedArr.reverse().join('')

    }

    decrypt(crypted, key) {
        if (!crypted || !key) throw new Error()

        let keyArr = key.toUpperCase().split('')
        let wordArr = crypted.toUpperCase().split('')
        let keyIndex = 0
        let maskArr = []
        let encryptedArr = []
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i].match(/[a-z]/gi)) {
                if (keyIndex >= keyArr.length) keyIndex = 0
                maskArr.push(keyArr[keyIndex])
                keyIndex++
            } else {
                maskArr.push('~')
            }
        }

        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i].match(/[a-z]/gi)) {
                let asciiCode = wordArr[i].charCodeAt() - maskArr[i].charCodeAt() + 65
                encryptedArr.push(String.fromCharCode(asciiCode > 64 && asciiCode < 91 ? asciiCode : asciiCode + 26))

            } else {
                encryptedArr.push(wordArr[i])
            }
        }

        return this.direct ? encryptedArr.join('') : encryptedArr.reverse().join('')

    }
}

module.exports = VigenereCipheringMachine;
