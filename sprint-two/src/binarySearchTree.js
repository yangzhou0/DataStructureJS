var BinarySearchTree = function(value) {
  let root = {};
  root.value = value;
  root.left;
  root.right;
  root.insert = function(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  };
  root.contains = function(value) {
    // return this.depthFirstLog(function(target){
    //   return target === value;
    // }
    if (value === this.value) {
      return true;
    } else if (value > this.value && this.right !== undefined) {
      return this.right.contains(value);
    } else if (value < this.value && this.left !== undefined) {
      return this.left.contains(value);
    } else {
      return false;
    }
  };

  root.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  };

  root.breadthFirstLog = function(cb) {
    let queue = [];
    queue.push(this);
    while (queue.length > 0) {
      let head = queue.shift();
      cb(head);
      if (head.left) {
        queue.push(head.left);
      }
      if (head.right) {
        queue.push(head.right);
      }
    }
  };

  root.totalValue = function() {
    var total = 0;
    var func = function(value) {
      total += value;
    };
    this.depthFirstLog(func);
    return total;
  };

  return root;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
