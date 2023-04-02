import { Request, Response, Router} from 'express';

const router = Router();

const students = [
    {
        name: 'Nathan Carlos',
        email: 'nathan@gmail.com',
        document: '15901586018',
        password:'c',
        age: 22
    },
    {
        name: 'Gabriel Silva',
        email: 'gabriel@gmail.com',
        document: '98994257020',
        password:'54321',
        age: 25
    },
    {
        name: 'Palloma Cristina',
        email: 'palloma@gmail.com',
        document: 'c',
        password:'1233456',
        age: 21
    },
    {
        name: 'Maria Souza',
        email: 'maria@gmail.com',
        document: '60779412044',
        password:'1233456',
        age: 27
    },

];

router.get('/', (req: Request, res: Response) => {
    res.send(students);
});

router.get('/:document', (req: Request, res: Response) => {
    const student = students.find((std) => std.document === req.params.document);
    res.status(200).send(student);
});

router.post('/', (req: Request, res: Response) => {
    if(req.body.age < 18 ){
        return res.status(400).send({message: 'Estudante não foi criado pois não tem a idade mínima(18anos).' });
    }
    students.push(req.body);
    res.status(201).send({message: 'Estudante Criado com Sucesso!'});
});

router.delete('/remove/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document);
    if (studentIndex === -1){
    return  res.status(400).send({ message: "Estudante não encontrado!"});
    }
    students.splice(studentIndex, 1);
    res.status(200).send({ message: "Estudante removido com sucessso!"});

});

router.put('/:document', (req: Request, res: Response) =>{
    const studentIndex = students.findIndex((student) => student.document === req.params.document);
    if (studentIndex === -1){
        return  res.status(400).send({ message: "Estudante não encontrado!"});
    }
    students[studentIndex] = req.body;
    res.status(200).send({ message: "Estudante atualizado com sucesso"});

});

export default router;