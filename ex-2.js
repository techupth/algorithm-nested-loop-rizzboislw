// เริ่มเขียนโค้ดตรงนี้ 
function printStar(target) {
    let result = '';
    for(let i = 1; i <= target; i++){
        for(let j = 1; j <= i; j++){
            result += '*' + '\t'
        }
        result += '\n'
    }
    return result
}

console.log(printStar(5));


// single loop method
function printStar2(target){

    let array = []
    for(let i = 1; i <= target; i++){
        array.push('* \t'.repeat(i) + '\n')
    }
    return array.join('')
}

console.log(printStar2(5));

