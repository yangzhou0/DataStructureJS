var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage= {};
};

Queue.prototype.enqueue = function(value) {
  let storage = this.storage;
  let idx = Object.keys(storage).pop() + 1;
  storage[idx] = value;
  return storage[idx];
};

Queue.prototype.dequeue = function() {
  let storage = this.storage;
  let idx = Object.keys(storage).shift();
  let deleted = storage[idx];
  delete storage[idx];
  return deleted;
};
//
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
