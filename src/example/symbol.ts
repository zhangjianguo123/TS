const s = Symbol()

// symbol独一无二的值

let asym = Symbol('name')
let asyM = Symbol('asyn')
const testSymbol = {
    [asym] : 'symbol',
    age: 26,
    sex: 'man',
    [asyM]: '呜呜'
}

console.log('第一种', Object.keys(testSymbol)) // 无法提取出symbol值
console.log('第二种', Object.getOwnPropertyNames(testSymbol)) // 无法提取出symbol值
console.log('第三种', JSON.stringify(testSymbol)) // 无法转换symbol值
console.log('第四种', Object.getOwnPropertySymbols(testSymbol)) // 获取对象中包含symbol值
console.log('第五种', Reflect.ownKeys(testSymbol)) // 可以将对象中所有的key组成一个数组


// 两个方法属性 Symbol.for()  Symbol.keyFor()

let symkey1 = Symbol.for('lison')

let symkey2 = Symbol.for('lison')

console.log(symkey1 === symkey2);

console.log('寻找这个属性名的key值', Symbol.keyFor(symkey1));


let styarr = [1,2,3]


