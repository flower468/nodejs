let asyncCall1 = function(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(true){
                resolve("First Async Call Resolve Response");
            }else{
                reject("First Async Call Reject Response");
            }
        },2000);
    });
    return promise;
};

let asyncCall2 = function(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(false){
                resolve("Second Async Call Resolve Response");
            }else{
                reject("Second Async Call Reject Response");
            }
        },4000);
    });
    return promise;
};

// Promise.all([asyncCall1(), asyncCall2()]).then(
//     function(data){
//         console.log(data);
//     }
// ).catch(function(error){
//     console.log(error);
// });

// Promise.race([asyncCall1(), asyncCall2()]).then(
//     function(data){
//         console.log(data);
//     }
// ).catch(function(error){
//     console.log(error);
// });

Promise.any([asyncCall1(), asyncCall2()]).then(
    function(data){
        console.log(data);
    }
).catch(function(error){
    console.log(error);
});