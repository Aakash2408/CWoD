function isAlphabet(X) {
    let regex = /[A-Za-z]/ 
if ( regex.test(X) )
{
 return "Yes"
}
throw new Error("Not Alphabet")
};

module.exports = isAlphabet;