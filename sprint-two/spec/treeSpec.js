describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it("should add children to the tree", function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it("should return true for a value that the tree contains", function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it("should return false for a value that was not added", function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it("should correctly detect nested children", function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it("should assign parent to newNode when we add one", function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it("remove from parent will delte current node from its parent children", function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    tree.children[0].children[0].removeFromParent();
    expect(tree.children[0].children[0].value).to.equal(8);
  });

  it("should accept a cb and execute it on every contained value", function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    let result = [];
    let cb = function(child) {
      if (child.value) {
        result.push(child.value);
      }
    };
    tree.traverse(cb);
    expect(result).to.eql([5, 7, 8, 6]);
  });
});
