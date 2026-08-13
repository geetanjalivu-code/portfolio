import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { eras, type Era, type Project } from './timeline-data';

const orderedEras = [...eras].reverse(); // newest → oldest

export function WorkJourney() {
  const wrapRef     = useRef<HTMLDivElement>(null);
  const eraRefs     = useRef<Record<string, HTMLDivElement | null>>({});
  const terminusRef = useRef<HTMLDivElement>(null);

  const [dotY, setDotY]         = useState<number[]>([]);
  const [segFills, setSegFills] = useState<number[]>([]);
  const [visibleEras, setVisibleEras] = useState<Set<string>>(
    new Set([orderedEras[0].id])
  );

  const computePositions = useCallback(() => {
    if (!wrapRef.current) return;
    const eraDotYs = orderedEras.map(era => {
      const el = eraRefs.current[era.id];
      if (!el) return 0;
      return el.offsetTop + 21;
    });
    const termEl    = terminusRef.current;
    const terminusY = termEl ? termEl.offsetTop + 80 + 8 : 0;
    setDotY([...eraDotYs, terminusY]);
  }, []);

  useEffect(() => {
    const t = setTimeout(computePositions, 160);
    window.addEventListener('resize', computePositions);
    return () => { clearTimeout(t); window.removeEventListener('resize', computePositions); };
  }, [computePositions]);

  useEffect(() => {
    if (dotY.length < 2) return;
    const onScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const wrapPageTop = wrap.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;
      const sy = window.scrollY;
      const fills: number[] = [];
      for (let i = 0; i < dotY.length - 1; i++) {
        const fillStart = wrapPageTop + dotY[i]     - vh * 0.52;
        const fillEnd   = wrapPageTop + dotY[i + 1] - vh * 0.52;
        const pct = Math.max(0, Math.min(100,
          ((sy - fillStart) / (fillEnd - fillStart)) * 100
        ));
        fills.push(pct);
      }
      setSegFills(fills);
      setVisibleEras(() => {
        const next = new Set<string>();
        next.add(orderedEras[0].id);
        fills.forEach((f, i) => {
          if (i < orderedEras.length - 1 && f >= 58) {
            next.add(orderedEras[i + 1].id);
          }
        });
        return next;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [dotY]);

  const activeSegIdx = segFills.findIndex(f => f > 0 && f < 100);
  const allDone      = segFills.length > 0 && segFills.every(f => f >= 99);
  let glowTop   = dotY[0] ?? 0;
  let glowColor = orderedEras[0].color;
  if (activeSegIdx >= 0 && dotY.length > activeSegIdx + 1) {
    const segLen = dotY[activeSegIdx + 1] - dotY[activeSegIdx];
    glowTop   = dotY[activeSegIdx] + (segFills[activeSegIdx] / 100) * segLen;
    glowColor = orderedEras[activeSegIdx].color;
  } else if (allDone && dotY.length > 0) {
    glowTop   = dotY[dotY.length - 1];
    glowColor = orderedEras[orderedEras.length - 1].color;
  }
  const showGlow = dotY.length > 0 && (activeSegIdx >= 0 || allDone);

  return (
    <section
      id="work"
      className="wj-section"
      style={{
        background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 30%, #f7f7f7 100%)',
        fontFamily: "'Inter', system-ui, sans-serif",
        padding: '100px 0 128px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .wj-card {
          transition: transform 0.22s cubic-bezier(.2,.8,.3,1), box-shadow 0.22s ease;
          cursor: pointer;
        }
        .wj-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 44px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.05) !important;
        }
        .wj-img { overflow: hidden; }
        .wj-img img { transition: transform 0.55s cubic-bezier(.2,.8,.3,1); }
        .wj-card:hover .wj-img img { transform: scale(1.05); }
        .wj-cta { display: inline-flex; align-items: center; gap: 5px; transition: gap 0.15s ease; }
        .wj-cta:hover { gap: 10px !important; }
        .wj-era-row {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.45s cubic-bezier(.2,.8,.3,1),
                      transform 0.45s cubic-bezier(.2,.8,.3,1);
        }
        .wj-era-row.wj-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.7s cubic-bezier(.2,.8,.3,1),
                      transform 0.7s cubic-bezier(.2,.8,.3,1);
        }
        .wj-panel-l { opacity: 0; transform: translateX(-26px); transition: opacity 0.4s cubic-bezier(.2,.8,.3,1), transform 0.4s cubic-bezier(.2,.8,.3,1); }
        .wj-panel-r { opacity: 0; transform: translateX( 26px); transition: opacity 0.4s cubic-bezier(.2,.8,.3,1), transform 0.4s cubic-bezier(.2,.8,.3,1); }
        .wj-era-row.wj-visible .wj-panel-l {
          opacity: 1; transform: translateX(0);
          transition: opacity 0.7s cubic-bezier(.2,.8,.3,1) 0.12s,
                      transform 0.7s cubic-bezier(.2,.8,.3,1) 0.12s;
        }
        .wj-era-row.wj-visible .wj-panel-r {
          opacity: 1; transform: translateX(0);
          transition: opacity 0.7s cubic-bezier(.2,.8,.3,1) 0.24s,
                      transform 0.7s cubic-bezier(.2,.8,.3,1) 0.24s;
        }
        @keyframes dotRing {
          0%   { box-shadow: var(--ds), 0 0 0  0px var(--dc); }
          60%  { box-shadow: var(--ds), 0 0 0 12px transparent; }
          100% { box-shadow: var(--ds), 0 0 0  0px transparent; }
        }
        .wj-dot-pulse { animation: dotRing 2s ease-out infinite; }
        @keyframes tipPulse {
          0%, 100% { transform: translateX(-50%) scale(1);   opacity: 1; }
          50%       { transform: translateX(-50%) scale(1.5); opacity: 0.7; }
        }
        @media (max-width: 800px) {
          .wj-row       { display: flex !important; flex-direction: column !important; }
          .wj-sp-col    { display: none !important; }
          .wj-panel-l, .wj-panel-r { padding: 0 !important; width: 100% !important; }
          .wj-wrap, .wj-hdr { padding: 0 24px !important; }
          .wj-spine-art { display: none !important; }
          .wj-info-panel  { order: 1 !important; margin-bottom: 24px !important; }
          .wj-cards-panel { order: 2 !important; }
          .wj-section { padding: 48px 0 32px !important; }
        }
      `}</style>

      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(26,26,46,0.025) 1px, transparent 1px)',
        backgroundSize: '100% 80px',
        maskImage: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0.4) 90%, transparent 100%)',
      }} />

      {/* ── CENTERED HEADER ──────────────────────────────────────────────── */}
      <div className="wj-hdr" style={{
        maxWidth: 1120, margin: '0 auto', padding: '0 48px',
        marginBottom: 96, textAlign: 'center',
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{ width: 20, height: 1.5, background: '#B8722A', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2.2px', textTransform: 'uppercase', color: '#B8722A' }}>
            Work &amp; Journey · 2017 — 2026
          </span>
          <div style={{ width: 20, height: 1.5, background: '#B8722A', borderRadius: 2 }} />
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700,
          letterSpacing: '-1.4px', color: '#1a1a2e', lineHeight: 1.1,
          margin: '0 auto 20px', maxWidth: 760,
        }}>
          Nine years of craft.<br />
          <em style={{ fontStyle: 'italic', fontWeight: 700, color: '#B8722A' }}>Three chapters</em>{' '}
          of career.
        </h2>
        <p style={{ color: '#7a7a9a', fontSize: 16, lineHeight: 1.8, maxWidth: 620, margin: '0 auto' }}>
          From freelance to enterprise — the journey that shaped how I design.
        </p>
      </div>

      {/* ── SPINE + ALTERNATING ROWS ─────────────────────────────────────── */}
      <div className="wj-wrap" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 48px' }}>
        <div ref={wrapRef} style={{ position: 'relative' }}>

          {/* Grey tracks */}
          {dotY.slice(0, -1).map((y, i) => (
            <div key={`track-${i}`} className="wj-spine-art" style={{
              position: 'absolute',
              left: '50%', transform: 'translateX(-50%)',
              top: y, height: dotY[i + 1] - y,
              width: 2, background: 'rgba(26,26,46,0.08)',
              borderRadius: 2, zIndex: 0, pointerEvents: 'none',
            }} />
          ))}

          {/* Colored fills */}
          {dotY.slice(0, -1).map((y, i) => {
            const segLen = dotY[i + 1] - y;
            const fillH  = ((segFills[i] ?? 0) / 100) * segLen;
            return (
              <div key={`fill-${i}`} className="wj-spine-art" style={{
                position: 'absolute',
                left: '50%', transform: 'translateX(-50%)',
                top: y, height: Math.max(0, fillH),
                width: 2,
                background: orderedEras[i].color,
                borderRadius: 2, zIndex: 2, pointerEvents: 'none',
              }} />
            );
          })}

          {/* Glowing tip */}
          {showGlow && (
            <div className="wj-spine-art" style={{
              position: 'absolute',
              left: '50%',
              top: glowTop - 6,
              transform: 'translateX(-50%)',
              width: 12, height: 12, borderRadius: '50%',
              background: '#fff',
              border: `2.5px solid ${glowColor}`,
              boxShadow: `0 0 0 4px ${glowColor}30, 0 0 14px 4px ${glowColor}55`,
              zIndex: 5, pointerEvents: 'none',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }} />
          )}

          {/* ── Era rows ────────────────────────────────────────────────── */}
          {orderedEras.map((era, idx) => {
            const infoLeft  = idx % 2 === 0;
            const isLast    = idx === orderedEras.length - 1;
            const isVisible = visibleEras.has(era.id);
            const segIdx    = idx - 1;
            const dotLit    = idx === 0 || (segFills[segIdx] ?? 0) >= 90;

            return (
              <div
                key={era.id}
                ref={el => { eraRefs.current[era.id] = el; }}
                className={`wj-era-row wj-row${isVisible ? ' wj-visible' : ''}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 56px 1fr',
                  alignItems: 'start',
                  marginBottom: isLast ? 0 : 96,
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                {/* LEFT panel — info or cards depending on idx */}
                <div
                  className={
                    infoLeft
                      ? 'wj-panel-l wj-info-panel'   // even: info on left
                      : 'wj-panel-r wj-cards-panel'  // odd:  cards on left
                  }
                  style={{ paddingRight: 44, paddingTop: 8 }}
                >
                  {infoLeft ? <EraInfo era={era} /> : <EraCards era={era} />}
                </div>

                {/* SPINE DOT */}
                <div className="wj-sp-col" style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', paddingTop: 12,
                  position: 'relative', zIndex: 4,
                }}>
                  <div
                    className={dotLit ? 'wj-dot-pulse' : ''}
                    style={{
                      '--ds': `0 0 0 5px ${era.color}22`,
                      '--dc': `${era.color}50`,
                      width:  dotLit ? 20 : 16,
                      height: dotLit ? 20 : 16,
                      borderRadius: '50%',
                      border: `2.5px solid ${dotLit ? era.color : 'rgba(26,26,46,0.15)'}`,
                      background: dotLit ? era.color : '#f9f9f9',
                      boxShadow: dotLit
                        ? `0 0 0 5px ${era.color}22, 0 0 18px ${era.color}45`
                        : 'none',
                      transition: 'all 0.5s cubic-bezier(.2,.8,.3,1)',
                      flexShrink: 0,
                    } as React.CSSProperties}
                  />
                  <div style={{
                    marginTop: 6, fontSize: 10, fontWeight: 700,
                    color: dotLit ? era.darkColor : '#c0c0d8',
                    letterSpacing: '-0.2px', textAlign: 'center',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.5s ease',
                  }}>
                    {era.shortYears}
                  </div>
                </div>

                {/* RIGHT panel — cards or info depending on idx */}
                <div
                  className={
                    infoLeft
                      ? 'wj-panel-r wj-cards-panel'  // even: cards on right
                      : 'wj-panel-l wj-info-panel'   // odd:  info on right
                  }
                  style={{ paddingLeft: 44, paddingTop: 8 }}
                >
                  {infoLeft ? <EraCards era={era} /> : <EraInfo era={era} />}
                </div>
              </div>
            );
          })}

          {/* ── Terminus circle ──────────────────────────────────────── */}
          {(() => {
            const lastSegFill = segFills[orderedEras.length - 1] ?? 0;
            const lit     = lastSegFill >= 90;
            const lastEra = orderedEras[orderedEras.length - 1];
            return (
              <div
                ref={terminusRef}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  paddingTop: 80, paddingBottom: 8,
                  position: 'relative', zIndex: 4,
                }}
              >
                <div style={{
                  width: lit ? 18 : 14,
                  height: lit ? 18 : 14,
                  borderRadius: '50%',
                  border: `2px solid ${lit ? lastEra.color : 'rgba(26,26,46,0.18)'}`,
                  background: lit ? `${lastEra.color}18` : '#f5f5f5',
                  boxShadow: lit ? `0 0 0 4px ${lastEra.color}18, 0 0 12px ${lastEra.color}35` : 'none',
                  transition: 'all 0.5s cubic-bezier(.2,.8,.3,1)',
                }} />
                <div style={{
                  marginTop: 8,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.5px',
                  color: lit ? 'rgba(26,26,46,0.45)' : 'rgba(26,26,46,0.22)',
                  textAlign: 'center',
                  transition: 'color 0.5s ease',
                }}>
                  2017
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}

// ─── Era info panel ────────────────────────────────────────────────────────────
function EraInfo({ era }: { era: Era }) {
  return (
    <div style={{ paddingTop: 4 }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20,
        padding: '5px 12px', borderRadius: 20,
        background: era.lightBg, border: `1px solid ${era.color}40`,
      }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: era.color, flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: era.darkColor }}>
          {era.role} · {era.companies}
        </span>
      </div>
      <h3 style={{
        fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 700,
        letterSpacing: '-0.6px', color: '#1a1a2e', lineHeight: 1.25,
        margin: '0 0 16px',
      }}>
        "{era.headline}"
      </h3>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        fontSize: 13, fontWeight: 700, color: era.darkColor, marginBottom: 16,
      }}>
        {era.years}
      </div>
      <p style={{
        color: '#6b6b8a', fontSize: 14, lineHeight: 1.85,
        margin: '0 0 24px', paddingLeft: 16,
        borderLeft: `2.5px solid ${era.color}70`,
      }}>
        {era.summary}
      </p>
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ fontSize: 17, fontWeight: 700, color: era.darkColor, letterSpacing: '-0.5px' }}>
          {era.duration} years
        </div>
        <div style={{ width: 1, background: 'rgba(26,26,46,0.25)', alignSelf: 'stretch' }} />
        <div style={{ fontSize: 17, fontWeight: 700, color: era.darkColor, letterSpacing: '-0.5px' }}>
          {era.projectsCount} {era.projectsLabel}
        </div>
      </div>
    </div>
  );
}

// ─── Era cards panel ──────────────────────────────────────────────────────────
function EraCards({ era }: { era: Era }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {era.projects.slice(0, 2).map(proj => (
        <StoryCard key={proj.id} project={proj} era={era} />
      ))}
    </div>
  );
}

// ─── Story card ───────────────────────────────────────────────────────────────
function StoryCard({ project, era }: { project: Project; era: Era }) {
  return (
    <Link
      to={`/story/${project.id}`}
      className="wj-card"
      style={{
        background: '#fff', borderRadius: 14, overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        border: '1px solid rgba(0,0,0,0.045)',
        display: 'flex', flexDirection: 'column',
        textDecoration: 'none', color: 'inherit',
      }}
    >
      <div className="wj-img" style={{ height: 168, position: 'relative', flexShrink: 0 }}>
        <ImageWithFallback
          src={project.image} alt={project.cardTitle}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 45%, rgba(26,26,46,0.28) 100%)',
        }} />
      </div>
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ width: 20, height: 2.5, borderRadius: 2, background: era.color, marginBottom: 11 }} />
        <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', lineHeight: 1.4, margin: '0 0 8px' }}>
          {project.cardTitle}
        </h4>
        <p style={{ color: '#9a9ab0', fontSize: 12, lineHeight: 1.65, margin: '0 0 auto' }}>
          {project.cardDescription}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
          <div className="wj-cta" style={{ color: era.darkColor, fontSize: 12, fontWeight: 600 }}>
            Read story <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}