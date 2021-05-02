function hashPass(str){
    return str.replace(/[a-zA-Z]/g, "x")
};
let password = hashPass("welcome to your life");
console.log(password);