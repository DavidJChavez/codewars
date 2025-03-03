export function longestMotif (seq) {
    let n = seq.length;
    let motifs = [];

    for (let len = 1; len <= n; len++) {
        for (let start = 0; start <= n - len; start++) {
            let substr = seq.slice(start,start+len);
            let count = countNonOverlapping(seq, substr);
            if (count >= 2) {
                if (!motifs.includes(substr)) {
                    motifs.push(substr);
                }
            }
        }
    }

    let maxLen = 0;
    for (const motif of motifs) {
        if (motif.length > maxLen) {
            maxLen = motif.length;
        }
    }
    
    let result = [];
    for (const motif of motifs) {
        if (motif.length === maxLen) {
            result.push(motif);
        }
    }

    console.log(result);
    return result;
}

function countNonOverlapping(text, pattern) {
    return text.matchAll(pattern).toArray().length;
}
