class NeuralNetwork {
    constructor() {
        this.canvas = document.getElementById('neural-network-bg');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.pulses = []; // Array to store active pulses
        this.particleCount = 100;
        this.connectionDistance = 150;
        this.mouseDistance = 200;

        this.mouse = {
            x: null,
            y: null
        };

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('mouseout', () => this.handleMouseOut());
    }

    init() {
        this.resize();
        this.createParticles();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles(); // Recreate particles on resize to maintain density
    }

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
                color: '#00f2ff'
            });
        }
    }

    handleMouseMove(e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
    }

    handleMouseOut() {
        this.mouse.x = null;
        this.mouse.y = null;
    }

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
                    if (Math.random() < 0.0005) { // Low probability for subtlety
                        this.pulses.push({
                            x: p.x,
                            y: p.y,
                            targetX: p2.x,
                            targetY: p2.y,
                            progress: 0,
                            speed: 0.02 + Math.random() * 0.03 // Random speed
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NeuralNetwork();
});
