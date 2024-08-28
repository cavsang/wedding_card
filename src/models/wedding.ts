export interface Wedding{
    id: number
    date: string
    location: Location
    groom: Person
}

interface Location{
    lat: number
    lng: number
    name: string
    address: string
    link: string

    waytocome:{
        metro: string[]
        bus: string[]
    }

}

interface Person{
    name: string
    phoneNumber: string
    account: Account
    parents: Person[]
}

interface Account{
    bankName: string
    accountNumber: string
    kakaopayLink?: string
}