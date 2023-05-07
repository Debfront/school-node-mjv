import { Request, Response, Router } from 'express';
import UsersService from '../services/users.service';

const router = Router();


router.get('/', async (req: Request, res: Response) => {
   const users = await UsersService.getAll();
   res.send(users);
});

router.get('/:id', async (req: Request, res: Response) => {
   const user = await UsersService.getByDocument(req.params._id);
   if (!user) return res.status(400).send({ message: " Usuario não encontrado" });
   res.status(201).send(user);
});


router.post('/', async (req: Request, res: Response) => {
   if (req.body.name === undefined || req.body.name === "") {
      return res.status(400).send({ message: "Insira o campo nome" });
   }
   if (req.body.email === undefined || req.body.email === "") {
      return res.status(400).send({ message: "Insira o campo email" });
   }
   if (req.body.password === undefined || req.body.password === "") {
      return res.status(400).send({ message: "Insira o campo password" });
   }
   try {
      await UsersService.create(req.body);
      res.status(201).send({ message: 'Usuario criado com sucesso!' });
   } catch(error: any){
      res.status(500).send({ message: " Não foi possivel criar usuario" });
   }
   
});

router.put('/update/:document', async (req: Request, res: Response) => {
   
   try {
      await UsersService.update(req.params.document, req.body);
      res.status(200).send({ message: " Usuario atualizado com sucesso" });
   } catch (error: any) {
      res.status(400).send({ message: error.message });
   }
});

router.delete('/remove/:document', async (req: Request, res: Response) => { 
   try{
      await UsersService.remove(req.params.document);
      res.status(200).send({ message: " Usuario excluído com sucesso" });
   } catch (error: any) {
      res.status(400).send({ message: "Usuario não existe"});
   }
});

export default router;
