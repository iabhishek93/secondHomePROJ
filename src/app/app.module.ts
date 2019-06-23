import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base_layout/header/header.component';
import { ContentComponent } from './base_layout/content/content.component';
import { FooterComponent } from './base_layout/footer/footer.component';
import { FilterPipe } from './All_Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    ContentComponent,
    FooterComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
