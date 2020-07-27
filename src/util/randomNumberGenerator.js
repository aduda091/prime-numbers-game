const primeNumbers = [1, 2, 3, 5, 7];

const randomElement = () => {
    const length = primeNumbers.length;
    const index = Math.floor(Math.random() * length);

    return primeNumbers[index];
};

module.exports = () => {
    return (
        randomElement() * randomElement() * randomElement() * randomElement()
    );
};
