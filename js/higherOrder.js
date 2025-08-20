function func(){
    console.log("hello,i'm the first function")
}

function higherOrder(func){
    console.log("hello i'm the higher order function")
    func()
}
higherOrder(func)