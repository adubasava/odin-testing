function analyzeArray(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    const average = (sum / array.length) || 0;
    const min = array.reduce((min, val) => Math.min(min, val), array[0]);
    const max = array.reduce((max, val) => Math.max(max, val), array[0]);
    const length = array.length;
    return {"average": average, "min": min, "max": max, "length": length}
}

export default analyzeArray