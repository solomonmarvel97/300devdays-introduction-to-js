function fetchData() {
    return new Promise((resolve, reject) => {
        let result = true
        
        setTimeout(() => {
        if(result) {
            resolve("Success")
        } else {
            reject("Error")
        }

        
            reject('Sorry an error occured here');
        }, 2000);
    });
}

console.log('Start fetching data...');
fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
console.log('End of script');