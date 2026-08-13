export function TestimonialSection() {
  return (
    <section id="testimonial" style={{
      background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 30%, #f7f7f7 100%)',
      padding: '100px 0 128px',
      fontFamily: "'Inter', system-ui, sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background:'linear-gradient(rgba(26,26,46,0.025) 1px, transparent 1px)',
      }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 48px', position: 'relative' }}>

        {/* Large decorative quote mark */}
        <div style={{
          fontSize: 120, lineHeight: 1, color: 'rgba(184,114,42,0.18)',
          fontFamily: 'Georgia, serif', position: 'absolute',
          top: -28, left: 32, userSelect: 'none', pointerEvents: 'none',
        }}>
          "
        </div>

        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 20, height: 1.5, background: '#B8722A', borderRadius: 2 }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '2.2px',
              textTransform: 'uppercase', color: '#B8722A',
            }}>From the horse's mouth</span>
            <div style={{ width: 20, height: 1.5, background: '#B8722A', borderRadius: 2 }} />
          </div>
        </div>

        {/* Quote */}
        <blockquote style={{ margin: 0, padding: 0, textAlign: 'center' }}>
          <p style={{
            fontSize: 'clamp(18px, 2.4vw, 22px)',
            fontWeight: 400,
            color: '#1a1a2e',
            lineHeight: 1.65,
            letterSpacing: '-0.4px',
            margin: '0 0 48px',
            position: 'relative', zIndex: 1,
          }}>
            I managed Geetanjali for three years and she was an outstanding colleague and designer throughout that time. She played a key role in successfully delivering multiple projects, contributing across UX and UI design, design strategy as well as user research. What I appreciated most about Geetanjali was her positive attitude, professionalism and reliability. She was always approachable, easy to work with, and committed to producing high-quality work. She brought both talent and dependability to the team and it was a real pleasure working together. I would strongly recommend her to any team looking for a design leader who consistently delivers exceptional product experiences. 
          </p>

          {/* Attribution */}
          <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            {/* Divider accent */}
            <div style={{
              width: 36, height: 2, borderRadius: 2,
              background: 'linear-gradient(90deg, #B8722A, rgba(184,114,42,0.3))',
              marginBottom: 12,
            }} />
            <cite style={{ fontStyle: 'normal' }}>
              <span style={{
                fontSize: 15, fontWeight: 700, color: '#1a1a2e',
                letterSpacing: '-0.3px', display: 'block', marginBottom: 4,
              }}>
                Jacek Maj
              </span>
              <span style={{
                fontSize: 13, color: '#1a1a2e',
                letterSpacing: '0.1px', display: 'block',
              }}>
                Head of UX, Infineon Technologies
              </span>
            </cite>
          </footer>
        </blockquote>

      </div>
    </section>
  );
}
