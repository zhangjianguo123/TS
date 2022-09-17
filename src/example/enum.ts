// 字符串枚举
enum Message {
    Error = 'sorry, error',
    Success = 'Hoho, success',
    Failer = Error
}

// 异构枚举
enum Result {
    Faild = 0,
    Ab = 1,
    Success = 'success',
}

interface Dog {
    type: Result.Faild
}
const dog: Dog = {
    type: Result.Faild
}

console.log(dog);


// 联合类型,只能是其中一个
enum Status {
    Off,
    On
}
interface Lints {
    status: Status
}
const lints: Lints = {
    status: Status.On
}

// 枚举添加const， 减少代码量，不会出现对象
const enum Enums {
    tset = 0
}

let doss = Enums.tset
console.log('打印', doss);
