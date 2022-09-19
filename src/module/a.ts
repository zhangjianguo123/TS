export interface FunCInterface {
    name: string,
    (arg:number) : string
}

export class ClassC {
    // tslint:disable-next-line:no-empty
    constructor() {}
}

class ClassD {
    // tslint:disable-next-line:no-empty
    constructor(){}
}

export {ClassD}

export { ClassD as ClassDNmae}

export * from './b'
export { name } from './b'
export {name as NameProp} from './b'