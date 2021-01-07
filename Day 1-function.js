Day 1 js function
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants);
}

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r=readLine();
    const PI=Math.PI;
    console.log(PI*r*r);
    console.log(2*PI*r);
    }