var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = [];
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newTree = Tree(value);
  this.children.push(newTree);
  newTree.parent = this;
};

treeMethods.contains = function(target) {
  let children = this.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.value === target) {
      return true;
    }
    let result = child.contains(target);
    if (result) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  let position = this.parent.children.indexOf(this);
  this.parent.children.splice(position, 1);
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  cb(this);
  this.children.forEach(child => {
    child.traverse(cb);
  });
};
