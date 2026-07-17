import { menuGlowStyles } from './StyleUtil'

const contactGlowStyles = `
  @keyframes butterfly-glow {
    0%, 100% {
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
    }
    50% {
      filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.9))
              drop-shadow(0 0 30px rgba(255, 255, 255, 0.45));
    }
  }

  @keyframes butterfly-float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-14px) rotate(-3deg); }
  }
  @keyframes butterfly-float-flipped {
  0%, 100% { transform: scaleX(-1) translateY(0) rotate(0deg); }
  50%      { transform: scaleX(-1) translateY(-14px) rotate(3deg); }
}

  .contact-butterfly {
    animation: butterfly-glow 3.4s ease-in-out infinite,
               butterfly-float 7s ease-in-out infinite;
  }
  .contact-butterfly.lower {
   animation: butterfly-glow 3.4s ease-in-out infinite,
              butterfly-float-flipped 7s ease-in-out infinite;
  }

  @media (max-width: 700px) {
    .contact-link-row {
      flex-wrap: wrap !important;
    }
    .contact-link-row a {
      word-break: break-word !important;
    }
  }

  @media (max-width: 480px) {
    .contact-title {
      font-size: clamp(2.6rem, 15vw, 3.6rem) !important;
    }
    .contact-container p {
      text-align: left !important;
    }
    .contact-butterfly {
      width: clamp(60px, 22vw, 100px) !important;
    }
  }
`

const contactLinks = [
  {
    id: 'linkedin',
    icon: '/images/logos/linkedin.png',
    label: 'LinkedIn:',
    display: 'https://linkedin.com/in/carminero0921',
    href: 'https://www.linkedin.com/in/carminero0921',
    external: true,
  },
  {
    id: 'github',
    icon: '/images/logos/github-light.png',
    label: 'Github:',
    display: 'https://github.com/marchingkoala',
    href: 'https://www.github.com/marchingkoala',
    external: true,
  },
  {
    id: 'email',
    icon: '/images/logos/gmail.png',
    label: 'Email:',
    display: 'yri.carmine@gmail.com',
    href: 'mailto:yri.carmine@gmail.com',
    external: false,
  },
]

function Contact() {
  const ink = '#f5f5f5'
  const scriptFont = "'Bickham Script Pro', sans-serif"
  const serifFont = "'Spectral', serif"

  const styles = {
    section: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#1a1a1a',
      backgroundImage: "url('/images/about_bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      color: ink,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(2.5rem, 6vw, 5rem)',
    },
    container: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      maxWidth: '52rem',
      margin: '0 auto',
    },
    title: {
      margin: '0 0 clamp(1.5rem, 3vw, 2.5rem) 0',
      textAlign: 'center',
      fontFamily: scriptFont,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(4.3875rem, 8.775vw, 7.425rem)',
      lineHeight: 1,
      letterSpacing: 'normal',
      textTransform: 'none',
      color: ink,
      textShadow: '0 2px 18px rgba(0, 0, 0, 0.5)',
    },
    body: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
      lineHeight: 1.7,
      textAlign: 'justify',
      color: ink,
      margin: '0 0 clamp(2rem, 4vw, 3rem) 0',
      textShadow: '0 1px 10px rgba(0, 0, 0, 0.5)',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(0.9rem, 1.8vw, 1.35rem)',
    },
    linkRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.85rem',
    },
    icon: {
      width: 'clamp(28px, 2.6vw, 36px)',
      height: 'clamp(28px, 2.6vw, 36px)',
      objectFit: 'contain',
      display: 'block',
      flex: '0 0 auto',
    },
    linkText: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
      color: ink,
      textDecoration: 'none',
      borderBottom: 'none',
      textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)',
    },
    butterflyTop: {
      position: 'absolute',
      top: 'clamp(6%, 10vw, 14%)',
      right: 'clamp(10%, 14vw, 18%)',
      width: 'clamp(90px, 12vw, 160px)',
      height: 'auto',
      zIndex: 0,
      pointerEvents: 'none',
    },
    butterflyBottom: {
      position: 'absolute',
      bottom: 'clamp(8%, 12vw, 16%)',
      left: 'clamp(6%, 10vw, 12%)',
      width: 'clamp(70px, 9vw, 120px)',
      height: 'auto',
      zIndex: 0,
      pointerEvents: 'none'
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

   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" style={styles.section} aria-label="Contact me">
      <style>{menuGlowStyles}</style>
      <style>{contactGlowStyles}</style>

      <img src="/images/butterfly4.png" alt="" aria-hidden="true" className="contact-butterfly" style={styles.butterflyTop} />
      <img src="/images/butterfly4.png" alt="" aria-hidden="true" className="contact-butterfly lower" style={styles.butterflyBottom} />

      <div style={styles.container} className="contact-container">
        <h2 style={styles.title} className="contact-title">Contact Me</h2>

        <p style={styles.body}>
          I design and build thoughtful digital experiences at the intersection of design and engineering. With a background in product design and professional frontend development, I enjoy creating polished interfaces, reusable component systems, and intuitive user experiences that make complex applications feel simple. I'm especially drawn to frontend challenges involving dynamic interfaces, animations, and data-rich interactions. I'm driven by building software that feels as good as it functions.
        </p>

        <div style={styles.linkList}>
          {contactLinks.map((link) => (
            <div key={link.id} style={styles.linkRow} className="contact-link-row">
              <img src={link.icon} alt={`${link.label} icon`} style={styles.icon} />
              <a
                href={link.href}
                className="glow-on-hover"
                style={styles.linkText}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.display}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.footerLinkWrap}>
        <a href="#" 
        className="glow-on-hover" 
        style={styles.footerLink}
        onClick={(e) => {
          e.preventDefault()
          scrollToTop()
        }}
        aria-label="To the Top"
        >
          To the Top &uarr;
        </a>
      </div>
    </section>
  )
}

export default Contact
