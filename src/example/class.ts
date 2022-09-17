class ClassTest {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

// public 公共，默认

// private 私有的，继承的类中也无法访问
class P {
    private name: string
    constructor(name: string) {
        this.name = name
    }
}
const p = new P('张三')
// console.log('打印私有属性', p.name); 报错
// console.log('打印实例私有属性', P.name); 报错

// protected 受保护，可以拿到父类的方法，但拿不到属性

// readonly 只读属性，无法修改其值
