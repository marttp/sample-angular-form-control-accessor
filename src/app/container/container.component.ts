import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  isMultiFormValid = false;
  reactiveForm: FormGroup;

  // checkedIdx = 0;
  checkboxOption = [
    {
      label: 'Yes',
      value: true
    },
    {
      label: 'No',
      value: false
    }
  ];

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      firstForm: [false, [Validators.requiredTrue]],
      secondForm: [false, [Validators.requiredTrue]],
      isAccept: [true],
      textMessage: ['']
    });
  }

  get isAcceptForm() {
    return this.reactiveForm.get('isAccept').value;
  }

  validate() {
    const { isAccept, textMessage } = this.reactiveForm.value;

    const criteriaAccept = isAccept
      ? isAccept
      : !isAccept && textMessage
      ? true
      : false;

    return this.reactiveForm.valid && criteriaAccept;
  }
}
