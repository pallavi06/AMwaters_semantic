import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openChat(event) {
  window.open(document.URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}

}
