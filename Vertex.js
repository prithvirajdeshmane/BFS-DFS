/**
 * Class representing a vertex in a graph.
 */
class Vertex {
  /**
   * Create a vertex.
   * @param {number} name - The name or identifier of the vertex.
   */
  constructor(name) {
    this.name = name; // Identifier for the vertex
    this.visited = false; // Indicates if the vertex has been visited in a traversal
    this.adjacencyList = []; // List of adjacent vertices
  }

  /**
   * Get the name of the vertex.
   * @return {number} The name of the vertex.
   */
  getName() {
    return this.name;
  }

  /**
   * Check if the vertex has been visited.
   * @return {boolean} True if the vertex has been visited, otherwise false.
   */
  isVisited() {
    return this.visited;
  }

  /**
   * Set the visited status of the vertex.
   * @param {boolean} visited - The new visited status of the vertex.
   */
  setVisited(visited) {
    this.visited = visited;
  }

  /**
   * Get the list of adjacent vertices.
   * @return {Vertex[]} The list of adjacent vertices.
   */
  getAdjacencyList() {
    return this.adjacencyList;
  }

  /**
   * Add a neighbor to the adjacency list.
   * @param {Vertex} vertex - The vertex to add as a neighbor.
   */
  addNeighbor(vertex) {
    this.adjacencyList.push(vertex);
  }
}

// Export the Vertex class to be used in other files
export default Vertex;
