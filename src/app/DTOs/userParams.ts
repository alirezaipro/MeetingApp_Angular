import { UserDTO } from "./UserDTO";

export class UserParams {
    gender: string;
    minAge = 18;
    maxAge = 99;
    pageNumber = 1;
    pageSize = 5;

    constructor(user: UserDTO) {
        this.gender = user.gender === 'female' ? 'male' : 'female';
    }
}