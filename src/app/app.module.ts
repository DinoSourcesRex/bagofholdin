// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Routing Modules
import { AppRoutingModule } from './app-routing.module';
import { ErrorRoutingModule } from './error-routing.module';
// Modules
import { CoreModule } from './core/core.module';
import { PAGE_MODULES } from './pages/index';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ...PAGE_MODULES, ErrorRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
