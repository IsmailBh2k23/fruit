import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  catForm: Category = {
    id: 0,
    name: '',
    description: '',
  };
 
  constructor(private categoryService:CategoryService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.categoryService.create(this.catForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/categories/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}