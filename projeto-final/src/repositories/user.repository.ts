
import { IUser,  User } from "../models/users.model";


class UserRepository {
    getAll() {
        return User.find();
    }

    getByDocument(document: string) {
        return User.findOne({ document: document });
    }

    create(user: IUser) {
        return User.create(user);
    }

    update(document: string, user: Partial<IUser>){
        return User.updateOne({_id: document}, { $set: user});
    }

    remove(document: string) {
        return User.deleteOne({_id : document});
    }
}

export default new UserRepository();
