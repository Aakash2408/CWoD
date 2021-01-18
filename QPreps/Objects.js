function personDetail(a, b) {
    return{
        "firstName":a,
        "lastName":b,
        "fullName":`${a} ${b}`
    }
}

module.exports = personDetail;