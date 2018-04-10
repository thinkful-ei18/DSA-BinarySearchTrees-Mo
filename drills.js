'use strict';

const BinarySearchTree = require('./binarysearchtrees');

function main() {
  let bst = new BinarySearchTree();

  bst.insert(3, 3);
  bst.insert(1, 1);
  bst.insert(4, 4);
  bst.insert(6, 6);
  bst.insert(9, 9);
  bst.insert(2, 2);
  bst.insert(5, 5);
  bst.insert(7, 7);
  bst.remove(9);
  console.log(bst);
}

main();
