import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { fromEvent, Observable, from } from 'rxjs';
import { switchMap, debounceTime, tap, map, distinctUntilChanged } from 'rxjs/operators';
import { UpdateService } from '../services/update.service';
import { BuildingModel } from '../data/model/building';
import { Buildings } from '../data/buildings';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  selectedBuilding = 0;
  selectedSection = 0;
  selectedFloor = 0;
  selectedRoom = 0;
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
    console.log('1');
    this.editField = event.target.textContent;
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
  onBuildingSelect(buildingId: number) {
    const sectionData = this.buildingData[buildingId];
    console.log('Building Selected');
    console.log(buildingId);
    return sectionData;
  }
  onSelctionSelect(sectionId: number) {
    const floorData = this.buildingData[sectionId];
    console.log('Building Selected');
    console.log(sectionId);
    return floorData;
  }
}
