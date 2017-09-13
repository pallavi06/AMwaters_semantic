import { Component, OnInit, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic';
import { NgZone } from '@angular/core';


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
  discover: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  connect: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  share: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  work: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  admin: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  sidebaritem: Array<string> = ['New York', 'Belgrade', 'Stockholm', 'Sarajevo'];
  // onChange(data: {}) {
  //     console.log(data);
  // }
  // onMultiple(data: Array<string>): void {
  //     this.multipleData = data;
  // }
  isShrunk = false;
  constructor(zone: NgZone)  {
    window.onscroll = () => {
          zone.run(() => {
            if (window.pageYOffset > 0) {
                 this.isShrunk = true;
            } else {
                 this.isShrunk = false;
            }
          });
        },

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
