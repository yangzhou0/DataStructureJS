var HashTable = function() {
  this._limit = 8;
  this.collision = [];
  this.length = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (this.length >= this._limit * 0.75) {
    this._limit *= 2;
    this.resize();
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.collision[index] === undefined) {
    this.collision[index] = [];
    this.collision[index].push([k, v]);
  } else if (checkIfKey(this.collision[index], k)) {
    for (var tuple of this.collision[index]) {
      if (tuple[0] === k) {
        tuple[1] = v;
      }
    }
  } else {
    this.collision[index].push([k, v]);
  }
  this.length++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.collision[index];
  for (var tuple of bucket) {
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  if (this.length < this._limit * 0.25) {
    this._limit /= 2;
    this.resize();
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.collision[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  this.length--;
};

HashTable.prototype.resize = function() {
  let tuples = _.flatten(this.collision, true);
  let hashTable = this;
  hashTable.length = 0;
  hashTable.collision = [];
  tuples.forEach(function(tuple) {
    if (tuple) {
      HashTable.prototype.insert.call(hashTable, tuple[0], tuple[1]);
    }
  });
};

var checkIfKey = function(arr, k) {
  /// arr = [[k1,v1],[k2,v2]]
  let position = false;
  arr.forEach(function(tuple) {
    if (tuple[0] === k) {
      position = true;
    }
  });
  return position;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
