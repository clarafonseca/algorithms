/**
 * depthFirst
 * @param {Object} g directed graph
 * @param {*} o origin
 */
const depthFirst = (g, o) => {
  const stack = [o];
  // WARNING: POTENTIAL LOOP, WE NEED TO MARK THIS AS AN EXPLORED NODE
  const exploredNodes = {}

  while(stack.length > 0) {
    const current = stack.pop();
    exploredNodes[current] = true;

    for(let neighbor of g[current]) {
      if (exploredNodes[neighbor] != true) {
        stack.push(neighbor)
      }
    }
  }
  return Object.keys(exploredNodes);
}

/**
 *  A <—— B
 *  |     |
 *  v     v
 *  E <—— C ——> D ——> F
 */

const graph1 = {
    a: ['e'],
    b: ['a', 'c'],
    c: ['e', 'd'],
    d: ['f'],
    e: [],
    f: []
} 

/**
 *  A <—— B
 *  |     ^
 *  v     |
 *  E ——> C ——> D ——> F
 */

 const graph2 = {
    a: ['e'],
    b: ['a'],
    c: ['b', 'd'],
    d: ['f'],
    e: ['c'],
    f: []
}

/**
 *  A ——> C ——> E
 *  |     
 *  v     
 *  B ——> D ——> F
 */

 const graph3 = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log(depthFirst(graph1, 'a')); // a, e 
console.log(depthFirst(graph1, 'b')); // b, a, e, c, d, f
console.log(depthFirst(graph2, 'a')); // a, e, c, d, f, b
console.log(depthFirst(graph3, 'a')); // a, b, d, f, c, e
