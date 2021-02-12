function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let index;
    const diff = K % days.length;
    if(diff + days.indexOf(S) + 1 > days.length){
        index = diff + days.indexOf(S) - days.length;
    } else {
       index = days.indexOf(S) + diff; 
    }
    return days[index];
};

console.log(solution('Sat', 23))
console.log(solution('Wed', 2))