import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { RoomAttr } from '../../data/roomAttr';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  dataVal: any;
  data: any = RoomAttr;
  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      dataLabel: '',
    });
  }
  ngOnInit() {
  }
  changeAttr(event: any, propKey: number, selectedValue: any, key: number) {
    console.log(event);
    console.log('prop Key'+ propKey);
    console.log('For Attribute > ' + RoomAttr[key].attribute_name);
    console.log('Selected > ' + selectedValue.val);
    const edited = this.data[key].attribute_name;
    console.log(this.data[key].attribute_value);
    this.data[key].attribute_value.forEach(v => {
      if ( v.val === selectedValue.val ) {
          this.data[key].attribute_value[propKey].state = 'true';
          console.log(this.data[key].attribute_value[propKey].state);
          console.log('Changing > ' + v.val);
        }
    });
    console.log(this.data);
  }

}
