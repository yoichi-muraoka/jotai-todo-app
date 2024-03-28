export class Todo {
  constructor(title) {
    this.id = getId();
    this.title = title;
    this.isComplete = false;
  }
}

let number = 1;
function getId() {
  return number++;
}
