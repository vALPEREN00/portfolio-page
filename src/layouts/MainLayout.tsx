import { useEffect, useRef } from 'react';
import { Header } from './Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    const lines = Array.from({ length: 5 }).map((_, i) => ({
      x: target.x,
      y: target.y,
      vx: 0,
      vy: 0,
      stiffness: 0.015 + (i * 0.005), 
      friction: 0.85 + (i * 0.015),  
      history: [] as { x: number, y: number, age: number }[]
    }));

    const maxAge = 60; // Çizginin kuyruk uzunluğu

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        // Yay (Spring) fiziği hesaplaması
        const dx = target.x - line.x;
        const dy = target.y - line.y;
        
        line.vx += dx * line.stiffness;
        line.vy += dy * line.stiffness;
        line.vx *= line.friction;
        line.vy *= line.friction;
        
        line.x += line.vx;
        line.y += line.vy;

        // Geçmişe ekle
        line.history.push({ x: line.x, y: line.y, age: 0 });

        // Yaşlandır ve süresi dolanı sil
        line.history.forEach(p => p.age += 1);
        line.history = line.history.filter(p => p.age < maxAge);

        // Çizgileri çiz (Bağlantı noktalarını birleştirerek)
        if (line.history.length > 1) {
          ctx.beginPath();
          for (let i = 1; i < line.history.length; i++) {
            const p0 = line.history[i - 1];
            const p1 = line.history[i];
            
            // Uca doğru incelme ve silikleşme
            const opacity = 1 - (p1.age / maxAge);
            
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            
            ctx.lineWidth = 1.2; 
            ctx.lineCap = 'round';
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`; // Mavi tonlarında ışık
          }
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans overflow-hidden cursor-default">
      
      {/* İnce, çoklu spektrum çizgileri için Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-30"
      />
      
      <Header />
      
      <main className="relative z-40">
        {children}
      </main>
    </div>
  );
};