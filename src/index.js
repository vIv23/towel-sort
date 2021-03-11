module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix == 0) return [];
    let sorted = matrix.reduce(
        (acc, val, index) => acc.concat(index % 2 ? val.reverse() : val),
        []
    );
    return sorted;
};
