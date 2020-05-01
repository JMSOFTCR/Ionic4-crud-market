import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../models/products';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  idarticulo: number;
  p: Products;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.p = new Products();
   }

  ngOnInit() {
    this.idarticulo = this.activatedRoute.snapshot.params["idarticulo"];
    //get item details using id
    this.apiService.getItem(this.idarticulo).subscribe(response => {
      console.log(response);
      this.p = response;
    })
  }

  update(){
    //Update item by taking id and updated data object 
    this.apiService.updateItem(this.idarticulo, this.p).subscribe(response => {
      this.router.navigate(['list']);
    })
  }

}
