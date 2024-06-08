function dijkstra(graph, start) {
    const distances = {};
    const visited = {};

    for (const vertex in graph) {
        distances[vertex] = Infinity;
    }

    distances[start] = 0;

    while (true) {
        let minDistance = Infinity;
        let closestVertex = null;

        for (const vertex in distances) {
            if (!visited[vertex] && distances[vertex] < minDistance) {
                minDistance = distances[vertex];
                closestVertex = vertex;
            }
        }

        if (!closestVertex) {
            break;
        }

        visited[closestVertex] = true;

        for (const neighbor in graph[closestVertex]) {
            const distanceToNeighbor = graph[closestVertex][neighbor];
            const totalDistance = distances[closestVertex] + distanceToNeighbor;

            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
            }
        }
    }

    return distances;
}

const graph = {
   'A': { 'B': 4, 'C': 2 },
   'B': { 'A': 4, 'C': 5, 'D': 10 },
   'C': { 'A': 2, 'B': 5, 'D': 3 },
   'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'A'));
