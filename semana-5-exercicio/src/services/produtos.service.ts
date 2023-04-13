import produtRepository from "../repositories/produt.repository";
import { Produt } from "../models/produto.model";

class ProdutosService{
    getAll() {
        return produtRepository.getAll();
    }

    getByDocument(id:number) {
        return produtRepository.getByDocument(id);
    }

    create(produto: typeof Produt){
        return produtRepository.create(produto);
    }

    remove(id: number){
       return produtRepository.remove(id);
    }

    update(id: number, produto: Partial<typeof Produt>) {
       return produtRepository.update(id, produto);
    }
}
export default new ProdutosService();

