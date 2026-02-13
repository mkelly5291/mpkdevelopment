'use client';

import { useEffect, useRef } from 'react';

export default function GameOfLifeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cellSize = 20;
    let cols: number;
    let rows: number;
    let grid: number[][];
    let nextGrid: number[][];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / cellSize);
      rows = Math.floor(canvas.height / cellSize);
      
      // Initialize grids
      grid = Array(rows).fill(null).map(() => Array(cols).fill(0));
      nextGrid = Array(rows).fill(null).map(() => Array(cols).fill(0));
      
      // Add some random initial cells
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          grid[i][j] = Math.random() > 0.85 ? 1 : 0;
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse interaction
    const mouse = { x: -1, y: -1, isDown: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      // Create living cells where mouse hovers
      const col = Math.floor(mouse.x / cellSize);
      const row = Math.floor(mouse.y / cellSize);

      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        grid[row][col] = 1;
        // Create a small cluster around the mouse
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              if (Math.random() > 0.5) {
                grid[newRow][newCol] = 1;
              }
            }
          }
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Count living neighbors
    const countNeighbors = (row: number, col: number): number => {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          const newRow = (row + i + rows) % rows;
          const newCol = (col + j + cols) % cols;
          count += grid[newRow][newCol];
        }
      }
      return count;
    };

    // Update grid based on Conway's Game of Life rules
    const updateGrid = () => {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const neighbors = countNeighbors(i, j);
          const cell = grid[i][j];

          if (cell === 1) {
            // Cell is alive
            if (neighbors < 2 || neighbors > 3) {
              nextGrid[i][j] = 0; // Dies
            } else {
              nextGrid[i][j] = 1; // Survives
            }
          } else {
            // Cell is dead
            if (neighbors === 3) {
              nextGrid[i][j] = 1; // Becomes alive
            } else {
              nextGrid[i][j] = 0; // Stays dead
            }
          }
        }
      }

      // Swap grids
      [grid, nextGrid] = [nextGrid, grid];
    };

    // Draw the grid
    const draw = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 1) {
            const x = j * cellSize;
            const y = i * cellSize;

            // Gradient glow effect
            const gradient = ctx.createRadialGradient(
              x + cellSize / 2, y + cellSize / 2, 0,
              x + cellSize / 2, y + cellSize / 2, cellSize
            );
            gradient.addColorStop(0, 'rgba(96, 165, 250, 0.9)');
            gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.5)');
            gradient.addColorStop(1, 'rgba(147, 51, 234, 0.1)');

            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, cellSize - 1, cellSize - 1);
          }
        }
      }
    };

    // Animation loop
    let frameCount = 0;
    const animate = () => {
      draw();
      
      // Update every 5 frames (slower = more visible patterns)
      frameCount++;
      if (frameCount % 5 === 0) {
        updateGrid();
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
  <canvas
    ref={canvasRef}
    className="fixed inset-0"
    style={{ zIndex: 0, pointerEvents: 'auto' }}
  />
);
}