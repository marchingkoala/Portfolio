import { menuGlowStyles } from './StyleUtil'

const projectsResponsiveStyles = `
  @media (max-width: 900px) {
    .projects-grid {
      grid-template-columns: 1fr !important;
      gap: clamp(2rem, 6vw, 3rem) !important;
    }
  }

  @media (max-width: 480px) {
    .projects-title {
      font-size: clamp(2.6rem, 15vw, 3.6rem) !important;
    }
    .projects-grid p {
      text-align: left !important;
    }
  }
`

const projects = [
  {
    name: 'Between Light',
    thumb: '/images/project_thumbnail/betweenLight_thumb.jpg',
    github: 'https://github.com/marchingkoala/betweenLights',
    website: 'https://betweenlights-web.onrender.com/',
    text: 'A full-stack e-commerce platform (React 19, Redux Toolkit, Express.js, PostgreSQL) with real-time 3D product customization — users recolor materials on GLB models via React Three Fiber and generate live cart preview snapshots. Features Stripe Checkout with webhook-driven fulfillment, JWT authentication, and an Airtable-synced admin dashboard, all wrapped in a fully responsive, accessible UI.',
  },
  {
    name: 'Fuzzle',
    thumb: '/images/project_thumbnail/fuzzle_thumb.jpg',
    github: 'https://github.com/marchingkoala/Doggle',
    website: 'https://fuzzle.up.railway.app/',
    text: 'A responsive dog-breed quiz app built with React, Express.js, and PostgreSQL, using Sequelize-modeled REST APIs curated with real-world DNA data from the Reddit r/DoggyDNA community. Optimized with route-based code splitting and session-based persistence, and integrated with Formspree and the Petfinder API for adoption resources — deployed on Railway.',
  },
  {
    name: "Chef's Kiss",
    thumb: '/images/project_thumbnail/chefKiss_thumb.jpg',
    github: 'https://github.com/2208-Capstone-Team-1/Capstone-Kitchen-Prep',
    website: null,
    text: 'An Alexa-enabled kitchen assistant with a React/TypeScript frontend and an Express, PostgreSQL, and Firebase backend, using AWS Lambda to power voice-driven Alexa Skills interactions. Developed collaboratively in an Agile Scrum environment, from MVP definition through iterative feature delivery.',
  },
]

function Projects() {
  const ink = '#f5f5f5'
  const scriptFont = "'Bickham Script Pro', sans-serif"
  const serifFont = "'Spectral', serif"

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
      boxSizing: 'border-box',
      padding: 'clamp(2rem, 4vw, 3.5rem) clamp(2rem, 5vw, 5rem) clamp(4.5rem, 7vw, 6rem)',
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
      textShadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
    },
    grid: {
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 'clamp(1.5rem, 3.5vw, 3rem)',
      width: '100%',
      maxWidth: '84rem',
      margin: '0 auto',
      alignItems: 'start',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
    },
    thumb: {
      width: '100%',
      aspectRatio: '16 / 10',
      objectFit: 'cover',
      display: 'block',
      borderRadius: '4px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
    },
    cardTitle: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 'clamp(1.1rem, 1.7vw, 1.45rem)',
      color: ink,
      margin: 'clamp(0.75rem, 1.5vw, 1.1rem) 0 0.4rem',
    },
    projectLink: {
      color: ink,
      textDecoration: 'none',
      borderBottom: 'none',
    },
    body: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(0.95rem, 1.35vw, 1.12rem)',
      lineHeight: 1.6,
      textAlign: 'justify',
      hyphens: 'auto',
      color: ink,
      margin: 0,
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
      borderBottom: 'none',
    },
  }

  return (
    <section id="projects" style={styles.section} aria-label="Projects">
      <style>{menuGlowStyles}</style>
      <style>{projectsResponsiveStyles}</style>

      <h2 style={styles.title} className="projects-title">Projects</h2>

      <div style={styles.grid} className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} style={styles.card}>
            <img src={project.thumb} alt={`${project.name} thumbnail`} style={styles.thumb} />

            <div style={styles.cardTitle}>
              {project.name}
              {' - '}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-on-hover"
                style={styles.projectLink}
              >
                Github
              </a>
              {project.website && (
                <>
                  {' / '}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-on-hover"
                    style={styles.projectLink}
                  >
                    Website
                  </a>
                </>
              )}
            </div>

            <p style={styles.body}>{project.text}</p>
          </div>
        ))}
      </div>

      <div style={styles.footerLinkWrap}>
        <a href="#contact" className="glow-on-hover" style={styles.footerLink}>
          Head over to Contact &darr;
        </a>
      </div>
    </section>
  )
}

export default Projects
