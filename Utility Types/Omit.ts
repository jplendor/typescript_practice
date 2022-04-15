// Omit<T, K>
// 일부 속성만 생략

interface User {
    id: number
    name: string
    age: number
    gender: "m" | "f"
}

const admin : Omit<User, "age" | "gender"> = {
    id: 123,
    name: "shelly"
}