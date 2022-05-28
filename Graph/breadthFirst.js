/**
 * breadthFirst
 * @param {Object} g directed graph
 * @param {*} o origin
 */
 const breadthFirst = (g, o) => {
    const queue = [o];
    // WARNING: POTENTIAL LOOP, WE NEED TO MARK THIS AS AN EXPLORED NODE
    const exploredNodes = {}
  
    while(queue.length > 0) {
      const current = queue.shift();
      exploredNodes[current] = true;
  
      for(let neighbor of g[current]) {
        if (exploredNodes[neighbor] != true) {
          queue.push(neighbor)
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
      c: ['d', 'e'],
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
  
  console.log(breadthFirst(graph1, 'a')); // a, e 
  console.log(breadthFirst(graph1, 'b')); // b, a, c, e, d, f
  console.log(breadthFirst(graph2, 'a')); // a, e, c, b, d, f
  console.log(breadthFirst(graph3, 'a')); // a, b, c, d, e, f
  