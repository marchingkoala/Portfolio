export const menuGlowStyles = `
  @keyframes glow-pulse {
    0%, 100% {
      opacity: 0.75;
      text-shadow: 0 1px 8px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow:
        0 0 6px rgba(255, 255, 255, 0.95),
        0 0 18px rgba(255, 255, 255, 0.7),
        0 0 32px rgba(255, 255, 255, 0.45);
    }
  }

  .glow-on-hover:hover,
  .glow-on-hover:focus-visible {
    animation: glow-pulse 1.7s ease-in-out infinite;
    outline: none;
  }
`
