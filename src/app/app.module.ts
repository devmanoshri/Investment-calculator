import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputModule } from './user-input/user-input.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, CommonModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
