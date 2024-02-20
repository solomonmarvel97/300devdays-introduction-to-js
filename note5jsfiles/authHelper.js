/**
 * This is the function for hashing
 * user password
 * @param {string} originalPassword 
 * @returns 
 */
exports.hashUserPassword = function (originalPassword) {
    let hashedPassword = `1226162${originalPassword}` // contain the function for hashing the password
    return hashedPassword
}

/**
 * Return true or false when checking email validity
 * @param {string} originalEmail 
 * @returns 
 */
exports.checkEmailValidity = function(originalEmail) {
    let isEmailValid = true // call a function to validate email
    return isEmailValid
}
