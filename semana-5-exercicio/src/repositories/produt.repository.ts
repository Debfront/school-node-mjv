import { Number } from "mongoose";
import { Produt } from "../models/produto.model";

class   ProdutRepository {
    getAll() {
        return Produt.find();
    }

    getByDocument(id: number) {
        return Produt.findOne({id: id});
    }

    create(produt: typeof Produt){
        return Produt.create(produt);
    }

    update(id: number, produt: Partial<typeof Produt>){
        return Produt.updateOne({id: id}, {$set: produt});
    }
    remove(id: number){
        return Produt.deleteOne({id: id});
    }
}

export default new ProdutRepository();