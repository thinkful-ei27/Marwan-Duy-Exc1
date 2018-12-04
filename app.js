function max(numbers) {
    let maxNum = numbers[0]
    while (i < numbers.length) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
            i++
        }
    }
    return maxNum;
}
max([1, 2, 3, 4, 5])

function min(numbers){
    let minNum = numbers[0]
    while (i < numbers.length){
        if(numbers[i] < minNum){
            minNum = numbers[i]
            i++
        }
    }
    return minNum;
}

