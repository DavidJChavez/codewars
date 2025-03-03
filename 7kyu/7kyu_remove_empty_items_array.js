export function clean(arr) {
    let indexes = Object.keys(arr).map(m => parseInt(m));
    let res = [];
    for (const i of indexes) {
        res.push(arr[i]);
    }
    return res;
}
