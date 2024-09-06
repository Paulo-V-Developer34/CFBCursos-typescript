function somaVoid(n1:number, n2:number):void {
    console.log(n1+n2)
}

somaVoid(2,4)

function somareturn(n1:number,n2:number):number {
    return n1+n2
}

let string:string = somareturn(1,23).toString()

console.log(string)