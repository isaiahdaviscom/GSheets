import React, { useRef, useEffect } from 'react';

const Canvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

  console.log(props);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasContextRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasContextRef.current; // Assigning to a temp variable
      ctx!.beginPath(); // Note the Non Null Assertion
      ctx!.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx!.stroke();
    }
  }, []);


  return <canvas id='canvas' ref={canvasRef} {...props} />;
};

export default Canvas;