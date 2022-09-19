// 联合类型
interface KeyOfs {
    name: string,
    num: number
}
let testKeyOf: keyof KeyOfs
testKeyOf = 'name'
testKeyOf = 'num'

function getValue<T, K extends keyof T>(obj: T, name:K[]):T[K][] {
    console.log('返回', name.map(v => obj[v]));
    return name.map(v => obj[v])
}
const result2:(string | number)[] = getValue({name: '张建国', age: 29}, ['name', 'age'])

// []索引访问操作符, string类型可以转换number，但number不能转换string
type NameTypes = KeyOfs['name']


// 映射类型：类似继承，当你想复用其他interface中的很多属性时，或者一样，添加不可修改
interface Inters {
    name: string,
    age: number,
    show: boolean
}

// 为每个key添加可读属性,可添加可选属性，系统内置Readonly:只读，Partial：可选, Pick、Record
type exetens<T> = {
    // readonly [P in keyof T]: T[P]
    // readonly [P in keyof T]?: T[P] // 增加修饰符
    -readonly [P in keyof T]-?: T[P] // 去除可读和去除可选
}

// type readonly1 = exetens<Inters>
// 使用系统
type readonly1 = Readonly<Inters>


const inters: readonly1 = {
    name: 'z',
    age: 7,
    show: false
}
// inters.name = 's' 继承只读属性


// unknown
// [1]任何类型都可以赋值给unknown类型
let valuep: unknown
valuep = 1
valuep = true
// [2]如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型，此时他只能赋值给unknown和any
let valuep1: unknown
// let valuep2:string = valuep1
valuep1 = valuep1

// [3]如果没有类型断言或基于控制流的类型细化时，不能在他上面进行任何操作
let valuep4: unknown
// valuep4+=1

// [4]unknown与任何其他类型组成的交叉类型，最后都等于其他类型
type type1 = string & unknown

// [5]unknown与任何其他类型（除了any）组成的联合类型， 都等于unknown
type type2 = unknown | string
type type3 = any | unknown

// [6]never类型是unknown的子类型
type type4 = never extends unknown ? true :  false

// [7]keyof unknown等于类型never
type type5 = keyof unknown

// [8]只能对unknown进行等于不等操作，不能进行其他操作
// valuep === valuep1

// [9]unknown类型的值不能访问它的属性，也不能作为函数调用和作为类创建实例
let valuep2: unknown
// valuep2.age
// new valuep2

// [10]使用映射类型时，如果遍历的是unknown类型，则不会映射任何属性
type type6<T> = {
    [p in keyof T] : number
}
type type7 = type6<any>
type type8 = type6<unknown>


// 条件类型
type type9<T> = T extends string ? string : number
let type10: type9<true>
// 分布式条件类型
type type11<T> =
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T extends () => void ?  () => void  :
    object

type type12 = type11< () => void >
type type13 = type11< (() => void) | string[] >

// 判断前面T是否为后面数值的子类型
type type14<T, U> = T extends U ? never : T
type type15 = type14<string | number | boolean, undefined | number>


// 条件类型和映射类型结合的例子,[keyof T]获取所有属性里面部位never的属性值
type type16<T> = {
    [k in keyof T]: T[k] extends Function ? k : never
}[keyof T]
interface Part {
    id: number
    name: string
    subparts(newName: string): void
    undatePart(newName: string) : void
}
// type type17 = type16<Part>
type type17 = type16<Part>


// 条件类型的推断infer,判断如果是数组，取数组中的值，
type type18<T> = T extends any[] ? T[number] : T
type type19 = type18<string[]>
type type20 = type18<number[]>

type type21<T> = T extends Array<infer U> ? U: T
type type22 = type21<string[]>


// 内置的条件类型Exclude,选出第一个不在第二个参数里面的参数
type type23 = Exclude< 'a' | 'b' | 'c', 'a'>

// Extract选取中T中可以给U的
type type24 = Extract<'a' | 'b' | 'c', 'c' | 'b'>

// NoNullable 去除null和undefined
type type25 = NonNullable<string | number | null | undefined>

// ReturnType 获取函数返回值类型
type type26 = ReturnType<() =>string>

// InstanceType<T>获取构造函数中的实例类型
class Aclass {
    name:string
    constructor(name: string){
        this.name = 'z'
    }
}

type type27 = InstanceType<typeof Aclass>
type type28 = InstanceType<any>
type type29 = InstanceType<never>
// type type30 = InstanceType<string> 报错
