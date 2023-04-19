import { Router} from 'express';
import healthRouter from './health.router';
import produtosRouter from './produtos.router';
import usersRouter from './users.router';
import categoriasRouter from './categorias.router';
import buscaRouter from './busca.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/produtos', produtosRouter);
router.use('/users', usersRouter);
router.use('/categorias', categoriasRouter);
router.use('/busca', buscaRouter);

export default router;