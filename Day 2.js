function vowelsAndConsonants(s) {
    var vowels=["a","e","i","o","u"];
    var consonantList="";
    for (let v of s) {
        if (vowels.includes(v)) {
            console.log(v);
        } else {
            consonantList += v +"\n";
        }
    }
    console.log(consonantList);
}
