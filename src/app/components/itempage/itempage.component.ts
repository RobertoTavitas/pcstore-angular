import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class itempageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }

  getItemId: any;

  itemData: any;

  ngOnInit(): void {
    this.getItemId = this.param.snapshot.paramMap.get('id');
    console.log('Get item id:', this.getItemId);

    if(this.getItemId) {
      this.itemData = this.service.pcDetails.filter((value)=>{
        return value.id == this.getItemId;
      })
    }
    
  }

}
