import { Request, Response , Router} from 'express';
import ProdutosService from '../services/produtos.service';

const router = Router();



router.get('/', (req: Request, res: Response) => {
    const produtos = ProdutosService.getAll();
    res.send(produtos);
});

router.get('/:id', (req: Request, res: Response) => {
    const produto= ProdutosService.getByDocument(Number(req.params.id));
    if (!produto) return res.status(400).send({ message: "Produto não encontrado"});
    res.status(201).send(produto);
});


router.post('/', (req: Request, res: Response) => {
    ProdutosService.create(req.body);
    res.status(201).send({message: 'Produto criado com sucesso!'});
});

router.put('/:id', (req: Request, res: Response) => {
    try{
        ProdutosService.update( Number(req.params.id) , req.body );
        res.status(200).send({ message: "Produto atualizado com sucesso"});
    } catch (error: any) {
        res.status(400).send({message: error.message});
    }
   
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    try {
        ProdutosService.remove(Number(req.params.id));
        res.status(200).send({ message:"Produto removido com sucesso"});
    } catch (error: any){
        res.status(400).send({message: error.message});
    }
    
});

export default router;