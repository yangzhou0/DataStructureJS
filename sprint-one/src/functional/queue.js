var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {
    let idx = Object.keys(storage).pop() + 1;
    storage[idx] = value;
    return storage[idx];
  };

  someInstance.dequeue = function() {
    let idx = Object.keys(storage).shift();
    let deleted = storage[idx];
    delete storage[idx];
    return deleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};
