const questions = {
    0: {
        'question': 'Which is a commonly used barcode system?',
        0: 'UPC',
        1: 'Code 321',
        2: 'Caesar Cipher',
        'answer': 0
    },
    1: {
        'question': 'Is the right side of a UPC code inverse to the left?',
        0: 'No',
        1: 'Yes',
        2: 'Im not sure',
        'answer': 1
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Questions {

    static getRandom() {
        return questions[getRandomInt(Object.keys(questions).length)]
    }
}