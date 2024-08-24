# Breadth-First Search and Depth-First Search Visualization

This project implements the Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms on a graph. The graph is input by the user in the form of an adjacency list, and the BFS and DFS traversal orders are displayed on the web page.
When a valid input is provided, the program runs both the BFS and DFS algorithms together on the input. Outputs for both are generated together for the user to then examine and compare the differences.

## Table of Contents

- [Project Structure](#project-structure)
- [Usage](#usage)
- [Input Format](#input-format)
- [Example](#example)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that contains the user interface.
- `App.js`: The main JavaScript file that handles user input, initializes the graph, and runs the DFS algorithm.
- `DepthFirstSearch.js`: Contains the implementation of the Depth-First Search algorithm.
- `Vertex.js`: Defines the `Vertex` class, which represents a node in the graph.

## Usage

1. Open [Demo page](https://prithvirajdeshmane.github.io/BFS-DFS/) in your web browser.
2. Enter the number of nodes in the graph and the graph's adjacency list in the textarea provided.
3. Click the "Run BFS and DFS" button to execute the BFS and DFS algorithms simultaneously.
4. The results of the respective BFS and DFS traversals will be displayed below the button.

## Input Format

- The first line of the input should contain an integer `n`, representing the number of vertices in the graph.
- The following `n` lines should each contain space-separated integers. Each line represents the adjacency list for a vertex, with the indices corresponding to other vertices it is connected to.
- NOTE: The vertex numbers start from 0, i.e. the root of the graph is vertex 0. The adjacency list will need to be accurately provided to account for this.

### Example Inputs

**Example 1:**

<img src="https://github.com/user-attachments/assets/f64e3d86-5614-4b3b-a8a8-9460e159fcf0" width="500px"/>

```
3
1 2
0 2
0 1
```

This input represents a graph with 3 vertices:

- Vertex 0 is connected to vertices 1 and 2.
- Vertex 1 is connected to vertices 0 and 2.
- Vertex 2 is connected to vertices 0 and 1.

### Example Output

Given the example input above, the traversal starting from vertex 0 would produce the outputs:

```
Breadth First Search Output: 
0 1 2

Depth  First Search Output: 
0 1 2
```

**Example 2:**

<img src="https://github.com/user-attachments/assets/bc0b3ff8-ba6e-4981-8559-091b711f7247" width="500px"/>

```
8
1 5 6
0 2 3
1
1 4
3
0
0 7
6
```

The output here would be:

```
Breadth First Search Output: 
0 1 5 6 2 3 7 4

Depth  First Search Output: 
0 1 2 3 4 5 6 7
```

**Example 3:**

<img src="https://github.com/user-attachments/assets/3900b630-81d3-4e5f-96fc-4ee480c50d38" width="500px"/>

```
11
1 3 6 8
0 2 4
1
0 4 5
1 3
3
0 7
6 8 9
0 7 10
7
8
```

The output here would be:

```
Breadth First Search Output: 
0 1 3 6 8 2 4 5 7 10 9

Depth  First Search Output: 
0 1 2 4 3 5 6 7 8 10 9
```

## Technologies Used

- **HTML5**: For structuring the web page.
- **JavaScript (ES6)**: For implementing the DFS algorithm and handling user interactions.
- **CSS3**: Basic styling (optional, you can add your own).

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to fork the repository and submit a pull request.

Or, alternately, file an issue [here](https://github.com/prithvirajdeshmane/BFS-DFS/issues)

## License

This project is licensed under the GNU GPL-3.0 License. See the [LICENSE](LICENSE) file for more details.
