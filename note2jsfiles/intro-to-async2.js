async function checkIfEmailExists(email) {
    // call the database 
    // SELECT * FROM DB where email=email 
    throw new Error("Invalid email format")
    return true
}

async function createUserRecord(email, password) {
    try {
        // check if the record already exist
        const ifRecordExist = await checkIfEmailExists(email) //undefined
        if (ifRecordExist) {
            return "This record already exist in our system"
        } else {
            // create a new record in the db
            createRecordInTheDatabase()
        }
    }
    catch (err) {
        return err
    }
}



// async function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 2000);
//     });
// }

// async function fetchDataAndDisplay() {
//     try {
//         console.log('Start fetching data...');
//         const result = await fetchData();
//         //console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// console.log('Start of script');
// fetchDataAndDisplay();
// console.log('End of script');