/**
 * Class for performing Depth-First Search (DFS) on a graph.
 */
class DepthFirstSearch {
  /**
   * Traverse the graph using Depth-First Search starting from the root vertex.
   * @param {Vertex} root - The starting vertex for DFS traversal.
   * @return {number[]} An array containing the names of the vertices in the order they were visited.
   */
  traverse(root) {
    const result = []; // Array to store the traversal order of vertices

    // Start the DFS traversal from the root vertex
    this.dfs(root, result);

    // Return the traversal order of vertices
    return result;
  }

  /**
   * Helper method to perform the DFS traversal recursively.
   * @param {Vertex} vertex - The current vertex being processed.
   * @param {number[]} result - The array to store the traversal order.
   */
  dfs(vertex, result) {
    // Mark the current vertex as visited
    vertex.setVisited(true);
    // Add the current vertex to the result array
    result.push(vertex.getName());

    // Process each neighbor of the current vertex
    for (const v of vertex.getAdjacencyList()) {
      if (!v.isVisited()) {
        // Recursively visit each unvisited neighbor
        this.dfs(v, result);
      }
    }
  }
}

// Export the DepthFirstSearch class for use in other files
export default DepthFirstSearch;
