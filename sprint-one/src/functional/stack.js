var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    let size = Object.keys(storage).length;
    storage[size] = value;
    size ++;
    return storage[size-1];
  };

  someInstance.pop = function() {
    let size = Object.keys(storage).length;
    let deleted = storage[size-1];
    delete storage[size-1];
    return deleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
