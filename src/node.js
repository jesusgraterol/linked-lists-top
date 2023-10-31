/**
 * Node
 * The following class implements a Node Element that can be used within any Linked List Instance.
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * Module Exports
 */
export default Node;
