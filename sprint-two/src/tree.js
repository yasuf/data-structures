var Tree = function(value, parent, key) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;
  newTree.key = key;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value,this,this.children.length));
}; 

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  for(var i=0; i < this.children.length; i++){
    if (this.children[i].contains(target)) return true;
  }
  return false;
};

treeMethods.removeFromParent = function() {
  this.parent.children.splice(this.key,1);
  this.parent = undefined;
}; 

treeMethods.traverse = function (callback) {
  callback(this);
  if(this.children){
    this.children.forEach(function(child){
      child.traverse(callback);
    });
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/* addChild is constant (O(1)), contains is sub-linear (T(n) = O(n)), traverse is linear (O(n))
*
* this implementation of removeFromParent trades space complexity (adding the .key property) for 
* time complexity (array.splice is at worst O(n), at best O(1))
*
*/