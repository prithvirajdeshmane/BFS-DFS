/**
 * Class for performing Breadth-First Search (BFS) on a graph.
 */
class BreadthFirstSearch {
  /**
   * Traverse the graph using Breadth-First Search starting from the root vertex.
   * @param {Vertex} root - The starting vertex for BFS traversal.
   * @return {number[]} An array containing the names of the vertices in the order they were visited.
   */
  traverse(root) {
    const queue = []; // Queue to keep track of vertices to be processed
    const result = []; // Array to store the traversal order of vertices

    // Initialize the BFS process
    root.setVisited(true); // Mark the root vertex as visited
    queue.push(root); // Enqueue the root vertex

    // Process vertices until the queue is empty
    while (queue.length > 0) {
      // Remove the vertex at the front of the queue
      const vertexBeingProcessed = queue.shift();
      // Add the current vertex to the result array
      result.push(vertexBeingProcessed.getName());

      // Process each neighbor of the current vertex
      for (const v of vertexBeingProcessed.getAdjacencyList()) {
        if (!v.isVisited()) {
          // Check if the neighbor has not been visited
          v.setVisited(true); // Mark the neighbor as visited
          queue.push(v); // Enqueue the neighbor for processing
        }
      }
    }

    // Return the traversal order of vertices
    return result;
  }
}

// Export the BreadthFirstSearch class for use in other files
export default BreadthFirstSearch;
