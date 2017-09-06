import { Component, OnInit, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  items: Array<any> = [];
  labeledIcons: Array<any> = [];
  // multipleData = [];
  work: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  life: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  engage: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  learn: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];

  // onChange(data: {}) {
  //     console.log(data);
  // }
  // onMultiple(data: Array<string>): void {
  //     this.multipleData = data;
  // }
  constructor() {
      this.items = [{
          'title': 'Home',
          'link': 'Home',
          'icon': 'home'
      }, {
              'title': 'About Us',
              'link': '#/'
          }, {
              'title': 'Contact',
              'link': '#/'
          }];

      this.labeledIcons = [{
          'title': 'Games',
          'link': 'Home',
          'icon': 'gamepad'
      }, {
              'title': 'Chanel',
              'link': 'Chanel',
              'icon': 'video camera'
          }, {
              'title': 'Videos',
              'link': 'Videos',
              'icon': 'video play'
          }];

  }
}
