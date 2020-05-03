import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  imageUrl_2 = 'https://user-images.githubusercontent.com/1688498/80147065-83adda00-8578-11ea-92f5-e300e1b7d8d5.png'
  constructor(
    //public btn: BackbtnService,
    fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}