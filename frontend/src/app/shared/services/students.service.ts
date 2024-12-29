import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../../model/student'; // Corrija o caminho para o modelo

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = STUDENTS;

  private studentsSubject = new BehaviorSubject<Student[]>(this.students);

  getStudents() {
    return this.studentsSubject.asObservable();
  }

  addStudent(student: Student) {
    this.students.push(student);
    this.studentsSubject.next(this.students);
  }

  retrieveAll(): Student[] {
    return this.students;
  }
}

const  STUDENTS: Student[] = [
  {
      id: 1,
      name:"Lucas Barros",
      email:"lucas.barros@estudantes.edu",
      course:"Redes de Computadores",
      registration: "167343"
  },
  {
      id: 2,
      name:"João Ribeiro",
      email:"joão.ribeiro@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"479364"
  },
  {
      id: 3,
      name:"Carlos Souza",
      email:"carlos.souza@estudantes.edu",
      course:"Análise de Sistemas",
      registration:"196744"
  },
  {
      id: 4,
      name:"Beatriz Souza",
      email:"beatriz.souza@estudantes.edu",
      course:"Engenharia de Software",
      registration: "62968"
  },
  {
      id: 5,
      name:"Mariana Almeida",
      email:"mariana.almeida@estudantes.edu",
      course:"Análise de Sistemas",
      registration:"802868"
  },
  {
      id: 6,
      name:"Ricardo Silva",
      email:"ricardo.silva@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"354283"
  },
  {
      id: 7,
      name:"Beatriz Martins",
      email:"beatriz.martins@estudantes.edu",
      course:"Engenharia de Software",
      registration:"852888"
  },
  {
      id: 8,
      name:"Clara Ribeiro",
      email:"clara.ribeiro@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"327735"
  },
  {
      id: 9,
      name:"Lucas Santana",
      email:"lucas.santana@estudantes.edu",
      course:"Ciência da Computação",
      registration:"393669"
  },
  {
      id: 10,
      name:"Clara Santana",
      email:"clara.santana@estudantes.edu",
      course:"Engenharia de Software",
      registration:"579484"
  },
  {
      id: 11,
      name:"João Barros",
      email:"joão.barros@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"704515"
  },
  {
      id: 12,
      name:"Clara Martins",
      email:"clara.martins@estudantes.edu",
      course:"Análise de Sistemas",
      registration:"969421"
  },
  {
      id: 13,
      name:"Pedro Santana",
      email:"pedro.santana@estudantes.edu",
      course:"Engenharia de Software",
      registration:"105549"
  },
  {
      id: 14,
      name:"Clara Martins",
      email:"clara.martins@estudantes.edu",
      course:"Engenharia de Software",
      registration:"448502"
  },
  {
      id: 15,
      name:"Pedro Ribeiro",
      email:"pedro.ribeiro@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"743634"
  },
  {
      id: 16,
      name:"Fernanda Pereira",
      email:"fernanda.pereira@estudantes.edu",
      course:"Análise de Sistemas",
      registration:"238192"
  },
  {
      id: 17,
      name:"Fernanda Gomes",
      email:"fernanda.gomes@estudantes.edu",
      course:"Redes de Computadores",
      registration:"481384"
  },
  {
      id: 18,
      name:"Mariana Ribeiro",
      email:"mariana.ribeiro@estudantes.edu",
      course:"Análise de Sistemas",
      registration:"227610"
  },
  {
      id: 19,
      name:"Beatriz Martins",
      email:"beatriz.martins@estudantes.edu",
      course:"Ciência da Computação",
      registration:"537224"
  },
  {
      id: 20,
      name:"Fernanda Martins",
      email:"fernanda.martins@estudantes.edu",
      course:"Redes de Computadores",
      registration:"872531"
  },
  {
      id: 21,
      name:"Fernanda Almeida",
      email:"fernanda.almeida@estudantes.edu",
      course:"Redes de Computadores",
      registration:"168673"
  },
  {
      id: 22,
      name:"Lucas Costa",
      email:"lucas.costa@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"830222"
  },
  {
      id: 23,
      name:"João Ribeiro",
      email:"joão.ribeiro@estudantes.edu",
      course:"Análise de Sistemas",
      registration:"757873"
  },
  {
      id: 24,
      name:"Fernanda Souza",
      email:"fernanda.souza@estudantes.edu",
      course:"Redes de Computadores",
      registration:"956123"
  },
  {
      id: 25,
      name:"Pedro Gomes",
      email:"pedro.gomes@estudantes.edu",
      course:"Redes de Computadores",
      registration:"165388"
  },
  {
      id: 26,
      name:"Beatriz Souza",
      email:"beatriz.souza@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"690468"
  },
  {
      id: 27,
      name:"Ricardo Barros",
      email:"ricardo.barros@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"321449"
  },
  {
      id: 28,
      name:"Ana Gomes",
      email:"ana.gomes@estudantes.edu",
      course:"Sistemas de Informação",
      registration:"938566"
  },
  {
      id: 29,
      name:"Fernanda Souza",
      email:"fernanda.souza@estudantes.edu",
      course:"Redes de Computadores",
      registration:"107879"
  },
  {
      id: 30,
      name:"Ana Pereira",
      email:"ana.pereira@estudantes.edu",
      course:"Redes de Computadores",
      registration:"816557"
  }
]
