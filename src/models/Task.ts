import { BaseModel } from "./BaseModel";

export class Task extends BaseModel {
  name: string;
  complete: boolean;

  constructor(name: string) {
    super();
    this.name = name;
    this.complete = false;
  }
}

export default Task;
