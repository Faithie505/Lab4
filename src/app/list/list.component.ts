import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//imports a module called CommonModule.
//this modelue allows us to use the ngFor to go through an array

@Component({
  selector: 'app-list',
  imports: [CommonModule], //putting the CommonModule in imports
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
//creates a string array with the names of 4 presidents
  thepres: string[] = ["Higgins", "McAleese", "Robinson", "Hillery"];

//creates a generic array with 2 different object types. The first object is the name of the president and the second object is the term of the president
  presidents: any[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];

}
