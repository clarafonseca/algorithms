class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // node data is greater than value?
    if (value <= this.data) {
      // do we have something on left?
      if (this.left == null) {
		// insert new node(value) on left
        this.left = new TreeNode(value);
      } else {
		// repeat the process, insert(value) on the left node
        this.left.insert(value);
      }
    } else {
      // do we have something on right?
      if (this.right == null) {
		// insert new node(value) on right
        this.right = new TreeNode(value);
      } else {
		// repeat the process, insert(value) on the right node
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    // searched value is equal to nodes value?
    if (value === this.data) {
      return true;
    }
    // nodes value is bigger then searched value?
    else if (value < this.data) {
      // left node its empty?
      if (this.left == null) {
        return false;
      } else {
        // repeat the process but now looking through left node
        return this.left.contains(value);
      }
    } else {
      // right node its empty?
      if (this.right == null) {
        return false;
      } else {
        // repeat the process but now looking through right node
        return this.right.contains(value);
      }
    }
  }

  printInOrder() {
    if (this.left != null) {
      this.left.printInOrder();
    }
    console.log(this.data);
    if (this.right != null) {
      this.right.printInOrder();
    }
  }

  printPreOrder() {
    console.log(this.data);
    if (this.left != null) {
      this.left.printInOrder();
    }
    if (this.right != null) {
      this.right.printInOrder();
    }
  }

  printPosOrder() {
    if (this.left != null) {
      this.left.printInOrder();
    }
    if (this.right != null) {
      this.right.printInOrder();
    }
    console.log(this.data);
  }
}

const tree = new TreeNode(2);
tree.insert(1);
tree.insert(3);

console.log(tree.contains(2));

console.group("In Order")
tree.printInOrder();
console.groupEnd()

console.group("Pre Order")
tree.printPreOrder();
console.groupEnd()

console.group("Pos Order")
tree.printPosOrder();
console.groupEnd()


// LENGTH OF BALANCED TREE
// 1 + floor(log_2(n))