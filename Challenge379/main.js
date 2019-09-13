// Check the Challenge at https://old.reddit.com/r/dailyprogrammer/comments/cdieag/20190715_challenge_379_easy_progressive_taxation/


const income = [0, 10000, 30000, 100000];
const rate = [0, 0.10, 0.25, 0.40];

function tax(num) {
    if (num > income[3]) {
        return Math.floor(tax(income[3]) + ((num - income[3])*rate[3]));
    } else if (num > income[2]) {
        return Math.floor(tax(income[2]) + ((num - income[2])*rate[2]));
    } else if (num > income[1]) {
        return Math.floor(tax(income[1]) + ((num - income[1])*rate[1]));
    } else if (num <= income[1] && num >= income[0]) {
        return Math.floor(num * rate[0]);
    } else {
        return 'error';
    }
}

function search (min, max, wanted) {
    var avg = Math.round((max + min)/2);
    var overall = (tax(avg)/avg).toFixed(5);

    if (overall == wanted || (max - min) == 1) {
        return avg;
    } else if (overall > wanted) {
        return search(min, avg, wanted);
    } else if (overall < wanted) {
        return search(avg, max, wanted);
    }
}

function overall(num) {
    if (num <= 0) {
        return 0;
    } else if (num >= rate[rate.length - 1]) {
        return 'error';
    } else {
        return search(10000, 2000000, num);
    }
}

console.log(overall(0.23))

