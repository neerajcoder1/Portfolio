import { useEffect, useRef } from "react";

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Particles
    const particleCount = 65;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = [
      "rgba(255, 0, 127, ", // neon pink
      "rgba(0, 243, 255, ", // neon cyan
      "rgba(57, 255, 20, ",  // neon green
      "rgba(142, 45, 226, " // neon violet
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    // Animation Loop
    const draw = () => {
      const isLight = document.documentElement.classList.contains("light");
      
      if (isLight) {
        ctx.fillStyle = "rgba(248, 250, 252, 0.25)"; // light trace trail
      } else {
        ctx.fillStyle = "rgba(8, 7, 16, 0.14)"; // dark trace trail
      }
      ctx.fillRect(0, 0, width, height);

      // Interpolate mouse coordinates softly
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw subtle neon grid lines
      ctx.strokeStyle = isLight ? "rgba(99, 102, 241, 0.05)" : "rgba(30, 27, 75, 0.15)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      const gridShiftX = (mouse.x - width / 2) * 0.04;
      const gridShiftY = (mouse.y - height / 2) * 0.04;

      for (let x = gridShiftX % gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = gridShiftY % gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p, idx) => {
        p.x += p.speedX + (mouse.x - width / 2) * (p.size * 0.005);
        p.y += p.speedY + (mouse.y - height / 2) * (p.size * 0.005);

        // Boundary wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.12;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Draw ambient cursor glow
      const radialGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        150
      );
      radialGlow.addColorStop(0, "rgba(142, 45, 226, 0.07)");
      radialGlow.addColorStop(0.5, "rgba(0, 243, 255, 0.03)");
      radialGlow.addColorStop(1, "rgba(8, 7, 16, 0)");
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="cyber-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-transparent"
    />
  );
}
