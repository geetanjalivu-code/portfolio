import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import {
  ProductPageContent,
  type Zone,
} from "./ProductPageContent";
import { MobileProductPage } from "./MobileProductPage";

interface AnnotItem {
  id: string;
  col: "biz" | "usr";
  title: string;
  body: string;
  targetId: string;
  side: "L" | "R";
  annotTop: number;
}

const ANNOTS: Record<Zone, AnnotItem[][]> = {
  balanced: [
    // scroll 0 — 2 biz (purple) + 2 usr (green)
    [
      {
        id: "L1",
        col: "biz",
        title: "Social proof badge",
        body: "BESTSELLER signals popularity — drives confidence.",
        targetId: "bdgBest",
        side: "L",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "usr",
        title: "Clear product view",
        body: "Accurate image — sets real expectations.",
        targetId: "pImgBox",
        side: "L",
        annotTop: 160,
      },
      {
        id: "R1",
        col: "biz",
        title: "Price anchoring",
        body: "$95 struck out — $68 feels like a steal.",
        targetId: "pPriceSave",
        side: "R",
        annotTop: 120,
      },
      {
        id: "R2",
        col: "usr",
        title: "Real review count",
        body: "1,247 genuine reviews — nothing hidden.",
        targetId: "pRCnt",
        side: "R",
        annotTop: 60,
      },
      {
        id: "L3",
        col: "usr",
        title: "Benefit copy",
        body: "Explains what you get — value over hype.",
        targetId: "pFeatTitle",
        side: "L",
        annotTop: 20,
      },
    ],
    [
      {
        id: "L1",
        col: "usr",
        title: "Benefit copy",
        body: "Explains what you get — value over hype.",
        targetId: "pFeatTitle",
        side: "L",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "biz",
        title: "Optional add-ons",
        body: "Revenue opportunity — but unticked, so user chooses.",
        targetId: "pAddonTitle",
        side: "L",
        annotTop: 200,
      },
      {
        id: "R1",
        col: "usr",
        title: "Clear CTA",
        body: "One focused action — avoids confusion",
        targetId: "pCtaP",
        side: "R",
        annotTop: 20,
      },
      {
        id: "R2",
        col: "biz",
        title: "Wishlist option",
        body: "Captures intent without losing buyers.",
        targetId: "pCtaS",
        side: "R",
        annotTop: 180,
      },
    ],
    [
      {
        id: "R3",
        col: "usr",
        title: "Full star ratings",
        body: "All ratings shown — 1-star included.",
        targetId: "pRevBars",
        side: "R",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "biz",
        title: "Cross-sells",
        body: "Related items keep revenue in ecosystem.",
        targetId: "pRelatedTitle",
        side: "L",
        annotTop: 200,
      },
      {
        id: "L1",
        col: "usr",
        title: "Complete specs",
        body: "Every detail disclosed — transparency.",
        targetId: "pSpecsWrap",
        side: "L",
        annotTop: 20,
      },
      {
        id: "L3",
        col: "usr",
        title: "Trust signals",
        body: "Returns, security, maker — all visible.",
        targetId: "pTrustWrap",
        side: "L",
        annotTop: 200,
      },
      {
        id: "R1",
        col: "usr",
        title: "Clear CTA",
        body: "One focused action — avoids confusion",
        targetId: "pCtaP",
        side: "R",
        annotTop: 20,
      },
      {
        id: "R2",
        col: "biz",
        title: "Wishlist option",
        body: "Captures intent without losing buyers.",
        targetId: "pCtaS",
        side: "R",
        annotTop: 180,
      },
    ],
  ],
  biz: [
    [
      {
        id: "L1",
        col: "biz",
        title: "SALE badge",
        body: "Creates immediate urgency and scarcity.",
        targetId: "bdgSale",
        side: "L",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "biz",
        title: "Countdown timer",
        body: "Time pressure — buy before it ends.",
        targetId: "pTimer",
        side: "L",
        annotTop: 200,
      },
      {
        id: "R1",
        col: "biz",
        title: "Price anchoring",
        body: "Struck-out price makes $68 feel cheap.",
        targetId: "pPriceSave",
        side: "R",
        annotTop: 120,
      },
      {
        id: "R2",
        col: "biz",
        title: "FOMO ranking",
        body: "#1 in Ceramics — social proof of dominance.",
        targetId: "pRExt",
        side: "R",
        annotTop: 60,
      },
      {
        id: "L3",
        col: "biz",
        title: "Hype-led copy",
        body: "Superlatives build excitement over facts.",
        targetId: "pFeatTitle",
        side: "L",
        annotTop: 20,
      },
    ],
    [
      {
        id: "L1",
        col: "biz",
        title: "Hype-led copy",
        body: "Superlatives build excitement over facts.",
        targetId: "pFeatTitle",
        side: "L",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "biz",
        title: "Pre-ticked extras",
        body: "Default add-ons quietly raise order value.",
        targetId: "pAddonTitle",
        side: "L",
        annotTop: 200,
      },
      {
        id: "R1",
        col: "biz",
        title: "Dominant CTA",
        body: "High-contrast button owns the hierarchy.",
        targetId: "pCtaP",
        side: "R",
        annotTop: 20,
      },
      {
        id: "R2",
        col: "biz",
        title: "Upsell at checkout",
        body: "Add-ons placed right at purchase moment.",
        targetId: "pCtaS",
        side: "R",
        annotTop: 180,
      },
    ],
    [
      {
        id: "R2",
        col: "biz",
        title: "Upsell at checkout",
        body: "Add-ons placed right at purchase moment.",
        targetId: "pCtaS",
        side: "R",
        annotTop: 180,
      },
      {
        id: "R1",
        col: "biz",
        title: "Only top star ratings",
        body: "1-star not visible — perception of great product",
        targetId: "pRevBars",
        side: "R",
        annotTop: 20,
      },
      {
        id: "L1",
        col: "biz",
        title: "Urgency footer",
        body: "Last-chance FOMO before user might leave.",
        targetId: "pUrgency",
        side: "L",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "biz",
        title: "Cross-sells",
        body: "Related items keep revenue in ecosystem.",
        targetId: "pRelatedWrap",
        side: "L",
        annotTop: 200,
      },
      {
        id: "R3",
        col: "biz",
        title: "Returns buried",
        body: "Policy hidden to reduce exit routes.",
        targetId: "pTrustWrap",
        side: "R",
        annotTop: 20,
      },
      {
        id: "L3",
        col: "biz",
        title: "Specs hidden",
        body: "Technical details buried below the fold.",
        targetId: "pSpecsWrap",
        side: "L",
        annotTop: 200,
      },
    ],
  ],
  usr: [
    [
      {
        id: "L1",
        col: "usr",
        title: "No fake badge",
        body: "No SALE tag — honest presentation only.",
        targetId: "bdgNew",
        side: "L",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "usr",
        title: "Honest image",
        body: "Product shown accurately — no hype.",
        targetId: "pImgBox",
        side: "L",
        annotTop: 160,
      },
      {
        id: "R1",
        col: "usr",
        title: "No price anchor",
        body: 'Clean price — no inflated "was" alongside.',
        targetId: "pPriceBig",
        side: "R",
        annotTop: 120,
      },
      {
        id: "R2",
        col: "usr",
        title: "Verified count",
        body: "(1,189 verified) — nothing cherry-picked.",
        targetId: "pRExt",
        side: "R",
        annotTop: 60,
      },
      {
        id: "L3",
        col: "usr",
        title: "Honest copy",
        body: '"What to know" — limitations included.',
        targetId: "pFeatTitle",
        side: "L",
        annotTop: 20,
      },
    ],
    [
      {
        id: "L1",
        col: "usr",
        title: "Honest copy",
        body: '"What to know" — limitations included.',
        targetId: "pFeatTitle",
        side: "L",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "usr",
        title: "No upsells pushed",
        body: "Zero add-ons at the decision point.",
        targetId: "pAddonTitle",
        side: "L",
        annotTop: 200,
      },
      {
        id: "R1",
        col: "usr",
        title: "Accurate stock",
        body: "Ships in 2 days — no fake scarcity.",
        targetId: "pStockText",
        side: "R",
        annotTop: 20,
      },
      {
        id: "R2",
        col: "usr",
        title: "Full delivery info",
        body: "Exact dates, tracking, packaging shown.",
        targetId: "pDelMain",
        side: "R",
        annotTop: 180,
      },
    ],
    [
      {
        id: "R1",
        col: "usr",
        title: "All star ratings",
        body: "1-star visible — informed buyers return less.",
        targetId: "pRevBars",
        side: "R",
        annotTop: 20,
      },
      {
        id: "L2",
        col: "usr",
        title: "Compare options",
        body: "Similar items help users find best fit.",
        targetId: "pRelatedTitle",
        side: "L",
        annotTop: 200,
      },
      {
        id: "L1",
        col: "usr",
        title: "Complete specs",
        body: "Every detail disclosed — no surprises.",
        targetId: "pSpecsWrap",
        side: "L",
        annotTop: 20,
      },
      {
        id: "R2",
        col: "usr",
        title: "Privacy promise",
        body: "Data never sold — explicit commitment.",
        targetId: "pTrustPrivacy",
        side: "R",
        annotTop: 200,
      },
    ],
  ],
};

export function SeesawSection() {
  const [zone, setZone] = useState<Zone>("balanced");
  const [hasClicked, setHasClicked] = useState(false);
  const [hintSide, setHintSide] = useState<
    "left" | "right" | null
  >(null);
  const [timerSecs, setTimerSecs] = useState(847);
  const [deviceType, setDeviceType] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");
  const [activeAnnots, setActiveAnnots] = useState<AnnotItem[]>(
    [],
  );
  const [annotFaded, setAnnotFaded] = useState(false);
  // arrowPaths & annotPositions removed — computed directly in DOM, not via React state

  const currentTiltRef = useRef(0);
  const targetTiltRef = useRef(0);
  const hasClickedRef = useRef(false);
  const zoneRef = useRef<Zone>("balanced");
  const lastZoneRef = useRef<Zone | "">("");
  const scrollZoneRef = useRef(0);
  const activeAnnotsRef = useRef<AnnotItem[]>([]);
  const scrollRafRef = useRef<number>(0);

  const rotGroupRef = useRef<SVGGElement>(null);
  const balanceGlowRef = useRef<SVGRectElement>(null);
  const mockZoneRef = useRef<HTMLDivElement>(null);
  const browserShellRef = useRef<HTMLDivElement>(null);
  const pageScrollRef = useRef<HTMLDivElement>(null);
  const annotL1Ref = useRef<HTMLDivElement>(null);
  const annotL2Ref = useRef<HTMLDivElement>(null);
  const annotR1Ref = useRef<HTMLDivElement>(null);
  const annotR2Ref = useRef<HTMLDivElement>(null);
  const annotL3Ref = useRef<HTMLDivElement>(null);
  const annotR3Ref = useRef<HTMLDivElement>(null);
  const arrowSvgRef = useRef<SVGSVGElement>(null);
  const targetRefs = useRef<Record<string, HTMLElement | null>>(
    {},
  );
  const annotTimeoutRef =
    useRef<ReturnType<typeof setTimeout>>();
  const stageRef = useRef<HTMLDivElement>(null);
  const seesawSvgRef = useRef<SVGSVGElement>(null);

  const registerRef = useCallback(
    (id: string, el: HTMLElement | null) => {
      targetRefs.current[id] = el;
    },
    [],
  );

  // Device detection
  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth;
      setDeviceType(
        w > 900 ? "desktop" : w > 520 ? "tablet" : "mobile",
      );
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // RAF seesaw animation
  useEffect(() => {
    let animId: number;
    function frame() {
      const diff =
        targetTiltRef.current - currentTiltRef.current;
      currentTiltRef.current += diff * 0.13;
      if (Math.abs(diff) < 0.01)
        currentTiltRef.current = targetTiltRef.current;
      if (rotGroupRef.current) {
        rotGroupRef.current.setAttribute(
          "transform",
          `rotate(${currentTiltRef.current},450,214)`,
        );
      }
      if (balanceGlowRef.current) {
        const bal = Math.abs(currentTiltRef.current) < 1.5;
        balanceGlowRef.current.style.display = bal
          ? "block"
          : "none";
      }
      const tilt = currentTiltRef.current;
      const nz: Zone =
        tilt < -4 ? "usr" : tilt > 4 ? "biz" : "balanced";
      if (nz !== zoneRef.current) {
        zoneRef.current = nz;
        setZone(nz);
      }
      animId = requestAnimationFrame(frame);
    }
    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Timer
  useEffect(() => {
    const id = setInterval(
      () => setTimerSecs((s) => (s > 0 ? s - 1 : 0)),
      1000,
    );
    return () => clearInterval(id);
  }, []);

  const timerDisplay = `${Math.floor(timerSecs / 60)
    .toString()
    .padStart(
      2,
      "0",
    )}:${(timerSecs % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    if (zone !== "balanced") {
      setHintSide(null);
      return;
    }
    if (!hasClicked) {
      // First time — show hint after 2.5s delay
    }
    let cancelled = false;
    let idleTimer: ReturnType<typeof setTimeout>;

    async function runHint() {
      while (!cancelled) {
        await new Promise((r) =>
          setTimeout(r, hasClicked ? 3000 : 1000),
        ); // longer idle wait after first click
        if (cancelled) break;
        setHintSide("left");
        await new Promise((r) => setTimeout(r, 1000));
        if (cancelled) break;
        setHintSide(null);
        await new Promise((r) => setTimeout(r, 1000));
        if (cancelled) break;
        setHintSide("right");
        await new Promise((r) => setTimeout(r, 1000));
        if (cancelled) break;
        setHintSide(null);
        await new Promise((r) => setTimeout(r, 1000));
      }
    }

    // After first click — only show hint after 8 seconds of being idle on balanced
    idleTimer = setTimeout(
      () => {
        if (!cancelled) runHint();
      },
      hasClicked ? 6000 : 0,
    );

    return () => {
      cancelled = true;
      clearTimeout(idleTimer);
      setHintSide(null);
    };
  }, [zone, hasClicked]);

  // Zone change effect
  // REPLACE with this
  useEffect(() => {
    if (zone === lastZoneRef.current) return;
    lastZoneRef.current = zone;
    // Don't reset scroll — keep current position
    // But update annotations to match current scroll position
    const currentScroll = pageScrollRef.current?.scrollTop ?? 0;
    const currentScrollZone =
      currentScroll < 180 ? 0 : currentScroll < 480 ? 1 : 2;
    scrollZoneRef.current = currentScrollZone;
    scheduleAnnotUpdate(zone, currentScrollZone);
  }, [zone]);

  // Annotation system — scheduleAnnotUpdate handles fade + text; computeArrows is pure DOM
  function scheduleAnnotUpdate(z: Zone, sz: number) {
    if (annotTimeoutRef.current)
      clearTimeout(annotTimeoutRef.current);
    setAnnotFaded(true);
    annotTimeoutRef.current = setTimeout(() => {
      const set = ANNOTS[z]?.[sz];
      if (!set) return;
      activeAnnotsRef.current = set;
      setActiveAnnots(set);
      setAnnotFaded(false);
      // 2 RAF frames: let React render the new text before measuring
      requestAnimationFrame(() =>
        requestAnimationFrame(() => computeArrows()),
      );
    }, 300);
  }

  // computeArrows: reads activeAnnotsRef, writes directly to DOM — zero React state updates.
  // Safe to call on every scroll frame without triggering re-renders.
  const computeArrows = useCallback(() => {
    const annots = activeAnnotsRef.current;
    if (!annots.length) return;
    if (
      !mockZoneRef.current ||
      !browserShellRef.current ||
      !pageScrollRef.current ||
      !arrowSvgRef.current
    )
      return;
    const bsRect =
      browserShellRef.current.getBoundingClientRect();
    if (bsRect.width === 0) return;
    const mzRect = mockZoneRef.current.getBoundingClientRect();
    const scRect =
      pageScrollRef.current.getBoundingClientRect();
    const bsLeft = bsRect.left - mzRect.left;
    const bsRight = bsRect.right - mzRect.left;
    const bsTop = bsRect.top - mzRect.top;
    const ANNOT_H = 54;
    const ANNOT_GAP = 10;
    const chromeH = 38;

    const annotElMap: Record<
      string,
      React.RefObject<HTMLDivElement>
    > = {
      L1: annotL1Ref,
      L2: annotL2Ref,
      R1: annotR1Ref,
      R2: annotR2Ref,
      L3: annotL3Ref,
      R3: annotR3Ref,
    };

    const resolved: Array<{
      a: AnnotItem;
      annotEl: HTMLDivElement;
      tipX: number;
      tipY: number;
    }> = [];

    annots.forEach((a) => {
      const annotEl = annotElMap[a.id]?.current;
      const target = targetRefs.current[a.targetId];
      if (!target || !annotEl) {
        if (annotEl) annotEl.style.opacity = "0";
        return;
      }
      const tRect = target.getBoundingClientRect();

      // display:none → width=0 → skip. hip-hidden → height=0 but width>0 → allow.
      if (tRect.width === 0) {
        annotEl.style.opacity = "0";
        return;
      }

      // Visibility: normal elements must overlap viewport; zero-height elements just need their top inside viewport
      const inView =
        tRect.height > 0
          ? !(
              tRect.top > scRect.bottom - 2 ||
              tRect.bottom < scRect.top + 2
            )
          : !(
              tRect.top < scRect.top - 4 ||
              tRect.top > scRect.bottom
            );
      if (!inView) {
        annotEl.style.opacity = "0";
        return;
      }

      const eLeft = tRect.left - mzRect.left;
      const eRight = tRect.right - mzRect.left;
      const eTop = tRect.top - mzRect.top;
      const eBot =
        tRect.height > 0 ? tRect.bottom - mzRect.top : eTop;
      const eMidY = (eTop + eBot) / 2;
      let tipX = a.side === "L" ? eLeft + 4 : eRight - 4;
      let tipY = eMidY;
      const contentTop = bsTop + chromeH + 2;
      const contentBottom = bsTop + bsRect.height - 2;
      tipY = Math.max(
        contentTop,
        Math.min(contentBottom, tipY),
      );
      tipX = Math.max(bsLeft + 2, Math.min(bsRight - 2, tipX));
      annotEl.style.opacity = "";
      resolved.push({ a, annotEl, tipX, tipY });
    });

    const leftItems = resolved
      .filter((r) => r.a.side === "L")
      .sort((a, b) => a.tipY - b.tipY);
    const rightItems = resolved
      .filter((r) => r.a.side === "R")
      .sort((a, b) => a.tipY - b.tipY);

    function assignPos(items: typeof resolved): number[] {
      const positions: number[] = [];
      items.forEach((item, i) => {
        let idealTop = item.tipY - ANNOT_H / 2;
        const minTop = bsTop;
        const maxTop = mzRect.height - ANNOT_H;
        idealTop = Math.max(minTop, Math.min(maxTop, idealTop));
        if (i > 0) {
          const prevBottom =
            positions[i - 1] + ANNOT_H + ANNOT_GAP;
          if (idealTop < prevBottom)
            idealTop = Math.min(maxTop, prevBottom);
        }
        positions.push(idealTop);
      });
      for (let i = positions.length - 1; i > 0; i--) {
        const maxTop = mzRect.height - ANNOT_H;
        if (positions[i] > maxTop) {
          positions[i] = maxTop;
          const minNeeded = positions[i] - ANNOT_H - ANNOT_GAP;
          if (positions[i - 1] > minNeeded)
            positions[i - 1] = minNeeded;
        }
      }
      return positions;
    }

    const leftPos = assignPos(leftItems);
    const rightPos = assignPos(rightItems);

    // Clear the SVG and redraw entirely — direct DOM, no React state
    const svg = arrowSvgRef.current;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    function drawItem(
      item: (typeof resolved)[0],
      annotTop: number,
    ) {
      const { a, annotEl, tipX, tipY } = item;
      // `top` is NOT in the JSX style so React never clobbers this direct write
      annotEl.style.top = Math.max(0, annotTop) + "px";

      const annotBCR = annotEl.getBoundingClientRect();
      const annotL = annotBCR.left - mzRect.left;
      const annotR = annotBCR.right - mzRect.left;
      const annotMidY =
        annotBCR.top - mzRect.top + annotBCR.height / 2;

      const sx = a.side === "L" ? annotR + 6 : annotL - 6;
      const sy = annotMidY;
      const dy = Math.abs(tipY - sy);
      const d =
        dy < 8
          ? `M ${sx} ${sy} L ${tipX} ${tipY}`
          : `M ${sx} ${sy} Q ${sx + (tipX - sx) * 0.55} ${sy + (tipY - sy) * 0.45} ${tipX} ${tipY}`;

      const col = a.col === "usr" ? "#00B894" : "#6C63FF";
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", col);
      path.setAttribute("stroke-width", "1.2");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-dasharray", "3 3");
      path.setAttribute("opacity", "0.6");
      svg.appendChild(path);

      const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle",
      );
      dot.setAttribute("cx", String(tipX));
      dot.setAttribute("cy", String(tipY));
      dot.setAttribute("r", "2.8");
      dot.setAttribute("fill", col);
      dot.setAttribute("opacity", "0.75");
      svg.appendChild(dot);
    }

    leftItems.forEach((item, i) => drawItem(item, leftPos[i]));
    rightItems.forEach((item, i) =>
      drawItem(item, rightPos[i]),
    );
  }, []);

  // Initial annotation setup
  useEffect(() => {
    const t = setTimeout(
      () => scheduleAnnotUpdate("balanced", 0),
      400,
    );
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recompute on resize
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const handler = () => {
      t = setTimeout(() => computeArrows(), 150);
    };
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
      clearTimeout(t);
    };
  }, [computeArrows]);

  // Seesaw handlers
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (hasClickedRef.current) return;
      const r = e.currentTarget.getBoundingClientRect();
      targetTiltRef.current =
        (Math.max(
          0,
          Math.min(1, (e.clientX - r.left) / r.width),
        ) *
          2 -
          1) *
        18;
    },
    [],
  );
  const handleMouseLeave = useCallback(() => {
    if (!hasClickedRef.current) targetTiltRef.current = 0;
  }, []);
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      hasClickedRef.current = true;
      setHasClicked(true);
      const r = e.currentTarget.getBoundingClientRect();
      const rel = (e.clientX - r.left) / r.width;
      targetTiltRef.current =
        rel < 0.33 ? -18 * 0.85 : rel > 0.67 ? 18 * 0.85 : 0;
    },
    [],
  );
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      hasClickedRef.current = true;
      setHasClicked(true);
      const r = stageRef.current!.getBoundingClientRect();
      const rel = (e.touches[0].clientX - r.left) / r.width;
      targetTiltRef.current =
        rel < 0.33 ? -18 * 0.85 : rel > 0.67 ? 18 * 0.85 : 0;
    },
    [],
  );

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const s = (e.target as HTMLDivElement).scrollTop;
      const nz = s < 50 ? 0 : s < 300 ? 1 : 2;
      if (nz !== scrollZoneRef.current) {
        scrollZoneRef.current = nz;
        scheduleAnnotUpdate(zoneRef.current, nz);
      }
      // Real-time position tracking — runs on every scroll frame via RAF, zero React re-renders
      cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = requestAnimationFrame(() =>
        computeArrows(),
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [computeArrows],
  );

  const isBiz = zone === "biz";
  const isUsr = zone === "usr";

  const whyText = isBiz
    ? " When business tips the balance, conversion spikes short-term. But dark patterns erode trust and users leave."
    : isUsr
      ? " When user needs tip the balance, trust is earned. But without business viability, there's no product left."
      : " When balance is achieved, users enjoy using products that make businesses grow - that's where I design";

  const browserBorderColor = isBiz
    ? "rgba(108,99,255,0.35)"
    : isUsr
      ? "rgba(0,184,148,0.35)"
      : "rgba(0,0,0,0.1)";
  const whyBorderColor = isBiz
    ? "rgba(108,99,255,0.2)"
    : isUsr
      ? "rgba(0,184,148,0.2)"
      : "rgba(0,184,148,0.15)";

  const annotStyle: React.CSSProperties = {
    position: "absolute",
    width: "148px",
    transition: "opacity 0.45s ease",
    opacity: annotFaded ? 0 : 1,
    pointerEvents: "none",
    // `top` intentionally omitted — set via direct DOM in computeArrows so React never resets it
  };

  // Render annotation box (always in DOM to keep refs alive)
  const renderAnnotDiv = (
    id: "L1" | "L2" | "R1" | "R2",
    isLeft: boolean,
    refObj: React.RefObject<HTMLDivElement>,
  ) => {
    const a = activeAnnots.find((x) => x.id === id);
    return (
      <div
        ref={refObj}
        style={{
          ...annotStyle,
          ...(isLeft
            ? { left: 0, textAlign: "right" }
            : { right: 0, textAlign: "left" }),
        }}
      >
        {a && (
          <>
            <div
              style={{
                fontFamily: "'Caveat',cursive",
                fontSize: "1.2rem",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "3px",
                color: a.col === "usr" ? "#00B894" : "#6C63FF",
              }}
            >
              {a.title}
            </div>
            <div
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "0.75rem",
                color: "#6b7280",
                lineHeight: 1.5,
              }}
            >
              {a.body}
            </div>
          </>
        )}
      </div>
    );
  };

  const productPageProps = { zone, timerDisplay, registerRef };

  // Mobile simplified layout
  const renderMobileProductPage = () => (
    <div
      style={{
        fontFamily: "'Inter',sans-serif",
        background: "#fff",
        color: "#1a1a2e",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #f0f0f0",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: "0.82rem",
            fontWeight: 800,
            color: "#6C63FF",
          }}
        >
          example.
        </div>
        <button
          style={{
            padding: "4px 10px",
            borderRadius: "5px",
            fontSize: "0.62rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            background: isBiz
              ? "#ef4444"
              : isUsr
                ? "#00B894"
                : "#6C63FF",
            color: "#fff",
          }}
        >
          {isBiz
            ? "Shop Sale"
            : isUsr
              ? "Browse All"
              : "Start shopping"}
        </button>
      </div>
      <div
        style={{
          padding: "5px 12px",
          fontSize: "0.54rem",
          color: "#9ca3af",
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        <span style={{ color: "#6C63FF" }}>Home</span> ›{" "}
        <span style={{ color: "#6C63FF" }}>Ceramics</span> ›
        Handmade Speckled Bowl Set
      </div>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(135deg,#f8f7ff,#f0fdf9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 0",
          borderBottom: "1px solid #f5f5f5",
          position: "relative",
        }}
      >
        <svg
          viewBox="0 0 180 180"
          style={{
            width: "70%",
            maxWidth: "180px",
            display: "block",
          }}
        >
          <defs>
            <radialGradient
              id="mbGxm"
              cx="50%"
              cy="60%"
              r="55%"
            >
              <stop
                offset="0%"
                stopColor="rgba(108,99,255,0.06)"
              />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <linearGradient
              id="mbOxm"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E8D5C0" />
              <stop offset="50%" stopColor="#D4B08C" />
              <stop offset="100%" stopColor="#B8956A" />
            </linearGradient>
            <linearGradient
              id="mbIxm"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F4E8D8" />
              <stop offset="100%" stopColor="#C8A87A" />
            </linearGradient>
          </defs>
          <circle cx="90" cy="90" r="72" fill="url(#mbGxm)" />
          <ellipse
            cx="90"
            cy="154"
            rx="46"
            ry="7"
            fill="rgba(0,0,0,0.08)"
          />
          <path
            d="M32 86 Q32 152 90 152 Q148 152 148 86Z"
            fill="url(#mbOxm)"
          />
          <ellipse
            cx="90"
            cy="86"
            rx="58"
            ry="15"
            fill="#D4B08C"
            stroke="#C09070"
            strokeWidth="1"
          />
          <ellipse
            cx="90"
            cy="86"
            rx="52"
            ry="12"
            fill="url(#mbIxm)"
          />
          <circle
            cx="68"
            cy="108"
            r="2.5"
            fill="#8B6040"
            opacity="0.45"
          />
          <circle
            cx="115"
            cy="116"
            r="2"
            fill="#8B6040"
            opacity="0.4"
          />
          <circle
            cx="88"
            cy="132"
            r="3"
            fill="#8B6040"
            opacity="0.42"
          />
          <ellipse
            cx="74"
            cy="81"
            rx="16"
            ry="4.5"
            fill="rgba(255,255,255,0.22)"
            transform="rotate(-18,74,81)"
          />
          <path
            d="M108 74 Q108 94 124 94 Q140 94 140 74Z"
            fill="#C89870"
            opacity="0.8"
          />
          <ellipse
            cx="124"
            cy="74"
            rx="16"
            ry="4"
            fill="#D4A880"
            stroke="#B88A60"
            strokeWidth="0.8"
          />
        </svg>
        {isBiz && (
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              padding: "2px 6px",
              borderRadius: "99px",
              fontSize: "0.5rem",
              fontWeight: 700,
              background: "#ef4444",
              color: "#fff",
            }}
          >
            SALE
          </div>
        )}
        {isBiz && (
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: "5px",
              padding: "2px 6px",
              fontSize: "0.5rem",
              color: "#ef4444",
              fontWeight: 600,
            }}
          >
            ⏰ Ends soon
          </div>
        )}
        {isUsr && (
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              padding: "2px 6px",
              borderRadius: "99px",
              fontSize: "0.5rem",
              fontWeight: 700,
              background: "rgba(0,184,148,0.1)",
              color: "#00B894",
              border: "1px solid rgba(0,184,148,0.25)",
            }}
          >
            NEW
          </div>
        )}
      </div>
      <div style={{ padding: "12px 14px" }}>
        <div
          style={{
            fontSize: "0.9rem",
            fontWeight: 700,
            lineHeight: 1.35,
            marginBottom: "6px",
          }}
        >
          Handmade Speckled Ceramic Bowl Set — Set of 2, Artisan
          Stoneware
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "8px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{ color: "#f59e0b", fontSize: "0.65rem" }}
          >
            ★★★★★
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              color: "#6C63FF",
              textDecoration: "underline",
            }}
          >
            4.9
          </span>
          <span
            style={{ fontSize: "0.58rem", color: "#9ca3af" }}
          >
            · 1,247 reviews
          </span>
        </div>
        <div
          style={{
            height: "1px",
            background: "#f5f5f5",
            margin: "7px 0",
          }}
        />
        <div style={{ marginBottom: "8px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "6px",
              flexWrap: "wrap",
              marginBottom: "3px",
            }}
          >
            <span
              style={{ fontSize: "0.68rem", color: "#9ca3af" }}
            >
              $
            </span>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: isBiz ? "#ef4444" : "#1a1a2e",
              }}
            >
              68
            </span>
            {(isBiz || !isUsr) && (
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "#9ca3af",
                  textDecoration: "line-through",
                }}
              >
                $95
              </span>
            )}
            {(isBiz || !isUsr) && (
              <span
                style={{
                  fontSize: "0.52rem",
                  fontWeight: 700,
                  padding: "1px 6px",
                  borderRadius: "99px",
                  background: "#fef2f2",
                  color: "#ef4444",
                  border: "1px solid #fecaca",
                }}
              >
                Save 28%
              </span>
            )}
          </div>
        </div>
        <button
          style={{
            width: "100%",
            padding: "11px",
            borderRadius: "9px",
            border: "none",
            fontSize: "0.78rem",
            fontWeight: 700,
            cursor: "pointer",
            background: isBiz
              ? "linear-gradient(90deg,#ef4444,#dc2626)"
              : isUsr
                ? "linear-gradient(90deg,#00B894,#00897B)"
                : "linear-gradient(90deg,#6C63FF,#9b8fff)",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          {isBiz
            ? "🛒 Add to Cart — Save 28% Today"
            : "Add to Cart"}
        </button>
        <div
          style={{
            display: "flex",
            gap: "0",
            padding: "8px 0",
            borderTop: "1px solid #f5f5f5",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.54rem",
              color: "#6b7280",
              flex: 1,
              minWidth: "70px",
            }}
          >
            ↩️ 30-day returns
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.54rem",
              color: "#6b7280",
              flex: 1,
              minWidth: "70px",
            }}
          >
            🔒 Secure payment
          </div>
        </div>
        {isBiz && (
          <div
            style={{
              padding: "7px 10px",
              background: "#fff8f0",
              border: "1px solid #fed7aa",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              borderRadius: "6px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontSize: "0.56rem",
                color: "#ea580c",
                flex: 1,
              }}
            >
              ● <strong>23 people</strong> have this in cart
            </span>
            <button
              style={{
                fontSize: "0.52rem",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "99px",
                background: "#ea580c",
                color: "#fff",
                border: "none",
              }}
            >
              Buy now
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes tp{0%,100%{opacity:1}50%{opacity:0.45}}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.8)}}
        .tpulse{animation:tp 1s infinite;}
        .pulse-dot{animation:pulse 1.2s infinite;}
        .pdp-scroll::-webkit-scrollbar{width:4px;}
        .pdp-scroll::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:99px;}
        .pdp-scroll-hidden{scrollbar-width:none;-ms-overflow-style:none;}
        .pdp-scroll-hidden::-webkit-scrollbar{display:none;}
        @media(max-width:900px){.seesaw-annots{display:none!important;}}
        @keyframes glowSweep {
  0% { transform: translateX(-780px); opacity: 0; }
  30% { opacity: 0.7; }
  70% { opacity: 0.7; }
  100% { transform: translateX(780px); opacity: 0; }
}
@keyframes cursorClick {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  25% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  60% { opacity: 1; transform: translate(-50%, -60%) scale(0.9); }
  80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
}
.cursor-hint { animation: cursorClick 1s ease forwards; }

@keyframes balancePulse {
  0% { opacity: 0; stroke-width: 2; }
  50% { opacity: 0.8; stroke-width: 6; }
  100% { opacity: 0; stroke-width: 2; }
}
.balance-glow { animation: balancePulse 5s ease-in-out infinite; }

      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "120px 0px 80px",
          background:
            "linear-gradient(180deg,rgba(108,99,255,0.07) 10%,#f4f3ff 10%,#f4f3ff 20%,rgba(0,184,148,0.05) 100%)",
          fontFamily: "'Inter',system-ui,sans-serif",
          color: "#1a1a2e",
        }}
      >
        {/* HEADLINE */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "16px",
            maxWidth: "720px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.8rem,4.5vw,2.9rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              marginBottom: "14px",
            }}
          >
            Designing for{" "}
            <span style={{ color: "#00B894" }}>users,</span>
            <br />
            Strategizing for{" "}
            <span style={{ color: "#6C63FF" }}>
              businesses.
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1.2rem,2vw,1.5rem)",
              fontWeight: 500,
              color: "#1a1a2e",
              marginBottom: "8px",
              lineHeight: 1.4,
            }}
          >
            I create experiences that balance
            empathy&nbsp;and&nbsp;impact!
          </p>
          <p
            style={{
              fontSize: "clamp(0.78rem,2vw,1rem)",
              color: "#6b7280",
              lineHeight: 1.6,
            }}
          >
            What happens otherwise? Choose a side on the seesaw
            & find&nbsp;live&nbsp;on the example webpage.
          </p>
        </div>

        {/* SEESAW */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <div
            ref={stageRef}
            style={{
              width: "100%",
              height: "200px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
            // onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onTouchStart={handleTouchStart}
          >
            {/* Tilt hint */}
            <div
              style={{
                position: "absolute",
                top: "18px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                pointerEvents: "none",
                zIndex: 10,
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "'Caveat',cursive",
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  color: "#333",
                  letterSpacing: "0.5px",
                  lineHeight: 1,
                }}
              >
                Click to change mode
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "80px",
                  marginTop: "-2px",
                }}
              >
                <svg
                  width="52"
                  height="28"
                  viewBox="0 0 52 28"
                  fill="none"
                >
                  <path
                    d="M 48 4 Q 32 8 18 20"
                    stroke="#444"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 10 26 L 20 22 M 10 26 L 14 16"
                    stroke="#444"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <svg
                  width="52"
                  height="28"
                  viewBox="0 0 52 28"
                  fill="none"
                >
                  <path
                    d="M 4 4 Q 20 8 34 20"
                    stroke="#444"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 42 26 L 32 22 M 42 26 L 38 16"
                    stroke="#444"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Seesaw SVG */}
            <svg
              ref={seesawSvgRef}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 340"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="woodFace"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F0C080" />
                  <stop offset="15%" stopColor="#E0A860" />
                  <stop offset="50%" stopColor="#C8824A" />
                  <stop offset="85%" stopColor="#D89A60" />
                  <stop offset="100%" stopColor="#B06030" />
                </linearGradient>
                <linearGradient
                  id="woodBottom"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#9A5020" />
                  <stop offset="100%" stopColor="#7A3810" />
                </linearGradient>
                <linearGradient
                  id="fulcrumFace"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#E09050" />
                  <stop offset="50%" stopColor="#C07030" />
                  <stop offset="100%" stopColor="#8A4810" />
                </linearGradient>
                <linearGradient
                  id="fulcrumLeft"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#A05828" />
                  <stop offset="100%" stopColor="#C07030" />
                </linearGradient>
                <linearGradient
                  id="baseGrad"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#C07030" />
                  <stop offset="100%" stopColor="#8A4810" />
                </linearGradient>
                <linearGradient
                  id="pinMetal"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#D0D8E8" />
                  <stop offset="40%" stopColor="#9098A8" />
                  <stop offset="100%" stopColor="#606878" />
                </linearGradient>
                <radialGradient
                  id="usrBallG"
                  cx="38%"
                  cy="32%"
                  r="62%"
                >
                  <stop offset="0%" stopColor="#7EEEDD" />
                  <stop offset="35%" stopColor="#20C8A8" />
                  <stop offset="70%" stopColor="#00A888" />
                  <stop offset="100%" stopColor="#007860" />
                </radialGradient>
                <radialGradient
                  id="bizBallG"
                  cx="38%"
                  cy="32%"
                  r="62%"
                >
                  <stop offset="0%" stopColor="#B0A8FF" />
                  <stop offset="35%" stopColor="#7C74F8" />
                  <stop offset="70%" stopColor="#5848E8" />
                  <stop offset="100%" stopColor="#3828C8" />
                </radialGradient>
                <radialGradient
                  id="gndShadow"
                  cx="50%"
                  cy="0%"
                  r="50%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(0,0,0,0.14)"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(0,0,0,0)"
                  />
                </radialGradient>
                <linearGradient
                  id="grain1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                  <stop
                    offset="28%"
                    stopColor="rgba(80,30,0,0.07)"
                  />
                  <stop
                    offset="55%"
                    stopColor="rgba(0,0,0,0)"
                  />
                  <stop
                    offset="78%"
                    stopColor="rgba(80,30,0,0.05)"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(0,0,0,0)"
                  />
                </linearGradient>
                <filter
                  id="softShadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="5"
                    stdDeviation="8"
                    floodColor="rgba(0,0,0,0.18)"
                  />
                </filter>
                <filter
                  id="ballShadow"
                  x="-30%"
                  y="-30%"
                  width="160%"
                  height="160%"
                >
                  <feDropShadow
                    dx="0"
                    dy="6"
                    stdDeviation="8"
                    floodColor="rgba(0,0,0,0.22)"
                  />
                </filter>
                <filter
                  id="plankShadow"
                  x="-5%"
                  y="-30%"
                  width="110%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="6"
                    floodColor="rgba(0,0,0,0.18)"
                  />
                </filter>
                <radialGradient
                  id="seesawGlow"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(255,255,255,0.6)"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(255,255,255,0)"
                  />
                </radialGradient>
              </defs>
              <ellipse
                cx="450"
                cy="322"
                rx="100"
                ry="14"
                fill="url(#gndShadow)"
                opacity="0.7"
              />
              {/* Plants left */}
              <g transform="translate(22,232)" opacity="0.6">
                <line
                  x1="0"
                  y1="60"
                  x2="0"
                  y2="10"
                  stroke="#6B9060"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M0 42 Q-14 28-18 10 Q-8 26 0 30 Q8 26 18 10 Q14 28 0 42Z"
                  fill="#8DB885"
                />
                <path
                  d="M0 54 Q-10 44-14 32 Q-6 44 0 48"
                  fill="#72A070"
                />
                <path
                  d="M0 54 Q10 44 14 32 Q6 44 0 48"
                  fill="#72A070"
                />
                <line
                  x1="26"
                  y1="60"
                  x2="26"
                  y2="32"
                  stroke="#6B9060"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path
                  d="M26 50 Q16 40 14 28 Q20 40 26 44 Q32 40 38 28 Q36 40 26 50Z"
                  fill="#9DC495"
                  opacity="0.85"
                />
              </g>
              {/* Plants right */}
              <g transform="translate(854,232)" opacity="0.6">
                <line
                  x1="0"
                  y1="60"
                  x2="0"
                  y2="10"
                  stroke="#6B9060"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M0 42 Q-14 28-18 10 Q-8 26 0 30 Q8 26 18 10 Q14 28 0 42Z"
                  fill="#A8C8A5"
                />
                <path
                  d="M0 54 Q-10 44-14 32 Q-6 44 0 48"
                  fill="#88B085"
                />
                <path
                  d="M0 54 Q10 44 14 32 Q6 44 0 48"
                  fill="#88B085"
                />
                <line
                  x1="-26"
                  y1="60"
                  x2="-26"
                  y2="32"
                  stroke="#6B9060"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path
                  d="M-26 50 Q-36 40-38 28 Q-32 40-26 44 Q-20 40-14 28 Q-16 40-26 50Z"
                  fill="#B8D4B5"
                  opacity="0.85"
                />
              </g>
              <line
                x1="60"
                y1="324"
                x2="840"
                y2="324"
                stroke="rgba(0,0,0,0.09)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Fulcrum */}
              <g filter="url(#softShadow)">
                <rect
                  x="406"
                  y="304"
                  width="88"
                  height="16"
                  rx="5"
                  fill="url(#baseGrad)"
                />
                <rect
                  x="406"
                  y="304"
                  width="88"
                  height="5"
                  rx="3"
                  fill="rgba(255,255,255,0.15)"
                />
                <path
                  d="M450 210 L406 304 L450 304Z"
                  fill="url(#fulcrumLeft)"
                />
                <path
                  d="M450 210 L494 304 L406 304Z"
                  fill="url(#fulcrumFace)"
                />
                <path
                  d="M450 216 L490 302"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle
                  cx="450"
                  cy="214"
                  r="14"
                  fill="url(#baseGrad)"
                />
                <circle
                  cx="450"
                  cy="214"
                  r="10"
                  fill="url(#pinMetal)"
                />
                <circle
                  cx="450"
                  cy="214"
                  r="6"
                  fill="#808898"
                />
                <circle
                  cx="450"
                  cy="214"
                  r="3"
                  fill="#505868"
                />
                <circle
                  cx="447"
                  cy="211"
                  r="2"
                  fill="rgba(255,255,255,0.55)"
                />
              </g>
              {/* Rotating group */}
              <g ref={rotGroupRef}>
                <g filter="url(#plankShadow)">
                  <rect
                    x="60"
                    y="215"
                    width="780"
                    height="12"
                    rx="4"
                    fill="url(#woodBottom)"
                  />
                  <rect
                    x="60"
                    y="200"
                    width="780"
                    height="20"
                    rx="5"
                    fill="url(#woodFace)"
                  />
                  <rect
                    x="60"
                    y="200"
                    width="780"
                    height="20"
                    rx="5"
                    fill="url(#grain1)"
                  />
                  <rect
                    x="60"
                    y="200"
                    width="780"
                    height="4"
                    rx="3"
                    fill="rgba(255,255,255,0.28)"
                  />
                  <rect
                    x="60"
                    y="200"
                    width="14"
                    height="27"
                    rx="4"
                    fill="rgba(80,30,0,0.2)"
                  />
                  <rect
                    x="826"
                    y="200"
                    width="14"
                    height="27"
                    rx="4"
                    fill="rgba(80,30,0,0.2)"
                  />
                </g>
                <rect
                  ref={balanceGlowRef}
                  className="balance-glow"
                  x="60"
                  y="198"
                  width="780"
                  height="24"
                  rx="5"
                  fill="none"
                  stroke="rgba(0,184,148,0.6)"
                  strokeWidth="3"
                />
                <rect
                  x="60"
                  y="200"
                  width="780"
                  height="20"
                  rx="5"
                  fill="url(#seesawGlow)"
                  style={{
                    opacity: 0.7,
                    animation:
                      "glowSweep 3s ease-in-out infinite",
                  }}
                />
                {/* USR ball */}
                <g filter="url(#ballShadow)">
                  <ellipse
                    cx="160"
                    cy="199"
                    rx="30"
                    ry="7"
                    fill="rgba(0,0,0,0.14)"
                  />
                  <circle
                    cx="160"
                    cy="161"
                    r="38"
                    fill="url(#usrBallG)"
                  />
                  <ellipse
                    cx="146"
                    cy="147"
                    rx="14"
                    ry="10"
                    fill="rgba(255,255,255,0.32)"
                    transform="rotate(-28,146,147)"
                  />
                  <circle
                    cx="141"
                    cy="142"
                    r="5"
                    fill="rgba(255,255,255,0.50)"
                  />
                  <circle
                    cx="160"
                    cy="161"
                    r="38"
                    fill="none"
                    stroke="rgba(0,80,60,0.18)"
                    strokeWidth="2.5"
                  />
                  <text
                    x="160"
                    y="155"
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.92)"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="Inter,system-ui,sans-serif"
                  >
                    USER
                  </text>
                  <text
                    x="160"
                    y="172"
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.72)"
                    fontSize="9"
                    fontFamily="Inter,system-ui,sans-serif"
                  >
                    mode
                  </text>
                </g>
                {/* BIZ ball */}
                <g filter="url(#ballShadow)">
                  <ellipse
                    cx="740"
                    cy="199"
                    rx="30"
                    ry="7"
                    fill="rgba(0,0,0,0.14)"
                  />
                  <circle
                    cx="740"
                    cy="161"
                    r="38"
                    fill="url(#bizBallG)"
                  />
                  <ellipse
                    cx="726"
                    cy="147"
                    rx="14"
                    ry="10"
                    fill="rgba(255,255,255,0.32)"
                    transform="rotate(-28,726,147)"
                  />
                  <circle
                    cx="721"
                    cy="142"
                    r="5"
                    fill="rgba(255,255,255,0.50)"
                  />
                  <circle
                    cx="740"
                    cy="161"
                    r="38"
                    fill="none"
                    stroke="rgba(20,0,100,0.18)"
                    strokeWidth="2.5"
                  />
                  <text
                    x="740"
                    y="155"
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.92)"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="Inter,system-ui,sans-serif"
                  >
                    BIZ
                  </text>
                  <text
                    x="740"
                    y="172"
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.72)"
                    fontSize="9"
                    fontFamily="Inter,system-ui,sans-serif"
                  >
                    mode
                  </text>
                </g>
              </g>
            </svg>

            {hintSide && (
              <div
                className="cursor-hint"
                style={{
                  position: "absolute",
                  top: "62%",
                  left: hintSide === "left" ? "31%" : "69%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 30,
                  fontSize: "2.8rem",
                  filter:
                    "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                }}
              >
                👆
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "6px 0",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            color: isBiz
              ? "#6C63FF"
              : isUsr
                ? "#00B894"
                : "#9ca3af",
            transition: "color 0.4s",
            marginBottom: "16px",
          }}
        >
          {isBiz
            ? "Now showing: Business-first mode"
            : isUsr
              ? "Now showing: User-first mode"
              : "Now showing: Balanced mode"}
        </div>

        {/* MOCK ZONE */}
        <div
          ref={mockZoneRef}
          style={{
            width: "100%",
            maxWidth: "1050px",
            position: "relative",
            marginBottom: "16px",
          }}
        >
          {/* ANNOTATION LAYER — always rendered for refs, hidden on small screens */}
          <div
            className="seesaw-annots"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 20,
              overflow: "visible",
            }}
          >
            {renderAnnotDiv("L1", true, annotL1Ref)}
            {renderAnnotDiv("L2", true, annotL2Ref)}
            {renderAnnotDiv("L3", true, annotL3Ref)}
            {renderAnnotDiv("R1", false, annotR1Ref)}
            {renderAnnotDiv("R2", false, annotR2Ref)}
            {renderAnnotDiv("R3", false, annotR3Ref)}
            {/* Arrow SVG — written directly via arrowSvgRef in computeArrows, not React state */}
            <svg
              ref={arrowSvgRef}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                overflow: "visible",
                zIndex: 21,
              }}
            />
          </div>

          {/* DESKTOP FRAME — always rendered, conditionally visible */}
          <div
            style={{
              display:
                deviceType === "desktop" ? "block" : "none",
              padding: "0 162px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                ref={browserShellRef}
                style={{
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                  borderTop: `1.5px solid ${browserBorderColor}`,
                  borderLeft: `1.5px solid ${browserBorderColor}`,
                  borderRight: `1.5px solid ${browserBorderColor}`,
                  borderBottom: "none",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.11)",
                  overflow: "hidden",
                  background: "#fff",
                  transition: "border-color 0.5s",
                }}
              >
                {/* Browser chrome */}
                <div
                  style={{
                    background: "#f1f3f5",
                    padding: "8px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}>
                    {[
                      ["#ff5f57"],
                      ["#febc2e"],
                      ["#28c840"],
                    ].map(([c]) => (
                      <div
                        key={c}
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: c,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      padding: "4px 10px",
                      fontSize: "0.66rem",
                      color: "#6b7280",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <span
                      style={{
                        color: "#00B894",
                        fontSize: "0.6rem",
                      }}
                    >
                      🔒
                    </span>
                    <span>
                      example.com/
                      <strong>
                        ceramics/handmade-bowl-set
                      </strong>
                    </span>
                  </div>
                </div>
                {/* Scrollable product page */}
                <div
                  ref={pageScrollRef}
                  className="pdp-scroll"
                  style={{
                    height: "480px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    background: "#fff",
                    scrollbarWidth: "thin",
                    scrollbarColor:
                      "rgba(0,0,0,0.15) transparent",
                  }}
                  onScroll={handleScroll}
                >
                  <ProductPageContent
                    {...productPageProps}
                    svgSuffix="d"
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "16px",
                  background: "#e8e8e8",
                  borderRadius: "0 0 8px 8px",
                  borderTop: "none",
                  borderLeft: `1.5px solid ${browserBorderColor}`,
                  borderRight: `1.5px solid ${browserBorderColor}`,
                  borderBottom: `1.5px solid ${browserBorderColor}`,
                }}
              />
              <div
                style={{
                  width: "56px",
                  height: "22px",
                  background:
                    "linear-gradient(to bottom,#e0e0e0,#ccc)",
                }}
              />
              <div
                style={{
                  width: "130px",
                  height: "9px",
                  background: "#c8c8c8",
                  borderRadius: "0 0 6px 6px",
                }}
              />
            </div>
          </div>

          {/* TABLET FRAME */}
          {deviceType === "tablet" && (
            <div
              style={{
                width: "100%",
                maxWidth: "560px",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(160deg,#f2f2f2 0%,#e6e6e6 50%,#dadada 100%)",
                  borderRadius: "24px",
                  padding: "20px 14px 16px",
                  position: "relative",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.9) inset,0 -1px 0 rgba(0,0,0,0.08) inset,0 12px 40px rgba(0,0,0,0.13)",
                  border: "1px solid rgba(0,0,0,0.10)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    paddingBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle at 35% 35%,#d8d8d8,#b8b8b8)",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      alignItems: "center",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: "3px",
                          height: "3px",
                          borderRadius: "50%",
                          background: "#c0c0c0",
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle at 35% 35%,#d8d8d8,#b8b8b8)",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  />
                </div>
                <div
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#fff",
                    border: "1.5px solid rgba(0,0,0,0.09)",
                    boxShadow:
                      "0 1px 4px rgba(0,0,0,0.07) inset",
                  }}
                >
                  <div
                    className="pdp-scroll"
                    style={{
                      height: "440px",
                      overflowY: "auto",
                      overflowX: "hidden",
                      scrollbarWidth: "thin",
                      scrollbarColor:
                        "rgba(0,0,0,0.10) transparent",
                    }}
                    onScroll={handleScroll}
                  >
                    <ProductPageContent
                      zone={zone}
                      timerDisplay={timerDisplay}
                      svgSuffix="t"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "4px",
                      borderRadius: "99px",
                      background: "rgba(0,0,0,0.14)",
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* MOBILE FRAME */}
          {deviceType === "mobile" && (
            <div
              style={{
                width: "100%",
                maxWidth: "280px",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(160deg,#f2f2f2 0%,#e6e6e6 50%,#dadada 100%)",
                  borderRadius: "46px",
                  padding: "16px 10px 14px",
                  position: "relative",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.9) inset,0 -1px 0 rgba(0,0,0,0.08) inset,0 12px 40px rgba(0,0,0,0.13)",
                  border: "1px solid rgba(0,0,0,0.10)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "90px",
                      height: "6px",
                      borderRadius: "99px",
                      background: "rgba(0,0,0,0.12)",
                    }}
                  />
                </div>
                <div
                  style={{
                    borderRadius: "30px",
                    overflow: "hidden",
                    background: "#fff",
                    border: "1.5px solid rgba(0,0,0,0.09)",
                    boxShadow:
                      "0 1px 4px rgba(0,0,0,0.07) inset",
                  }}
                >
                  <div
                    className="pdp-scroll-hidden"
                    style={{
                      height: "480px",
                      overflowY: "auto",
                      overflowX: "hidden",
                    }}
                    onScroll={handleScroll}
                  >
                    <MobileProductPage
                      zone={zone}
                      timerDisplay={timerDisplay}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "90px",
                      height: "4px",
                      borderRadius: "99px",
                      background: "rgba(0,0,0,0.14)",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* WHY STRIP */}
        <div
          style={{
            width: "100%",
            maxWidth: "860px",
            marginTop: "16px",
            textAlign: "center",
            fontSize: "clamp(0.72rem,1.3vw,0.82rem)",
            color: "#6b7280",
            lineHeight: 1.6,
            padding: "14px 24px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.75)",
            border: `1px solid ${whyBorderColor}`,
            transition: "border-color 0.5s",
          }}
        >
          <strong style={{ color: "#1a1a2e" }}>
            How this impacts →
          </strong>
          <span>{whyText}</span>
        </div>
      </div>
    </>
  );
}