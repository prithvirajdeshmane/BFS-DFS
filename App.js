import BreadthFirstSearch from './BreadthFirstSearch.js';
import DepthFirstSearch from './DepthFirstSearch.js';
import Vertex from './Vertex.js';

// Function to run the Breadth-First and Depth-First Search algorithms
function runBFSDFS() {
  // Grab the user input and start parsing it
  const input = document.getElementById('inputArea').value.trim().split('\n');

  // Check if the input is empty
  if (input.length === 0 || !input[0]) {
    alert(
      'Input is empty. Please enter a valid number of nodes, and a graph adjacency list'
    );
    return;
  }

  // Get the total number of nodes in graph from the first line of input
  const nodeCount = parseInt(input[0], 10); // use base 10 for number

  // Validate nodeCount to be a positive integer
  if (isNaN(nodeCount) || nodeCount < 0) {
    alert('Invalid number of nodes. Please enter a positive integer');
    return;
  }

  // Check if the number of lines in the input matches the specified number of nodes
  if (input.length - 1 !== nodeCount) {
    alert(`Input does not match the specified number of nodes (${nodeCount}).`);
    return;
  }

  // Create required vertices and add to array to track
  const vertices = [];
  for (let i = 0; i < nodeCount; i++) {
    vertices.push(new Vertex(i));
  }

  // Parse each line after the first to build the adjacency lists
  for (let i = 0; i < nodeCount; i++) {
    // Get the current vertex
    let vertex = vertices[i];

    // Split the adjacency list line into individual node indices
    const adj = input[i + 1].split(' ');

    // Validate and add each neighbor to the current vertex
    adj.forEach(neighbor => {
      const neighborIndex = parseInt(neighbor, 10);
      if (
        !isNaN(neighborIndex) &&
        neighborIndex >= 0 &&
        neighborIndex < nodeCount
      ) {
        // Add valid neighbor to adjacency list
        vertex.addNeighbor(vertices[neighborIndex]);
      } else {
        // Display alert and exit the loop
        alert(
          `Invalid neighbor index ${neighbor}. Please enter valid node indices.`
        );
        return;
      }
    });
  }

  // Create a new instance of BreadthFirstSearch and run the BFS algorithm
  const bfs = new BreadthFirstSearch();
  const bfs_result = bfs.traverse(vertices[0]);

  // Reset visited statuses of vertices so that DFS can run afresh
  vertices.forEach(vertex => {
    vertex.setVisited(false);
  });

  // Create a new instance of DepthFirstSearch and run the DFS algorithm
  const dfs = new DepthFirstSearch();
  const dfs_result = dfs.traverse(vertices[0]);

  // Display the BFS and DFS traversal results in the respective result divs
  document.getElementById('bfs-result').textContent = bfs_result.join(' ');
  document.getElementById('dfs-result').textContent = dfs_result.join(' ');
}

// Attach the runBFSDFS function to the window object to make it accessible from HTML
window.runBFSDFS = runBFSDFS;
