import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipeform',
  templateUrl: './recipeform.component.html',
  styleUrls: ['./recipeform.component.css']
})
export class RecipeformComponent implements OnInit {
id : any;
isEdit : any;

  constructor(private activeRoute : ActivatedRoute) {
    this.activeRoute.params.subscribe((param : any)=>{
      if(param.id){
        this.id = param.id;
        this.isEdit = true
      }else{
        this.isEdit = false
      }
    })
   }

  ngOnInit(): void {
  }

}
