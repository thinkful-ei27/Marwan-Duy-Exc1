function max(numbers) {
    let maxNum = numbers[0]
    let i = 0
    while (i < numbers.length) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
        i++
    }
    return maxNum;
}
max([1, 2, 3, 4, 5])

    function min(numbers){
        let minNum = numbers[0]
        let i = 0;
        while (i < numbers.length){
            if(numbers[i] < minNum){
                minNum = numbers[i]
            }
            i++
        }
        return minNum;
    }
    min([1, 2, 3, 4, 5])


function average(numbers){
    let sum = 0;
    numbers.forEach(function(item){
        sum += item
    })
    return sum /numbers.length
}
average([1, 2, 3, 4])