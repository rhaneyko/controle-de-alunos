import { Component } from '@angular/core';
import { StudentService } from '../../shared/services/students.service';
import { Student } from '../../model/student'; // Importe do arquivo correto

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  name: string = '';
  email: string = '';
  course: string = '';

  constructor(private studentService: StudentService) {}

  addStudent() {
    if (this.name && this.email && this.course) {
      const newStudent: Student = {
        id: Math.floor(Math.random() * 1000),
        name: this.name,
        email: this.email,
        course: this.course,
        registration: Math.floor(Math.random() * 1000000).toString()
      };

      this.studentService.addStudent(newStudent);
      this.name = '';
      this.email = '';
      this.course = '';
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }
}
