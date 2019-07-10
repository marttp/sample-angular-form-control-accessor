import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputTextareaModule } from "primeng/inputtextarea";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, RadioButtonModule, InputTextareaModule]
})
export class PrimeNgModule {}
