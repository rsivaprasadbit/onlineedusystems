import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  usersData = [
    {sNo:1,coursename: 'C Programming', coursedescription: 'Basics and Fundamentals', coursestartdate: '05-05-2023',courseenddate:'-',isactive:'active'},
    {sNo:2,coursename: 'C++ Programming', coursedescription: 'Basics and Fundamentals', coursestartdate: '-',courseenddate:'-',isactive:'active'},
    {sNo:3,coursename: 'Java', coursedescription: 'Basics and Fundamentals', coursestartdate: '-',courseenddate:'-',isactive:'active'}
  ];

  displayedColumns: string[] = ['sNo','coursename', 'coursedescription', 'coursestartdate','courseenddate', 'isactive','edit','delete','launch'];
  constructor() { }

  ngOnInit(): void {
  }

}
