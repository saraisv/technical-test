export interface ICredentials {
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    name: string;
    lastname?: string;
    username: string;
    email: string;
    photo?: string;
    password?: string;
    role: string
}