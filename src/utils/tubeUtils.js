export const spillToTubes = (tubes, idFrom, idTo) => {
    const newTubes = JSON.parse(JSON.stringify(tubes));
    const tubeFrom = newTubes.find(tube => tube.id === idFrom);
    const tubeTo = newTubes.find(tube => tube.id === idTo);

    const colorToAdd = tubeFrom.colors[tubeFrom.colors.length - 1];
    let count = 1;
    for (let i = tubeFrom.colors.length - 2; i >= 0; i--) {
        if (colorToAdd === tubeFrom.colors[i]) {
            count++;
        } else {
            break
        }
    }

    if ((tubeTo.colors.length < 4 && tubeTo.colors[tubeTo.colors.length -1] === colorToAdd) || tubeTo.colors.length === 0) {
        while (tubeTo.colors.length !== 4 && count !== 0) {
            tubeTo.colors.push(colorToAdd);
            tubeFrom.colors.pop();
            count --;
        }
    }
    return newTubes;
};
