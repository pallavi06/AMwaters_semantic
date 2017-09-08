import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() heading;
  @Input() text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo';
  @Input() img_src ;
  constructor() { }

  ngOnInit() {
  }

}
