export interface Wedding{
    id: number
    date: string
    location: Location
    groom: PersonInfo
    bride: PersonInfo
    message: {
        intro: string
        invitation: string
    }
    galleryImages: string[]
}

export interface Location{
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

export interface PersonInfo extends Person {
    parents: Person[]
}

export interface Person{
    name: string
    phoneNumber: string
    account: Account
}

export interface Account{
    bankName: string
    accountNumber: string
    kakaopayLink?: string
}