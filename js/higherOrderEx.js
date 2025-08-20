function sayHello(name){
    console.log("hello "+name)
}

function runFunc(func,name){
    this.name = name
    return func(name);
}

runFunc(sayHello,"mohit")