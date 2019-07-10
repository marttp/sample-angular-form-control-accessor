import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PrimeNgModule } from "./prime-ng/prime-ng.module";

import { AppComponent } from "./app.component";
import { FirstFormComponent } from "./first-form/first-form.component";
import { SecondFormComponent } from "./second-form/second-form.component";
import { ContainerComponent } from "./container/container.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    SecondFormComponent,
    ContainerComponent
  ],
  imports: [BrowserModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
