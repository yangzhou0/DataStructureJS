class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  push(value){
    let storage = this.storage;
    let size = Object.keys(storage).length;
    storage[size] = value;
    return storage[size];
  }

  pop(){
    let storage = this.storage;
    let size = Object.keys(storage).length;
    let deleted = storage[size-1];
    delete storage[size-1];
    return deleted;
  }

  size(){
    return Object.keys(this.storage).length;
  }
}
