
/**
 * This is a simple function to check
 * if a user exists in our database or not
 */
function userExistsInDB(email, check) {
    
    //call db to check if the user exist
    return check
}

function respondToUser(email) {
    let condition = userExistsInDB(email, false)

    if(condition) {
        return "User Exists in DB"
    } else {
        return "User not found"
    }
}

let result = respondToUser("johndoe@email.com")
console.log(result)