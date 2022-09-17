const generics = <T>(value:T, times:number = 5): T[] => {
    return new Array(times).fill(value)
}
// 定义泛型
let getArray: <T>(arg:T, times: number) => T[]
getArray = (arg:any, times:number) => {
    return new Array(times).fill(arg)
}
console.log(generics<string>('123'));

// 类型别名
type getArrayAA= <T>(arg:T, times: number) => T[]
let getArrayAA: getArrayAA =(arg:any, times:number) => {
    return new Array(times).fill(arg)
}

// interface GetArrays {
//     <T>(arg: T, times: number) : T[]
// }

// 定义到最外层，所有内部都可以使用
// interface GetArrays<T> {
//     (arg: T, times: number) : T[]
//     array: T[]
// }

// 泛型继承
interface Leng{
    length: number
}
const genericsBy = <T extends Leng>(value:T, times:number = 5): T[] => {
    return new Array(times).fill(value)
}
// genericsBy(123,66) // 报错
generics('123', 66)
generics({
    length:5
},77)


// 泛型约束 继承对象中所有key，不存在即报错
const getProp = <T, K extends keyof T>(object:T, n: K) => {
    return object[n]
}

const obja = {
    a: 'b',
    b: 'c'
}

getProp(obja, 'a')
// getProp(obja, 'c') 报错
