// 交叉类型
const mergeFun = <T, U>(arg: T, arg1: U): T & U => {
    let res = {} as T & U
    res = Object.assign(arg, arg1)
    return res
}
mergeFun({ a: 'b' }, { b: 'a' })

// 联合类型 string | number

// 类型保护: 当返回值不明确时，使用类型保护
const MaxFun = () => {
    console.log('%c>>>>>>>>>>>>>', 'color:red;', Math.round(Math.random() * 10));
    const num = Math.round(Math.random() * 10)
    if (num % 2 === 0) {
        return '123'
    } else {
        return 123
    }
}
// 第一种解决办法
function isString(value: number | string): value is string {
    return typeof value === 'string'
}
// 第二种，直接使用typeof,但不能接着使用includes（），并且只能判断string、number、boolean、symbol
let numadv = MaxFun()
// 第三种 instanceof判断是否未实例中的也守类型保护
if (typeof numadv === 'string') {
    console.log('%c>>>>>>>>>>>>>', 'color:red;', numadv.length);
} else {
    console.log('%c>>>>>>>>>>>>>', 'color:red;', numadv.toFixed());
}

// 类型断言 !num或者num?
function getSplit(num: number | null): string {
    function getRes(pre: string) {
        return pre + num?.toFixed().toString()
    }
    num = num || 0.1
    return getRes('Lison-')
}

console.log('%c>>>>>>>>>>>>>', 'color:red;', getSplit(2.05));

// 类型别名
type TypeString = string

type PositionType<T> = {x:T, y: T}
const postion: PositionType<number> = {
    x: 1,
    y: 2
}
const position2: PositionType<string> = {
    x: 'x',
    y: 'y'
}
// 嵌套语法,只能在对象属性中使用
type Childs<T> = {
    current: T,
    child?: Childs<T>
}
const children: Childs<string> = {
    current: 'str',
    child: {
        current: 'cur',
        child: {
            current: 'child'
        }
    }
}

// 字符串字面量
type types = 'a' | 'b' | 'c'
let types:types = 'c'

// 单例
interface Advanced1 {
    type: 'input',
    name: string
}
interface Advanced2 {
    type: 'select',
    age: number
}
type advanced= Advanced1 | Advanced2
function select(S:advanced ) {
    switch(S.type) {
        case 'input':
            console.log('%c>>>>>>>>>>>>>', 'color:red;','input');
            break
        case 'select':
            console.log('%c>>>>>>>>>>>>>', 'color:red;','select');
            break
        default:
            throw new Error(('出错了'))
    }
}
select({type: 'input', name: '哈哈'})
select({type: 'select', age: 99})
// select({type: 's', ages: 99})报错了

