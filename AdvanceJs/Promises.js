const Mypromise = new Promise(function (resolve, reject) {
    // Do an async task
    //DB call,network, fileReade

    setTimeout(function () {
        console.log('Task Completed');
        resolve()
    }, 1000);
})

Mypromise.then(function () {
    console.log('promise consumed');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task 2');
        resolve();
    }, 1000)
}).then(function () {
    console.log('promise consumed');
})

const Mypromise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Ashish", email: 'ashish@nnnn' })
    }, 1000);
})

Mypromise1.then(function (user) {
    console.log(user);
})

promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: 'snigdha', email: 'sn@123' })
        } else {
            reject("Something Went Wrong")
        }
    }, 1000)
})

promise4.then(function (user) {
    console.log(user);
    return user.username;
})
    .then(function (username) {
console.log(username);
    })
.catch(function(err){
console.log(err);
});


promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'snigdha Naskar', email: 'sn@123' })
        } else {
            reject("SN Went Wrong")
        }
    }, 1000)
})

async function consumepromise5 (){
    try{
    const response = await promise5;
    console.log(response);
}catch(error){
    console.log(error);
}}

consumepromise5()

