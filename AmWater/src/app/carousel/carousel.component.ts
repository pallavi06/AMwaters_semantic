import { Component, OnInit, Input } from '@angular/core';
import { ICarouselConfig, AnimationConfig, CarouselService } from 'angular4-carousel';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
@Input() text ;
public imageSources: string[] = [
     '../assets/images/img3.png',
     '../assets/images/img4.png',
     '../assets/images/img5.png'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
  constructor(private x: CarouselService) {
   }

  ngOnInit() {
    }



}
