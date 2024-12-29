import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Student } from '../../model/student';
import { StudentService } from '../../shared/services/students.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  _students: Student[] = [];
  filteredStudents: Student[] = [];
  _filterBy: string;

  constructor( private studentService: StudentService ) { }

  private removeAccents(value: string){
    return value.normalize('NFD').replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e]/g, '');
  }

    ngOnInit(): void {
      this._students = this.studentService.retrieveAll();
      this.filteredStudents = this._students;
    }

    set filter(value: string){
      this._filterBy = value;
      const filterValue = this.removeAccents(value.toLocaleLowerCase());

this.filteredStudents = this._students.filter((student: Student) =>
  this.removeAccents(student.name.toLocaleLowerCase()).includes(filterValue) ||
  student.email.toLocaleLowerCase().includes(filterValue) ||
  student.course.toLocaleLowerCase().includes(filterValue) ||
  student.registration.toLocaleLowerCase().includes(filterValue)
);
    }


    get filter(){
      return this._filterBy;
    }

}
