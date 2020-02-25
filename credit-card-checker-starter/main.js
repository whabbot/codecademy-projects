// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = numbers => {
    // Returns true if valid, false if not
    let check = [...numbers];
    // Reverse list of numbers
    check.reverse();
    // console.log(check);
    for (let i = 1; i < check.length; i += 2) {
        let modifiedNumber = check[i] * 2;
        if (modifiedNumber > 9) {
            modifiedNumber -= 9;
        }
        check[i] = modifiedNumber;
    }
    // console.log(check);
    let luhnSum = check.reduce((sum, number) => sum + number, 0);
    // console.log(luhnSum);
    return luhnSum % 10 === 0;
}

const findInvalidCards = numbersOfCards => numbersOfCards.filter(numbersOfCard => !validateCred(numbersOfCard));

const idInvalidCardCompanies = cards => {
    let invalidCardCompanies = [];
    /*if (invalidNumbers.some(numbersOfCard => numbersOfCard[0] === 3)) {
        invalidCardCompanies.push('Amex');
    }
    if (invalidNumbers.some(numbersOfCard => numbersOfCard[0] === 4)) {
        invalidCardCompanies.push('Visa');
    }
    if (invalidNumbers.some(numbersOfCard => numbersOfCard[0] === 5)) {
        invalidCardCompanies.push('Mastercard');
    }
    if (invalidNumbers.some(numbersOfCard => numbersOfCard[0] === 6)) {
        invalidCardCompanies.push('Discover');
    }
    if (invalidNumbers.some(numbersOfCard => (numbersOfCard[0] !== 3 && numbersOfCard[0] !== 4 && numbersOfCard[0] !== 5 && numbersOfCard[0] !== 6))) {
        invalidCardCompanies.push('Company not found');
    }
    */

    for (let card of cards) {
        switch (card[0]) {
            case 3: {
                if (companyNotAlreadyPresent('Amex', invalidCardCompanies)) {
                    invalidCardCompanies.push('Amex');
                }
                break;
            }
            case 4: {
                if (companyNotAlreadyPresent('Visa', invalidCardCompanies)) {
                    invalidCardCompanies.push('Visa');
                }
                break;
            }
            case 5: {
                if (companyNotAlreadyPresent('Mastercard', invalidCardCompanies)) {
                    invalidCardCompanies.push('Mastercard');
                }
                break;
            }
            case 6: {
                if (companyNotAlreadyPresent('Discover', invalidCardCompanies)) {
                    invalidCardCompanies.push('Discover');
                }
                break;
            }
            default: {
                if (companyNotAlreadyPresent('Company not found', invalidCardCompanies)) {
                    invalidCardCompanies.push('Company not found');
                }
                break;
            }
        }

    }
    return invalidCardCompanies;

}

const companyNotAlreadyPresent = (company, companies) => companies.indexOf(company) < 0

const invalidCards = findInvalidCards(batch);

console.log(idInvalidCardCompanies(invalidCards));

// Extra stuff below