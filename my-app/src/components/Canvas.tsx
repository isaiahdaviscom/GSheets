import React, { useRef, useEffect } from 'react';

const Canvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef(null);

  console.log(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;
    //Our first draw
    context.fillStyle = '#000000';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <canvas id='canvas' ref={canvasRef} {...props} />;
};

export default Canvas;