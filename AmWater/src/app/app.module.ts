import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NgSemanticModule } from 'ng-semantic';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // FooterComponent,
    // MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgSemanticModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
