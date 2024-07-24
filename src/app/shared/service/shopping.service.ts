import { EventEmitter } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";

export class ShoppingService{
    private ingredientList =[
            new Ingredient('Tata', 'Salt',2),
            new Ingredient('Gemini', 'Oil',5),
            new Ingredient('Colget', 'SaltToothpase','3no'),
    ];

    ingredientListChangeEvent = new EventEmitter();

    getIngredients(){
        return this.ingredientList.slice()
    }

    addNewIngredient(ingread :any){
        this.ingredientList.push(ingread);
        this.ingredientListChangeEvent.emit(this.ingredientList.slice());
    }
}