import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  isValidElement,
  cloneElement,
} from "react";
import { StorySection } from "../StoryPage";

// ─── Image imports ────────────────────────────────────────────────────────────

// ── relative path imports (commented out — use outside Figma Make) ────────────
import imgBefore from "../../../imports/microcontrollerbefore.png";
import imgAfter from "../../../imports/microcontrollerafter.png";
import imgWorkshop from "../../../imports/workshop.png";
import imgResearch from "../../../imports/InfineonStory1/1bcaf89b31f1ce11a07fc72d42b7ae2af3350c75.png";
import ecosystemMap from "../../../imports/ecosystemmap.png";
import imgTeamsMap from "../../../imports/InfineonStory1-1/78b99d1b0619ab06cd3996f327858340377752ae.png";
import imgSoftwareHeader from "../../../imports/InfineonStory1-1/90e9b735df5a2a98025aa21f847ba584d6bd61f1.png";
import imgSoftwareFooter from "../../../imports/InfineonStory1-1/d2841c8398e4617972db33bf20bdbab0fcb45504.png";
import imgTabbedView from "../../../imports/InfineonStory1-1/e4f46f436e44d9f590ecfde9c956e454a8ad0133.png";
import imgSidebarLeft from "../../../imports/InfineonStory1-1/b40f5070172a42940fe753395996fe21318eed7a.png";
import imgSidebarRight from "../../../imports/InfineonStory1-1/47e748a9697f2794c118207a7a59f9ce15520fef.png";
import imgGrowthDiagram from "../../../imports/growthh.png";
import imgHeartFramework from "../../../imports/heartmetrics.mp4";
import imgHero from "../../../imports/Hero/85463238a5c31f2d4b61212050584cc6909eda6e.png";
import imgCommBefore from "../../../imports/communityhomebefore.png";
import imgCommAfter from "../../../imports/communityhomeafter.png";
import imgCommTopicBefore from "../../../imports/commtopicbefore.png";
import imgCommTopicAfter from "../../../imports/commtopicafter.png";
import imgCommProfileBefore from "../../../imports/commprofilebefore.png";
import imgCommProfileAfter from "../../../imports/commprofileafter.png";
import imgCommSearchBefore from "../../../imports/commsearchbefore.png";
import imgCommSearchAfter from "../../../imports/commsearchafter.png";
import img1 from "../../../imports/page1.png";
import img2 from "../../../imports/page2.png";
import img3 from "../../../imports/page3.png";
import img4 from "../../../imports/page4.png";
import img5 from "../../../imports/page5.png";
import img6 from "../../../imports/page6.png";
import img7 from "../../../imports/page7.png";
import img8 from "../../../imports/page8.png";
import img9 from "../../../imports/page9.png";

import wechat from "../../../imports/wechatminiprogram.png";
import wechatvid from "../../../imports/wechat.mp4";
import videeval from "../../../imports/videoeval.mp4";
import leadvid from "../../../imports/leadmgvid.mp4";
import pinnvid from "../../../imports/decision.mp4";
import ats from "../../../imports/ats.mp4";
import ifxapp from "../../../imports/app.mp4";

import ai1 from "../../../imports/ai1.png";
import ai2 from "../../../imports/ai2.png";
import ai3 from "../../../imports/ai3.png";
import ai4 from "../../../imports/ai4.png";
// ── Gallery extra component images ────────────────────────────────────────────
import imgMunich from "../../../imports/group.jpg";
import imgGalAccordion from "../../../imports/ImageGallery/94a3a6b2d1955a5fff0d466806aab13a3c4e990e.png";
import imgGalGraphs from "../../../imports/ImageGallery/943d71038daa8622d819c6bce947c0862b086680.png";
import imgGalSettings from "../../../imports/ImageGallery/d2a15f0117380975f5e2ec12284b36781caf39d2.png";
import imgGalColumnHeader from "../../../imports/ImageGallery/2b32ec432d261021be609fd12dcd169d8d5d02ca.png";
import imgGalAppFooter from "../../../imports/ImageGallery/b48d9b417a5fd9b8940cc24ca440a9f057321368.png";
import imgGalFileUpload from "../../../imports/ImageGallery/a6ccc07656fa9b924a627f8681fc59a6d656ee7e.png";
import imgGalSearch from "../../../imports/ImageGallery/0bcddcf104b2e40a7277123949641e228589e1fb.png";
import imgGalDateRange from "../../../imports/ImageGallery/6b00f9898377b3da7c7869d4a95d71ba7bf60ddc.png";
import imgGalAudio from "../../../imports/ImageGallery/45f131509e78a58e349111f9071f571707631ffc.png";
import workshopmuc from "../../../imports/workshopvirtual.png";
import svgLearningPaths from "../../../imports/Frame6894-1/svg-urfvfnp2j1";
import svgPriorityPaths from "../../../imports/Frame6893-1/svg-vgh1p1unl4";

// ─── Key Learnings icons (Frame6894-1) ────────────────────────────────────────
function IconLearn1() {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: 40,
        height: 40,
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <path d={svgLearningPaths.p161dec80} fill="black" />
      </svg>
    </div>
  );
}

function IconLearn2() {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: 40,
        height: 40,
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <path
          clipRule="evenodd"
          d={svgLearningPaths.p20494d00}
          fill="black"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function IconLearn3() {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: 40,
        height: 40,
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip_learn3)">
          <path d={svgLearningPaths.p1a300a80} fill="black" />
          <path d={svgLearningPaths.p25fe1f00} fill="black" />
          <path d={svgLearningPaths.p11e83c00} fill="black" />
          <path d={svgLearningPaths.pe7f9fd0} fill="black" />
          <path d={svgLearningPaths.p14e19100} fill="black" />
          <path d={svgLearningPaths.pce0b200} fill="black" />
          <path d={svgLearningPaths.p16397900} fill="black" />
          <path d={svgLearningPaths.pc8587f0} fill="black" />
          <path d={svgLearningPaths.p150b71e0} fill="black" />
          <path d={svgLearningPaths.pec68470} fill="black" />
          <path d={svgLearningPaths.p2b0ccb80} fill="black" />
          <path d={svgLearningPaths.p62d1c00} fill="black" />
          <path d={svgLearningPaths.p34f23900} fill="black" />
          <path d={svgLearningPaths.p37377380} fill="black" />
          <path d={svgLearningPaths.pb696980} fill="black" />
          <path d={svgLearningPaths.p3607aff0} fill="black" />
          <path d={svgLearningPaths.p30adb00} fill="black" />
          <path d={svgLearningPaths.p19e65480} fill="black" />
          <path d={svgLearningPaths.p13d06200} fill="black" />
          <path d={svgLearningPaths.p293f4000} fill="black" />
          <path d={svgLearningPaths.pe993680} fill="black" />
          <path d={svgLearningPaths.p2cc39700} fill="black" />
          <path d={svgLearningPaths.p12153b00} fill="black" />
          <path d={svgLearningPaths.p36bbab00} fill="black" />
          <path d={svgLearningPaths.p13ecfd00} fill="black" />
          <path d={svgLearningPaths.p27283a00} fill="black" />
          <path d={svgLearningPaths.pcae5200} fill="black" />
          <path d={svgLearningPaths.p1871c800} fill="black" />
        </g>
        <defs>
          <clipPath id="clip_learn3">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ─── Key Priorities icons (Frame6893-1) ───────────────────────────────────────
function IconPriority1() {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: 40,
        height: 40,
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <path d={svgPriorityPaths.p177ae980} fill="black" />
        <path d={svgPriorityPaths.p28b5b070} fill="black" />
        <path d={svgPriorityPaths.p27996c00} fill="black" />
        <path d={svgPriorityPaths.p26ed7b80} fill="black" />
        <path d={svgPriorityPaths.p171ef100} fill="black" />
        <path d={svgPriorityPaths.p24bc4480} fill="black" />
      </svg>
    </div>
  );
}

function IconPriority2() {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: 40,
        height: 40,
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip_priority2)">
          <path
            clipRule="evenodd"
            d={svgPriorityPaths.p289d4080}
            fill="black"
            fillRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip_priority2">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconPriority3() {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: 40,
        height: 40,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2.94%",
          right: 0,
          bottom: "2.94%",
          left: 0,
        }}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 40 37.6467"
        >
          <path d={svgPriorityPaths.p2fb7e380} fill="black" />
          <path d={svgPriorityPaths.p1332e880} fill="black" />
          <path d={svgPriorityPaths.p159cfb00} fill="black" />
          <path d={svgPriorityPaths.p399e5900} fill="black" />
        </svg>
      </div>
    </div>
  );
}

function VideoPlayer({ src, style }: { src: string; style?: React.CSSProperties }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  // sync state if video ends naturally
  const handleEnded = () => setPlaying(false);

  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        ...style,
      }}
      onClick={togglePlay}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <video
        ref={videoRef}
        src={src}
        onEnded={handleEnded}
        // show native controls only when playing
        controls={playing}
        style={{ width: "100%", display: "block" }}
      />

      {/* Show play button when NOT playing */}
      {!playing && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: "18px solid white",
              marginLeft: 4,
            }}
          />
        </div>
      )}

      {/* Show pause button on hover when playing */}
      {playing && hovering && (
        <div
          onClick={togglePlay}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {/* Pause icon - two bars */}
          <div style={{ display: "flex", gap: 5 }}>
            <div style={{ width: 4, height: 18, backgroundColor: "white", borderRadius: 2 }} />
            <div style={{ width: 4, height: 18, backgroundColor: "white", borderRadius: 2 }} />
          </div>
        </div>
      )}
    </div>
  );
}

function TabImage({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    const img = new Image();
    img.onload = () => setReady(true);
    img.onerror = () => setReady(true);
    img.src = src;
    if (img.complete) setReady(true);
    return () => { img.onload = null; img.onerror = null; };
  }, [src]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Shimmer behind */}
      {!ready && (
        <div style={{
          position: 'absolute',
          inset: 0,
          minHeight: 200,
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'tabimg-shimmer 1.4s infinite',
        }}>
          <style>{`
            @keyframes tabimg-shimmer {
              0%   { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          display: 'block',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.2s ease',
          ...style,
        }}
      />
    </div>
  );
}

function TabbedShowcase({
  tabs,
}: {
  tabs: {
    icon: React.ReactNode;
    heading: string;
    content: React.ReactNode;
  }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {/* Tab bar */}
      <div style={{
        display: 'flex',
        gap: 8,
        boxSizing: 'border-box',
        width: '100%',
      }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              flex: 1,
              minWidth: 0,
              background: i === active ? '#fff' : '#f2f2f2',
              border: '1px solid #f2f2f2',
              borderBottom: i === active ? '1px solid #fff' : '1px solid #fff',
              borderRadius: '8px 8px 0 0',
              padding: '10px 8px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              transition: 'background 0.2s ease',
              boxSizing: 'border-box',
            }}
          >
            <div style={{
              color: i === active ? '#B8722A' : '#9a9ab0',
              transition: 'color 0.2s ease',
              flexShrink: 0,
            }}>
              {tab.icon}
            </div>
            <span style={{
              fontSize: 13,
              fontWeight: 600,
              color: i === active ? '#1a1a2e' : '#9a9ab0',
              textAlign: 'center',
              lineHeight: 1.3,
              transition: 'color 0.2s ease',
              wordBreak: 'break-word',
            }}>
              {tab.heading}
            </span>
          </button>
        ))}
      </div>

      {/* Content area */}
      <div style={{
        background: '#fff',
        padding: 32,
        borderLeft: '1px solid #f2f2f2',
      borderRight: '1px solid #f2f2f2',
      borderBottom: '1px solid #f2f2f2',
        borderTop: 'none' ,
        boxSizing: 'border-box',
        width: '100%',
      }}>
        {tabs[active].content}
      </div>
    </div>
  );
}
// ─── Image + text side-by-side layout ────────────────────────────────────────
// Grid-based: minHeight:0 on the image cell means the text column sets the row

function ImgText({
  image,
  side = "left",
  imageWidth = "40%",
  gap = 40,
  imgStyle,
  style,
  children,
}: {
  image: React.ReactNode;
  side?: "left" | "right";
  imageWidth?: string | number;
  gap?: number;
  imgStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [textLonger, setTextLonger] = useState(false);

  const check = useCallback(() => {
    const txt = txtRef.current;
    const img = imgContainerRef.current;
    if (!txt || !img) return;
    const txtH = txt.getBoundingClientRect().height;
    const imgH = img.getBoundingClientRect().height;
    if (txtH > 0 && imgH > 0) {
      setTextLonger(txtH > imgH);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(check, 100);
    return () => clearTimeout(t);
  }, [check, children]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => check());
    ro.observe(container);
    return () => ro.disconnect();
  }, [check]);

  const w = typeof imageWidth === "number" ? `${imageWidth}px` : imageWidth;

  return (
    <div ref={containerRef} style={{ ...style }}>
      {textLonger ? (
        // Float layout — text wraps below image
        <>
          <div
            ref={imgContainerRef}
            style={{
              float: side === "left" ? "left" : "right",
              width: w,
              marginRight: side === "left" ? gap : 0,
              marginLeft: side === "right" ? gap : 0,
              overflow: "hidden",
              ...imgStyle,
            }}
          >
            {image}
          </div>
          <div ref={txtRef}>
            {children}
          </div>
          <div style={{ clear: "both" }} />
        </>
      ) : (
        // Grid layout — text centered vertically
        <div style={{
          display: "grid",
          gridTemplateColumns: side === "left" ? `${w} 1fr` : `1fr ${w}`,
          gap,
          alignItems: "center",
        }}>
          <div
            ref={imgContainerRef}
            style={{
              gridColumn: side === "left" ? 1 : 2,
              gridRow: 1,
              overflow: "hidden",
              ...imgStyle,
            }}
          >
            {image}
          </div>
          <div
            ref={txtRef}
            style={{
              gridColumn: side === "left" ? 2 : 1,
              gridRow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Shared text primitives ───────────────────────────────────────────────────
function P({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontSize: "clamp(14px, 2.5vw, 16px)",
        color: "#1a1a2e",
        lineHeight: "24px",
        margin: "0",
        letterSpacing: "-0.5px",
        textWrap: "pretty" as React.CSSProperties["textWrap"],
        ...style,
      }}
    >{children}</p>
  );
}

function UserQuote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#f7f7f7",
        borderLeft: "4px solid #b8722a",
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* Quote mark decoration — on its own line above the text */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ display: "block", flexShrink: 0 }}
      >
        <svg
          x="1"
          y="2"
          width="8"
          height="19"
          viewBox="0 0 9 20"
        >
          <path
            d="M0.5 9.5H8.5V19.5H0.5V9.5ZM0.5 9.5C0.5 4.79 2.25 1.84 5.5 0.5"
            stroke="#B8722A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        <svg
          x="15"
          y="2"
          width="8"
          height="19"
          viewBox="0 0 9 20"
        >
          <path
            d="M0.5 9.5H8.5V19.5H0.5V9.5ZM0.5 9.5C0.5 4.79 2.25 1.84 5.5 0.5"
            stroke="#B8722A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </svg>
      <p
        style={{
          fontSize: "clamp(14px, 2.5vw, 16px)",
          fontWeight: 600,
          color: "#b8722a",
          lineHeight: "26px",
          letterSpacing: "-0.22px",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

// ─── Before/After Viewer ──────────────────────────────────────────────────────
// Custom React scrollbar per pane — positioned inside each pane's VISIBLE area,
// so both Before and After show their scrollbars on hover correctly.
const BA_CSS = `
  .ba-inner { overflow-y: hidden; overflow-x: hidden; }
  .carousel-center { overflow-y: auto; overflow-x: hidden; scrollbar-width: none; }
  .carousel-center::-webkit-scrollbar { display: none; }
`;
let BA_CSS_INJECTED = false;

function useScrollThumb(ref: React.RefObject<HTMLDivElement>) {
  const [thumb, setThumb] = useState({
    top: 0,
    h: 0,
    visible: false,
  });
  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight + 2) {
      setThumb((t) => ({ ...t, visible: false }));
      return;
    }
    const ratio = clientHeight / scrollHeight;
    const h = Math.max(ratio * clientHeight, 24);
    const maxTop = clientHeight - h;
    setThumb({
      top: (scrollTop / (scrollHeight - clientHeight)) * maxTop,
      h,
      visible: true,
    });
  }, [ref]);
  return { thumb, update };
}

function PaneScrollbar({ top, h }: { top: number; h: number }) {
  return (
    <div
      style={{
        position: "absolute",
        right: 4,
        top: 0,
        bottom: 0,
        width: 4,
        zIndex: 15,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top,
          height: h,
          width: 4,
          background: "rgba(0,0,0,0.42)",
          borderRadius: 2,
          boxShadow: "0 0 0 1px rgba(255,255,255,0.35)",
        }}
      />
    </div>
  );
}


function BeforeAfterViewer({
  beforeSrc,
  afterSrc,
  caption,
  height = 460,
}: {
  beforeSrc: string;
  afterSrc: string;
  caption?: string;
  height?: number;
}) {
  const [split, setSplit] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  // ── Per-image loading state ──────────────────────────────────────
  const [beforeReady, setBeforeReady] = useState(false);
  const [afterReady, setAfterReady] = useState(false);

  useEffect(() => {
    setBeforeReady(false);
    const img = new Image();
    img.onload = () => setBeforeReady(true);
    img.onerror = () => setBeforeReady(true);
    img.src = beforeSrc;
    if (img.complete) setBeforeReady(true);
    return () => { img.onload = null; img.onerror = null; };
  }, [beforeSrc]);

  useEffect(() => {
    setAfterReady(false);
    const img = new Image();
    img.onload = () => setAfterReady(true);
    img.onerror = () => setAfterReady(true);
    img.src = afterSrc;
    if (img.complete) setAfterReady(true);
    return () => { img.onload = null; img.onerror = null; };
  }, [afterSrc]);
  // ────────────────────────────────────────────────────────────────

  const containerRef = useRef<HTMLDivElement>(null);
  const leftInnerRef = useRef<HTMLDivElement>(null);
  const rightInnerRef = useRef<HTMLDivElement>(null);
  const { thumb: leftThumb, update: updateLeft } = useScrollThumb(leftInnerRef);
  const { thumb: rightThumb, update: updateRight } = useScrollThumb(rightInnerRef);
  const leftOuterRef = useRef<HTMLDivElement>(null);
  const rightOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (BA_CSS_INJECTED) return;
    const el = document.createElement("style");
    el.textContent = BA_CSS;
    document.head.appendChild(el);
    BA_CSS_INJECTED = true;
  }, []);

  useEffect(() => {
    const imgs = [leftInnerRef, rightInnerRef].flatMap((r) =>
      r.current ? [...r.current.querySelectorAll<HTMLImageElement>("img")] : []
    );
    imgs.forEach((img) => {
      img.addEventListener("load", updateLeft);
      img.addEventListener("load", updateRight);
    });
    updateLeft();
    updateRight();
    return () =>
      imgs.forEach((img) => {
        img.removeEventListener("load", updateLeft);
        img.removeEventListener("load", updateRight);
      });
  }, [updateLeft, updateRight]);

  useEffect(() => {
    const makeHandler =
      (innerRef: React.RefObject<HTMLDivElement>, update: () => void) =>
      (e: WheelEvent) => {
        e.preventDefault();
        const el = innerRef.current;
        if (!el) return;
        const max = el.scrollHeight - el.clientHeight;
        if (max <= 0) return;
        el.scrollTop = Math.max(0, Math.min(max, el.scrollTop + e.deltaY));
        update();
      };
    const lh = makeHandler(leftInnerRef, updateLeft);
    const rh = makeHandler(rightInnerRef, updateRight);
    const lo = leftOuterRef.current;
    const ro = rightOuterRef.current;
    lo?.addEventListener("wheel", lh, { passive: false });
    ro?.addEventListener("wheel", rh, { passive: false });
    updateLeft();
    updateRight();
    return () => {
      lo?.removeEventListener("wheel", lh);
      ro?.removeEventListener("wheel", rh);
    };
  }, [updateLeft, updateRight]);

  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSplit(
        Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 5), 95)
      );
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSplit(
      Math.min(
        Math.max(((e.touches[0].clientX - rect.left) / rect.width) * 100, 5),
        95
      )
    );
  };

  // Shared shimmer style
  const shimmer = (
    <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
      backgroundSize: "200% 100%",
      animation: "ba-shimmer 1.4s infinite",
      zIndex: 2,
    }}>
      <style>{`
        @keyframes ba-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div
        ref={containerRef}
        onTouchMove={handleTouchMove}
        style={{
          position: "relative",
          height,
          border: "1px solid #cfcfcf",
          cursor: isDragging ? "col-resize" : "default",
          userSelect: "none",
          touchAction: "none",
          overflow: "hidden",
        }}
      >
        {/* Before pane */}
        <div
          ref={leftOuterRef}
          style={{
            position: "absolute",
            left: 0, top: 0, bottom: 0,
            width: `${split}%`,
            overflow: "hidden",
          }}
          onMouseEnter={() => setLeftHover(true)}
          onMouseLeave={() => setLeftHover(false)}
        >
          {/* Shimmer only for before pane */}
          {!beforeReady && shimmer}

          <div ref={leftInnerRef} className="ba-inner" style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "100%",
          }}>
            <img
              src={beforeSrc}
              alt="Before"
              style={{
                width: "100%",
                display: "block",
                pointerEvents: "none",
                // fade in when ready
                opacity: beforeReady ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}
            />
          </div>
          {leftThumb.visible && <PaneScrollbar top={leftThumb.top} h={leftThumb.h} />}
        </div>

        {/* After pane */}
        <div
          ref={rightOuterRef}
          style={{
            position: "absolute",
            right: 0, top: 0, bottom: 0,
            width: `${100 - split}%`,
            overflow: "hidden",
          }}
          onMouseEnter={() => setRightHover(true)}
          onMouseLeave={() => setRightHover(false)}
        >
          {/* Shimmer only for after pane */}
          {!afterReady && shimmer}

          <div ref={rightInnerRef} className="ba-inner" style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "100%",
          }}>
            <img
              src={afterSrc}
              alt="After"
              style={{
                width: "100%",
                display: "block",
                pointerEvents: "none",
                // fade in when ready
                opacity: afterReady ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}
            />
          </div>
          {rightThumb.visible && <PaneScrollbar top={rightThumb.top} h={rightThumb.h} />}
        </div>

        {/* Divider */}
        <div
          onMouseDown={handleDividerMouseDown}
          style={{
            position: "absolute", top: 0, bottom: 0,
            left: `calc(${split}% - 1.5px)`,
            width: 3, background: "#f7f7f7",
            cursor: "col-resize", zIndex: 10,
          }}
        />

        {/* Drag handle */}
        <div
          onMouseDown={handleDividerMouseDown}
          style={{
            position: "absolute", top: "50%", left: `${split}%`,
            transform: "translate(-50%, -50%)",
            width: 48, height: 48, background: "white",
            borderRadius: "50%", display: "flex",
            alignItems: "center", justifyContent: "center",
            cursor: "col-resize", zIndex: 20,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path d="M0 6H24" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17 1L23 6L17 11" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 1L1 6L7 11" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Labels */}
        <div style={{
          position: "absolute", top: 17, left: 18, zIndex: 12,
          background: "rgba(46,46,46,0.5)", fontSize: 14,
          color: "#ffffff", letterSpacing: "-1px",
          lineHeight: "23px", padding: "0 8px", pointerEvents: "none",
        }}>
          Before
        </div>
        <div style={{
          position: "absolute", top: 17, right: 18, zIndex: 12,
          background: "rgba(46,46,46,0.5)", fontSize: 14,
          color: "#ffffff", letterSpacing: "-1px",
          lineHeight: "23px", padding: "0 8px", pointerEvents: "none",
        }}>
          After
        </div>
      </div>

      {caption && (
        <p style={{
          fontSize: 14, color: "#1a1a2e", textAlign: "center",
          margin: 0, lineHeight: "24px", letterSpacing: "-1px",
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}

// ─── Community Gallery (Key design solutions carousel) ────────────────────────
const communitySlides = [
  {
    number: 1,
    title: "Increased content visibility",
    beforeDesc:
      "Olden style website with chaotic navigation. Forums spread across multiple navigation items. Knowledge base articles hidden under 'general' and home page showing only forum discussions. Users were unable to know that other content types exist or locate what they're looking for.",
    afterDesc:
      "Modern, crisp look with restructured navigation where all the discussions are under 'forums'. Other content types like blogs, KBAs, trainings have equal visibility in a feed-like structure, are added to 'resources' navigation item and also directly accessible via the browse section",
    beforeSrc: imgCommBefore,
    afterSrc: imgCommAfter,
    caption: "Home page before and after redesign",
  },
  {
    number: 2,
    title: "Improved discussion clarity",
    beforeDesc:
      "Topic pages showed the accepted solution disconnected from the conversation context. Users had to scroll through the entire thread to find the solution repeated in the context. Related products and applications section offered limited value for content discovery.",
    afterDesc:
      "Redesigned topic page introduces toggles letting users switch between viewing only the accepted solution or the full conversation context — giving them control over how they consume content. Related products section is replaced by related content, surfacing other content types to boost engagement.",
    beforeSrc: imgCommTopicBefore,
    afterSrc: imgCommTopicAfter,
    caption: "Topic page before and after redesign",
  },
  {
    number: 3,
    title: "Gamified user engagement",
    beforeDesc:
      "User profiles displayed badges for logins, likes and basic activity metrics — recognition mechanisms that users explicitly said held no value for them. There was no visibility into how users ranked within the community or any meaningful incentive to contribute more.",
    afterDesc:
      "Introduced a top contributor leaderboard where top 3 contributors each month win free developer kits — creating a tangible, meaningful incentive that directly motivated users to answer more and engage deeper and giving contributors a sense of status and progress within the community.",
    beforeSrc: imgCommProfileBefore,
    afterSrc: imgCommProfileAfter,
    caption: "Profile page before and after redesign",
  },
  {
    number: 4,
    title: "Smarter search experience",
    beforeDesc:
      "Search returned a basic list of links with no filtering, sorting or contextual information. Users had no way to quickly assess the relevance of results, distinguish between content types or refine their search — making it difficult to self-serve and find what they wanted.",
    afterDesc:
      "Redesigned search experience surfaces results in a comprehensive feed format with keyword highlighting, reply previews, AI-generated search summaries for quick answers, product recommendations based on search intent, and full filtering and sorting options — enabling users to find what they need independently.",
    beforeSrc: imgCommSearchBefore,
    afterSrc: imgCommSearchAfter,
    caption: "Search results page before and after redesign",
  },
];

function CommunityGallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = communitySlides[activeSlide];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Slide title */}
      <ol
        style={{
          margin: 0,
          padding: 0,
          listStyle: "decimal",
          paddingLeft: 33,
        }}
        start={slide.number}
      >
        <li
          style={{
            fontWeight: 600,
            fontSize: "clamp(17px, 2.5vw, 19px)",
            color: "#1d1d1d",
            letterSpacing: "-0.22px",
            lineHeight: "30px",
          }}
        >
          {slide.title}
        </li>
      </ol>

      {/* Before/After description cards */}
      <div style={{ display: "flex", gap: 8 }}>
        <div
          style={{
            flex: 1,
            border: "1px solid #cfcfcf",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: "#1d1d1d",
              lineHeight: "26px",
              letterSpacing: "-0.18px",
              margin: 0,
            }}
          >
            Before
          </p>
          <p
            style={{
              fontSize: 14,
              color: "#1d1d1d",
              lineHeight: "24px",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            {slide.beforeDesc}
          </p>
        </div>
        <div
          style={{
            flex: 1,
            border: "1px solid #cfcfcf",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: "#1d1d1d",
              lineHeight: "26px",
              letterSpacing: "-0.18px",
              margin: 0,
            }}
          >
            After
          </p>
          <p
            style={{
              fontSize: 14,
              color: "#1d1d1d",
              lineHeight: "24px",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            {slide.afterDesc}
          </p>
        </div>
      </div>

      {/* Before/After viewer */}
      <BeforeAfterViewer
        beforeSrc={slide.beforeSrc}
        afterSrc={slide.afterSrc}
        caption={slide.caption}
        height={500}
      />

      {/* Thumbnail navigation + arrows */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          position: "relative",
        }}
      >
        {/* Left arrow */}
        <button
          onClick={() =>
            setActiveSlide((i) => Math.max(i - 1, 0))
          }
          disabled={activeSlide === 0}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #1d1d1d",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: activeSlide === 0 ? "default" : "pointer",
            opacity: activeSlide === 0 ? 0.3 : 1,
            flexShrink: 0,
          }}
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20.2071 15.4142"
            fill="none"
          >
            <path
              d="M19.5 7.707H0.5M7.207 0.5L0.5 7.707L7.207 14.914"
              stroke="#1D1D1D"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </button>

        {/* Thumbnails */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {communitySlides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              style={{
                height: 84,
                flex: 1,
                background:
                  i === activeSlide
                    ? "#e8e2d9"
                    : "rgba(167,167,167,0.25)",
                border:
                  i === activeSlide
                    ? "3px solid #b8722a"
                    : "1px solid #cfcfcf",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 8,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: i === activeSlide ? "#7f4d18" : "#888",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {s.number}. {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() =>
            setActiveSlide((i) =>
              Math.min(i + 1, communitySlides.length - 1),
            )
          }
          disabled={activeSlide === communitySlides.length - 1}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #1d1d1d",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor:
              activeSlide === communitySlides.length - 1
                ? "default"
                : "pointer",
            opacity:
              activeSlide === communitySlides.length - 1
                ? 0.3
                : 1,
            flexShrink: 0,
          }}
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20.2071 15.4142"
            fill="none"
            style={{ transform: "scaleX(-1)" }}
          >
            <path
              d="M19.5 7.707H0.5M7.207 0.5L0.5 7.707L7.207 14.914"
              stroke="#1D1D1D"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Ecosystem Map (layered image collage) ─────────────────────────────────────

// ─── Journey Stages (funnel/chevron stages) ────────────────────────────────────

// ─── Case Management Carousel ─────────────────────────────────────────────────
// To add/change cards: edit the `carouselCards` array below.
// Each entry has { src: imageImort, alt: string }.
// To add more cards, import new figma:asset images at the top and add them here.
const carouselCards = [
  {
    src: img1,
    alt: "Automated Tech Support Dashboard",
    fit: "scroll",
  },
  { src: img2, alt: "Datasheet Assistant", fit: "scroll" },
  {
    src: img5,
    alt: "AR Component discovery app",
    fit: "contain",
  },
  {
    src: img7,
    alt: "Digital assistant (chatbot)",
    fit: "contain",
  },
  { src: img8, alt: "Thermostat washer app", fit: "contain" },
  { src: img9, alt: "Developer journey guide", fit: "scroll" },
  { src: img4, alt: "WeChat mini program", fit: "contain" },
];

const NavArrow = ({
  onClick,
  disabled,
  flip,
}: {
  onClick: () => void;
  disabled: boolean;
  flip?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "1px solid #1d1d1d",
      background: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.3 : 1,
      flexShrink: 0,
    }}
  >
    <svg
      width="20"
      height="14"
      viewBox="0 0 20.2071 15.4142"
      fill="none"
      style={flip ? { transform: "scaleX(-1)" } : {}}
    >
      <path
        d="M19.5 7.707H0.5M7.207 0.5L0.5 7.707L7.207 14.914"
        stroke="#1D1D1D"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  </button>
);

// Track scroll position explicitly per card POSITION — never read el.scrollTop back,
// since overflow:hidden elements may not reflect it reliably in all browsers.
function useCardScroll(
  ref: React.RefObject<HTMLDivElement>,
  cardHeight: number,
) {
  const [y, setY] = useState(0);

  const scroll = useCallback(
    (deltaY: number) => {
      const el = ref.current;
      if (!el) return;
      const max = el.scrollHeight - cardHeight;
      if (max <= 0) return;
      const newY = Math.max(0, Math.min(max, y + deltaY));
      el.scrollTop = newY;
      setY(newY);
    },
    [ref, cardHeight, y],
  );

  const reset = useCallback(() => {
    if (ref.current) ref.current.scrollTop = 0;
    setY(0);
  }, [ref]);

  const getThumb = () => {
    const el = ref.current;
    if (!el) return { visible: false, top: 0, h: 0 };
    const sh = el.scrollHeight;
    if (sh <= cardHeight + 2)
      return { visible: false, top: 0, h: 0 };
    const ratio = cardHeight / sh;
    const h = Math.max(ratio * cardHeight, 24);
    if (h >= cardHeight)
      return { visible: false, top: 0, h: 0 };
    const maxTop = cardHeight - h;
    if (maxTop <= 0) return { visible: false, top: 0, h: 0 };
    const top = (y / (sh - cardHeight)) * maxTop;
    return { visible: true, top, h };
  };

  return { scroll, reset, thumb: getThumb() };
}


// ─── Components Gallery ───────────────────────────────────────────────────────


// ─── Checklist item ───────────────────────────────────────────────────────────
function CheckItem({ children }: { children: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: 24,
          height: 24,
          flexShrink: 0,
          position: "relative",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ position: "absolute", inset: 0 }}
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            stroke="#1D1D1D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 12L10 15L17 8"
            stroke="#1D1D1D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p
        style={{
          fontSize: 16,
          color: "#1d1d1d",
          lineHeight: "20px",
          letterSpacing: "-0.5px",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

// ─── Key priority item ────────────────────────────────────────────────────────
function PriorityItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontWeight: 600,
            fontSize: "clamp(17px, 2.5vw, 19px)",
            color: "#1d1d1d",
            lineHeight: 1.8,
            letterSpacing: "-1px",
            margin: "0 0 4px",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 15px)",
            color: "#575352",
            lineHeight: 1.6,
            letterSpacing: "-1px",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function MetaLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      style={{
        fontWeight: 700,
        fontSize: 10,
        color: "#8d8786",
        letterSpacing: "1.6px",
        textTransform: "uppercase",
        lineHeight: "15px",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

export function InfineonHero() {
  return (
    <header style={{ paddingTop: 60 }}>
      <style>{`
        @media (max-width: 800px) {
          .story-hero-title { font-size: 20px !important; }
        }
      `}</style>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
          padding: "64px clamp(24px, 16.5vw, 200px) 0",
        }}
      >
        {/* Heading */}
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
            Inside a Digital Transformation
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "clamp(14px, 2.5vw, 16px)",
              margin: 0,
            }}
          >
            The story behind how I led the UX direction of 15+
            projects in an evolving enterprise ecosystem,
            aligning fragmented platforms across operational workflows into
            connected journeys and integrating AI experiences.
          </p>
        </div>

        {/* Metadata section — gray bar */}
        <div className="story-desktop-content" style={{ background: "#f7f7f7", padding: 16 }}>
          <div
            style={{ display: "flex", alignItems: "stretch" }}
          >
            {/* Col 1: Company + Timeline (stacked, no left border) */}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
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
                  Infineon Technologies AG
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
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
                  2023-Present
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
                UX strategy &amp; design ownership
                <br />
                 User journey optimization
                <br />
                AI experience direction
                <br />
                Design system expansion
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
                2 UX researchers
                <br />
                Global product management team
                <br />
                External development team
                <br />
                Design system team
              </p>
            </div>

            {/* Col 4: Project Types */}
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
                Customer web experiences,{"\n"}Generative AI systems, AI chatbots,
                Sales &amp; Support platforms, Internal tools,
                Engineering software
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            height: "clamp(240px, 29.8vw, 447px)",
            boxShadow: "0px 12px 40px 0px rgba(26,26,46,0.1)",
            border: "1.156px solid rgba(26,26,46,0.06)",
          }}
        >
          <img
            src={imgHero}
            alt="Inside a Digital Transformation"
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


// ─── Main story content ───────────────────────────────────────────────────────
export function InfineonTransformationStory() {
  
  return (
    <>
      {/* ── SECTION 01: The beginning of change ────────────────────────────── */}
      <StorySection
        eyebrow="The beginning of change"
        headline="Fragmented platforms. Legacy interfaces. Lack of design maturity."
        
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <P>
            When I joined Infineon, the company had just begun
            investing in the digital space. There was already a
            corporate website, community website, several
            engineering softwares for end users and multiple
            internal tools for sales and support — but none of
            them looked like each other. None were easy to work
            with. A hardware giant — one of the leading
            semiconductor manufacturers — was just beginning to
            see the need for a digital transformation, at a time
            when competitors were already excelling in that
            area.
          </P>
          <P>
            External agencies were hired to design and develop
            the corporate website, the digital product team was
            forming internally and people were confident that
            with a better new website, we will become the number
            one digital experience.
          </P>
          <P>
            For the first two months of joining the company, I
            worked with the UX team and the external design
            agency to define the design direction, the
            components needed for the website and created some
            of the most important pages.
          </P>
        </div>

        <div style={{ marginTop: 24 }}>
          <BeforeAfterViewer
            beforeSrc={imgBefore}
            afterSrc={imgAfter}
            caption="Product category page enhanced with a progressive, guided product selector for users to find the right products, along with a cleaner and more intuitive page."
            height={550}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 24,
          }}
        >
          <P>
            But when the first rounds of user interviews were
            conducted with users of Infineon website, a larger
            issue surfaced.
          </P>
          <P>Users repeatedly mentioned,</P>
        </div>

        <div style={{ marginTop: 16 }}>
          <UserQuote>
            It's very difficult to find the answer when I have a
            technical question. Answers are very delayed and
            most of the times incorrect.
          </UserQuote>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 24,
          }}
        >
          <P>
            This issue wasn't related to the website alone. It
            pointed toward the broader support and community
            ecosystem — which at the time was not included
            within the redesign scope. That moment became a
            turning point.
          </P>
          <P>
            I transitioned into leading the Community redesign
            initiative and that's where my journey evolved into
            strategizing and optimizing the user journey across
            the ecosystem.
          </P>
        </div>
      </StorySection>

      {/* ── SECTION 02: Community redesign ─────────────────────────────────── */}
      <StorySection
        eyebrow="Community end-to-end redesign"
        headline="The redesign that laid the foundation for user journey optimization"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <P>
            At first, the challenges of Community looked
            relatively straightforward. The platform was
            outdated. Navigation lacked structure. Interactions
            no longer aligned with the evolving main website's
            direction. Basic usability standards had not yet
            been established and the experience varied
            significantly across flows.
          </P>
          <P>
            To get onboard with the Community team, establish
            the redesign scope and understand the long-term
            product vision, I travelled to Munich in May 2023 to
            conduct a stakeholder workshop. The session brought
            together product owners, business stakeholders,
            engineers and platform teams to evaluate the current
            experience.
          </P>
        </div>

        {/* Workshop photo */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ width: "100%", overflow: "hidden" }}>
            <img
              src={imgWorkshop}
              alt="Munich stakeholder workshop"
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <P>
            This workshop uncovered strategic priorities for the
            future direction of the Community platform.
          </P>
        </div>

        {/* Key priorities */}
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: "22px",
              color: "#1a1a2e",
              lineHeight: "28px",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Key Priorities
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <PriorityItem
              icon={<IconPriority1 />}
              title="Content discoverability"
              description="Ensuring all types of community content — including blogs, KBAs and projects — get equal visibility as forum discussions."
            />
            <PriorityItem
              icon={<IconPriority2 />}
              title="Community engagement"
              description="Encouraging participation beyond troubleshooting and promoting knowledge sharing and active collaboration of developers."
            />
            <PriorityItem
              icon={<IconPriority3 />}
              title="Self-service acceleration"
              description="Reducing dependency on hotline numbers and support channels while enhancing self-service support experience."
            />
          </div>
        </div>

        {/* User research + text */}

        <ImgText
  image={
    <img
      src={imgResearch}
      alt="User research session"
      style={{ width: "100%", display: "block" }}
    />
  }
  side="right"
  gap={40}
  imageWidth="40%"
  style={{ marginTop: 24 }}
>
                    <P style={{ fontWeight: 600 , fontSize: 20 }}>
    User research
  </P>
  <P style={{ marginTop: 16 }}>
    To better understand users' pain points, I conducted
            user research sessions alongside my colleague,
            speaking directly with 7 community users across
            different regions, technical backgrounds and community activity levels.
  </P>
 <P style={{ marginTop: 16 }}>
This image here showcases a user from Japan who is our topmost active user and contributor.
  </P>

          
</ImgText>

        

        {/* Two user quotes side by side */}
        <div
          style={{ display: "flex", gap: 40, marginTop: 24 }}
        >
          <div style={{ flex: 1 }}>
            <UserQuote>
              I don't even know that knowledge base articles
              exist. I will use that here afterwards.
            </UserQuote>
          </div>
          <div style={{ flex: 1 }}>
            <UserQuote>
              Badges don't motivate me to answer more. It's not
              like you're giving me money or free chips.
            </UserQuote>
          </div>
        </div>

        {/* Solution text + Key design solutions */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 48,
            marginTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <P>
              It was clear that the solution should intuitively
              make the navigation structure clearer, bring more
              visibility to content types and create intrinsic
              motivation for users to engage with community.
            </P>
            <P>
              I redesigned 80+ screens while collaborating with
              the newly formed design system team to create
              reusable components and patterns that can
              introduce digital scalability.
            </P>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: "22px",
                color: "#1a1a2e",
                lineHeight: "32px",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Key design solutions
            </p>
            <CommunityGallery />
          </div>
        </div>

        {/* Outcome stat */}
        <P style={{ marginTop: 24 }}>
          The redesign led to a{" "}
          <strong>67% increase in engagement</strong> and became
          one of the early examples of how a stronger UX
          foundation could influence how users interacted with
          the company. This encouraged other product teams to
          begin investing in digital experience modernization
          more seriously.
        </P>
      </StorySection>

      {/* ── SECTION 03: Ecosystem-wide UX Ownership ───────────────────────── */}
      <StorySection
        eyebrow="Digital ecosystem strategy"
        headline="Building cohesiveness across the customer lifecycle"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <P>
            As the Community redesign launched successfully, the
            scope of my work expanded beyond a single platform.
            Multiple digital initiatives were emerging
            simultaneously across support and sales
            enablement tools and engineering workflows, each
            solving different business problems but often
            operating independently.
          </P>
          <P>
            This shift introduced a broader UX challenge —
            designing not just for isolated products but for how
            users moved between them to ensure experiences
            remained connected, scalable and consistent across
            touchpoints.
          </P>
          <P>
            To better understand how disconnected initiatives
            contributed to the larger business journey, I
            created a high-level ecosystem journey map together with the branding and illustration team, 
            visualizing how users moved across the products.
          </P>
        </div>

        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ width: "100%", overflow: "hidden" }}>
            <img
              src={ecosystemMap}
              alt="Ecosystem map"
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <P>
            This helped visualize how each digital product contributed to the customer lifecycle and became a shared reference points for product teams to help prioritize UX initiatives.
          </P>
        </div>


        {/* Transition text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 24,
          }}
        >
          <P>
            Working across the above digital products in parallel, I
            focused on improving continuity between touchpoints.
            This included designing or redesigning individual
            applications, participating in research activities,
            contributing to reusable UX foundations,
            collaborating with cross-functional teams like ATV, CSS and PSS and their
            stakeholders to ensure standardization and UX
            adoption.
          </P>
          <P>
            This phase marked a significant evolution in my role
            — from redesigning standalone interfaces to
            influencing ecosystem level UX direction that made
            the company's digital landscape speak a unified
            language.
          </P>
        </div>

      <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: 24,
          }}
        >
        <ImgText
  image={
    <VideoPlayer
            src={wechatvid}
            style={{ width: "100%", display: "block", border: "1px solid #cfcfcf" }}
          />
  }
  side="left"
  gap={40}
   imageWidth="22%"
  style={{ marginTop: 24 }}
>
                    <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Discovery / Awareness
  </P>
  <P style={{ marginTop: 16 }}>
    Our research revealed that the discovery phase was rather straightforward for the global users and they become aware of Infineon offerings via Google search, social media or the website. However, for the Chinese market users, the lack of a mini program for Infineon on WeChat served as a major setback as users were looking at WeChat as the main source of discovery. To handle this, we created a WeChat mini program, which showed all the necessary information to get started with Infineon products, redirected to Infineon website for purchase and also linked to evaluation tools to guide the users to the consideration phase. I was responsible for the end-to-end UX of this mini program, from research to design to validation to development support.This mini program attracted <b>100K users within 2 months of launch </b> and increased  <b> website traffic by 23% </b>
  </P>

          <P style={{ fontWeight: 600 , fontSize: 16, marginTop: 16 }}>
    Key understandings
  </P>
 
    <ul  style={{ marginTop: 16 , listStyleType: "disc" }}>
  <li>Chinese users are expect to complete tasks without leaving the WeChat ecosystem - and redirection to website is expected only when absolutely necessary.</li>
  <li>Many Chinese users are exploring solutions for applications rather than specific chips unlike the engineers in rest of the world.</li>
  <li>Unlike traditional minimalism, Chinese users expect more content to be displayed on one screen with multiple entry points. </li>
</ul>

          
</ImgText>


        <ImgText
  image={
    <VideoPlayer
            src={videeval}
            style={{ width: "100%", display: "block", border: "1px solid #cfcfcf" }}
          />

  }
  side="right"
  gap={40}
  imageWidth="60%"
  style={{ marginTop: 24 }}
>
                    <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Consideration
  </P>
  <P style={{ marginTop: 16 }}>

    In the regular work setup, engineers required to procure and use evaluation kits while considering a product - making this stage time consuming and dependent on access to hardware. To make this stage more accessible, one of the products we introduced was a virtual evaluation experience that reduced the total time for evaluation setup from 2 weeks to <b> just 20 minutes or less. </b> This was presented as one of the <b> selected projects for Oktobertech </b> - Infineon’s global tech collaboration forum as a <b> user experience innovation. </b> 
  </P>
          
</ImgText>

        <ImgText
  image={
    <VideoPlayer
            src={leadvid}
            style={{ width: "100%", display: "block", border: "1px solid #cfcfcf" }}
          />

  }
  side="left"
  gap={40}
  imageWidth="60%"
  style={{ marginTop: 24 }}
>
                    <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Decision / Purchase
  </P>
  <P style={{ marginTop: 16 }}>
    As customers moved forward from evaluation phase, internal sales teams needed a platform to identify and prioritize high intent opportunities. The lead management portal brought lead details and activity, product details and notes taking into one system, making it easier for sales colleagues. Sales teams reported a <b>reduction in MQL to SAL conversion time by 28% </b> compared to scattered platforms.
  </P>
          
</ImgText>

        <ImgText
  image={
    <VideoPlayer
            src={pinnvid}
            style={{ width: "100%", display: "block", border: "1px solid #cfcfcf" }}
          />

  }
  side="right"
  gap={40}
  imageWidth="60%"
  style={{ marginTop: 24 }}
>
                    <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Usage
  </P>
  <P style={{ marginTop: 16 }}>
    Post purchase, users regularly transitioned into complex engineering software to configure, design and build their applications.  To create a more connected end-to-end developer
            journey, I expanded my scope and collaborated directly
            with the product divisions namely Automotive
            (ATV), Power &amp; Sensor Systems (PSS), Connected
            Secure Systems (CSS) to build a <b> unified configuration tool </b>, which <b> won the SMART* project contest 2025 </b>. We also further collaborated to modernize existing software, improve
            usability standards and establish stronger
            continuity between webapps and
            engineering applications.
     </P>
          
</ImgText>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 24
          }}
        >
          <P>
    To handle the growing volume of engineering software
            requiring redesign while maintaining consistency
            across experiences, I partnered with the design
            system team to create scalable UX foundations for
            technical applications. I designed software-specific
            components and interaction patterns for complex
            engineering workflows,<b> hired and coordinated 2
            external contract designers </b>  to support parallel
            redesign initiatives, and became the <b> central UX
            point of contact across software divisions </b>. This
            also led to extending the design system with a
            dedicated annexure for engineering software
            components tailored to simulation tools, complex
            technical interfaces and enterprise-scale
            applications.
  </P>
        </div>

        <ImgText
  image={
    <VideoPlayer
            src={ats}
            style={{ width: "100%", display: "block", border: "1px solid #cfcfcf" }}
          />

  }
  side="left"
  gap={40}
  imageWidth="60%"
  style={{ marginTop: 24 }}
>
                    <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Support
  </P>
  <P style={{ marginTop: 16 }}>
    To ensure users had a seamless support experience, I worked on both internal tools and customer facing tools. The internal community insights tool aggregated queries from various platforms and served as the single source of truth for CAEs, who <b>validated the experience as highly effective</b> during our research sessions.
     </P>
          
</ImgText>

         <ImgText
  image={
    <VideoPlayer
            src={ifxapp}
            style={{ width: "100%", display: "block", border: "1px solid #cfcfcf" }}
          />

  }
  side="right"
  gap={40}
  imageWidth="20%"
  style={{ marginTop: 24 }}
>
                    <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Retention
  </P>
  <P style={{ marginTop: 16 }}>
    To enhance user engagement and retention, I conducted research with engineers and developers from our key customer companies to understand the gap in Infineon's offerings. I also conducted thorough secondary research, reading articles that prove user behavior</P>

            <P style={{ fontWeight: 600 , fontSize: 16, marginTop: 16 }}>
    Key findings
  </P>
 
    <ul  style={{ marginTop: 16 , listStyleType: "disc" }}>
  <li> Engineers expect on-the-go access to datasheets, pin configurations and other important product information.</li>
  <li> Identifying components is a recurring pain point when working with multiple products. </li>
  <li>Users find it hard to keep track of events, webinars and updates</li>
      <li>BCG research 2025 confirms that 80% of B2B users use mobile at work.</li>
      <li>2024 study by Deloitte records that mobile optimized workspaces reduce context switching to desktop by 73%</li>
      <li>Research by McKinsey shows that 85% of customers are willing to sign up for an app compared to a website.</li>

    </ul>
           <P style={{ marginTop: 16 }}>
            This research revealed tha gap: "Infineon.com was not optimized for quick, lab-on-the-go workflows". To bridge this gap, I proposed the solution of a mobile companion app as a logical extension, which includes features like AR scanner to identify chips and access information quickly, contextual action suggestion based on sync from web, datasheets on the go with summarization, upcoming news, events and notifications, daily learnings and challenges with redeemable points. This proposal was <b> recognized by the office of the CDSO in 2025, winning a SPIRIT award. </b>
           </P>

          
</ImgText>
      </div>
        
      </StorySection>

      {/* ── SECTION 04: Cross-functional partnership ───────────────────────── */}
      <StorySection
        eyebrow="AI experience direction"
        headline="Integrating intelligence into the user workflow"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: 16
          }}
        >
          <P>
            As generative AI capabilities matured, the next step wasn't just about improving existing experiences - it was about embedding smartness into the journey, into products our customers and colleagues were already using every day.
          </P>
          <P>
           After the reach and recognition of my Infineon app proposal, I was made responsible for the direction of AI experiences. Instead of introducing AI as a separate destination, I, together with the product owners and product managers, explored where intelligent assistance could remove friction from the ecosystem. 
            Across documentation, technical support, search, product discovery and sales enablement, I designed AI powered experiences that helped users find information faster, summarize complex technical content, automate repetitive tasks and receive contextual assistance without interrupting their workflows. 
          </P>
        </div>


        <TabbedShowcase
  tabs={[
    {
      icon: <svg
  clipRule="evenodd"
  fillRule="evenodd"
  strokeLinejoin="round"
  strokeMiterlimit="2"
  viewBox="0 0 96 96"
              width="32"
  height="32"
  xmlns="http://www.w3.org/2000/svg"
>
  <g transform="translate(-2952 -152)">
    <path d="m3001 158h-39c-1.59 0-3.12.632-4.24 1.757-1.13 1.126-1.76 2.652-1.76 4.243v78c0 3.314 2.69 6 6 6h60c3.31 0 6-2.686 6-6 0-10.131 0-36 0-36 0-1.104-.9-2-2-2s-2 .896-2 2v36c0 1.105-.89 2-2 2h-60c-1.11 0-2-.895-2-2 0-14.412 0-63.588 0-78 0-.53.21-1.039.59-1.414.37-.375.88-.586 1.41-.586h39c1.1 0 2-.896 2-2s-.9-2-2-2zm-29.5 68h41c1.1 0 2-.896 2-2s-.9-2-2-2h-41c-1.1 0-2 .896-2 2s.9 2 2 2zm0-11h41c1.1 0 2-.896 2-2s-.9-2-2-2h-41c-1.1 0-2 .896-2 2s.9 2 2 2zm18.5-34h-18c-1.1 0-2 .896-2 2s.9 2 2 2h7v20c0 1.104.9 2 2 2s2-.896 2-2v-20h7c1.1 0 2-.896 2-2s-.9-2-2-2zm2.5 24h20c1.1 0 2-.896 2-2s-.9-2-2-2h-20c-1.1 0-2 .896-2 2s.9 2 2 2zm41.34-25.694c-.29-.785-1.04-1.306-1.87-1.306-.84 0-1.59.521-1.88 1.306l-2.38 6.437s-6.44 2.381-6.44 2.381c-.78.291-1.3 1.039-1.3 1.876s.52 1.585 1.3 1.876l6.44 2.381s2.38 6.437 2.38 6.437c.29.785 1.04 1.306 1.88 1.306.83 0 1.58-.521 1.87-1.306l2.38-6.437s6.44-2.381 6.44-2.381c.79-.291 1.31-1.039 1.31-1.876s-.52-1.585-1.31-1.876l-6.44-2.381s-2.38-6.437-2.38-6.437zm-35.84 15.694h8c1.1 0 2-.896 2-2s-.9-2-2-2h-8c-1.1 0-2 .896-2 2s.9 2 2 2zm33.97-9.237.82 2.23c.2.548.64.979 1.18 1.182l2.23.825s-2.23.825-2.23.825c-.54.203-.98.634-1.18 1.182l-.82 2.23s-.83-2.23-.83-2.23c-.2-.548-.63-.979-1.18-1.182l-2.23-.825s2.23-.825 2.23-.825c.55-.203.98-.634 1.18-1.182zm-16.09-32.457c-.29-.785-1.04-1.306-1.88-1.306s-1.59.521-1.88 1.306l-4.81 13.006s-13 4.812-13 4.812c-.79.291-1.31 1.039-1.31 1.876s.52 1.585 1.31 1.876l13 4.812s4.81 13.006 4.81 13.006c.29.785 1.04 1.306 1.88 1.306s1.59-.521 1.88-1.306l4.81-13.006s13-4.812 13-4.812c.79-.291 1.31-1.039 1.31-1.876s-.52-1.585-1.31-1.876l-13-4.812s-4.81-13.006-4.81-13.006zm-1.88 6.457 3.26 8.799c.2.548.63.979 1.18 1.182l8.8 3.256s-8.8 3.256-8.8 3.256c-.55.203-.98.634-1.18 1.182l-3.26 8.799s-3.26-8.799-3.26-8.799c-.2-.548-.63-.979-1.18-1.182l-8.8-3.256s8.8-3.256 8.8-3.256c.55-.203.98-.634 1.18-1.182zm-16 25.237h4c1.1 0 2-.896 2-2s-.9-2-2-2h-4c-1.1 0-2 .896-2 2s.9 2 2 2zm32-26h-2c-1.1 0-2 .896-2 2s.9 2 2 2h2v2c0 1.104.9 2 2 2s2-.896 2-2v-2h2c1.1 0 2-.896 2-2s-.9-2-2-2h-2v-2c0-1.104-.9-2-2-2s-2 .896-2 2z" />
  </g>
</svg>,
      heading: "Content intelligence",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <P style={{ fontWeight: 600 , fontSize: 20}}>
    Making complex technical information easier to understand
  </P>
        <P>
    Datasheets contain a huge amount of detailed information but research suggested that engineers need quick access to a small portion of it for the task at hand. To handle this, we enhanced each datasheet preview page with a datasheet assistant which allows users to interact with AI to have faster access to relevant technical information with less manual effort or select portions of the text to help rewrite or understand.
  </P>  

          <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ width: "100%", overflow: "hidden" }}>
            <TabImage
  src={ai1}
  alt="Datasheet assistant"
  style={{ border: "1px solid #cfcfcf" }}
/>
          </div>
        </div>
        </div>
      ),
    },
    {
      icon: <svg
  enableBackground="new 0 0 512 512"
  height="32"
  viewBox="0 0 512 512"
  width="32"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <path d="m123.236 113.833c-1.499-3.834-5.195-6.358-9.312-6.359-.001 0-.001 0-.002 0-4.116 0-7.813 2.522-9.313 6.356l-29.527 75.456c-2.013 5.143.525 10.944 5.668 12.957 1.197.468 2.43.69 3.642.69 3.997 0 7.771-2.412 9.315-6.358l5.008-12.797h30.391l5.002 12.794c2.01 5.144 7.812 7.685 12.954 5.672 5.145-2.011 7.684-7.811 5.673-12.955zm-16.694 49.944 7.376-18.85 7.37 18.85z" />
    <path d="m178.494 202.93c5.522 0 10-4.477 10-10v-75.456c0-5.523-4.478-10-10-10s-10 4.477-10 10v75.456c0 5.523 4.478 10 10 10z" />
    <path d="m475.091 235.516c-15.357 0-28.376 10.203-32.658 24.194h-21.766l-8.285-35.852c-1.035-4.477-5.153-7.749-9.743-7.749h-19.879c3.975-12.113 6.688-25.707 7.483-41.47l54.951.01c4.284 13.976 17.3 24.168 32.655 24.168 18.831 0 34.151-15.327 34.151-34.167 0-18.855-15.32-34.194-34.151-34.194-15.357 0-28.375 10.203-32.657 24.193l-54.981-.01c-.76-14.486-3.16-28.364-7.147-41.474h19.573c4.591 0 8.706-3.272 9.743-7.749l8.285-35.852h21.769c4.284 13.975 17.302 24.167 32.656 24.167 18.847 0 34.179-15.327 34.179-34.167s-15.332-34.166-34.179-34.166c-15.354 0-28.371 10.191-32.656 24.166h-29.721c-4.565 0-8.409 3.063-9.606 7.244-.049.156-.095.322-.137.505l-8.285 35.852h-19.204c-6.895-15.005-16.108-28.737-27.54-40.9-3.781-4.025-10.109-4.221-14.135-.438-4.024 3.783-4.221 10.111-.438 14.135 7.76 8.256 14.344 17.366 19.721 27.203h-31.828c-5.522 0-10 4.477-10 10s4.478 10 10 10h40.738c4.565 12.945 7.317 26.839 8.183 41.47l-61.782-.012c-.001 0-.001 0-.002 0-5.522 0-9.999 4.476-10 9.998-.001 5.523 4.476 10.001 9.998 10.002l61.803.012c-.92 16.052-4.094 29.526-8.719 41.474h-40.218c-5.522 0-10 4.477-10 10s4.478 10 10 10h30.561c-6.192 10.726-13.385 20.531-20.731 30.532-15.658 21.318-31.799 43.312-38.397 75.34h-118.274c-3.551-17.21-9.784-31.302-16.651-43.268 8.628-2.273 15.018-10.121 15.018-19.456v-2.87c8.003-2.377 15.712-5.579 23.046-9.571l2.046 2.048c3.796 3.797 8.852 5.888 14.237 5.888s10.441-2.091 14.237-5.889l20.069-20.083c7.846-7.85 7.846-20.624 0-28.474l-2.053-2.054c3.992-7.341 7.193-15.059 9.57-23.07h2.86c11.102 0 20.134-9.035 20.134-20.14v-28.391c0-11.105-9.032-20.14-20.134-20.14h-2.86c-2.377-8.011-5.578-15.728-9.57-23.07l2.053-2.054c7.845-7.85 7.845-20.623 0-28.474l-20.069-20.083c-3.796-3.797-8.852-5.888-14.237-5.888s-10.441 2.091-14.237 5.889l-2.046 2.047c-7.335-3.993-15.043-7.194-23.046-9.571v-2.87c0-1.686-.231-3.316-.623-4.883 19.164-9.502 40.166-14.347 61.275-14.045.092.001.183.001.274 0 9.801-.128 19.63.846 29.241 2.906 5.399 1.154 10.716-2.283 11.873-7.684 1.156-5.4-2.283-10.716-7.684-11.873-11.028-2.363-22.321-3.493-33.561-3.349-26.553-.361-52.854 6.32-76.412 19.317-1.455-.335-2.962-.53-4.517-.53h-28.373c-11.102 0-20.134 9.035-20.134 20.14v2.87c-8.003 2.377-15.711 5.578-23.046 9.571l-2.046-2.047c-3.796-3.797-8.852-5.888-14.237-5.888s-10.441 2.091-14.237 5.889l-20.069 20.086c-7.845 7.85-7.845 20.623 0 28.474l2.053 2.054c-3.992 7.342-7.193 15.059-9.57 23.07h-2.86c-11.103-.001-20.135 9.034-20.135 20.139v28.391c0 11.105 9.032 20.14 20.134 20.14h2.86c2.377 8.011 5.578 15.729 9.57 23.07l-2.053 2.054c-7.846 7.85-7.846 20.624 0 28.474l20.069 20.083c3.796 3.797 8.852 5.888 14.237 5.888s10.441-2.091 14.237-5.889l2.046-2.047c7.334 3.992 15.043 7.194 23.046 9.571v2.87c0 11.105 9.032 20.14 20.134 20.14h10.439c8.367 12.811 16.698 28.428 20.535 48.715-8.038 5.842-13.277 15.308-13.277 25.979 0 8.573 3.379 16.366 8.866 22.134-5.487 5.763-8.866 13.549-8.866 22.115 0 15.036 10.395 27.685 24.377 31.16v19.989c0 21.511 17.492 39.011 38.992 39.011h56.437c21.516 0 39.021-17.5 39.021-39.011v-19.991c13.967-3.477 24.349-16.125 24.349-31.158 0-8.565-3.376-16.351-8.859-22.115 5.483-5.768 8.859-13.561 8.859-22.134 0-10.679-5.243-20.151-13.283-25.992 5.438-28.897 19.986-48.713 35.341-69.618 9.675-13.172 19.493-26.557 27.331-42.372h20.144l8.285 35.852c1.035 4.478 5.152 7.749 9.743 7.749h29.721c4.284 13.975 17.302 24.166 32.656 24.166 18.847 0 34.179-15.327 34.179-34.166 0-18.857-15.332-34.196-34.179-34.196zm2.758-85.059c7.803 0 14.151 6.368 14.151 14.194 0 7.812-6.349 14.167-14.151 14.167s-14.15-6.355-14.15-14.167c-.001-7.826 6.347-14.194 14.15-14.194zm-2.758-105.058c7.818 0 14.179 6.355 14.179 14.166 0 7.812-6.36 14.167-14.179 14.167-7.803 0-14.151-6.355-14.151-14.167-.001-7.811 6.348-14.166 14.151-14.166zm-322.303 223.269v10.59c0 .058-.087.14-.134.14h-12.602c-.022 0-.044 0-.067 0h-15.704c-.047 0-.134-.082-.134-.14v-10.59c0-4.676-3.24-8.727-7.801-9.755-11.199-2.524-21.794-6.925-31.489-13.08-1.648-1.047-3.508-1.558-5.356-1.558-2.584 0-5.146 1-7.076 2.931l-7.516 7.52c-.043.044-.139.043-.182 0l-20.069-20.083c-.038-.038-.038-.16 0-.198l7.516-7.521c3.308-3.31 3.878-8.471 1.372-12.423-6.151-9.704-10.55-20.306-13.073-31.514-1.027-4.563-5.079-7.804-9.756-7.804h-10.583c-.047 0-.134-.082-.134-.14v-28.391c0-.058.087-.14.134-.14h10.583c4.677 0 8.729-3.241 9.756-7.804 2.523-11.207 6.922-21.81 13.073-31.514 2.506-3.953 1.936-9.114-1.372-12.423l-7.516-7.52c-.039-.039-.039-.161 0-.199l20.069-20.082c.043-.043.139-.042.182 0l7.516 7.52c3.312 3.313 8.479 3.883 12.433 1.374 9.696-6.155 20.291-10.556 31.488-13.08 4.562-1.028 7.802-5.08 7.802-9.755v-10.59c0-.058.087-.14.134-.14h28.373c.047 0 .134.082.134.14v10.59c0 4.676 3.24 8.728 7.802 9.755 11.197 2.523 21.792 6.924 31.488 13.08 3.952 2.51 9.121 1.94 12.433-1.374l7.516-7.52c.043-.043.139-.042.182 0l20.069 20.082c.039.039.039.161 0 .199l-7.516 7.52c-3.308 3.31-3.878 8.471-1.372 12.423 6.151 9.704 10.55 20.307 13.073 31.514 1.027 4.563 5.079 7.804 9.756 7.804h10.583c.047 0 .134.082.134.14v28.391c0 .058-.087.14-.134.14h-10.583c-4.677 0-8.729 3.241-9.756 7.804-2.523 11.208-6.922 21.81-13.073 31.514-2.506 3.952-1.936 9.113 1.372 12.423l7.516 7.521c.038.038.038.16 0 .198l-20.069 20.082c-.043.043-.139.043-.182 0l-7.516-7.521c-3.312-3.313-8.48-3.884-12.433-1.374-9.695 6.155-20.29 10.556-31.489 13.08-4.562 1.031-7.802 5.082-7.802 9.758zm128.017 200.822c0 10.482-8.532 19.011-19.021 19.011h-56.437c-10.473 0-18.992-8.528-18.992-19.011v-19.039h94.449v19.039zm12.252-39.039h-118.953c-6.686 0-12.125-5.433-12.125-12.11 0-6.678 5.439-12.11 12.125-12.11h118.953c6.67 0 12.097 5.433 12.097 12.11-.001 6.677-5.427 12.11-12.097 12.11zm0-44.22h-118.953c-6.686 0-12.125-5.445-12.125-12.138 0-6.678 5.439-12.11 12.125-12.11h118.953c6.67 0 12.097 5.433 12.097 12.11-.001 6.692-5.427 12.138-12.097 12.138zm182.034-102.355c-7.803 0-14.151-6.355-14.151-14.166 0-7.827 6.349-14.194 14.151-14.194 7.818 0 14.179 6.368 14.179 14.194 0 7.811-6.361 14.166-14.179 14.166z" />
    <path d="m301.393 40.935.057.028c1.432.716 2.951 1.055 4.447 1.055 3.663 0 7.187-2.034 8.94-5.542 2.47-4.94.439-10.961-4.501-13.431-4.939-2.47-10.947-.468-13.416 4.472-2.47 4.942-.468 10.948 4.473 13.418z" />
  </g>
</svg>,
      heading: "Contextual assistance",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <P style={{ fontWeight: 600 , fontSize: 20}}>
    Helping users take meaningful next steps
  </P>
        <P>
With a relatively new ecosystem, not all users are aware that they can order a product sample or evaluate online. So, we deployed AI to provide contextual guidance when a user shows intent with repeated document downloads and product exploration. AI meets users at the moment of intent - this not only assists users but also increased the sign ups and MQLs.  </P>  

          <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ width: "100%", overflow: "hidden" }}>
           <TabImage
  src={ai2}
  alt="Digital assistant"
  style={{ border: "1px solid #cfcfcf" }}
/>
          </div>
        </div>
        </div>
      ),
    },
    {
      icon: <svg
  clipRule="evenodd"
  fillRule="evenodd"
  strokeLinejoin="round"
  strokeMiterlimit="2"
  viewBox="0 0 96 96"
  width="32"
  height="32"
  xmlns="http://www.w3.org/2000/svg"
>
  <g transform="translate(-3772 -32)">
    <path d="m3794.4 46h-16.4c-1.59 0-3.12.632-4.24 1.757-1.13 1.126-1.76 2.652-1.76 4.243v56c0 3.314 2.69 6 6 6h30.76s5.11 10.211 5.11 10.211c1.16 2.322 3.53 3.789 6.13 3.789s4.97-1.467 6.13-3.789c0 0 5.11-10.211 5.11-10.211h30.76c3.31 0 6-2.686 6-6 0-11.491 0-44.509 0-56 0-1.591-.63-3.117-1.76-4.243-1.12-1.125-2.65-1.757-4.24-1.757h-42.82l-1.21-3.239c-.61-1.66-2.2-2.761-3.97-2.761s-3.36 1.101-3.97 2.761l-1.2 3.239h-7.23l.38-1.019s3.04-1.128 3.04-1.128c1.19-.443 1.98-1.581 1.98-2.853s-.79-2.41-1.98-2.853c0 0-3.04-1.128-3.04-1.128s-1.13-3.035-1.13-3.035c-.44-1.193-1.58-1.984-2.85-1.984s-2.41.791-2.85 1.984c0 0-1.13 3.035-1.13 3.035s-3.04 1.128-3.04 1.128c-1.19.443-1.98 1.581-1.98 2.853s.79 2.41 1.98 2.853c0 0 3.04 1.128 3.04 1.128zm12.94 4h-29.34c-.53 0-1.04.211-1.41.586-.38.375-.59.884-.59 1.414v56c0 1.105.89 2 2 2h32c.76 0 1.45.428 1.79 1.106 0 0 3.62 7.251 5.66 11.316.48.967 1.47 1.578 2.55 1.578 1.08 0 2.07-.611 2.55-1.578 2.04-4.065 5.66-11.316 5.66-11.316.34-.678 1.03-1.106 1.79-1.106h32c1.11 0 2-.895 2-2 0-11.491 0-44.509 0-56 0-.53-.21-1.039-.59-1.414-.37-.375-.88-.586-1.41-.586h-41.34l.09.247s7.49 2.782 7.49 2.782c1.66.616 2.76 2.2 2.76 3.971s-1.1 3.355-2.76 3.971c0 0-7.49 2.782-7.49 2.782l-2.78 7.486c-.61 1.66-2.2 2.761-3.97 2.761s-3.36-1.101-3.97-2.761c0 0-2.78-7.486-2.78-7.486s-7.49-2.782-7.49-2.782c-1.66-.616-2.76-2.2-2.76-3.971s1.1-3.355 2.76-3.971c0 0 7.49-2.782 7.49-2.782zm28.79 16.282-10 26c-.39 1.03.12 2.188 1.15 2.585 1.03.396 2.19-.119 2.59-1.149l10-26c.39-1.03-.12-2.188-1.15-2.585-1.03-.396-2.19.119-2.59 1.149zm8.31 4.967 7 8.751s-7 8.751-7 8.751c-.69.862-.55 2.121.31 2.811.86.689 2.12.549 2.81-.313l8-10c.59-.73.59-1.768 0-2.498l-8-10c-.69-.862-1.95-1.002-2.81-.313-.86.69-1 1.949-.31 2.811zm-36.44 18.751h12c1.1 0 2-.896 2-2s-.9-2-2-2h-12c-1.1 0-2 .896-2 2s.9 2 2 2zm-21 0h12c1.1 0 2-.896 2-2s-.9-2-2-2h-12c-1.1 0-2 .896-2 2s.9 2 2 2zm27.22-20.154c-.03.092-.12.154-.22.154s-.19-.062-.22-.154c0 0-3.1-8.345-3.1-8.345-.21-.546-.63-.976-1.18-1.179l-8.35-3.1c-.09-.035-.15-.123-.15-.222s.06-.187.15-.222c0 0 8.35-3.1 8.35-3.1.55-.203.97-.633 1.18-1.179l3.1-8.345c.03-.092.12-.154.22-.154s.19.062.22.154c0 0 3.1 8.345 3.1 8.345.21.546.63.976 1.18 1.179l8.35 3.1c.09.035.15.123.15.222s-.06.187-.15.222c0 0-8.35 3.1-8.35 3.1-.55.203-.97.633-1.18 1.179 0 0-3.1 8.345-3.1 8.345zm-16.22-32.057.55 1.482c.2.546.63.976 1.18 1.178l1.48.551-1.48.551c-.55.202-.98.632-1.18 1.178l-.55 1.482-.55-1.482c-.2-.546-.63-.976-1.18-1.178l-1.48-.551 1.48-.551c.55-.202.98-.632 1.18-1.178z" />
  </g>
</svg>,
      heading: "Proactive information",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <P style={{ fontWeight: 600 , fontSize: 20}}>
    Assisting users in finding answers faster 
  </P>
        <P>
          In our research, users repeatedly mentioned delay in response for their community questions, while CAEs complained about existing solved questions being resurfaced with different wording while increasing their workload. To solve this problem, we introduced a confirmation modal when users initiated a question, which uses AI to understand the question, find if it exists in Community and summarizes the answer for the user. The user is given a choice to continue posting if needed, but this effort proved that AI deflected questions by 37%.
  </P>  

          <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ width: "100%", overflow: "hidden" }}>
            <TabImage
  src={ai3}
  alt="Community deflection"
  style={{ border: "1px solid #cfcfcf" }}
/>
          </div>
        </div>
        </div>
      ),
    },
    {
      icon: <svg
  height="32"
  viewBox="0 0 256 256"
  width="32"
  xmlns="http://www.w3.org/2000/svg"
>
  <g
    fill="rgb(0,0,0)"
    strokeMiterlimit="10"
    strokeWidth="0"
    transform="matrix(2.81 0 0 2.81 1.407 1.407)"
  >
    <path d="m81.755 35.926h-5.433v-7.321c0-4.517-3.675-8.192-8.191-8.192h-22.131v-6.023c3.516-.49 6.233-3.508 6.233-7.156 0-3.989-3.245-7.234-7.233-7.234s-7.233 3.245-7.233 7.233c0 3.648 2.718 6.666 6.233 7.156v6.023h-22.13c-4.517 0-8.192 3.675-8.192 8.192v7.321h-5.433c-2.567 0-4.656 2.089-4.656 4.656v12.291c0 2.567 2.089 4.656 4.656 4.656h5.433v7.32c0 4.518 3.675 8.192 8.192 8.192h3.361v15.96c0 .378.213.724.551.894.141.071.295.106.448.106.211 0 .421-.066.597-.197l22.527-16.761h18.776c4.517 0 8.191-3.675 8.191-8.192v-7.32h5.433c2.567 0 4.656-2.089 4.656-4.656v-12.292c.001-2.567-2.088-4.656-4.655-4.656zm-41.988-28.693c0-2.885 2.347-5.233 5.233-5.233s5.233 2.348 5.233 5.233-2.347 5.234-5.233 5.234-5.233-2.348-5.233-5.234zm-31.522 48.296c-1.465 0-2.656-1.191-2.656-2.656v-12.291c0-1.465 1.191-2.656 2.656-2.656h5.433v17.604h-5.433zm66.077 9.321c0 3.414-2.777 6.192-6.191 6.192h-19.108c-.215 0-.425.069-.597.197l-21.196 15.771v-14.968c0-.553-.448-1-1-1h-4.36c-3.414 0-6.192-2.778-6.192-6.192v-8.32-19.604-8.321c0-3.415 2.778-6.192 6.192-6.192h46.261c3.414 0 6.191 2.778 6.191 6.192v8.321 19.604zm10.089-11.977c0 1.465-1.191 2.656-2.656 2.656h-5.433v-17.603h5.433c1.465 0 2.656 1.191 2.656 2.656z" />
    <path d="m63.177 32.707h-36.354c-2.029 0-3.679 1.65-3.679 3.679v20.684c0 2.028 1.65 3.679 3.679 3.679h36.354c2.029 0 3.68-1.65 3.68-3.679v-20.684c-.001-2.029-1.651-3.679-3.68-3.679zm1.679 24.362c0 .926-.754 1.679-1.68 1.679h-36.353c-.926 0-1.679-.753-1.679-1.679v-20.683c0-.926.753-1.679 1.679-1.679h36.354c.926 0 1.68.753 1.68 1.679v20.683z" />
    <path d="m40.037 39.021h-2.541c-2.146 0-3.892 1.746-3.892 3.892v10.521c0 .553.448 1 1 1s1-.447 1-1v-5.706h6.324v5.706c0 .553.448 1 1 1s1-.447 1-1v-10.521c.001-2.146-1.745-3.892-3.891-3.892zm-4.433 6.707v-2.814c0-1.043.849-1.892 1.892-1.892h2.541c1.043 0 1.892.849 1.892 1.892v2.814z" />
    <path d="m55.396 41.021c.553 0 1-.448 1-1s-.447-1-1-1h-5.499c-.553 0-1 .448-1 1s.447 1 1 1h1.75v11.412h-1.75c-.553 0-1 .447-1 1s.447 1 1 1h5.499c.553 0 1-.447 1-1s-.447-1-1-1h-1.749v-11.412z" />
  </g>
</svg>,
      heading: "Intelligent support",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <P style={{ fontWeight: 600 , fontSize: 20}}>
    Facilitating faster response with automation
  </P>
        <P>
          To improve the response time to support queries and to help CAEs find the right answers to user cases faster, we introduced generative AI to the internal support workflow, which could generate responses to any selected comment on the thread along with detailed documentation and sources. This tool was highly received by the CAEs and recognized by the sales team as a valuable addition to their workflow.
  </P>  

          <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ width: "100%", overflow: "hidden" }}>
            <TabImage
  src={ai4}
  alt="Automated tech support"
  style={{ border: "1px solid #cfcfcf" }}
/>
          </div>
        </div>
        </div>
      ),
    },
  ]}
/>
      </StorySection>


      {/* ── SECTION 05: Growth focused operations ──────────────────────────── */}
      <StorySection
        eyebrow="Growth focused operations"
        headline="Transforming UX into a continuous business function"
      >
        {/* 1. Intro paragraph */}
        <P>
          As the ecosystem matured, large redesign launches were
          not enough to sustain long term improvements. Business
          priorities, user expectations and product requirements
          evolved continuously, making it increasingly difficult
          to rely on isolated redesign cycles separated by long
          delivery gaps. This created a growing need for
          stronger organizational alignment, faster decision
          making and continuous delivery.
        </P>

        {/* 2. Workshop image + text */}

        <ImgText
  image={
    <img
      src={workshopmuc}
      alt="Munich workshop"
      style={{ width: "100%", display: "block" }}
    />
  }
  side="right"
  gap={40}
  imageWidth="50%"
  style={{ marginTop: 24 }}
>
          <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Leadership workshops
  </P>
  <P style={{ marginTop: 16}}>
    To establish this alignment, I facilitated multiple
            virtual and in-person workshops with the VP of
            Digital Experience, business stakeholders, engineers
            and cross-functional product teams. These sessions
            focused on evaluating evolving business priorities,
            resurfacing existing assumptions and identifying
            the optimal strategy for accommodating changing user needs at the required speed.
    As the outcome of these workshops shifted UX from
            project based redesigns toward a continuous
            optimization model where usability improvements,
            feature enhancements, research insights and
            strategic initiatives moved through parallel
            delivery pipelines. This created a more sustainable operation rhythm where
          shipped experiences continuously informed future
          prioritization, experimentation and roadmap.
  </P>
</ImgText>



        <ImgText
  image={
    <VideoPlayer
            src={imgHeartFramework}
            style={{ width: "100%", display: "block", border: "1px solid #cfcfcf" }}
          />

  }
  side="right"
  gap={40}
 imageWidth="50%"
  style={{ marginTop: 24 }}
>
          <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Continuous measurement, constant improvement
  </P>
  <P style={{ marginTop: 16 }}>
            With this approach, the delivery speeds increased
            and hence validating UX decisions through measurable
            outcomes became increasingly important. To support
            this operational shift, I <b>built a tool using AI</b>
            as a project inspired by HEART framework.
          </P>
          <P style={{ marginTop: 16 }}>
            This tool included a generator which used Gemini AI's API to
            take description of a feature as input and produce
            suggested metrics as output. This sped up the
            process of identifying suitable metrics and allowed
            UX decisions to be validated through impact rather
            than assumptions. It also created a feedback-driven
            system where shipped experiences generated insights
            that directly informed future prioritization and
            strategy.
          </P>

         
</ImgText>

 <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: 16,
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: "clamp(17px, 2.5vw, 19px)",
              color: "#1a1a2e",
              lineHeight: "32px",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Key Operational shifts
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px 32px",
            }}
          >
            <CheckItem>
              Continuous optimization and delivery
            </CheckItem>
            <CheckItem>
              Increased velocity with parallel pipelines
            </CheckItem>
            <CheckItem>Metrics guided prioritization</CheckItem>
            <CheckItem>Feedback loop driven strategy</CheckItem>
          </div>
        </div>
        
        {/* 7. Key operational shifts */}
        

        {/* 8. Munich photo + text */}
        <ImgText
  image={
    <img
      src={imgMunich}
      alt="munich meeting"
      style={{ width: "100%", display: "block" }}
    />
  }
  side="left"
  gap={30}
  imageWidth="30%"
  style={{ marginTop: 24 }}
>
          <P style={{ fontWeight: 600 , fontSize: 20 }}>
    Munich team meetings
  </P>
  <P style={{ marginTop: 16 }}>
     As the <b>only UX team member in India</b> I also travelled
            to Munich in December every year to meet team
            members distributed across Europe, Asia and USA,
            discuss the wins and fails of the year and
            participate in team building activities. These
            collaborations helped create shared understanding
            within the team while accelerating UX adoption
            across globally distributed workflows. It also helped create stronger relationships with
            team members and a more connected UX culture despite
            working across varying regions and time zones.
  </P>
</ImgText>


        
      </StorySection>

      {/* ── CONCLUSION ────────────────────────────────────────────────────────── */}
      <StorySection
        eyebrow="Conclusion and Learnings"
        headline="From redesigning experiences to shaping organizational UX maturity"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <P>
            What began as redesigning fragmented legacy
            interfaces evolved into a journey of shaping how UX
            operated across an enterprise ecosystem. Over time,
            the focus shifted from isolated product redesigns
            toward building connected systems, scalable UX
            foundations and continuous feedback driven
            operational models capable of evolving alongside
            measurable business growth.
          </P>
          <P>
            One of the biggest learnings from this journey was
            understanding that UX maturity is not created
            through individual redesigns but through governance,
            cross-functional alignment, shared standards and
            measurable operational processes that enable teams
            to scale consistently. This experience fundamentally
            changed how I approached UX and reinforced the
            importance of collaboration, continuous learning and
            relationship-building in driving UX adoption across
            globally distributed teams.
          </P>
        </div>
      </StorySection>
    </>
  );
}