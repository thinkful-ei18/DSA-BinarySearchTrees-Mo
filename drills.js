'use strict';

const BinarySearchTree = require('./binarysearchtrees');
const util = require('util');

function main() {
  let BST = new BinarySearchTree();
  let nullBst = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  //   console.log(util.inspect(bst, false, null));
  console.log(newBstHeight(BST));
}

main();

// function bstHeight(bst, height = 1) {
//   if (bst.key === null) {
//     console.log(height);
//     height = 0;
//     return height;
//   } else if (!bst.left && !bst.right) {
//     return height;
//   } else if (bst.left && bst.right) {
//     height++;
//     let rightHeight = bstHeight(bst.right, height);
//     let leftHeight = bstHeight(bst.left, height);
//     if (leftHeight > rightHeight) {
//       return leftHeight;
//     } else {
//       return rightHeight;
//     }
//   } else if (bst.left) {
//     height++;
//     bstHeight(bst.left, height);
//   } else if (bst.right) {
//     height++;
//     bstHeight(bst.right, height);
//   }
//   return height;
// }

function newBstHeight(tree) {
  //left and right exist branch off into seperate recursive calls.
  //Each if statement should make a recursive call if right or left exist.
  //if key is null we want to return height of 0 because nothing in tree exists.
  //if both left and right no longer exist return the height

  if (tree.key === null) {
    return 0;
  }
  if (tree.right && tree.left) {
    return Math.max(newBstHeight(tree.right), newBstHeight(tree.left)) + 1;
  }
  if (tree.right) {
    return newBstHeight(tree.right) + 1;
  }
  if (tree.left) {
    return newBstHeight(tree.left) + 1;
  }
  return 1;
}
