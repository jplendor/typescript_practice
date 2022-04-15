// Record<K, T>

/*
interface Score {
    "1": "A" | "B" | "C" | "D" | "F"
    "2": "A" | "B" | "C" | "D" | "F"
    "3": "A" | "B" | "C" | "D" | "F"
    "4": "A" | "B" | "C" | "D" | "F"
}

const score : Score = {
    1: "A",
    2: "B",
    3: "C",
    4: "F"
}
*/

type Grade = "1" | "2" | "3" | "4"
type Score = "A" | "B" | "C" | "D" | "F"

const score : Record<Grade, Score> = {
    1: "A",
    2: "B",
    3: "C",
    4: "F"   
}

interface User {
    id: number
    name: string
    age: number
}

function isValid(user : User) {
    const result: Record<keyof User, boolean> = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0
    }
    return result
}