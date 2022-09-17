 let addFun:(x:number, y:number) => number
 addFun = (arg1:number, arg2:number) : number =>arg1 + arg2
 addFun = (arg1:number, arg2:number) =>arg1 + arg2

 type Add = (x:number, y:number) => number

//  可选参数定义在必选参数后面
type Adds = (x:number, y:number, p?: number) => number

// 默认参数
type Reset = (x:number, y:number) => number

let testFun = (x:number, y:number = 5) => x + y
// 根据默认值自动判断类型
let testFun1 = (x:number, y = 5) => x + y


// ...运算符
const handelData = (v: number, ...args:number[])  => {
    console.log('传入的值', args);
}
handelData(1,8,9,4)


// 函数重载

function FunA(x: string): string[]
function FunA(x: number): number[]
function FunA(x: any):any {
    if(typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item:any) => Number(item))
    }
}

console.log(FunA(123));
console.log(FunA('abc'));


