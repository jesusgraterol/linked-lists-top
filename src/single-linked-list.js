// eslint-disable-next-line import/extensions
import Node from './node.js';

/**
 * Single Linked List
 * The following class implements the most basic Linked List Data Structure.
 */
class SingleLinkedList {
  // the first item in the list
  #head = null;

  // the last item in the list
  #tail = null;

  // the total number of nodes within the list
  #size = 0;

  /**
   * Getters
   */
  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get size() {
    return this.#size;
  }

  /**
   * Appends a given value into the list.
   * @param {*} value
   */
  append(value) {
    // create the instance of the new node
    const node = new Node(value);

    // if there are nodes in the list, add it to the tail. Otherwise, initialize the list.
    if (this.#size > 0) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }

    // finally, increment the size of the list
    this.#size += 1;
  }

  /**
   * Prepends a given value into the list.
   * @param {*} value
   */
  prepend(value) {
    // create the instance of the new node
    const node = new Node(value);

    // if there are nodes, push the head 1 place over
    if (this.#size > 0) {
      // if there is only one node, set the previous head as the current tail
      if (this.#size === 1) {
        this.#tail = this.#head;
      }

      // set the new node as the new head
      node.next = this.#head;
      this.#head = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }

    // finally, increment the size of the list
    this.#size += 1;
  }

  /**
   * Returns a node at a given index. If none is found, it returns null.
   * @param {*} index
   * @returns object|null
   */
  at(index) {
    // init the query
    let queryResult = null;

    // ensure a valid index was provided and there are enough nodes in the list to satisfy it
    if (index >= 0 && this.#size > 0 && index < this.#size) {
      // if the requested index is the head, set it right away.
      if (index === 0) {
        queryResult = this.#head;
      } else {
        // Iterate until the desired node has been retrieved (if found)
        let currentIndex = 1;
        let currentNode = this.#head.next;
        while (currentIndex <= index && currentNode) {
          if (currentIndex === index) {
            queryResult = currentNode;
          }
          currentIndex += 1;
          currentNode = currentNode.next;
        }
      }
    }

    // finally, return the result of the query
    return queryResult;
  }

  /**
   * Removes the last node from the list. Throws an error if there are no nodes.
   */
  pop() {
    // pop the last node based on the number of items in the list
    switch (this.#size) {
      case 0: {
        throw new Error('Cannot invoke pop() when there are no nodes in the list.');
      }
      case 1: {
        this.#head = null;
        this.#tail = null;
        break;
      }
      case 2: {
        this.#head.next = null;
        this.#tail = this.#head;
        break;
      }
      default: {
        const newTail = this.at(this.#size - 2);
        newTail.next = null;
        this.#tail = newTail;
        break;
      }
    }

    // finally, update the list size
    this.#size -= 1;
  }

  /**
   * Returns the index of the node that has the given value. If multiple nodes have the given value,
   * it will return the first one it finds. If there are no matches, it returns null.
   * @param {*} value
   * @returns number|null
   */
  find(value) {
    // init the query result
    let queryResult = null;

    // if there are nodes, iterate until there is a match or there are no more nodes to iterate
    if (this.#size > 0) {
      let currentIndex = 0;
      let currentNode = this.#head;
      while (queryResult === null && currentIndex < this.#size) {
        if (value === currentNode.data) {
          queryResult = currentIndex;
        }
        currentIndex += 1;
        currentNode = currentNode.next;
      }
    }

    // finally, return the result
    return queryResult;
  }

  /**
   * Returns true if the passed in value is in the list and otherwise returns false.
   * @param {*} value
   * @returns boolean
   */
  contains(value) {
    return typeof this.find(value) === 'number';
  }

  /**
   * Formats the current contents of the list into a string and returns it. If there are no nodes
   * in the list, it returns an empty string.
   * @returns string '( value ) -> ( value ) -> ( value ) -> null'
   */
  toString() {
    // initialize the output
    let output = '';

    // build the string as long as there is at least 1 node
    if (this.#size > 0) {
      // iterate over each node and append it to the output
      let current = this.#head;
      while (current) {
        // insert the current node into the output string
        output += `( ${current.data} ) -> `;

        // set the next node as the active one
        current = current.next;
      }

      // concatenate the end of the list
      output += 'null';
    }

    // finally, return the output
    return output;
  }
}

/**
 * Module Exports
 */
export default SingleLinkedList;
