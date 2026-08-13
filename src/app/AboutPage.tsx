import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import hobby1 from "../imports/hobby1.png";
import hobby2 from "../imports/hobby2.jpg";
import hobby3 from "../imports/hobby3.jpg";
import hobby4 from "../imports/hobby4.png";
import hobby5 from "../imports/hobby5.jpg";
import hobby6 from "../imports/hobby6.jpg";
import hobby7 from "../imports/hobby7.jpg";
import hobby8 from "../imports/hobby8.mp4";
import hobby9 from "../imports/hobby9.jpg";
import hobby10 from "../imports/hobby10.jpg";
import hobby11 from "../imports/hobby11.jpg";
import hobby12 from "../imports/hobby12.jpg";
import hobby13 from "../imports/hobby13.jpg";
import hobby14 from "../imports/hobby14.jpg";
import hobby15 from "../imports/hobby15.jpg";
import hobby16 from "../imports/hobby16.jpg";
import hobby17 from "../imports/hobby17.jpg";
import hobby18 from "../imports/hobby18.jpg";
import hobby19 from "../imports/hobby19.jpg";
import hobby20 from "../imports/hobby20.jpg";
import hobby21 from "../imports/hobby21.jpg";
import hobby22 from "../imports/hobby22.jpg";
import hobby23 from "../imports/hobby23.png";
import hero from "../imports/about.jpg";

const resumeLink = '/resume.pdf';
const strengthsReportLink = '/cliftonstrengths.pdf';

const strengths = [
  { name: 'Strategic', icon: '🧭', desc: 'Spots patterns others miss', color: '#0ea5e9', bg: '#f0f9ff' },
  { name: 'Communication', icon: '🎙️', desc: 'Puts thoughts into words', color: '#8b5cf6', bg: '#f5f3ff' },
  { name: 'Achiever', icon: '🏆', desc: 'Does hard work with fire', color: '#B8722A', bg: '#fff7ed' },
  { name: 'Arranger', icon: '🗂️', desc: 'Is organised and flexible', color: '#10b981', bg: '#f0fdf4' },
  { name: 'Learner', icon: '📚', desc: 'Loves continuous growth', color: '#f59e0b', bg: '#fffbeb' },
];

const values = [
  { icon: '💯', text: 'Authenticity - I value openness, honesty and genuine relationships. I believe the best collaboration happens when people feel comfortable sharing ideas, challenging assumptions and having honest conversations.' },
  { icon: '🤝', text: "Dependability - I believe trust comes from consistent performance. Whether it's delivering quality work, following through on commitments or supporting my team, I want people to know they can count on me." },
  { icon: '🧩', text: 'Adaptability - I consider being adaptable as one of my biggest virtues. I enjoy adapting to new challenges, exploring unfamiliar domains and continuously expanding my perspective as needed by the team.' },
];

// ── Justified row component ───────────────────────────────────────────────────
function JustifiedRow({ images, gap = 8, containerWidth }: {
  images: { src: string; type?: 'image' | 'video' }[];
  gap: number;
  containerWidth: number;
}) {
  const [ratios, setRatios] = useState<number[]>(new Array(images.length).fill(1));

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement | HTMLVideoElement>, i: number) => {
    const el = e.currentTarget;
    const w = el instanceof HTMLVideoElement ? el.videoWidth : (el as HTMLImageElement).naturalWidth;
    const h = el instanceof HTMLVideoElement ? el.videoHeight : (el as HTMLImageElement).naturalHeight;
    if (w && h) {
      setRatios(prev => {
        const next = [...prev];
        next[i] = w / h;
        return next;
      });
    }
  };

  const sumRatios = ratios.reduce((a, b) => a + b, 0);
  const totalGap = (images.length - 1) * gap;
  const rowHeight = (containerWidth - totalGap) / sumRatios;

  return (
    <div style={{ display: 'flex', gap }}>
      {images.map((img, i) => (
        <div key={i} style={{ flex: ratios[i], height: rowHeight, overflow: 'hidden', borderRadius: 8 }}>
          {img.type === 'video' ? (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <video
                src={img.src}
                controls
                playsInline
                onLoadedMetadata={(e) => handleLoad(e, i)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.45)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: 'opacity 0.3s ease',
                }}
                onClick={(e) => {
                  const video = e.currentTarget.previousSibling as HTMLVideoElement;
                  video.play();
                  e.currentTarget.style.opacity = '0';
                  e.currentTarget.style.pointerEvents = 'none';
                }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}>
                  <div style={{
                    width: 0, height: 0,
                    borderTop: '12px solid transparent',
                    borderBottom: '12px solid transparent',
                    borderLeft: '20px solid #1a1a2e',
                    marginLeft: 4,
                  }} />
                </div>
              </div>
            </div>
          ) : (
            <img
              src={img.src}
              alt=""
              onLoad={(e) => handleLoad(e, i)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isGalleryMobile, setIsGalleryMobile] = useState(window.innerWidth <= 600);


  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
    setIsGalleryMobile(window.innerWidth <= 600);
  };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerWidth = isMobile ? window.innerWidth - 48 : 1024;

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      color: '#1a1a2e',
      background: '#fff',
    }}>
      <NavBar />
      <style>{`
        .ap-placeholder {
          background: linear-gradient(145deg, #f0f0f0 0%, #e0e0e0 100%);
          display: flex; align-items: center; justify-content: center;
          color: #b0b0b0; font-size: 12px; font-weight: 500;
        }
        @media (max-width: 800px) {
          .ap-section-inner { padding: 0 24px !important; }
          .ap-section { padding: 48px 0 !important; }
          .ap-values-grid { grid-template-columns: 1fr !important; }
          .ap-strengths-flex { flex-direction: column !important; }
          .ap-strengths-card {
            flex: unset !important;
            width: 100% !important;
            flex-direction: row !important;
            align-items: center !important;
            text-align: left !important;
            padding: 16px !important;
          }
          .ap-strengths-card-text { display: flex; flex-direction: column; gap: 2px; }
          .ap-hero-img { height: clamp(200px, 50vw, 320px) !important; }
        }
      `}</style>

      {/* ── BIO + VALUES + RESUME ──────────────────────────────────────── */}
      <section className="ap-section" style={{ padding: '72px 0 80px', background: '#fff', marginTop: 64 }}>
        <div className="ap-section-inner" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 48px' }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '1.8px',
            textTransform: 'uppercase', color: '#B8722A', marginBottom: 4,
          }}>
            More about me
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-1px', color: '#1a1a2e', margin: '0 0 24px' }}>
            Who I am
          </h2>
          <p style={{ fontSize: 16, color: '#1a1a2e', lineHeight: 1.9, margin: '0 0 16px', fontWeight: 500 }}>
            Hi! I'm glad you wanted to know more about me. I'm Geetanjali and if I had to describe myself in one sentence, I'd say I'm what the industry calls a UX Unicorn!
          </p>

          {/* Hero image */}
          <div
            className="ap-hero-img"
            style={{
              borderRadius: 14,
              overflow: 'hidden',
              height: 'clamp(320px, 29.8vw, 500px)',
              boxShadow: '0px 12px 40px 0px rgba(26,26,46,0.1)',
              border: '1.156px solid rgba(26,26,46,0.06)',
            }}
          >
            <img
              src={hero}
              alt="Geetanjali"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <p style={{ fontSize: 15.5, color: '#6b6b8a', lineHeight: 1.9, margin: '24px 0 16px' }}>
            My experience began with branding, graphic design and web development and expanded into UX design and product strategy, giving me the opportunity to understand products from multiple perspectives. With a background in computer science engineering, I also understand the technology behind the screens and I enjoy connecting those worlds rather than treating them as separate disciplines. This has shaped the way I approach design throughout my career.
          </p>
          <p style={{ fontSize: 15.5, color: '#6b6b8a', lineHeight: 1.9, margin: '0 0 16px' }}>
            The longer I've worked in design, the more I've realized that great products aren't the result of great design alone. They're the result of thoughtful decisions made throughout the product journey. So, design to me is one part of the equation, but understanding users, balancing business goals, working within technical constraints and building alignment across teams are the bigger part. One of the things I enjoy most about my work is that no two problems are ever the same. Some projects need a clearer product strategy. Others need stronger collaboration, better systems or a deeper understanding of user behavior. I like figuring out where UX can create the most value, whether that's running workshops, simplifying a complex experience, improving a design system or helping a team move forward with confidence. Some of the most rewarding parts of my career have come from collaborating with product managers, engineers, researchers and business stakeholders, each bringing a different perspective to the table. I enjoy asking questions, challenging assumptions and creating space for meaningful discussions because I believe that the best solutions are a result of collective thinking.
          </p>
          <p style={{ fontSize: 15.5, color: '#6b6b8a', lineHeight: 1.9, margin: '0 0 40px' }}>
            Outside of projects, I'm someone who enjoys learning just as much as designing. The design industry evolves quickly and I genuinely enjoy evolving with it. Lately, I've been exploring how AI is changing the way we design products and the way teams work together. Learning to me is simply part of how I stay curious, relevant and continuously improve. At the end of the day, I don't measure success by the number of features shipped or screens designed. I measure it by whether I've helped make the product better, supported the people around me and left the team with more clarity than when I joined the conversation.
          </p>

          {/* Values */}
          <div style={{ marginBottom: 40 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '1.8px',
              textTransform: 'uppercase', color: '#B8722A', marginBottom: 24,
            }}>
              What I stand for
            </div>
            <div
              className="ap-values-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
            >
              {values.map((v, i) => (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column', gap: 12,
                  padding: '24px 20px',
                  background: '#fff',
                  border: '1px solid rgba(26,26,46,0.07)',
                  borderRadius: 16,
                  boxShadow: '0 2px 12px rgba(26,26,46,0.05)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: 'linear-gradient(90deg, #B8722A, #e09a5a)',
                    borderRadius: '16px 16px 0 0',
                  }} />
                  <span style={{ fontSize: 28 }}>{v.icon}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', lineHeight: 1.2 }}>
                    {v.text.split(' - ')[0]}
                  </div>
                  <div style={{ fontSize: 13, color: '#6b6b8a', lineHeight: 1.65 }}>
                    {v.text.split(' - ')[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#B8722A', color: '#fff',
              padding: '12px 24px', borderRadius: 10,
              fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(26,26,46,0.18)',
            }}
          >
            ↓ Download Resume
          </a>
        </div>
      </section>

      {/* ── CLIFTON STRENGTHS ──────────────────────────────────────────── */}
      <section className="ap-section" style={{ padding: '80px 0', background: '#fff' }}>
        <div className="ap-section-inner" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '1.8px',
              textTransform: 'uppercase', color: '#B8722A', marginBottom: 4,
            }}>
              What I bring to the table
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-1px', color: '#1a1a2e', margin: '0 0 12px' }}>
              My CliftonStrengths themes
            </h2>
            <p style={{ color: '#7a7a9a', fontSize: 15, maxWidth: 520, margin: 0 }}>
              As assessed by Gallup with a detailed survey
            </p>
          </div>

          <div className="ap-strengths-flex" style={{ display: 'flex', gap: 16 }}>
            {strengths.map(s => (
              <div
                key={s.name}
                className="ap-strengths-card"
                style={{
                  flex: '1 1 0', minWidth: 0,
                  background: '#fff',
                  border: `1px solid ${s.color}28`,
                  borderRadius: 16,
                  padding: '24px 16px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  boxShadow: '0 2px 12px rgba(26,26,46,0.05)',
                  textAlign: 'center',
                }}
              >
                <div
                  className="ap-strengths-icon"
                  style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: s.bg, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24,
                  }}
                >
                  {s.icon}
                </div>
                <div className="ap-strengths-card-text">
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e' }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: '#9a9ab0', lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <a
              href={strengthsReportLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13, color: '#B8722A', fontWeight: 600,
                textDecoration: 'none',
                borderBottom: '1px dashed rgba(184,114,42,0.4)',
                paddingBottom: 2,
              }}
            >
              View full Clifton Strengths report →
            </a>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEERING ───────────────────────────────────────────────── */}
      <section className="ap-section" style={{ padding: '80px 0 100px', background: '#f9f9f9' }}>
        <div className="ap-section-inner" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 48px' }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '1.8px',
            textTransform: 'uppercase', color: '#B8722A', marginBottom: 4,
          }}>
            Volunteering
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-1px', color: '#1a1a2e', margin: '0 0 16px' }}>
            Spreading the power of UX
          </h2>
          <p style={{ color: '#6b6b8a', fontSize: 15, lineHeight: 1.8, maxWidth: 1120, margin: 0 }}>
            In my part time, I create UX related content useful for designers and businesses on Instagram and have a community of 1000+ active UXers where we collaborate and learn from each other. I also mentor UX aspirants and professionals on ADPList to guide them where to begin or how to move forward in their career and conduct practice redesign and whiteboarding sessions - All for Free! The notion is to spread the power of UX amongst the world and bring in a sense of UX maturity amongst designers and companies.
          </p>
        </div>
      </section>

      {/* ── HOBBIES ────────────────────────────────────────────────────── */}
      <section className="ap-section" style={{ padding: '80px 0 100px', background: '#fff' }}>
        <div className="ap-section-inner" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '1.8px',
              textTransform: 'uppercase', color: '#B8722A', marginBottom: 4,
            }}>
              Outside of work
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-1px', color: '#1a1a2e', margin: '0 0 16px' }}>
              Hobbies, interests and things I love
            </h2>
            <p style={{ color: '#6b6b8a', fontSize: 15, lineHeight: 1.8, maxWidth: 1120, margin: 0 }}>
              Outside of work, I enjoy exploring my creative side in many different ways. I'm a trained singer and have always loved expressing myself through music. I also enjoy travelling, experiencing different cultures, collecting their arts and documenting memories through scrapbooking. So far, I have travelled 10 countries - Germany, France, Austria, Switzerland, UAE, Malaysia, Singapore, Thailand, Turkey, Japan - and 5 of it solo! When I'm at home, you'll often find me painting, experimenting with DIY crafts or working on new hands-on projects. I also love cooking and food photography. My life stays exciting and fulfilling by exploring and learning new hobbies and trying new experiences.
            </p>
          </div>

          {/* Justified masonry grid */}
         {/* Justified masonry grid */}
{isGalleryMobile ? (
  // Mobile — single column stack
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    {[hobby8, hobby21, hobby2, hobby1, hobby7, hobby18, hobby5, hobby20].map((src, i) => (
      <div key={i} style={{ width: '100%', borderRadius: 8, overflow: 'hidden' }}>
        {src === hobby8 ? (
          <div style={{ position: 'relative', width: '100%' }}>
            <video
              src={src}
              controls
              playsInline
              style={{ width: '100%', display: 'block', borderRadius: 8 }}
            />
          </div>
        ) : (
          <img
            src={src}
            alt=""
            style={{ width: '100%', display: 'block', borderRadius: 8 }}
          />
        )}
      </div>
    ))}
  </div>
) : (
  // Desktop — justified rows
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <JustifiedRow gap={8} containerWidth={containerWidth} images={[
      { src: hobby8, type: 'video' },
      { src: hobby21 },
      { src: hobby2 },
    ]} />
    <JustifiedRow gap={8} containerWidth={containerWidth} images={[
      { src: hobby1 },
      { src: hobby7 },
    ]} />
    <JustifiedRow gap={8} containerWidth={containerWidth} images={[
      { src: hobby18 },
      { src: hobby5 },
      { src: hobby20 },
    ]} />
  </div>
)}
        </div>
      </section>
    </div>
  );
}