import BreadthFirstSearch from './BreadthFirstSearch.js';
import DepthFirstSearch from './DepthFirstSearch.js';
import Vertex from './Vertex.js';

// Function to run the Breadth-First and Depth-First Search algorithms
function runBFSDFS() {
  // Grab the user input and start parsing it
  const input = document.getElementById('inputArea').value.trim().split('\n');

  // Validate the provided input
  if (!validateInput(input)) return;

  // Get the total number of nodes in graph from the first line of input
  const nodeCount = parseInt(input[0], 10);

  // Create required vertices and add to array to track
  const vertices = createVertices(nodeCount);

  // Parse each line after the first to build the adjacency lists
  vertices.forEach((vertex, i) => {
    const adj = input[i + 1].split(' ');
    adj.forEach(neighbor => {
      const neighborIndex = parseInt(neighbor, 10);
      vertex.addNeighbor(vertices[neighborIndex]);
    });
  });

  // Run BFS
  const bfs = new BreadthFirstSearch();
  const bfs_result = bfs.traverse(vertices[0]);

  // Reset visited statuses of vertices so that DFS can run afresh
  vertices.forEach(vertex => {
    vertex.setVisited(false);
  });

  // Run DFS
  const dfs = new DepthFirstSearch();
  const dfs_result = dfs.traverse(vertices[0]);

  // Display the BFS and DFS traversal results in the respective result divs
  document.getElementById('bfs-result').textContent = bfs_result.join(' ');
  document.getElementById('dfs-result').textContent = dfs_result.join(' ');
}

/**
 * Validates the provided input.
 * Checks
 *    - if the input is empty
 *    - if the first line denoting the node count is a valid positive number
 *    - that for a node count 'n'. there are 'n' subsequent lines in the input for respective adjacencies
 *    - if neighbor indices in adjacencies are positive integers
 *    - that the nighbor index value is not higher than the total nodes in graph
 * @param {*} input
 * @returns {boolean} - Returns true if input is valid, false if any criteria fails
 */
function validateInput(input) {
  // Check if the input is empty
  if (input.length === 0 || !input[0]) {
    alert(
      'Input is empty. Please enter a valid number of nodes, and a graph adjacency list'
    );
    return false;
  }

  // Get total number of nodes from first line of input and validate that it is a positive integer
  const nodeCount = parseInt(input[0], 10); // use base 10 for number
  if (!isPositiveInteger(nodeCount)) return false;

  // Check if the number of lines in the input matches the specified number of nodes
  if (input.length - 1 !== nodeCount) {
    alert(`Input does not match the specified number of nodes (${nodeCount}).`);
    return false;
  }

  // Check if adjacency lists have all positive numbers, and indices <= highest index
  for (let i = 0; i < nodeCount; i++) {
    const adjList = input[i + 1].split(' ');
    adjList.forEach(element => {
      // check if the neighbor index value is a positive integer
      if (!isPositiveInteger(element)) return false;

      // check that the index provided is not higher than the total number of vertices in the graph
      if (element > nodeCount) {
        alert(
          `Invalid input - neighbor index ${element} in provided adjacency list is greater than highest node index ${
            nodeCount - 1
          }`
        );
        return false;
      }
    });
  }

  // if everything checks out, return true
  return true;
}

/**
 * Checks if a number is a positive integer
 * @param item - the item to be checked
 * @returns {boolean} - true if input is a positive integer
 */
function isPositiveInteger(item) {
  if (isNaN(item) || item < 0) {
    alert(`Invalid input item ${item}. Please enter a positive integer`);
    return false;
  }
  return true;
}

/**
 * Create an array of vertices
 * @param nodeCount - the total number of vertices/nodes needed
 * @returns {Vertex[]} - array of vertices
 */
function createVertices(nodeCount) {
  const vertices = [];
  for (let i = 0; i < nodeCount; i++) {
    vertices.push(new Vertex(i));
  }
  return vertices;
}

// Attach the runBFSDFS function to the window object to make it accessible from HTML
window.runBFSDFS = runBFSDFS;
