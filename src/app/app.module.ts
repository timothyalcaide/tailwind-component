import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './components/navbar.component';

@NgModule({
  declarations: [AppComponent, ShellComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
