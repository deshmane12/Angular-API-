import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-specific-pro-display',
  templateUrl: './specific-pro-display.component.html',
  styleUrls: ['./specific-pro-display.component.css']
})
export class SpecificProDisplayComponent implements OnInit {
  // message = "I'm read only!";
  // canEdit = false;
  index!:any;
  product:any;
 
  constructor(private route:ActivatedRoute,private generalService:GeneralService) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get('index');
    this.product = this.generalService.products[this.index];
  }

}
