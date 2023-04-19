import UserRepository from "../repositories/user.repository";
import { IUser, User} from "../models/users.model";


class UserService{
    getAll() {
        return UserRepository.getAll();
    }

    getByDocument(document:string) {
        return UserRepository.getByDocument(document);
    }

    create(user: IUser){
        if(user.password)  {
        user.password = user.password
        }
        return UserRepository.create(user);
     }

    remove(document: string){
       return UserRepository.remove(document);
    }

    update(document: string, user: Partial<IUser>) {
       return UserRepository.update(document, user);
    }
}
export default new UserService();