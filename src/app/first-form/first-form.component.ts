import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  forwardRef,
  HostBinding,
  Input
} from "@angular/core";

import {
  FormGroup,
  FormBuilder,
  Validators,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from "@angular/forms";

import { Subscription } from "rxjs";

@Component({
  selector: "app-first-form",
  templateUrl: "./first-form.component.html",
  styleUrls: ["./first-form.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FirstFormComponent),
      multi: true
    }
  ]
})
export class FirstFormComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  private isValid = false;
  sampleForm: FormGroup;
  subscription: Subscription;

  // ControlValueAccessor dummy functions
  onChange = (valid: boolean) => {};
  onTouched = () => {};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.subscription = this.sampleForm.valueChanges.subscribe(value => {
      this.writeValue();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    this.sampleForm = this.formBuilder.group({
      firstInput: ["", [Validators.required]],
      secondInput: ["", [Validators.required]],
      thirdInput: ["", [Validators.required]]
    });
  }

  get firstInput() {
    return this.sampleForm.get("firstInput").value;
  }
  get secondInput() {
    return this.sampleForm.get("secondInput").value;
  }
  get thirdInput() {
    return this.sampleForm.get("thirdInput").value;
  }

  writeValue(): void {
    this.onChange(this.sampleForm.valid);
  }

  registerOnChange(fn: (valid: boolean) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
