// Pick<T, K>
// 일부 속성만 고름

interface User {
    id: number
    name: string
    age: number
    gender: "m" | "f"
}

const admin : Pick<User, "id" | "name"> = {
    id: 123,
    name: "shelly"
}