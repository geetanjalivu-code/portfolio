import React, { useEffect, useRef, useState } from 'react';
import videoSrc from "../../imports/animation.mp4";
import { Link } from 'react-router';


// ─── Fact data — edit these freely ───────────────────────────────────────────
const facts = [
  {
    id: 1,
    emoji: '🌏',
    label: 'Based in India, working globally',
    detail: 'Collaborating seamlessly across APAC, EMEA, AME and LATAM',
    accent: '#0ea5e9',
    bg: '#f0f9ff',
  },
  {
    id: 2,
    emoji: '📝',
    label: 'Building systems, not just screens',
    detail: 'Defining processes, structure and documentation - the full picture',
    accent: '#8b5cf6',
    bg: '#f5f3ff',
  },
  {
    id: 3,
    emoji: '📚',
    label: 'Driven by continuous improvement',
    detail: 'Always with the quest of learning new skills and emerging technologies',
    accent: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    id: 4,
    emoji: '🤝',
    label: 'Trusted decision-making partner',
    detail: 'Working strategically with product, engineering and leadership',
    accent: '#8b5cf6',
    bg: '#f5f3ff',
  },
];

// ── Video / GIF source ────────────────────────────────────────────────────────
// 1. Upload your .mp4 or .gif to src/imports/
// 2. Add an import at the top of this file, e.g.:
//      import videoSrc from "../../imports/your-video.mp4";
// 3. Set VIDEO_SRC = videoSrc  (or GIF_SRC = gifSrc for a GIF)
const VIDEO_SRC: string = videoSrc;
const GIF_SRC:   string = ''; // replace '' with your imported gif variable

// ─────────────────────────────────────────────────────────────────────────────
export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [factVisible, setFactVisible] = useState<boolean[]>(new Array(facts.length).fill(false));
  const [bubbleVisible, setBubbleVisible] = useState(false);

  // ── Intersection observer — trigger entrance animations on scroll ──────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setBubbleVisible(true), 600);
          facts.forEach((_, i) => {
            setTimeout(() => {
              setFactVisible(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 400 + i * 90);
          });
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const hasMedia = VIDEO_SRC || GIF_SRC;

  return (
    <section
      className="ab-section"
      id="about"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, rgba(108,99,255,0.07) 10%, #f4f3ff 10%, #f4f3ff 20%, rgba(0,184,148,0.05) 100%)',
        fontFamily: "'Inter', system-ui, sans-serif",
        padding: '100px 0 128px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        /* ── Floating illustration ── */
        @keyframes floatIllus {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        .ab-float { animation: floatIllus 4.5s ease-in-out infinite; }

        /* ── Speech bubble bounce ── */
        @keyframes bubblePop {
          0%   { transform: scale(0.6) translateY(8px); opacity: 0; }
          70%  { transform: scale(1.08) translateY(-2px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-6px) rotate(1deg); }
        }
        .ab-bubble-enter { animation: bubblePop 0.55s cubic-bezier(.2,.8,.3,1) forwards; }
        .ab-bubble-float { animation: bubbleFloat 3.5s ease-in-out infinite; }

        /* ── Hand wave ── */
        @keyframes waveHand {
          0%   { transform: rotate(0deg); }
          15%  { transform: rotate(20deg); }
          30%  { transform: rotate(-10deg); }
          45%  { transform: rotate(18deg); }
          60%  { transform: rotate(-8deg); }
          75%  { transform: rotate(14deg); }
          100% { transform: rotate(0deg); }
        }
        .ab-wave { display: inline-block; animation: waveHand 2.2s ease-in-out 0.8s 2; transform-origin: 70% 80%; }

        /* ── Entrance transitions ── */
        .ab-enter-l {
          opacity: 0; transform: translateX(-32px);
          transition: opacity 0.75s cubic-bezier(.2,.8,.3,1), transform 0.75s cubic-bezier(.2,.8,.3,1);
        }
        .ab-enter-r {
          opacity: 0; transform: translateX(32px);
          transition: opacity 0.75s cubic-bezier(.2,.8,.3,1), transform 0.75s cubic-bezier(.2,.8,.3,1);
        }
        .ab-enter-l.ab-in, .ab-enter-r.ab-in {
          opacity: 1; transform: translateX(0);
        }
        .ab-fact {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.45s cubic-bezier(.2,.8,.3,1), transform 0.45s cubic-bezier(.2,.8,.3,1);
        }
        .ab-fact.ab-in {
          opacity: 1; transform: translateY(0);
        }
        .ab-fact:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 28px rgba(0,0,0,0.10) !important;
        }

        /* ── Glow ring on illustration ── */
        @keyframes ringPulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50%       { opacity: 0.07; transform: scale(1.06); }
        }
        .ab-ring { animation: ringPulse 4s ease-in-out infinite; }

        /* ── Placeholder shimmer ── */
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }

        /* ── Decorative dots ── */
        @keyframes dotDrift {
          0%, 100% { transform: translate(0, 0); }
          33%       { transform: translate(6px, -8px); }
          66%       { transform: translate(-4px, 5px); }
        }
        .ab-dot1 { animation: dotDrift 7s ease-in-out infinite; }
        .ab-dot2 { animation: dotDrift 9s ease-in-out 1.5s infinite; }
        .ab-dot3 { animation: dotDrift 6s ease-in-out 3s infinite; }

        @media (max-width: 860px) {
          .ab-grid { flex-direction: column !important; }
          .ab-right { margin-top: 56px; align-self: center !important; max-width: 320px !important; }
          .ab-left, .ab-right { width: 100% !important; }
          .ab-wrap { padding: 0 24px !important; }
          .ab-facts-grid { grid-template-columns: 1fr !important; }
          .ab-section { padding: 60px 0 32px !important; }
          .ab-eyebrow { margin-bottom: 24px !important; }
        }
      `}</style>

      {/* ── Background decorations ──────────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Large soft blobs */}
        <div style={{
          position: 'absolute', top: -80, right: -120,
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -80,
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,114,42,0.06) 0%, transparent 70%)',
        }} />
        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(26,26,46,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 80%, transparent 100%)',
        }} />
      </div>

      <div
        className="ab-wrap"
        style={{ maxWidth: 1120, margin: '0 auto', padding: '0 48px', position: 'relative' }}
      >
        {/* ── Section eyebrow ────────────────────────────────────────────── */}
        <div className="ab-eyebrow" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 0 }}>
            <div style={{ width: 20, height: 1.5, background: '#B8722A', borderRadius: 2 }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '2.2px',
              textTransform: 'uppercase', color: '#B8722A',
            }}>
              The person behind the work
            </span>
            <div style={{ width: 20, height: 1.5, background: '#B8722A', borderRadius: 2 }} />
          </div>
        </div>

        {/* ── Two-column layout ─────────────────────────────────────────── */}
        <div
          className="ab-grid"
          style={{ display: 'flex', alignItems: 'flex-start', gap: 72 }}
        >
          {/* ════════════════════════════════ LEFT — TEXT ════════════════════ */}
          <div
            className={`ab-left ab-enter-l${visible ? ' ab-in' : ''}`}
            style={{ flex: '0 0 62%', width: '62%' }}
          >
            {/* Headline */}
            <h2 style={{
              fontSize: 'clamp(26px, 3.0vw, 36px)', fontWeight: 700,
              letterSpacing: '-1.4px', color: '#1a1a2e', lineHeight: 1.1,
              margin: '0 0 24px',
            }}>
              I drive business growth by&nbsp;
              <em style={{ fontStyle: 'normal', fontWeight: 700, color: '#B8722A' }}>
                creating products people love.
              </em>
            </h2>

            {/* Bio */}
            <p style={{
              color: '#6b6b8a', fontSize: 15.5, lineHeight: 1.85,
              margin: '0 0 14px',
            }}>
              For nearly a decade, I've worked at the intersection of products and people - discovering what users truly need, what drives business outcomes and how to bridge the gap between them. From startups to enterprise products, I've led complex initiatives across global teams, industries and platforms, using data-driven decisions, user research and strategic thinking to turn complex challenges into clear product direction and create intuitive experiences people actually enjoy using. 
            </p>

            {/* ── Facts grid ────────────────────────────────────────────── */}
            <div style={{ marginBottom: 44 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '1.8px',
                textTransform: 'uppercase', color: '#B8722A', marginBottom: 18,
              }}>
                Me in a nutshell
              </div>

              <div className="ab-facts-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 10,
              }}>
                {facts.map((fact, i) => (
                  <div
                    key={fact.id}
                    className={`ab-fact${factVisible[i] ? ' ab-in' : ''}`}
                    style={{
                      background: '#fff',
                      border: `1px solid ${fact.accent}28`,
                      borderRadius: 14,
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      boxShadow: '0 2px 8px rgba(26,26,46,0.04)',
                      cursor: 'default',
                      transition: 'transform 0.22s cubic-bezier(.2,.8,.3,1), box-shadow 0.22s ease',
                    }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      background: fact.bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18,
                    }}>
                      {fact.emoji}
                    </div>
                    <div>
                      <div style={{
                        fontSize: 13, fontWeight: 700, color: '#1a1a2e',
                        lineHeight: 1.3, marginBottom: 3,
                      }}>
                        {fact.label}
                      </div>
                      <div style={{ fontSize: 11.5, color: '#9a9ab0', lineHeight: 1.4 }}>
                        {fact.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── More about me link ─────────────────────────────────── */}
            <div>
              <Link
  to="/about"
  style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    color: '#B8722A', fontSize: 14, fontWeight: 700,
    textDecoration: 'none', letterSpacing: '-0.2px',
    borderBottom: '1.5px solid rgba(184,114,42,0.35)',
    paddingBottom: 2,
    transition: 'opacity 0.2s ease',
  }}
  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.75'; }}
  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
>
  More about me →
</Link>
            </div>
          </div>

          {/* ════════════════════════════════ RIGHT — ILLUSTRATION ═══════════ */}
          <div
            className={`ab-right ab-enter-r${visible ? ' ab-in' : ''}`}
            style={{ flex: 1, position: 'relative' }}
          >
            {/* Floating decorative dots */}
            <div className="ab-dot1" style={{
              position: 'absolute', top: 20, right: -16,
              width: 10, height: 10, borderRadius: '50%', background: '#B8722A', opacity: 0.45,
            }} />
            <div className="ab-dot2" style={{
              position: 'absolute', bottom: 60, right: -28,
              width: 6, height: 6, borderRadius: '50%', background: '#8b5cf6', opacity: 0.5,
            }} />
            <div className="ab-dot3" style={{
              position: 'absolute', top: '45%', left: -20,
              width: 8, height: 8, borderRadius: '50%', background: '#0ea5e9', opacity: 0.45,
            }} />

            {/* Speech bubble */}
            {bubbleVisible && (
              <div
                className="ab-bubble-enter ab-bubble-float"
                style={{
                  position: 'absolute',
                  top: -24,
                  left: '18%',
                  zIndex: 10,
                  background: '#fff',
                  border: '1.5px solid rgba(26,26,46,0.09)',
                  borderRadius: 20,
                  padding: '10px 18px',
                  boxShadow: '0 6px 24px rgba(26,26,46,0.10)',
                  display: 'flex', alignItems: 'center', gap: 8,
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="ab-wave" style={{ fontSize: 20 }}>👋</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', letterSpacing: '-0.3px' }}>
                  Hi, I'm Geet!
                </span>
                {/* Tail */}
                <div style={{
                  position: 'absolute', bottom: -9, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0, height: 0,
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: '9px solid #fff',
                  filter: 'drop-shadow(0 2px 1px rgba(26,26,46,0.06))',
                }} />
              </div>
            )}

            {/* Glow ring behind illustration */}
            <div className="ab-ring" style={{
              position: 'absolute',
              inset: -24,
              borderRadius: 32,
              background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.14) 0%, transparent 65%)',
              pointerEvents: 'none',
            }} />

            {/* ── Illustration container ─────────────────────────────── */}
            <div
              className="ab-float"
              style={{
                position: 'relative',
                borderRadius: 28,
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid rgba(26,26,46,0.08)',
                boxShadow: '0 24px 64px rgba(26,26,46,0.10), 0 4px 16px rgba(26,26,46,0.06)',
                aspectRatio: '9 / 16',
                maxHeight: 'min(76vh, 680px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              {hasMedia ? (
                /* ── Live media (video or GIF) ─────────────────────── */
                GIF_SRC ? (
                  <img
                    src={GIF_SRC}
                    alt="Animated illustration"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                ) : (
                  <video
                    src={VIDEO_SRC}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                )
              ) : (
                /* ── Video placeholder preview ─────────────────────── */
                <VideoPlaceholder />
              )}

              {/* Handwritten credit label */}
              <div style={{
                position: 'absolute', bottom: 18, left: 0, right: 0,
                display: 'flex', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <span style={{
                  fontFamily: "'Caveat', 'Segoe Script', cursive",
                  fontSize: 17,
                  color: '#B8722A',
                  letterSpacing: '0.3px',
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(6px)',
                  padding: '5px 14px 4px',
                  borderRadius: 20,
                  boxShadow: '0 2px 12px rgba(26,26,46,0.10)',
                }}>
                  ✦ Illustrated and animated by me
                </span>
              </div>
            </div>

            {/* ── Upload hint (shown only when no media is set) ── */}
            {!hasMedia && (
              <div style={{
                marginTop: 14,
                padding: '9px 16px',
                background: 'rgba(184,114,42,0.05)',
                border: '1px dashed rgba(184,114,42,0.28)',
                borderRadius: 10,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 12, color: '#7a7a9a', lineHeight: 1.6 }}>
                  Upload your video to{' '}
                  <code style={{ background: '#fff7ed', padding: '1px 5px', borderRadius: 4, fontSize: 11 }}>src/imports/</code>
                  {' '}then import it and assign to{' '}
                  <code style={{ background: '#fff7ed', padding: '1px 5px', borderRadius: 4, fontSize: 11 }}>VIDEO_SRC</code>
                  {' '}at the top of <code style={{ background: '#fff7ed', padding: '1px 5px', borderRadius: 4, fontSize: 11 }}>AboutSection.tsx</code>.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Video placeholder preview ────────────────────────────────────────────────
function VideoPlaceholder() {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#ffffff',
      position: 'relative',
      gap: 20,
    }}>
      <style>{`
        @keyframes vpPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50%       { transform: scale(1.06); opacity: 1; }
        }
        @keyframes vpRing {
          0%   { transform: scale(0.85); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .vp-btn   { animation: vpPulse 2.4s ease-in-out infinite; }
        .vp-ring1 { animation: vpRing 2.4s ease-out 0s infinite; }
        .vp-ring2 { animation: vpRing 2.4s ease-out 0.8s infinite; }
        .vp-ring3 { animation: vpRing 2.4s ease-out 1.6s infinite; }

        @keyframes vpScan {
          0%   { opacity: 0; top: 10%; }
          10%  { opacity: 0.5; }
          90%  { opacity: 0.5; }
          100% { opacity: 0; top: 90%; }
        }
        .vp-scan { animation: vpScan 3s linear infinite; }
      `}</style>

      {/* Subtle scan line — suggests video is "live" */}
      <div className="vp-scan" style={{
        position: 'absolute', left: '10%', right: '10%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(184,114,42,0.25), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Play button with ripple rings */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="vp-ring1" style={{
          position: 'absolute', width: 80, height: 80, borderRadius: '50%',
          border: '1.5px solid rgba(184,114,42,0.35)',
        }} />
        <div className="vp-ring2" style={{
          position: 'absolute', width: 80, height: 80, borderRadius: '50%',
          border: '1.5px solid rgba(184,114,42,0.25)',
        }} />
        <div className="vp-ring3" style={{
          position: 'absolute', width: 80, height: 80, borderRadius: '50%',
          border: '1.5px solid rgba(184,114,42,0.15)',
        }} />

        <div className="vp-btn" style={{
          width: 60, height: 60, borderRadius: '50%',
          background: '#B8722A',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(184,114,42,0.30)',
          position: 'relative', zIndex: 1,
        }}>
          {/* Play triangle */}
          <div style={{
            width: 0, height: 0,
            borderTop: '10px solid transparent',
            borderBottom: '10px solid transparent',
            borderLeft: '18px solid #fff',
            marginLeft: 4,
          }} />
        </div>
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <div style={{
          fontSize: 13, fontWeight: 700, color: '#1a1a2e',
          letterSpacing: '-0.3px', marginBottom: 6,
        }}>
          Your video goes here
        </div>
        <div style={{ fontSize: 11.5, color: '#9a9ab0', lineHeight: 1.6 }}>
          White background · MP4 recommended<br />
          Upload to <code style={{ background: '#f4f3ff', padding: '1px 5px', borderRadius: 4 }}>src/imports/</code>
        </div>
      </div>

      {/* Corner dashes — mimic a video frame border */}
      {[
        { top: 20, left: 20 },
        { top: 20, right: 20 },
        { bottom: 20, left: 20 },
        { bottom: 20, right: 20 },
      ].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute', ...pos,
          width: 20, height: 20,
          borderTop: i < 2 ? '2px solid rgba(184,114,42,0.35)' : 'none',
          borderBottom: i >= 2 ? '2px solid rgba(184,114,42,0.35)' : 'none',
          borderLeft: i % 2 === 0 ? '2px solid rgba(184,114,42,0.35)' : 'none',
          borderRight: i % 2 === 1 ? '2px solid rgba(184,114,42,0.35)' : 'none',
          borderRadius: i === 0 ? '4px 0 0 0' : i === 1 ? '0 4px 0 0' : i === 2 ? '0 0 0 4px' : '0 0 4px 0',
        }} />
      ))}
    </div>
  );
}
