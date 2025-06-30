import React, { useEffect, useRef } from 'react';
import './dino_game.scss';

const DinoGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    canvas.width = 600;
    canvas.height = 150;

    let dino = { x: 50, y: 110, vy: 0, gravity: 0.6, jumping: false };
    let cactus = { x: 600, y: 110, w: 20, h: 40, speed: 6 };
    let score = 0;
    let gameOver = false;

    const jump = () => {
      if (!dino.jumping) {
        dino.vy = -12;
        dino.jumping = true;
      }
    };

    const reset = () => {
      dino.y = 110;
      dino.vy = 0;
      cactus.x = 600;
      score = 0;
      gameOver = false;
      animate();
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        if (gameOver) reset();
        else jump();
      }
    };

    document.addEventListener('keydown', handleKey);

    const animate = () => {
      if (gameOver) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dino
      dino.vy += dino.gravity;
      dino.y += dino.vy;
      if (dino.y > 110) {
        dino.y = 110;
        dino.jumping = false;
      }

      ctx.fillStyle = '#333';
      ctx.fillRect(dino.x, dino.y, 30, 30);

      // Cactus
      cactus.x -= cactus.speed;
      if (cactus.x < -cactus.w) {
        cactus.x = 600 + Math.random() * 100;
        score++;
      }

      ctx.fillStyle = '#228B22';
      ctx.fillRect(cactus.x, cactus.y, cactus.w, cactus.h);

      // Score
      ctx.fillStyle = '#555';
      ctx.font = '16px RobotoMono';
      ctx.fillText('Score: ' + score, 500, 20);

      // Collision
      if (
        dino.x < cactus.x + cactus.w &&
        dino.x + 30 > cactus.x &&
        dino.y < cactus.y + cactus.h &&
        dino.y + 30 > cactus.y
      ) {
        gameOver = true;
        ctx.fillStyle = '#ff4444';
        ctx.font = '20px RobotoMono';
        ctx.fillText('Game Over! Press Space to Restart.', 150, 80);
        return;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div className="dino-game-container">
      <h2>Play Dino 🦖</h2>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default DinoGame;
