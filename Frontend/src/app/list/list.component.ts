import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


interface Student {
	name: string;
	email: string;
	contact: number;
	course: string;
}

const STUDENT: Student[] = [
  
    {
      "name": "Alice",
      "email": "alice@example.com",
      "contact": 9876543210,
      "course": "BCom"
    },
    {
      "name": "Bob",
      "email": "bob@example.com",
      "contact": 8765432109,
      "course": "BBA"
    },
    {
      "name": "Charlie",
      "email": "charlie@example.com",
      "contact": 7654321098,
      "course": "BCA"
    },
    {
      "name": "David",
      "email": "david@example.com",
      "contact": 6543210987,
      "course": "BCom"
    },
    {
      "name": "Emma",
      "email": "emma@example.com",
      "contact": 5432109876,
      "course": "BBA"
    },
    {
      "name": "Frank",
      "email": "frank@example.com",
      "contact": 4321098765,
      "course": "BCA"
    },
    {
      "name": "Grace",
      "email": "grace@example.com",
      "contact": 3210987654,
      "course": "BCom"
    },
    {
      "name": "Henry",
      "email": "henry@example.com",
      "contact": 2109876543,
      "course": "BBA"
    },
    {
      "name": "Isabella",
      "email": "isabella@example.com",
      "contact": 1098765432,
      "course": "BCA"
    },
    {
      "name": "Jack",
      "email": "jack@example.com",
      "contact": 9988776655,
      "course": "BCom"
    },
    {
      "name": "Lily",
      "email": "lily@example.com",
      "contact": 8877665544,
      "course": "BBA"
    },
    {
      "name": "Michael",
      "email": "michael@example.com",
      "contact": 7766554433,
      "course": "BCA"
    },
    {
      "name": "Nora",
      "email": "nora@example.com",
      "contact": 6655443322,
      "course": "BCom"
    },
    {
      "name": "Oliver",
      "email": "oliver@example.com",
      "contact": 5544332211,
      "course": "BBA"
    },
    {
      "name": "Penelope",
      "email": "penelope@example.com",
      "contact": 4433221100,
      "course": "BCA"
    },
    {
      "name": "Quinn",
      "email": "quinn@example.com",
      "contact": 3322110099,
      "course": "BCom"
    },
    {
      "name": "Ryan",
      "email": "ryan@example.com",
      "contact": 2211009988,
      "course": "BBA"
    },
    {
      "name": "Sophia",
      "email": "sophia@example.com",
      "contact": 1100998877,
      "course": "BCA"
    },
    {
      "name": "Thomas",
      "email": "thomas@example.com",
      "contact": 9900887766,
      "course": "BCom"
    },
    {
      "name": "Uma",
      "email": "uma@example.com",
      "contact": 9988776655,
      "course": "BBA"
    }
  
  
];


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private apiCall:ApicallService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchText: ['']  // Initialize with an empty string
    });
  }


  students: any
  ngOnInit() {
    this.apiCall.getStudent().subscribe((response)=>{
console.log(response);
      this.students = response

    })
  }

  onSearch() {
    const searchText = this.searchForm.get('searchText')?.value;
    console.log('Search text:', searchText);
const data= this.apiCall.filterStudent(searchText).subscribe((response)=>{
  this.students = response
})
console.log(data);

    // Handle search logic here
  }

  


}
