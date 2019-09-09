export class Bed {
  id: number;
  content: string;
}
export class Room {
  id: number;
  name: string;
  bed: Bed[];
}
export class Floor {
  id: number;
  name: string;
  room: Room[];

}
export class Section {
  id: number;
  name: string;
  floor: Floor[];
}
export class BuildingModel {
  id: number;
  name: string;
  section: Section[];
}
