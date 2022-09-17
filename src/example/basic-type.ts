// 布尔类型
let bool: boolean = true

// 数值类型
let num: number = 123

// 字符串类型
let str: string = '123'

// 数组类型
// 写法1
let arr: number[]
arr = [5]
// 写法2
let arr1 :number[]
let arr2: (string | number)[]

// 元组类型:指定对应位置对应长度
let tuple: [string, number,boolean]

// 枚举类型
enum Roles {
    SUPER_AMMIN,
    ADMIN,
    USER
}
console.log(Roles);

// any类型
let value: any // 任意值

// void类型：任何值都不是
const consoleText = (v: string): void => {
    console.log(v);
}

// null和undefined
let a: null
let b: undefined

// never 表示永远不会存在的类型


// object
let obj = {
    name: '你好'
}

// 类型断言
// 第一种写法 (<string>变量)
// 第二种写法(target as string) react只能使用这个
const getList = (target: string| number) => {
    if((target as string).length || (target as string).length === 0) {
        return (target as string).length
    } else {
        return target.toString().length
    }
}