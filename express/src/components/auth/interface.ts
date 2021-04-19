export interface ICreateUserInputDTO {
    name: string;
    email: string;
    password: string;
    gender: string;
}

export interface ILoginUserInputDTO {
    email: string;
    password: string;
}
