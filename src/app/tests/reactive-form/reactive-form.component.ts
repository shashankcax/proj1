import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  dataVal: any;
  data: any = [
    {attribute_name: 'Room Type', attribute_id: 8, attribute_value:
    [{val: 'Shared', state: false}, {val: 'Private', state: true}, {val: 'None', state: false}]	, is_disabled: true},
    {attribute_name: 'Corner Room', attribute_id: 9, attribute_value:
    [{val: 'Yes', state: false}, {val: 'No', state: false}, {val: 'None', state: false}], is_disabled: false},
    {attribute_name: 'Bed Direction', attribute_id: 10, attribute_value:
    [{val: 'Left', state: false},{val: 'Right', state: false},{val: 'None', state: false}], is_disabled: false},
    {attribute_name: 'Bed Type', attribute_id: 11, attribute_value:
    [{val: 'Electric', state: false}, {val: 'Manual', state: false}, {val: 'None', state: false}], is_disabled: false},
    {attribute_name: 'Bed handrail', attribute_id: 12, attribute_value:
    [{val: 'Yes', state: false}, {val: 'No', state: false}, {val: 'None', state: false}], is_disabled: false},
    {attribute_name: 'Distance from Staff room', attribute_id: 14, attribute_value:
    [{val: 'Adjacent', state: false}, {val: 'Not Applicable', state: true}, {val: 'None', state: false}], is_disabled: true},
    {attribute_name: 'Distance from Toilet', attribute_id: 15, attribute_value:
    [{val: 'Adjacent', state: false}, {val: 'Not Applicable', state: false}, {val: 'None', state: false}], is_disabled: false}
  ];

  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      dataLabel: '',
    });
  }
  ngOnInit() {
  }
  changeAttr(event: any, selectedValue: string, attrId: number) {
    console.log(event);
    console.log(selectedValue);
    console.log(attrId);
  }
}
