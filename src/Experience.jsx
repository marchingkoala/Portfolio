import { menuGlowStyles } from './StyleUtil'

const experienceResponsiveStyles = `
  @media (max-width: 900px) {
    .experience-grid {
      grid-template-columns: 1fr !important;
      gap: clamp(2.5rem, 6vw, 3.5rem) !important;
    }
    .experience-column h2 {
      text-align: center !important;
    }
    .exp-logo-row {
      justify-content: center !important;
    }
    .resume_container {
      align-items: center !important;
    }
  }
`

const otherTools = [
  { src: '/images/logos/adobe-photoshop.png', alt: 'Adobe Photoshop' },
  { src: '/images/logos/adobe-illustrator.png', alt: 'Adobe Illustrator' },
  { src: '/images/logos/adobe-premiere-pro.png', alt: 'Adobe Premiere Pro' },
  { src: '/images/logos/figma.png', alt: 'Figma' },
  { src: '/images/logos/airtable.png', alt: 'Airtable' },
]

const aiTools = [
  { src: '/images/logos/cursor-dark.png', alt: 'Cursor' },
  { src: '/images/logos/gemini-color.png', alt: 'Google Gemini' },
  { src: '/images/logos/chatgpt.png', alt: 'ChatGPT' },
]

function Experience() {
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
      padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(2rem, 5vw, 5rem) clamp(4.5rem, 7vw, 6rem)',
    },
    grid: {
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr) minmax(0, 1fr)',
      gap: 'clamp(2rem, 4vw, 4rem)',
      width: '100%',
      maxWidth: '84rem',
      margin: '0 auto',
      alignItems: 'start',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      margin: '0 0 1rem 0',
      fontFamily: scriptFont,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
      lineHeight: 1,
      letterSpacing: 'normal',
      textTransform: 'none',
      color: ink,
      textShadow: '0 2px 16px rgba(0, 0, 0, 0.45)',
    },
    headerSpaced: {
      marginTop: 'clamp(2rem, 4vw, 3rem)',
    },
    subHeader: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
      letterSpacing: '0.02em',
      color: ink,
      margin: '0.6rem 0 0.15rem',
    },
    body: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(0.95rem, 1.35vw, 1.12rem)',
      lineHeight: 1.55,
      color: ink,
      margin: '0 0 0.35rem 0',
      textShadow: '0 1px 8px rgba(0, 0, 0, 0.35)',
    },
    role: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(0.9rem, 1.25vw, 1.05rem)',
      letterSpacing: '0.03em',
      color: ink,
      margin: '0 0 0.1rem 0',
    },
    company: {
      fontFamily: serifFont,
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
      color: ink,
      margin: '0 0 0.5rem 0',
    },
    jobBlock: {
      marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)',
    },
    logoRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(0.75rem, 1.6vw, 1.5rem)',
      alignItems: 'center',
      marginTop: '0.5rem',
    },
    logo: {
      width: 'clamp(48px, 4.5vw, 70px)',
      height: 'clamp(48px, 4.5vw, 70px)',
      objectFit: 'contain',
      display: 'block',
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
    <section id="experience" style={styles.section} aria-label="Experience">
      <style>{menuGlowStyles}</style>
      <style>{experienceResponsiveStyles}</style>

      <div style={styles.grid} className="experience-grid">
        {/* Left column: Education + Skills */}
        <div style={styles.column} className="experience-column">

          <h2 style={styles.header}>Education</h2>
          <p style={styles.body}>- FullStack Academy Software Engineering Bootcamp</p>
          <p style={styles.body}>- School of Art Institute of Chicago (MA in Art &amp; Design)</p>
          <p style={styles.body}>- Rhode Island School of Design (Bachelor of Apparel Design)</p>

          <h2 style={{ ...styles.header, ...styles.headerSpaced }}>Skills</h2>
          <div style={styles.subHeader}>Language:</div>
          <p style={styles.body}>Javascript, TypeScript, Python, SQL</p>
          <div style={styles.subHeader}>Framework &amp; Library:</div>
          <p style={styles.body}>React, Redux, Express, Motion, Three JS</p>
          <div style={styles.subHeader}>Database &amp; Tools:</div>
          <p style={styles.body}>PostgreSQL, Firebase, HTML, CSS, AWS Lambda, Material UI, Git, Github, Cursor</p>
        </div>

        {/* Middle column: Work Experience */}
        <div style={styles.column} className="experience-column">
          <h2 style={{ ...styles.header, textAlign: 'center' }}>Work Experience</h2>

          <div style={styles.jobBlock}>
            <p style={styles.role}>Mar 2024 - July 2026 / Frontend Developer</p>
            <p style={styles.company}>New York Life Insurance Company</p>
            <p style={styles.body}>- Refactored monolithic API into domain-specific endpoints with Redux thunks for parallel fetching and targeted refreshes, boosting app performance.</p>
            <p style={styles.body}>- Built an advisor notification system surfacing missing client data via backend alerts, Storyblok CMS messaging, and deep-linked navigation.</p>
            <p style={styles.body}>- Created a reusable Motion animation library with shared presets and feature-flagged rollouts, standardizing UI transitions across the app.</p>
            <p style={styles.body}>- Integrated Storyblok CMS into React, mapping content models to reusable components for dynamic help panels, calculators, and modals.</p>
            <p style={styles.body}>- Partnered with product, design, backend, and QA teams to turn requirements into scalable, production-ready frontend features.</p>
          </div>

          <div style={styles.jobBlock}>
            <p style={styles.role}>Jan 2019 - Mar 2024 / Designer</p>
            <p style={styles.company}>United Footwear Group</p>
            <p style={styles.body}>- Designed brand-enhancing styles with Adobe Illustrator.</p>
            <p style={styles.body}>- Increased company sales by 250% by utilizing collected market and sales data with Google Analytics.</p>
          </div>
        </div>

        {/* Right column: Other Tools + Ai Tools */}
        <div style={styles.column} className="experience-column">
          <h2 style={{ ...styles.header, textAlign: 'right' }}>Other Tools</h2>
          <div style={{ ...styles.logoRow, justifyContent: 'flex-end' }} className="exp-logo-row">
            {otherTools.map((tool) => (
              <img key={tool.alt} src={tool.src} alt={tool.alt} title={tool.alt} style={styles.logo} />
            ))}
          </div>

          <h2 style={{ ...styles.header, ...styles.headerSpaced, textAlign: 'right' }}>Ai Tools</h2>
          <div style={{ ...styles.logoRow, justifyContent: 'flex-end' }} className="exp-logo-row">
            {aiTools.map((tool) => (
              <img key={tool.alt} src={tool.src} alt={tool.alt} title={tool.alt} style={styles.logo} />
            ))}
          </div>
          <div className="resume_container" 
          style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}
          >
            <h2 style={{...styles.header, ...styles.headerSpaced, textAlign: 'right'}}>
              Download Resume
              </h2>
            <a
            href="/resume/Carmine_Yijin_Ro_Resume_2026.pdf"
            download="Carmine_Yijin_Ro_Resume_2026.pdf"
            aria-label="Download Resume"
            > 
            <img src="/images/butterfly5.png" style={{width: '200px', height: 'auto'}}/>
          </a>
          </div>
        </div>
      </div>

      <div style={styles.footerLinkWrap}>
        <a href="#projects" className="glow-on-hover" style={styles.footerLink}>
          Head over to Projects &darr;
        </a>
      </div>
    </section>
  )
}

export default Experience
