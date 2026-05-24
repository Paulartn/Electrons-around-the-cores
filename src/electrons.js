function calculateElectrons(diceArray) {
    let totalElectrons = 0;

    // Wir gehen jeden einzelnen Würfel im Array durch
    for (let i = 0; i < diceArray.length; i++) {
        let diceValue = diceArray[i];

        // Die 3 hat einen Kern und 2 Elektronen drumherum
        if (diceValue === 3) {
            totalElectrons += 2;
        } 
        // Die 5 hat einen Kern und 4 Elektronen drumherum
        else if (diceValue === 5) {
            totalElectrons += 4;
        }
        // Alle anderen Würfel (1, 2, 4, 6) steuern 0 Elektronen bei
    }

    return totalElectrons;
}