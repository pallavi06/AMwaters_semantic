import { Component, OnInit } from '@angular/core';
import { SortableModule } from '@progress/kendo-angular-sortable';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.cards);
  }

  // tslint:disable-next-line:member-ordering
  public cards: any[] = [
    // tslint:disable-next-line:max-line-length
    { heading: 'this is heading 1', date: '09/05/2017', img: '../../assets/images/img3.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo' },
    { heading: 'this is heading 2', date: '09/05/2017', img: '../../assets/images/img3.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo' },
    // tslint:disable-next-line:max-line-length
    { heading: 'this is heading 3', date: '09/05/2017', img: '../../assets/images/img3.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo' },
    { heading: 'this is heading 4', date: '09/05/2017', img: '../../assets/images/img3.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo' },
    // tslint:disable-next-line:max-line-length
    { heading: 'this is heading 5', date: '09/05/2017', img: '../../assets/images/img3.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo' },
    { heading: 'this is heading 6', date: '09/05/2017', img: '../../assets/images/img3.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo sed do eiusmod tempo' },
  ];

}
