import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router';


export function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [pastHero, setPastHero] = useState(!isHome);
  const [workOpen, setWorkOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }
    const handleScroll = () => {
      const target = document.getElementById('why-this-matters');
      if (target) {
        const rect = target.getBoundingClientRect();
        setPastHero(rect.top <= window.innerHeight * 0.85);
      } else {
        setPastHero(window.scrollY > window.innerHeight * 0.85);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const goToSection = (sectionId: string) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'auto' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'auto' });
      }, 300);
    }
  };

  const workItems = [
    { label: 'Inside a digital transformation', to: '/story/i1' },
    { label: 'From isolated products to a single source of truth', to: '/story/k1' },
    { label: 'Cutting through the noise in hotel management', to: '/story/f1' },
  ];

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: 0,
    paddingTop: 8,
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    border: '1px solid rgba(0,0,0,0.07)',
    padding: '8px 0',
    minWidth: 280,
    zIndex: 200,
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const dropdownItemStyle: React.CSSProperties = {
    display: 'block',
    padding: '10px 18px',
    fontSize: '0.82rem',
    color: '#1a1a2e',
    textDecoration: 'none',
    cursor: 'pointer',
    lineHeight: 1.4,
  };

  return (
    <>
      <style>{`
        @keyframes navDotPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:0.6}}
        .nav-dot-pulse{animation:navDotPulse 2s infinite;}
        @media(max-width:700px){
          .nav-links-group{display:none!important;}
          .nav-outer{padding:14px 18px!important;}
          .nav-hamburger{display:flex!important;}
        }
        @media(min-width:701px){
          .nav-hamburger{display:none!important;}
          .nav-mobile-menu{display:none!important;}
        }
        .nav-outer { transition: background 0.35s ease, box-shadow 0.35s ease; }
        .nav-item-wrap:hover > span { color: #B8722A !important; }
        .nav-plain-link:hover { color: #B8722A !important; }
        .nav-dropdown-item:hover { background: #f9f7f4 !important; color: #B8722A !important; }
        .nav-item-wrap { position: relative; }
        .nav-mobile-item:hover { color: #B8722A !important; }
        .nav-mobile-sub-item:hover { color: #B8722A !important; }
      `}</style>

      <nav className="nav-outer" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: pastHero ? 'rgba(255,255,255,0.97)' : 'rgba(244,243,255,0.9)',
        backdropFilter: 'blur(14px)',
        boxShadow: pastHero ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>

        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
          style={{ textDecoration: 'none' }}
        >
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Geetanjali
            <div className="nav-dot-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#B8722A' }} />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="nav-links-group" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {/* Work dropdown */}
          <div
            className="nav-item-wrap"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <span
              onClick={() => goToSection('work')}
              style={{ fontSize: '0.88rem', color: '#6b7280', cursor: 'pointer', paddingBottom: 8 }}
            >
              Work
            </span>
            {workOpen && (
              <div style={dropdownStyle}>
                {workItems.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="nav-dropdown-item"
                    style={dropdownItemStyle}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About dropdown */}
          <div
            className="nav-item-wrap"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <span
              onClick={() => goToSection('about')}
              style={{ fontSize: '0.88rem', color: '#6b7280', cursor: 'pointer', paddingBottom: 8 }}
            >
              About
            </span>
            {aboutOpen && (
              <div style={dropdownStyle}>
                <Link
                  to="/about"
                  className="nav-dropdown-item"
                  style={dropdownItemStyle}
                >
                  Know me better
                </Link>
              </div>
            )}
          </div>

          {/* Testimonial */}
          <span
            onClick={() => goToSection('testimonial')}
            className="nav-plain-link"
            style={{ fontSize: '0.88rem', color: '#6b7280', cursor: 'pointer' }}
          >
            Testimonial
          </span>

          {/* Resume */}
          <a
            href="/Geetanjali_Venkatasubramanian.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-plain-link"
            style={{ fontSize: '0.88rem', color: '#6b7280', cursor: 'pointer', textDecoration: 'none' }}
          >
            Resume
          </a>

          {/* Let's Talk */}
          <a
            href="mailto:geetanjalivu@gmail.com"
            style={{
              padding: '9px 22px', borderRadius: '8px',
              background: '#B8722A', color: '#fff',
              fontSize: '0.88rem', fontWeight: 600,
              border: 'none', cursor: 'pointer',
              textDecoration: 'none', display: 'inline-block',
            }}
          >
            Let's Talk
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none', // overridden by media query
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            zIndex: 101,
          }}
          aria-label="Toggle menu"
        >
          {/* Animated hamburger → X */}
          <span style={{
            display: 'block', width: 22, height: 2,
            background: '#1a1a2e', borderRadius: 2,
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: '#1a1a2e', borderRadius: 2,
            transition: 'opacity 0.2s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: '#1a1a2e', borderRadius: 2,
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile menu panel — slides down below navbar */}
      <div
        className="nav-mobile-menu"
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'fixed',
          top: 52, // height of navbar
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          padding: '16px 0 24px',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        {/* Work section */}
        <div style={{ padding: '0 24px' }}>
          <p style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
            textTransform: 'uppercase', color: '#b0b0c8',
            margin: '12px 0 8px',
          }}>
            Work
          </p>
          {workItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="nav-mobile-sub-item"
              style={{
                display: 'block',
                fontSize: 14, fontWeight: 500,
                color: '#1a1a2e', textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                lineHeight: 1.4,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Other links */}
        {/* Other links */}
{/* Other links */}
<div style={{ padding: '8px 24px 0', display: 'flex', flexDirection: 'column', gap: 0 }}>
  <p style={{
    fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
    textTransform: 'uppercase', color: '#b0b0c8',
    margin: '12px 0 8px',
  }}>
    OTHER LINKS
  </p>

  {/* About — expandable */}
  <div style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 0', cursor: 'pointer',
      }}
      onClick={() => setMobileAboutOpen(o => !o)}
    >
      <span
        className="nav-mobile-item"
        style={{ fontSize: 14, fontWeight: 500, color: '#1a1a2e' }}
      >
        About
      </span>
      {/* Chevron */}
      <svg
        width="16" height="16" viewBox="0 0 16 16" fill="none"
        style={{
          transition: 'transform 0.2s ease',
          transform: mobileAboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          flexShrink: 0,
        }}
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#9a9ab0" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Sub item — shown when expanded */}
    {mobileAboutOpen && (
      <div style={{ paddingBottom: 8 }}>
        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="nav-mobile-item"
          style={{
            display: 'block',
            fontSize: 13, fontWeight: 500, color: '#6b7280',
            textDecoration: 'none',
            padding: '6px 0 6px 12px',
          }}
        >
          Know me better
        </Link>
      </div>
    )}
  </div>

  {/* Testimonial */}
  <span
    onClick={() => goToSection('testimonial')}
    className="nav-mobile-item"
    style={{
      fontSize: 14, fontWeight: 500, color: '#1a1a2e',
      cursor: 'pointer', padding: '8px 0',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
    }}
  >
    Testimonial
  </span>

  {/* Resume */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-mobile-item"
    style={{
      fontSize: 14, fontWeight: 500, color: '#1a1a2e',
      textDecoration: 'none', padding: '8px 0',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
    }}
  >
    Resume
  </a>
</div>
        {/* Let's Talk */}
        <div style={{ padding: '20px 24px 0' }}>
          <a
            href="mailto:geetanjalivu@gmail.com"
            style={{
              display: 'block', textAlign: 'center',
              padding: '12px 24px', borderRadius: '8px',
              background: '#B8722A', color: '#fff',
              fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
