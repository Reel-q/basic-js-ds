const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    return this.rootNode = this.searchSpace(this.rootNode, data);
  }

  has(data) {
    return this.searchNode(this.rootNode, data);
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  remove(data) {
    this.removeNode(this.rootNode, data);
  }

  min() {
    let currentNode = this.rootNode;

    if (currentNode === null) {
      return null;
    }

    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;

    if (currentNode === null) {
      return null;
    }

    while (currentNode.right !== null) {
      currentNode = currentNode.right
    }

    return currentNode.data;
  }

  searchSpace(node, data) {
    if (node === null) {
      return new Node(data);
    } 

    if (data < node.data) {
      node.left = this.searchSpace(node.left, data);
    } else if (data > node.data) {
      node.right = this.searchSpace(node.right, data);
    }

    return node;
  }

  searchNode(node, data) {
    if (node === null) {
      return false;
    } 

    if (data === node.data) {
      return true;
    } else if (data !== node.data) {
      if (data < node.data) {
        return this.searchNode(node.left, data);
      } else if (data > node.data) {
        return this.searchNode(node.right, data);
      }
    }
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    }

    if (node.data === data) {
      return node;
    } else if(node.data !== data){
      if (data < node.data) {
        return this.findNode(node.left, data);
      } else if (data > node.data) {
        return this.findNode(node.right, data);
      }
    }
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else if (data === node.data){
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      let minRight = node.right;
      while (minRight.left !== null) {
        minRight = minRight.left;
      }

      node.data = minRight.data;
      node.right = this.removeNode(node.right, minRight.data);
      return node;
    }
  }
}

module.exports = {
  BinarySearchTree
};