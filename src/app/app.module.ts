import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { BoxComponent } from './box/box.component';
import { CardComponent } from './card/card.component';
import { VideoComponent } from './video/video.component';
import { YammerComponent } from './yammer/yammer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'angular4-carousel';
import { SortableComponent } from './sortable/sortable.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from './video/video.pipe';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { ParallaxComponent } from './parallax/parallax.component';
import { ChatComponent } from './chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BoxComponent,
    CardComponent,
    VideoComponent,
    YammerComponent,
    CarouselComponent,
    SortableComponent,
    SafePipe,
    ParallaxComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgSemanticModule,
    CarouselModule,
    SortableModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
