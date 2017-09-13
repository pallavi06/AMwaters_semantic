import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() text;
  @Input() img_src;
   constructor(private sanitizer: DomSanitizer) { }
    trustSrcUrl = function(data){
      return this.sanitizer.bypassSecurityTrustResourceUrl(data);
    };
  ngOnInit() {
  }

}
