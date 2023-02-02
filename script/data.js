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
    },
    2: {
        'question': 'Who invented the barcode?',
        0: 'Dave',
        1: 'Richard Strauss',
        2: 'Norman Joseph Woodland',
        'answer': 2
    },
    3: {
        'question': 'Where is the check digit located on a UPC barcode?',
        0: 'Left',
        1: 'Middle',
        2: 'Right',
        'answer': 2
    },
    4: {
        'question': 'What is the check digit for the UPC barcode : 81120401234',
        0: '2',
        1: '4',
        2: '8',
        'answer': 1
    },
    5: {
        'question': 'What is the check digit for the UPC barcode : 85626000279',
        0: '3',
        1: '5',
        2: '7',
        'answer': 0
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