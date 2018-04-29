class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value){
    let storage = this.storage;
    let idx = Object.keys(storage).pop() + 1;
    storage[idx] = value;
    return storage[idx];
  }

  dequeue(){
    let storage = this.storage;
    let idx = Object.keys(storage).shift();
    let deleted = storage[idx];
    delete storage[idx];
    return deleted;
  }

  size(){
    return Object.keys(this.storage).length;
  }

}
