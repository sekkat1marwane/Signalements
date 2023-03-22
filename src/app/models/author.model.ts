export interface Author{
    id: number;
    firstName : string ;
    lastName :string ;
    birthDate : Date ;
    sexe : Sexe ;
    email : string ;
}


enum Sexe {
    M,
    F
}