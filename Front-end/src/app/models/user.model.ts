export interface User {
    _id?: string;
    firstname: string;
    lastname: string;
    email: string;
    password?: string;
    location?: string;
    birthday?: string;
    phone?: string;
    image?: string;
    last_login?: Date;
    userType?: 'Customer' | 'Freelancer';
}

export interface Customer extends User {
    userType: 'Customer';
}

export interface Freelancer extends User {
    userType: 'Freelancer';
    skills?: string[];
    experience?: string;
    portfolio?: string;
} 