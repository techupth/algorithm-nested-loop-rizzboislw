// เริ่มเขียนโค้ดตรงนี้ 
function multiplicationTable(target) {

    let result = '';

    for(let i = 1; i <= target; i++){
        for(let j = 1; j <= 5; j++){
            result += (j * i) + '\t'
        }
        result +='\n';
    }
    return result
}

console.log(multiplicationTable(5));