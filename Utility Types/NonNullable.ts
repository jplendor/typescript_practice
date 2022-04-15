// NonNullable<T>
// null과 undefined 제외시킴

type T1 = string | null | undefined | void
type T2 = NonNullable<T1> // type T2 = string | void