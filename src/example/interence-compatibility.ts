// 类型默认以左边的值进行推断
let name1 ='lison'
// name1 = false
// let arr3: Array<number | string> = [1, 's']
let arr3: (number | string)[] = [1, 's']
let arr4 = [6,'p']
// arr3 = [7, 's', false]
// arr4 = [8, 'q', true]

// 可选参数
const getNum = (arr: number[], callback: (...arg: number[])=> number) :number => callback(...arr)
const getNums = getNum([1,2,3], (...arg) => {
    console.log('%c>>>>>>>>>>>>>', 'color:red;',arg);
    return 55
})
const getNumt = getNum([1,2,3], (v,v1,v2, v4) => {
    console.log('%c>>>>>>>>>>>>>', 'color:red;',v,v1,v2, v4);
    return v +v1 + v2
})