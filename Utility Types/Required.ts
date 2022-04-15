// Required<T>
// 모든 속성을 '필수'로 변경

interface Car {
    name: string
    color: string
    size?: number
}

let myCar : Car = {
    name: "boongboong",
    color: "blue"
}

let yourCar : Required<Car> = {
    name: "ssingssing",
    color: "red",
    size: 100 // 없으면 에러 발생
}