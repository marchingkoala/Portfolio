const menuItems = [
  { id: 'about', number: '1', label: 'About', top: '27%', left: '54%' },
  { id: 'experience', number: '2', label: 'Experience', top: '48%', left: '34%' },
  { id: 'projects', number: '3', label: 'Projects', top: '68%', left: '56%' },
  { id: 'contact', number: '4', label: 'Contact', top: '80%', left: '31%' },
]

const menuGlowStyles = `
  @keyframes landing-menu-glow {
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

  .landing-menu-item:hover,
  .landing-menu-item:focus-visible {
    animation: landing-menu-glow 1.7s ease-in-out infinite;
    outline: none;
  }
`

function LandingPage() {
  const ink = '#f5f5f5'
  const font = "'Bickham Script Pro', sans-serif"

  const styles = {
    landing: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#1a1a1a',
      backgroundImage: "url('/images/lotus_bg2.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      color: ink,
      fontFamily: font,
      fontStyle: 'italic',
    },
    content: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      minHeight: '100vh',
    },
    header: {
      position: 'absolute',
      top: 'clamp(0.5rem, 1.5vw, 1.25rem)',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      width: 'min(90vw, 52rem)',
      pointerEvents: 'none',
    },
    brand: {
      position: 'relative',
      display: 'inline-block',
    },
    title: {
      position: 'relative',
      display: 'block',
      margin: 0,
      paddingBottom: '0.28em',
      fontFamily: font,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(6.552rem, 17.472vw, 12.376rem)',
      lineHeight: 0.9,
      letterSpacing: '0.02em',
      textTransform: 'none',
      color: ink,
      textShadow: '0 2px 24px rgba(0, 0, 0, 0.45)',
    },
    subtitle: {
      position: 'absolute',
      left: '4%',
      top: '60%',
      margin: 0,
      width: 'auto',
      fontFamily: font,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(0.95rem, 3.1vw, 2rem)',
      lineHeight: 1,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      textAlign: 'left',
      color: ink,
      textShadow: '0 1px 12px rgba(0, 0, 0, 0.4)',
    },
    nav: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
    },
    menuItem: {
      pointerEvents: 'auto',
      position: 'absolute',
      appearance: 'none',
      WebkitAppearance: 'none',
      border: 0,
      borderRadius: 0,
      background: 'transparent',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      height: 'auto',
      padding: '0.35em 0.5em',
      margin: 0,
      display: 'block',
      fontFamily: font,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(1.35rem, 2.6vw, 2rem)',
      lineHeight: 1,
      letterSpacing: '0.03em',
      textTransform: 'none',
      textAlign: 'left',
      textDecoration: 'none',
      color: ink,
      cursor: 'pointer',
      textShadow: '0 1px 10px rgba(0, 0, 0, 0.55)',
      whiteSpace: 'nowrap',
    },
  }

  return (
    <section style={styles.landing} aria-label="Portfolio landing">
      <style>{menuGlowStyles}</style>
      <div style={styles.content}>
        <header style={styles.header}>
          <div style={styles.brand}>
            <h1 style={styles.title}>Portfolio</h1>
            <p style={styles.subtitle}>of Carmine Yijin Ro</p>
          </div>
        </header>

        <nav style={styles.nav} aria-label="Primary">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="landing-menu-item"
              style={{
                ...styles.menuItem,
                top: item.top,
                left: item.left,
              }}
            >
              <span>{item.number}</span>
              {'. '}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default LandingPage
