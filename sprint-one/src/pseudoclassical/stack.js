var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

};
Stack.prototype.push = function(value) {
  let storage = this.storage;
  let size = Object.keys(storage).length;
  storage[size] = value;
  return storage[size];
};

Stack.prototype.pop = function() {
  let storage = this.storage;
  let size = Object.keys(storage).length;
  let deleted = storage[size-1];
  delete storage[size-1];
  return deleted;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
