import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { eras } from './timeline-data';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NavBar } from './NavBar';
import { InfineonTransformationStory, InfineonHero } from './stories/i1-infineon-transformation';
import { KhorosStory } from './stories/k1-khoros';
import { FreelanceStory } from './stories/f1-freelance';

// ── Flatten all projects newest → oldest (matches homepage display order)
// eras in timeline-data.ts is oldest-first; reverse so i1 → k1 → f1 for prev/next nav
const allStories = [...eras].reverse().flatMap(era =>
  era.projects.map(p => ({ ...p, era }))
);



// ─── Shared primitives ────────────────────────────────────────────────────────

export function EyebrowLabel({ text }: { text: string }) {
  return (
    <p style={{
      fontSize: 14, fontWeight: 700, letterSpacing: '2.2px',
      textTransform: 'uppercase', color: '#B8722A',
      margin: '0 0 8px',
    }}>
      {text}
    </p>
  );
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontWeight: 700, fontSize: 10, color: '#8d8786',
      letterSpacing: '1.6px', textTransform: 'uppercase',
      lineHeight: '15px', margin: 0,
    }}>
      {children}
    </p>
  );
}

function PlaceholderBox({ label, height = 240 }: { label: string; height?: number }) {
  return (
    <div style={{
      height,
      border: '1.5px dashed rgba(26,26,46,0.12)',
      borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(26,26,46,0.02)',
      color: '#b0b0c8', fontSize: 12, fontWeight: 500,
    }}>
      {label}
    </div>
  );
}

// ─── Per-story metadata ───────────────────────────────────────────────────────
const storyMeta: Record<string, {
  company: string;
  timeline: string;
  role: string[];
  team: string[];
  projectType: string;
}> = {
  k1: {
    company: "Khoros",
    timeline: "2021 – 2022",
    role: [
      "Design system strategy",
      "Component design",
      "Module & pattern design",
      "Documentation & dev handoff",
    ],
    team: [
      "2 additional UX designers",
      "Front-end engineers",
      "Product managers",
      "Business leadership"
    ],
    projectType:
      "Design library for enterprise customer engagement, support, marketing and analytics products",
  },
  f1: {
    company: "Innspire",
    timeline: "2020",
    role: [
      "Product discovery",
      "UX strategy",
      "UI & interaction design",
      "Validation & dev handoff",
    ],
    team: [
      "Product managers",
      "Product owners",
      "Front-end engineers",
      "Quality analysts",
    ],
    projectType:
      "End-to-end product design across independent client engagements.",
  },
};

// ─── Hero — uses per-story metadata ──────────────────────────────────────────
function StoryHero({
  story,
  era,
}: {
  story: typeof allStories[0];
  era: typeof allStories[0]["era"];
}) {
  const meta = storyMeta[story.id];

  return (
    <header style={{ paddingTop: 60 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
          padding: "clamp(40px, 5vw, 64px) clamp(24px, 16.5vw, 200px) 0",
        }}
      >
        {/* 1 — Title + description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            color: "#1a1a2e",
            letterSpacing: "-1px",
          }}
        >
          <p className="story-hero-title"
            style={{
              fontWeight: 700,
              fontSize: "clamp(26px, 2.8vw, 32px)",
              lineHeight: 1.28,
              margin: 0,
            }}
          >
            {story.title}
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "clamp(14px, 2.5vw, 16px)",
              color: "#1a1a2e",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            {story.description}
          </p>
        </div>

        {/* 2 — Gray info bar */}
        <div className="story-desktop-content" style={{ background: "#f7f7f7", padding: 16 }}>
          <div style={{ display: "flex", alignItems: "stretch" }}>

            {/* Col 1: Company + Timeline */}
            <div
              style={{
                flex: "1 0 0",
                minWidth: 0,
                paddingRight: 24,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <MetaLabel>Company</MetaLabel>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: 12,
                    color: "#1a1a2e",
                    lineHeight: "18.9px",
                    margin: 0,
                  }}
                >
                  {meta?.company ?? era.company}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <MetaLabel>Timeline</MetaLabel>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: 12,
                    color: "#1a1a2e",
                    lineHeight: "18.9px",
                    margin: 0,
                  }}
                >
                  {meta?.timeline ?? era.years}
                </p>
              </div>
            </div>

            {/* Col 2: My Role */}
            <div
              style={{
                flex: "1 0 0",
                minWidth: 0,
                paddingLeft: 24,
                borderLeft: "1.156px solid rgba(26,26,46,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <MetaLabel>My Role</MetaLabel>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#1a1a2e",
                  lineHeight: "18.9px",
                  margin: 0,
                }}
              >
                {meta?.role.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < meta.role.length - 1 && <br />}
                  </span>
                )) ?? "—"}
              </p>
            </div>

            {/* Col 3: Team */}
            <div
              style={{
                flex: "1 0 0",
                minWidth: 0,
                paddingLeft: 24,
                borderLeft: "1.156px solid rgba(26,26,46,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <MetaLabel>Team</MetaLabel>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#1a1a2e",
                  lineHeight: "18.9px",
                  margin: 0,
                }}
              >
                {meta?.team.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < meta.team.length - 1 && <br />}
                  </span>
                )) ?? "—"}
              </p>
            </div>

            {/* Col 4: Project Type */}
            <div
              style={{
                flex: "1 0 0",
                minWidth: 0,
                paddingLeft: 24,
                borderLeft: "1.156px solid rgba(26,26,46,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <MetaLabel>Project Type(s)</MetaLabel>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#1a1a2e",
                  lineHeight: "18.9px",
                  margin: 0,
                }}
              >
                {meta?.projectType ?? "—"}
              </p>
            </div>

          </div>
        </div>

        {/* 3 — Hero image */}
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            height: "clamp(240px, 29.8vw, 447px)",
            border: "1.156px solid rgba(26,26,46,0.06)",
          }}
        >
          <ImageWithFallback
            src={story.image}
            alt={story.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </header>
  );
}

// ─── Story section wrapper ────────────────────────────────────────────────────
export function StorySection({
  eyebrow,
  headline,
  children,
}: {
  eyebrow?: string;
  headline?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: 'clamp(24px, 5vw, 24px) clamp(24px, 16.5vw, 200px)', marginTop: "36px" }}>
      {eyebrow && <EyebrowLabel text={eyebrow} />}
      {headline && (
        <h2 style={{
          fontSize: 'clamp(21px, 2.4vw, 24px)', fontWeight: 700,
          letterSpacing: '-0.7px', color: '#1a1a2e',
          margin: '0 0 20px',
        }}>
          {headline}
        </h2>
      )}
      {children}
    </section>
  );
}

// ─── Mobile under-construction banner ────────────────────────────────────────
function MobileUnderConstruction({ storyTitle }: { storyTitle: string }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!email.trim()) return;
    const subject = encodeURIComponent(`Send me the story: ${storyTitle}`);
    const body = encodeURIComponent(
      `Hi Geetanjali,\n\nI'd love to read the full story "${storyTitle}" — could you please send me the link?\n\nMy email: ${email}\n\nThanks!`
    );
    window.open(`mailto:geetanjalivu@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
  };

  return (
    <div style={{
      padding: '48px 24px 64px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      gap: 24,
    }}>
      {/* Icon */}
      <div style={{
        width: 72, height: 72, borderRadius: 20,
        background: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
        border: '1.5px solid rgba(184,114,42,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32,
      }}>
        🚧
      </div>

      {/* Heading */}
      <div style={{ maxWidth: 320 }}>
        <h3 style={{
          fontSize: 20, fontWeight: 600, letterSpacing: '-0.6px',
          color: '#1a1a2e', margin: '0 0 10px',
        }}>
          Best experienced on desktop
        </h3>
        <p style={{
          fontSize: 14, color: '#7a7a9a', lineHeight: 1.7, margin: 0,
        }}>
          This story has rich visuals, case study details and interactions that are designed for a larger screen. Open it on your laptop for the full experience.
        </p>
      </div>

      {/* Divider */}
      <div style={{ width: 40, height: 1.5, background: 'rgba(26,26,46,0.12)', borderRadius: 2 }} />

      {/* Email prompt */}
      {!sent ? (
        <div style={{ width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a2e', margin: 0 }}>
            Want me to send you the link?
          </p>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
            style={{
              width: '100%', padding: '11px 16px', borderRadius: 10,
              border: '1.5px solid rgba(26,26,46,0.14)',
              fontSize: 14, color: '#1a1a2e', outline: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              boxSizing: 'border-box',
            }}
          />
          <button
            onClick={handleSend}
            disabled={!email.trim()}
            style={{
              padding: '11px 24px', borderRadius: 10, border: 'none',
              background: email.trim() ? '#B8722A' : 'rgba(26,26,46,0.08)',
              color: email.trim() ? '#fff' : '#b0b0c8',
              fontSize: 14, fontWeight: 600, cursor: email.trim() ? 'pointer' : 'default',
              fontFamily: "'Inter', system-ui, sans-serif",
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
          >
            Send me the link →
          </button>
        </div>
      ) : (
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          border: '1px solid rgba(34,197,94,0.25)',
          borderRadius: 14, padding: '20px 24px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          maxWidth: 320, width: '100%',
        }}>
          <div style={{ fontSize: 28 }}>✅</div>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#15803d', margin: 0 }}>Request sent!</p>
          <p style={{ fontSize: 13, color: '#166534', margin: 0, lineHeight: 1.6 }}>
            I'll send the story link to your email shortly. Thanks for your interest!
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Placeholder body (shown until real content is provided per-story) ─────────
function PlaceholderContent() {
  const steps = ['Discover & Research', 'Define & Strategize', 'Design & Iterate'];
  return (
    <>
      <StorySection eyebrow="The Situation" headline="Context, challenge and what needed to change.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <PlaceholderBox label="Background & context" height={180} />
          <PlaceholderBox label="The challenge / problem statement" height={180} />
        </div>
      </StorySection>


      <StorySection eyebrow="The Approach" headline="How I thought through and executed this.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
          {steps.map((s, i) => (
            <div key={s} style={{
              border: '1px solid rgba(26,26,46,0.08)',
              borderRadius: 12, padding: '24px 20px',
              background: '#fafafa',
            }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '1.5px', color: '#B8722A', marginBottom: 10 }}>
                0{i + 1}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', marginBottom: 10 }}>{s}</div>
              <PlaceholderBox label="Details coming soon" height={60} />
            </div>
          ))}
        </div>
        <PlaceholderBox label="Process visuals / artefacts" height={320} />
      </StorySection>


      <StorySection eyebrow="The Making" headline="The decisions, designs and what I made.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
          <PlaceholderBox label="Design decisions & rationale" height={200} />
          <PlaceholderBox label="Screens / mockups" height={200} />
        </div>
        <PlaceholderBox label="Additional visuals" height={360} />
      </StorySection>


      <StorySection eyebrow="The Outcome" headline="What changed and the impact it created.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
          {[1, 2, 3].map(n => (
            <div key={n} style={{
              border: '1px solid rgba(26,26,46,0.08)',
              borderRadius: 12, padding: '28px 24px',
            }}>
              <div style={{
                fontSize: 'clamp(32px, 3.5vw, 44px)', fontWeight: 800,
                color: '#B8722A', letterSpacing: '-1.5px', marginBottom: 8,
              }}>—</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 4 }}>Impact metric</div>
              <div style={{ fontSize: 12, color: '#9a9ab0' }}>Outcome placeholder</div>
            </div>
          ))}
        </div>
        <PlaceholderBox label="Closing narrative" height={120} />
      </StorySection>


      <StorySection eyebrow="Looking Back" headline="What this story taught me.">
        <PlaceholderBox label="Personal reflection & learnings" height={160} />
      </StorySection>
    </>
  );
}

// ─── Story footer nav ─────────────────────────────────────────────────────────
function StoryFootNav({ prev, next }: {
  prev: typeof allStories[0] | null;
  next: typeof allStories[0] | null;
}) {
  return (
    <>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '40px 48px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        alignItems: 'center', gap: 24,
      }}>
        <div>
          {prev && (
            <Link to={`/story/${prev.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#b0b0c8' }}>← Previous</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', lineHeight: 1.4, maxWidth: 260 }}>{prev.title}</span>
            </Link>
          )}
        </div>

        <div style={{ textAlign: 'right' }}>
          {next && (
            <Link to={`/story/${next.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#b0b0c8' }}>Next →</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', lineHeight: 1.4, maxWidth: 260 }}>{next.title}</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

// ─── 404 ─────────────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ fontSize: 40 }}>🤔</div>
      <h1 style={{ fontSize: 22, fontWeight: 800, color: '#1a1a2e', margin: 0 }}>Story not found</h1>
      <a href="/#work" style={{ color: '#B8722A', fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>← Back to all work</a>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const story = allStories.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!story) return <NotFound />;

  const { era } = story;
  const currentIdx = allStories.findIndex(s => s.id === id);
  const prevStory = currentIdx > 0 ? allStories[currentIdx - 1] : null;
  const nextStory = currentIdx < allStories.length - 1 ? allStories[currentIdx + 1] : null;

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      color: '#1a1a2e', background: '#fff',
      minHeight: '100vh', overflowX: 'hidden',
    }}>
      <style>{`
        .story-desktop-content { display: block; }
        .story-mobile-banner { display: none; }
        @media (max-width: 850px) {
          .story-desktop-content { display: none !important; }
          .story-mobile-banner { display: block !important; }
          .story-hero-title { font-size: 20px !important; }
        }
      `}</style>

      <NavBar />

      {/* Hero always shown */}
      {id === 'i1' ? <InfineonHero /> : <StoryHero story={story} era={era} />}

      {/* Full story content — desktop only */}
      <div className="story-desktop-content">
        {id === 'i1' ? <InfineonTransformationStory /> :
         id === 'k1' ? <KhorosStory /> :
         id === 'f1' ? <FreelanceStory /> :
         <PlaceholderContent />}
        <StoryFootNav prev={prevStory} next={nextStory} />
      </div>

      {/* Mobile/tablet: under construction view */}
      <div className="story-mobile-banner">
        <MobileUnderConstruction storyTitle={story.title} />
      </div>
    </div>
  );
}
