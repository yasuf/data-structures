describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should execute a callback on every value in breadth-first order using "breadthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(9);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5,3,7,2,4,6,9]);
  });

  it('should rebalance when .rebalance is invoked', function(){
    binarySearchTree.insert(10);
    binarySearchTree.insert(20);
    binarySearchTree.insert(30);
    binarySearchTree.insert(25);
    binarySearchTree.insert(15);
    binarySearchTree.insert(1);
    binarySearchTree.rebalance();
    expect(binarySearchTree.value).to.eql(15);
    expect(binarySearchTree.left.value).to.eql(5);
    expect(binarySearchTree.right.value).to.eql(25);
    expect(binarySearchTree.left.left.value).to.eql(1);
    expect(binarySearchTree.left.right.value).to.eql(10);
    expect(binarySearchTree.right.left.value).to.eql(20);
    expect(binarySearchTree.right.right.value).to.eql(30);

  });

});
