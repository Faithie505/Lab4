import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

//typescript decorator for component
//allows us to use the components
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//business logic
export class AppComponent {
  title = 'data-binding-app';
  //initialising variables
  thisNum: number = 0;
  show: boolean = true;
  count: number = 0;

//when the button is clicked
  onButtonClicked(){
    //increments a count for how many times it has been clicked and displays confirmation message
    console.log("Button Clicked!");
    this.thisNum++;
  }

//when the image is double clicked
  onStarDBLClicked()
  {
    //increments the count variable by one each time the method is called
    this.count++;
    //if count is one (the image isdoyuble clicked once)
    if(this.count == 1)
    {
      //the text is shown
      console.log("Image Clicked!");
      this.show = false;
    }
    //if the count is 2, (the image is double clicked twice)
    else if(this.count == 2)
    {
      //hides the text and makes count zero 
      console.log("Image Clicked!");
      this.show = true;
      this.count = 0;
    }
    
    

  }
}


