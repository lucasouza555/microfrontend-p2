import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { CompSemRotaModule } from 'src/comp-sem-rota/comp-sem-rota.module';
import { CompSemRotaComponent } from 'src/comp-sem-rota/comp-sem-rota.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompSemRotaModule
  ],
  providers: []
})
export class AppModule { 
  constructor(private _injector:Injector) {}

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {injector: this._injector});
    customElements.define('projeto-2', appElement);

    const compSemRotaElement = createCustomElement(CompSemRotaComponent, {injector: this._injector});
    customElements.define('projeto-2-comp-sem-rota', compSemRotaElement);
  }
}
