module.exports = function toReadable(n) {
    const arrNum1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrNum2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const tensHundreds = +(n.toString().slice(0, 1));
    const once = +(n.toString().slice(-1));
    const numTo120 = +(n.toString().slice(-2));
    const hundredsTens = +(n.toString().slice(1, 2));

    if (n === 0) return 'zero';

    if (n > 0 && n < 20) {
        return arrNum1[n].trim();
    }

    if (n >= 20 && n < 100) {
        return `${arrNum2[tensHundreds]} ${arrNum1[once]}`
    }

    if ((n - (tensHundreds * 100)) < 20 && n >= 100) {
        return `${arrNum1[tensHundreds]} hundred ${arrNum1[numTo120]}`
    }

    if (n >= 120 && n < 1000) {
        return `${arrNum1[tensHundreds]} hundred ${arrNum2[hundredsTens]} ${arrNum1[once]}`
    }
}
