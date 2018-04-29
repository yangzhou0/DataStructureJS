var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {storage: {}};
  someInstance = _.extend(someInstance,queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    let storage = this.storage;
    let idx = Object.keys(storage).pop() + 1;
    storage[idx] = value;
    return storage[idx];
  },

  dequeue: function() {
    let storage = this.storage;
    let idx = Object.keys(storage).shift();
    let deleted = storage[idx];
    delete storage[idx];
    return deleted;
  },
  //
  size: function() {
    return Object.keys(this.storage).length;
  }
};
