'use strict';

const BinarySearchTree = require('./binarysearchtrees');
const util = require('util');

function main() {
  let bst = new BinarySearchTree();
  let nullBst = new BinarySearchTree();

  bst.insert(4, 4);
  bst.insert(6, 6);
  bst.insert(9, 9);
  bst.insert(3, 3);
  bst.insert(2, 2);
  bst.insert(5, 5);
  bst.insert(7, 7);
  bst.insert(8, 8);
  bst.insert(10, 10);
  bst.insert(11, 11);
  //   console.log(util.inspect(bst, false, null));
  console.log(bstHeight(nullBst));
}

main();

function bstHeight(bst, height = 1) {
  if (bst.key === null) {
    height = 0;
    return height;
  } else if (!bst.left && !bst.right) {
    return height;
  } else if (bst.left && bst.right) {
    height++;
    let rightHeight = bstHeight(bst.right, height);
    let leftHeight = bstHeight(bst.left, height);
    return Math.max(rightHeight, leftHeight);
  } else if (bst.left) {
    height++;
    bstHeight(bst.left, height);
  } else if (bst.right) {
    height++;
    bstHeight(bst.right, height);
  }
  return height;
}
