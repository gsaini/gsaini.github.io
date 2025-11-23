/**
 * NeuralNetwork class creates an animated particle system that simulates a neural network
 * with interconnected nodes and animated pulses traveling between them.
 * Particles move with physics-based motion and respond to mouse interaction.
 */
class NeuralNetwork {
  /**
   * Creates a new NeuralNetwork instance and initializes the animation.
   * Sets up canvas, particles, event listeners, and starts the animation loop.
   * 
   * @constructor
   */
  constructor() {
    /** @type {HTMLCanvasElement} Canvas element for rendering the neural network */
    this.canvas = document.getElementById('neural-network-bg');

    /** @type {CanvasRenderingContext2D} 2D rendering context for drawing */
    this.ctx = this.canvas.getContext('2d');

    /** @type {Array<Particle>} Array of particle objects representing network nodes */
    this.particles = [];

    /** @type {Array<Pulse>} Array of active pulse objects traveling between particles */
    this.pulses = [];

    /** @type {number} Number of particles to render (calculated based on canvas area) */
    this.particleCount = 100;

    /** @type {number} Maximum distance for drawing connections between particles (in pixels) */
    this.connectionDistance = 150;

    /** @type {number} Maximum distance for mouse interaction with particles (in pixels) */
    this.mouseDistance = 200;

    /** 
     * @type {{x: number|null, y: number|null}} 
     * Current mouse position, null when mouse is outside canvas
     */
    this.mouse = {
      x: null,
      y: null,
    };

    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    window.addEventListener('mouseout', () => this.handleMouseOut());
  }

  /**
   * Initializes the neural network by setting canvas size and creating particles.
   * Called once during construction.
   * 
   * @returns {void}
   */
  init() {
    this.resize();
    this.createParticles();
  }

  /**
   * Handles window resize events by adjusting canvas dimensions and recreating particles
   * to maintain consistent particle density across different screen sizes.
   * 
   * @returns {void}
   */
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.createParticles(); // Recreate particles on resize to maintain density
  }

  /**
   * Creates particles with random positions and velocities.
   * Particle count is calculated based on canvas area to maintain consistent density.
   * Each particle has position (x, y), velocity (vx, vy), size, and color.
   * 
   * @typedef {Object} Particle
   * @property {number} x - X coordinate position
   * @property {number} y - Y coordinate position
   * @property {number} vx - X velocity component
   * @property {number} vy - Y velocity component
   * @property {number} size - Particle radius
   * @property {string} color - Particle color (hex format)
   * 
   * @returns {void}
   */
  createParticles() {
    this.particles = [];
    // Reduced density for a cleaner look (larger divisor)
    const area = this.canvas.width * this.canvas.height;
    this.particleCount = Math.floor(area / 25000);

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        // Much slower velocity for a professional, calm feel
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        color: '#00f2ff',
      });
    }
  }

  /**
   * Handles mouse move events and updates the mouse position for particle interaction.
   * 
   * @param {MouseEvent} e - The mouse event object
   * @returns {void}
   */
  handleMouseMove(e) {
    this.mouse.x = e.x;
    this.mouse.y = e.y;
  }

  /**
   * Handles mouse out events by resetting mouse position to null,
   * disabling particle interaction when mouse leaves the window.
   * 
   * @returns {void}
   */
  handleMouseOut() {
    this.mouse.x = null;
    this.mouse.y = null;
  }

  /**
   * Main animation loop that updates and renders all particles, connections, and pulses.
   * Handles particle physics (movement, boundary collision), mouse interaction,
   * connection drawing, pulse spawning, and pulse animation.
   * Uses requestAnimationFrame for smooth 60fps animation.
   * 
   * @typedef {Object} Pulse
   * @property {number} x - Starting X coordinate
   * @property {number} y - Starting Y coordinate
   * @property {number} targetX - Target X coordinate
   * @property {number} targetY - Target Y coordinate
   * @property {number} progress - Animation progress (0 to 1)
   * @property {number} speed - Speed of pulse movement per frame
   * 
   * @returns {void}
   */
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interaction
      if (this.mouse.x != null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (this.mouseDistance - distance) / this.mouseDistance;
          // Gentler interaction
          const directionX = forceDirectionX * force * 0.05;
          const directionY = forceDirectionY * force * 0.05;

          p.vx += directionX;
          p.vy += directionY;
        }
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(0, 242, 255, 0.5)'; // Semi-transparent particles
      this.ctx.fill();

      // Connect particles
      for (let j = i; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          this.ctx.beginPath();
          // Subtler connections (lower opacity)
          const opacity = (1 - distance / this.connectionDistance) * 0.15;
          this.ctx.strokeStyle = `rgba(0, 242, 255, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();

          // Randomly spawn a pulse on this connection
          if (Math.random() < 0.0005) {
            // Low probability for subtlety
            this.pulses.push({
              x: p.x,
              y: p.y,
              targetX: p2.x,
              targetY: p2.y,
              progress: 0,
              speed: 0.02 + Math.random() * 0.03, // Random speed
            });
          }
        }
      }
    }

    // Update and draw pulses
    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const pulse = this.pulses[i];
      pulse.progress += pulse.speed;

      if (pulse.progress >= 1) {
        this.pulses.splice(i, 1); // Remove finished pulses
        continue;
      }

      const currentX = pulse.x + (pulse.targetX - pulse.x) * pulse.progress;
      const currentY = pulse.y + (pulse.targetY - pulse.y) * pulse.progress;

      this.ctx.beginPath();
      this.ctx.arc(currentX, currentY, 1.5, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(0, 242, 255, 0.8)'; // Bright pulse
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

/**
 * Initializes the NeuralNetwork animation when the DOM is fully loaded.
 * This ensures all DOM elements (especially the canvas) are available before
 * attempting to create the neural network visualization.
 */
document.addEventListener('DOMContentLoaded', () => {
  new NeuralNetwork();
});
