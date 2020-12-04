
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskElement } from 'src/app/interfaces/task.interface';


const TASK_DATA: TaskElement[] = [
  { title: 'Titulo', description: 'prueba'},
  { title: 'Titulo', description: 'prueba'},
  { title: 'Titulo', description: 'prueba'},
  { title: 'Titulo', description: 'prueba'},
  { title: 'Titulo', description: 'prueba'}
];


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = ['title','description','action'];
  dataSource = new MatTableDataSource(TASK_DATA);

  @ViewChild(MatSort,{ static:true }) sort: MatSort;

  constructor(private modalService: NgbModal){

  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }


}
