interface Adress {
    street: string
    city: string
    state: string
    zipCode: number
}

export interface Employee {
    firstName: string
    lastName: string
    birth: string
    startDate: string
    adress: Adress
    department: string
}

export interface Error {
    status: boolean
    message: string
}

export interface UserError {
    firstName: Error
    lastName: Error
    birth: Error
    startDate: Error
    street: Error
    city: Error
    state: Error
    zipCode: Error
    department: Error
}
