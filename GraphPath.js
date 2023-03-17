const n = 3;
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
const source = 0;
const destination = 2;

//method 1 : using map and set 

var validPath = function (n, edges, source, destination) {
  // adjMatrix: hashMap of adjacency matrix
  const adjMatrix = createAdjMatrix(edges);

  // METHOD 2: ITERATIVE DFS
  return dfs(source, destination, adjMatrix);
};

// function to create adjacency matrix
function createAdjMatrix(edges) {
  const adjMatrix = new Map();

  for (let [v, e] of edges) {
    adjMatrix.has(v) ? adjMatrix.get(v).push(e) : adjMatrix.set(v, [e]);
    adjMatrix.has(e) ? adjMatrix.get(e).push(v) : adjMatrix.set(e, [v]);
  }

  return adjMatrix;
}

// // METHOD 2: ITERATIVE DFS
function dfs(source, destination, adjList) {
  const stack = [source];
  const visited = new Set();
  visited.add(source);

  while (stack.length > 0) {
    const currentVertex = stack.pop();

    if (currentVertex === destination) return true;

    for (let neighbour of adjList.get(currentVertex)) {
      if (!visited.has(neighbour)) {
        stack.push(neighbour);
        visited.add(neighbour);
      }
    }
  }
  return false;
}

console.log(validPath(n, edges, source, destination));

// method 2 : using array and object

// var validPath = function (n, edges, source, destination) {
//   let adjList = {},
//     visited = [];

//   for (const edge of edges) {
//     adjList[edge[0]]
//       ? adjList[edge[0]].push(edge[1])
//       : (adjList[edge[0]] = [edge[1]]);

//     adjList[edge[1]]
//       ? adjList[edge[1]].push(edge[0])
//       : (adjList[edge[1]] = [edge[0]]);

//     console.log("adjList", adjList);
//   }
//   console.log("##################");
//   const stack = [source];
//   visited[source] = true;

//   while (stack.length) {
//     const current = stack.pop();
//     if (current === destination) return true;
//     for (let neighbour of adjList[current]) {
//       if (!visited[neighbour]) {
//         stack.push(neighbour);
//         visited[neighbour] = true;
//       }
//     }
//   }

//   return false;
// };
