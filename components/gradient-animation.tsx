"use client"

import React, { useEffect } from 'react'

function GradientAnimation({ children }: any) {

  const colors = {
    'primary': '#01001a',
    'secondary': '#33BBC5',
    'tertiary': '#85E6C5',
    'quartary': '#C8FFE0'
  }

  const margin = 30;
  const shift = -5;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
          @keyframes gradient-motion {
            0% {
              background-position: 70% ${margin}%, ${100 - margin + shift}% ${100 - margin + shift}%;
            }
            33% {
              background-position: ${100 - margin}% ${100 - margin}%,  ${100 - margin + shift}% ${margin + shift}%;
            }
            66% {
              background-position: ${margin}% ${100 - margin}%, ${margin + shift}% ${50 + shift}%;
            }
            100% {
                background-position: 70% ${margin}%, ${100 - margin + shift}% ${100 - margin + shift}%;
              }
          }
        `;
    document.head.append(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const gradientStyle = {
    zIndex: '5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    height: '500px',
    backgroundImage: `
          radial-gradient(circle, ${colors.secondary} 0%, transparent 37%),
          radial-gradient(circle, ${colors.quartary} 0%, transparent 37%)
        `,
    backgroundPosition: '100% 0, 0 100%',
    backgroundSize: '150% 150%',
    animation: 'gradient-motion 10s infinite linear'
  };

  return (
    <div style={gradientStyle}>
      {children}
    </div>
  )
}

export default GradientAnimation