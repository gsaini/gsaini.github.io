document.getElementById('year').textContent = new Date().getFullYear();

// Subtle Neural Network Animation
function createNeuralNetwork() {
  const container = document.getElementById('neuralNetwork');
  const nodeCount = 8;
  const nodes = [];
  
  // Create subtle nodes
  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement('div');
    node.className = 'neural-node';
    node.style.left = Math.random() * 90 + 5 + '%';
    node.style.top = Math.random() * 90 + 5 + '%';
    node.style.animationDelay = Math.random() * 4 + 's';
    container.appendChild(node);
    nodes.push(node);
  }
  
  // Create subtle connections
  nodes.forEach((node, i) => {
    if (i < nodes.length - 1 && Math.random() > 0.3) {
      const connection = document.createElement('div');
      connection.className = 'neural-connection';
      
      const x1 = parseFloat(node.style.left);
      const y1 = parseFloat(node.style.top);
      const x2 = parseFloat(nodes[i + 1].style.left);
      const y2 = parseFloat(nodes[i + 1].style.top);
      
      const deltaX = x2 - x1;
      const deltaY = y2 - y1;
      const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 8;
      const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
      
      connection.style.left = x1 + '%';
      connection.style.top = y1 + '%';
      connection.style.width = length + 'px';
      connection.style.transform = `rotate(${angle}deg)`;
      connection.style.animationDelay = Math.random() * 6 + 's';
      
      container.appendChild(connection);
    }
  });
}

// Initialize neural network
createNeuralNetwork();