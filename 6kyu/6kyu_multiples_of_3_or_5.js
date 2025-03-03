export function solution(number) {
    if (number < 0){
        return 0;
    }
    let res = new Set();
    for (let i = 1; i < number; i++) {
        if (i%3===0 || i%5===0) {
            res.add(i);
        }
    }
    if (res.size === 0) {
        return 0;
    }
    return Array.from(res).reduce((a,b) => a+b);
}