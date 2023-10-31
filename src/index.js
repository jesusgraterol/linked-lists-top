// eslint-disable-next-line import/extensions
import SingleLinkedList from './single-linked-list.js';

const list = new SingleLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log('list.at()');
console.log('0:', list.at(0));
console.log('1:', list.at(1));
console.log('2:', list.at(2));
console.log('3:', list.at(3));
console.log('4:', list.at(4));
console.log('list.toString(): ', list.toString());

console.log('\n\n---\n\n');
console.log('list.find()');
console.log('1: ', list.find(1));
console.log('3: ', list.find(3));
console.log('300: ', list.find(300));

console.log('\n\n---\n\n');
console.log('list.contains()');
console.log('1: ', list.contains(1));
console.log('3: ', list.contains(3));
console.log('300: ', list.contains(300));

console.log('\n\n---\n\n');
list.pop();
console.log('list.pop(): ', list.toString());

console.log('\n\n---\n\n');
console.log('list.size: ', list.size);
console.log('list.head: ', list.head);
console.log('list.tail: ', list.tail);

console.log('\n\n---\n\n');
console.log('list.toString(): ', list.toString());
