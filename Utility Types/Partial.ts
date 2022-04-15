// Partial<T>
// 모든 속성을 '선택'으로 변경

interface User {
    id: number
    name: string
    age: number
    gender: "m" | "f"
}

let admin : Partial<User> = {
    id: 123,
    name: "jimmy",
}

let member : User = {
    id: 456,
    name: "tom",
    age: 27,
    gender: "f"
}