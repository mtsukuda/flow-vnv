// @flow
import { cube, foo, graph } from '../src/flow-veri-1';

graph.options = {
    color:'blue',
    thickness:'3px'
};

graph.draw();

console.log(cube(3)); // 27
console.log(cube("9")); // ERROR
console.log(cube(new Array(3))); // ERROR

console.log(foo);    // 4.555806215962888