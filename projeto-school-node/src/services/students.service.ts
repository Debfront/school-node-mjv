import { Student } from "../models/student.model";


class StudentsService {
    students: Array<Student> = [
    
        {
            name: 'Nathan Carlos',
            email: 'nathan@gmail.com',
            document: '15901586018',
            password:'21882139046',
            age: 22,
            phone: '129976543'
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
            document: '94251331079',
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

   getAll () {
      return this.students;
   }

   getByDocument(document: string) {
       const student =  this.students.find((std) => std.document === document);
       return student;
   }

   create(student: Student){
        this.students.push(student);
   }

   remove(document: string) {
    const studentIndex = this.students.findIndex((student) => student.document === document);
    if (studentIndex === -1){
        throw new Error( " Estudante não encontrado!");
       }
    this.students.splice(studentIndex, 1);
   }

   update(document: string, student: Student){
    const studentIndex = this.students.findIndex((student) => student.document === document);
    if (studentIndex === -1){
       throw new Error("Estudante não encontrado");
    }
   this.students[studentIndex] = student;
   }
}

export default new StudentsService();