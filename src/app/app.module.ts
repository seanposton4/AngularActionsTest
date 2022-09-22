import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { NonsenseModule }   from './nonsense/nonsense.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    NonsenseModule,
    AppRoutingModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
