"use client";

import { useEffect, useRef } from 'react';

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    // Mouse state
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    
    // Settings
    const spacing = 35; // space between dots
    const sigma = 200; // spread of the gaussian
    const amplitude = 0.8; // max pull strength (0 to 1)

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    
    const onMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;
      
      const offsetX = (width % spacing) / 2;
      const offsetY = (height % spacing) / 2;

      // Precalculate positions
      const points: { x: number, y: number, g: number }[][] = [];
      
      for (let i = -1; i <= cols; i++) {
        points[i + 1] = [];
        for (let j = -1; j <= rows; j++) {
          const baseX = i * spacing + offsetX;
          const baseY = j * spacing + offsetY;
          
          const dx = mouse.x - baseX;
          const dy = mouse.y - baseY;
          const distSq = dx * dx + dy * dy;
          
          // Gaussian: e^(-d^2 / 2*sigma^2)
          const g = Math.exp(-distSq / (2 * sigma * sigma));
          
          // Displacement towards mouse
          const nx = baseX + dx * g * amplitude;
          const ny = baseY + dy * g * amplitude;
          
          points[i + 1][j + 1] = { x: nx, y: ny, g };
        }
      }

      // Draw lines
      ctx.lineWidth = 1;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const p = points[i][j];
          const right = points[i + 1]?.[j];
          const bottom = points[i]?.[j + 1];
          
          // The line opacity gets slightly stronger near the singularity
          if (right) {
            const lineG = (p.g + right.g) / 2;
            const alpha = 0.03 + lineG * 0.15;
            ctx.strokeStyle = `rgba(100, 116, 139, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }
          
          if (bottom) {
            const lineG = (p.g + bottom.g) / 2;
            const alpha = 0.03 + lineG * 0.15;
            ctx.strokeStyle = `rgba(100, 116, 139, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(bottom.x, bottom.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const p = points[i][j];
          const size = 1 + p.g * 2;
          const alpha = 0.1 + p.g * 0.6; // almost invisible until pointer
          ctx.fillStyle = `rgba(100, 116, 139, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
