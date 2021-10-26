const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;
// включаем в граф остальные узлы и их соседей
graph.a = {};
graph.a.fin = 1;
graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;
graph.fin = {}; // у конечного узла нет соседей

// хэш таблица стоимости
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

// хэш таблица родителей
const parents = {};
parents.a = 'start';
parents.b = 'start';
parents.fin = null;

// обработанные узлы
let processed = [];

/**
 * Find the lowest node
 * @param {Object} costs Hash table
 * @returns {(string|null)} The lowest node
 */
const findLowestCostNode = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  // Go through each node
  for (let node in costs) {
    const cost = costs[node];
    // Если это самая низкая оценка в данный момент и она еще не обработана
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

let lowestNode = findLowestCostNode(costs);

while (lowestNode !== null) {
  const cost = costs[lowestNode];
  // Go through all the neighbors of this node
  const neighbors = graph[lowestNode];
  Object.keys(neighbors).forEach((n) => {
    const new_cost = cost + neighbors[n];
     // If it's cheaper to get to this neighbor by going through this node
    if (costs[n] > new_cost) {
      // ... update the cost for this node
      costs[n] = new_cost;
      // This node becomes the new parent for this neighbor.
      parents[n] = lowestNode;
    }
  });
  processed = processed.concat(lowestNode);
  // Find the next node to process, and loop
  lowestNode = findLowestCostNode(costs);
}

console.log('Cost from the start to each node:');
console.log(costs);
