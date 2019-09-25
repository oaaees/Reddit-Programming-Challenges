function persistence(num, count=0){
    var count = count;
    var sum = 0;
    var firstFew = Math.floor(num / 10);
    var last = num % 10;
    var length = Math.ceil(Math.log10(num));

    if (num < 10) {
        return count;
    } else {

        sum += last;

        for (let i=0;i<length;i++){
            last = firstFew % 10;
            firstFew = Math.floor(firstFew / 10);
            sum += last;
        }

        count++;
        return persistence(sum, count)
    }
}


console.log(persistence(13))
console.log(persistence(1234))
console.log(persistence(9876))
console.log(persistence(199))