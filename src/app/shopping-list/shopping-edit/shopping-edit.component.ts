import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
// import {
//   Component,
//   OnInit,
//   ElementRef,
//   ViewChild
// } from '@angular/core';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,

} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild ('f') slForm:NgForm  // get value in form

  constructor(private slService: ShoppingListService) { }
  editMode=false;
  editItemIndex :number;
    subscription:Subscription
    editedItem :any= Ingredient 

  ngOnInit() {
    console.log(this.editedItem);

   this.subscription = this.slService.startedEditing
      .subscribe(
        (index:number) =>{
          this.editItemIndex = index;
          // console.log(this.editItemIndex);
          this.editMode =true;
        
          this.editedItem = this.slService.getIngredient(index);
   this.slForm.setValue(
   {
     name :this.editedItem.name,
     amount:this.editedItem.amount
   })

        }
      );
  }

  onSubmit(form:NgForm) {
    // console.log(form);
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount);
 if(this.editMode){
  this.slService.updateIngredient(this.editItemIndex, newIngredient);
 }else {
   this.slService.addIngredient(newIngredient);
 }
   this.editMode = false;
   form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false ;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();

  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
 
  }
}
