// Readonly<T>
// 읽기전용으로 변경

interface Car {
    name: string
    color: string
    size?: number
}

let ourCar : Readonly<Car> = {
    name: "genesis",
    color: "black"
}

// ourCar.color = "gold" // 값 변경하려고 하면 에러