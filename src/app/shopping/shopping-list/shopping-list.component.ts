import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent{

  ingredientList: any[]=[];

  constructor(private shopServ : ShoppingService){
    this.ingredientList= this.shopServ.getIngredients();
    this.shopServ.ingredientListChangeEvent.subscribe((updateIngredientList:any)=>{
      console.log('Something has changed');
      this.ingredientList=updateIngredientList;
    })
  }

  // catchNewIngredient(eve :any){
  //   // console.log('this is the new ingredient',eve)
   
  //   this.ingredientList.push(eve);
   
  // }
}
