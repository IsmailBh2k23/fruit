import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCategories: Category[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private categoryService: CategoryService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.categoryService.get().subscribe((data) => {
      this.allCategories = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.categoryService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCategories = this.allCategories.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}