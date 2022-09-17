interface NameInfo {
    firsName: string,
    lastName: string,
    readonly type?: string // 设置只读属性
}

function interfaceFun({firsName, lastName}:NameInfo): string {
    return `${firsName}${lastName}`
}

// function interfaceFun({firsName, lastName}:{firsName:string, lastName: string}): string {
//     return `${firsName}${lastName}`
// }

// const result = interfaceFun({firsName:'张三', lastName:'李四',  name: '五五'} as NameInfo)


// 多余参数解决方式
// 1使用类型断言
// const result = interfaceFun({firsName:'张三', lastName:'李四',  name: '五五'} as NameInfo)
// 2 使用接口
// interface NameInfo {
//     firsName: string,
//     lastName: string
//     [prop: string]: any
// }
// 3 类型兼容性
const resultObj = {firsName:'张三', lastName:'李四',  name: '五五'}
const result = interfaceFun( resultObj)

console.log('result', result);


// 函数模式
// interface AddFun {
//     (num: number, str: string): number
// }
type AddFun = (num: number, str: string) => string
const add: AddFun = (n, n1) =>  n + n1
console.log(add(5,'你好'));


// 继承
 interface A {
    color:string
 }

 interface B extends A {
    age: number
 }

 let extentA: B = {
    color: 'red',
    age: 56
 }


interface Counter {
    () : void,
    count: number
}

// 闭包
 const getCount = () :Counter => {
    const c = () => {c.count++}
    c.count = 0
    return c
 }
 const copy = getCount()
 console.log(copy.count);
 copy()
 console.log(copy.count);

