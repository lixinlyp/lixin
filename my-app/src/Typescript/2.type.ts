type Gender = 'man' | 'woman'
type Pig = {
    name: string
    age: number
}

type Person = {
    name: string
    age: number
    info: {
        gender: Gender
    }
}

type Animal = Person & Pig;

const a: string = '123'


type Value = string | number
function isString(value: Value): value is string {
    return typeof (value) === "string"
}

function isNumber(value: Value) {
    return typeof (value) === "number"
}

const b: Value = 123



