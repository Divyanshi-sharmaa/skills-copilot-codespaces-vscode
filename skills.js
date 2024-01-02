function getLargestNonZeroNumber(numbers) {
    const nonZeroNumbers = numbers.filter(number => number !== 0);
    return nonZeroNumbers.length > 0 ? Math.max(...nonZeroNumbers) : 0;
}

function sumofNumbers(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

function getAverage(numbers) {
    return sumofNumbers(numbers) / numbers.length;
}

