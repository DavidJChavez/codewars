export function autocomplete(input, dictionary) {
    input = input.replace(/[^a-zA-Z]/gi, '');
    let result = [];
    for(let i = 0; result.length < 5 && i < dictionary.length; i++) {
        let cleanOpt = dictionary[i].replace(/[^a-zA-Z]/gi, '');
        if (cleanOpt.substr(0, input.length).toLowerCase() === input.toLowerCase()) {
            result.push(dictionary[i]);
        }
    }
    return result;
}