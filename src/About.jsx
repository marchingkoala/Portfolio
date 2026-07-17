import { menuGlowStyles } from './StyleUtil'

const aboutHoverStyles = `
  .about-logo-button {
    transition: transform 0.25s ease, filter 0.25s ease;
  }
  .about-logo-button:hover,
  .about-logo-button:focus-visible {
    transform: scale(1.08);
    filter: drop-shadow(0 4px 14px rgba(255, 255, 255, 0.35));
    outline: none;
  }

  @media (max-width: 800px) {
    .about-container {
      flex-direction: column !important;
      text-align: center !important;
      gap: clamp(1.5rem, 5vw, 2.5rem) !important;
    }
    .about-header-block {
      align-items: center !important;
      text-align: center !important;
    }
    .about-photo-wrap {
      width: clamp(180px, 55vw, 260px) !important;
    }
    .about-text-col {
      min-width: 0 !important;
    }
    .about-paragraph {
      text-align: left !important;
    }
  }

  @media (max-width: 480px) {
    .about-title {
      font-size: clamp(2.6rem, 15vw, 3.6rem) !important;
    }
  }
`

function About() {
  const ink = '#f5f5f5'
  const scriptFont = "'Bickham Script Pro', sans-serif"
  const serifFont = "'Spectral', serif"

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const styles = {
    section: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#141414',
      backgroundImage: "url('/images/about_bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: ink,
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: 'clamp(2rem, 6vw, 5rem)',
    },
    logoButton: {
      position: 'absolute',
      top: 'clamp(1rem, 3vw, 2rem)',
      left: 'clamp(1rem, 3vw, 2rem)',
      display: 'inline-block',
      border: 0,
      borderBottom: 'none',
      borderRadius: 0,
      background: 'transparent',
      boxShadow: 'none',
      padding: 0,
      margin: 0,
      cursor: 'pointer',
      lineHeight: 0,
      textDecoration: 'none',
      zIndex: 2,
    },
    logoImage: {
      width: 'clamp(56px, 6vw, 92px)',
      height: 'auto',
      display: 'block',
    },
    container: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(2rem, 6vw, 4.5rem)',
      width: '100%',
      maxWidth: '80rem',
      margin: '0 auto',
      flexWrap: 'wrap',
    },
    photoWrap: {
      flex: '0 0 auto',
      width: 'clamp(220px, 27vw, 320px)',
    },
    photo: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '2rem',
      boxShadow: '0 16px 44px rgba(0, 0, 0, 0.5)',
      objectFit: 'cover',
    },
    textCol: {
      flex: '1 1 320px',
      minWidth: '280px',
    },
    headerBlock: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      textAlign: 'right',
      marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)',
    },
    title: {
      margin: 0,
      fontFamily: scriptFont,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(4.3875rem, 8.775vw, 7.425rem)',
      lineHeight: 1,
      letterSpacing: 'normal',
      textTransform: 'none',
      color: ink,
      textShadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
    },
    dividerRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginTop: 'clamp(-1.1rem, -2.19vw, -1.86rem)',
    },
    dividerLine: {
      width: 'clamp(4rem, 11vw, 10rem)',
      height: '1px',
      backgroundColor: ink,
      opacity: 0.85,
    },
    subtitle: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(1.1rem, 2.1vw, 1.55rem)',
      letterSpacing: '0.05em',
      whiteSpace: 'nowrap',
      color: ink,
    },
    paragraph: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(0.98rem, 1.7vw, 1.2rem)',
      lineHeight: 1.75,
      textAlign: 'justify',
      hyphens: 'auto',
      color: ink,
      margin: '0 0 1.35rem 0',
      textShadow: '0 1px 8px rgba(0, 0, 0, 0.35)',
    },
    footerLinkWrap: {
      position: 'absolute',
      bottom: 'clamp(1.25rem, 3vw, 2.25rem)',
      right: 'clamp(1.25rem, 3vw, 2.25rem)',
      zIndex: 2,
    },
    footerLink: {
      fontFamily: serifFont,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(1.15rem, 2.2vw, 1.7rem)',
      color: ink,
      textDecoration: 'none',
      textShadow: '0 1px 10px rgba(0, 0, 0, 0.55)',
      borderBottom: 'none'
    },
  }

  return (
    <section id="about" style={styles.section} aria-label="About me">
      <style>{aboutHoverStyles}</style>
      <style>{menuGlowStyles}</style>

      <a
        href="#"
        className="about-logo-button"
        style={styles.logoButton}
        onClick={(e) => {
          e.preventDefault()
          scrollToTop()
        }}
        aria-label="Back to top"
      >
        <img src="/images/butterfly5.png" alt="Back to top" style={styles.logoImage} />
      </a>

      <div style={styles.container} className="about-container">
        <div style={styles.photoWrap} className="about-photo-wrap">
          <img src="/images/profile_photo.jpg" alt="Portrait of Carmine Yijin Ro" style={styles.photo} />
        </div>

        <div style={styles.textCol} className="about-text-col">
          <div style={styles.headerBlock} className="about-header-block">
            <h2 style={styles.title} className="about-title">About Me</h2>
            <div style={styles.dividerRow}>
              <span style={styles.dividerLine} />
              <span style={styles.subtitle}>Software Engineer</span>
            </div>
          </div>

          <p style={styles.paragraph} className="about-paragraph">
            I'm Carmine Yijin Ro, a Frontend Software Engineer and multidisciplinary designer based on the East Coast of the United States. I combine a background in visual design with modern frontend engineering to build digital products that are both visually compelling and thoughtfully engineered.
          </p>
          <p style={styles.paragraph} className="about-paragraph">
            My strengths lie in bridging design and development. Drawing from years of experience in visual design and modern frontend technologies, I specialize in translating creative concepts into polished, performant interfaces. I'm especially passionate about transforming high-fidelity designs into accessible, pixel-perfect experiences that balance aesthetics, usability, and performance.
          </p>
        </div>
      </div>

      <div style={styles.footerLinkWrap}>
        <a href="#experience" className="glow-on-hover" style={styles.footerLink}>
          Head over to Experience &darr;
        </a>
      </div>
    </section>
  )
}

export default About
