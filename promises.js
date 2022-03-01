const myPromise = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            // if (Math.random() > 0.5) {
            // reject(new Error("Rejected"))
            // } else {
            resolve("🍕");
            // }
        }, 1000);
    }
)

console.log(myPromise)

myPromise
    .then(
        function (data) { // pizza
            console.log(data)
        }
    )
    .catch(
        function (error) { // new Error
            console.log(error)
        }
    )

