import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/service/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('ingredtepmB') ingB :ElementRef|any
  @ViewChild('ingredtepmN') ingN :ElementRef|any
  @ViewChild('ingredtepmQ') ingQ :ElementRef|any

  // @Output('newingredient') newingredient = new EventEmitter()

  constructor(private shopServ : ShoppingService){}

  addIngredient(){
 
    let newlistitem = new  Ingredient(this.ingB.nativeElement.value,this.ingN.nativeElement.value,this.ingQ.nativeElement.value)
   
    this.shopServ.addNewIngredient(newlistitem);
    this.ingB.nativeElement.value = this.ingN.nativeElement.value = this.ingQ.nativeElement.value = ' ';

   

  }





  //template variable methode(use extra memory)
  // addIngredient(ingB:any,ingN:any,ingQ:any){
  //   let newingredient= new  Ingredient(ingB.value,ingN.value,ingQ.value)
   
  //   console.log("Data catch from html",newingredient);
  // }
  

}
