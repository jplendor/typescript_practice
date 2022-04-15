// Exclude<T1, T2>
// 타입을 제외시킴

type T1 = string | number | boolean
type T2 = Exclude<T1, number> // type T2 = string | boolean