import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntestazioneComponent } from './intestazione/intestazione.component';
import { VideoComponent } from './video/video.component';
import { ListaVideoComponent } from './lista-video/lista-video.component';

@NgModule({
  declarations: [
    AppComponent,
    IntestazioneComponent,
    VideoComponent,
    ListaVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
