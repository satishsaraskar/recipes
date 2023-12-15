import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  loadedFeature='recipe'
  
  onNavigate(feature :string){
    console.log('main-app',feature)
   this.loadedFeature = feature
 
  }

}


