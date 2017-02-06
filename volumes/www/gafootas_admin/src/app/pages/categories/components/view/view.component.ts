import {Component, ViewEncapsulation} from '@angular/core';

import { ViewService } from './view.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./view.scss')],
  template: require('./view.html')
})
export class View {

  title: string;
  categories;
  errorMessage;
  
  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      _id: {
        title: 'ID',
        type: 'string',
        editable: false
      },
      name: {
        title: 'name',
        type: 'string'
      },
      description: {
        title: 'Description',
        type: 'string'
      },
      parent: {
        title: 'Parent Id',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
        private _categoryService: ViewService
    ){
        this.title = 'Categorias';
  }

  ngOnInit(){
      this._categoryService.getCategories().subscribe(
          result => {
              this.categories = result.categories;

              this.source.load(this.categories)

              if (!this.categories) {
                  console.log('No existe ninguna categoria');
              }
          },
          error => {
              this.errorMessage = <any>error;

              if (this.errorMessage != null) {
                  console.log('Error al cargas las categorias');
              }
          }
      );
  }

  onCreateConfirm(event): void {
    console.log('Create Element...!');
    console.log(event.newData);
    event.confirm.resolve();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
