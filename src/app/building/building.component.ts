import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { fromEvent, Observable, from } from 'rxjs';
import { switchMap, debounceTime, tap, map, distinctUntilChanged } from 'rxjs/operators';
import { UpdateService } from '../services/update.service';
import { Buildings } from '../data/buildings';
import { BuildingModel } from '../data/model/building';
import { exists } from 'fs';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  bookId = new FormControl();
  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private update: UpdateService) {
    this.bookForm = formBuilder.group({
    bookId: '1'
  });
  }
  public buildingData: BuildingModel[] = Buildings;
  editField: any;
  ngOnInit() {

    /*fromEvent(document.getElementById('searchKey'), 'keyup').pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map(data => (data.target))
    ).subscribe(val => console.log(val));*/
  }
  changeBuilding(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    console.log(event);
    if ((event.key) == 'Enter') {
      const editField = event.target.textContent;
    }
  }
  updateBuilding(id: number, property: string, event: any) {
    console.log(id);
    const editField = event.target.textContent;
    console.log(editField);
  }
  searchBook() {
    /*this.bookId.valueChanges.pipe(
      debounceTime(1000),
      switchMap(id => {
        console.log(id);
        return this.update.getBook(id);
      })
    ).subscribe(res => this.editField = res);
    console.log(this.editField);
  */
  }

}