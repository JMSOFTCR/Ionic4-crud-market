import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
productsData: any;

   constructor(
     public apiService : ApiService 
   ) {
    this.productsData = [];
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    //get saved list of products
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.productsData = response;
    });  
  }

  delete(item) {
    //Delete item in Products data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //update list after delete id successfull
      this.getAllProducts();
    });
  }

}
