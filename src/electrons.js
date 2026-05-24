function calculateElectrons(diceArray) {
    return diceArray.reduce((total, dice) => {
        if (dice === 3) return total + 2;
        if (dice === 5) return total + 4;
        return total;
    }, 0);
}