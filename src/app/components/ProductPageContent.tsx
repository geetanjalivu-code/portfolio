import React from 'react';

export type Zone = 'biz' | 'balanced' | 'usr';

interface Props {
  zone: Zone;
  timerDisplay: string;
  svgSuffix: string;
  registerRef?: (id: string, el: HTMLElement | null) => void;
}

function BowlSvg({ s }: { s: string }) {
  return (
    <svg viewBox="0 0 180 180" width="100%" style={{ maxHeight: '250px' }}>
      <defs>
        <radialGradient id={`bGx_${s}`} cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="rgba(108,99,255,0.06)" /><stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id={`bOx_${s}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5C0" /><stop offset="50%" stopColor="#D4B08C" /><stop offset="100%" stopColor="#B8956A" />
        </linearGradient>
        <linearGradient id={`bIx_${s}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F4E8D8" /><stop offset="100%" stopColor="#C8A87A" />
        </linearGradient>
      </defs>
      <circle cx="90" cy="90" r="72" fill={`url(#bGx_${s})`} />
      <ellipse cx="90" cy="154" rx="46" ry="7" fill="rgba(0,0,0,0.08)" />
      <path d="M32 86 Q32 152 90 152 Q148 152 148 86Z" fill={`url(#bOx_${s})`} />
      <ellipse cx="90" cy="86" rx="58" ry="15" fill="#D4B08C" stroke="#C09070" strokeWidth="1" />
      <ellipse cx="90" cy="86" rx="52" ry="12" fill={`url(#bIx_${s})`} />
      <circle cx="68" cy="108" r="2.5" fill="#8B6040" opacity="0.45" />
      <circle cx="115" cy="116" r="2" fill="#8B6040" opacity="0.4" />
      <circle cx="88" cy="132" r="3" fill="#8B6040" opacity="0.42" />
      <ellipse cx="74" cy="81" rx="16" ry="4.5" fill="rgba(255,255,255,0.22)" transform="rotate(-18,74,81)" />
      <path d="M108 74 Q108 94 124 94 Q140 94 140 74Z" fill="#C89870" opacity="0.8" />
      <ellipse cx="124" cy="74" rx="16" ry="4" fill="#D4A880" stroke="#B88A60" strokeWidth="0.8" />
    </svg>
  );
}

export function ProductPageContent({ zone, timerDisplay, svgSuffix, registerRef }: Props) {
  const rr = (id: string) => (el: HTMLElement | null) => registerRef?.(id, el);
  const brandColor = '#2D7DD2';

  const isBiz = zone === 'biz';
  const isUsr = zone === 'usr';
  const isBal = zone === 'balanced';

  // Nav

  // Badges & timer
  const showSale = isBiz;
  const showBest = isBal;
  const showNew = isUsr;
  const showTimer = isBiz;
  const showBrand = !isUsr;

  // Tag — removed from biz view per design decision
  const showTag = false;

  // Review ext
  const rExtText = isBiz ? '| #1 in Ceramics' : isUsr ? '(1,189 verified)' : '';
  const rExtColor = isBiz ? '#d97706' : '#00B894';
  const showRExt = isBiz || isUsr;

  // Price
  const priceBigColor = '#1a1a2e';
  const showPriceOrig = isBiz || isBal;
  const showPriceSave = isBiz || isBal;
  const showPriceEmi = isBiz;

  // Delivery
  const showDelReturn = !isBiz;
  const showDelNote = isBiz || isUsr;
  const delNoteHtml = isBiz ? <><strong>Limited time:</strong> ships today</> : <>Ships in foam. Tracking within 1 hour.</>;

  // Stock
  const stockDotBg = isBiz ? '#f97316' : '#00B894';
  const stockText = isUsr ? 'In stock · Ships within 2 days' : 'In stock · Free shipping';
  const stockTextColor = isBiz ? '#ea580c' : '#6b7280';
  const showStockLine = !isBiz;
  const showScarcity = isBiz;

  // Features
  const featKey = isBiz ? 'biz' : isUsr ? 'usr' : 'bal';
  const featCfg: Record<string, { title: string; color: string; b: { bg: string; c: string; s: string }; items: string[] }> = {
    biz: { title: 'Why customers love it', color: '#374151', b: { bg: 'rgba(108,99,255,0.1)', c: '#6C63FF', s: '★' }, items: ['Award-winning glaze — featured in Vogue Living', 'Handcrafted by master ceramicists since 2018', 'Over 10,000 bowl sets sold worldwide', "This week's #1 bestselling bowl set"] },
    bal: { title: 'Key features', color: '#374151', b: { bg: 'rgba(0,0,0,0.06)', c: '#6b7280', s: '✓' }, items: ['Hand-thrown stoneware — each piece uniquely crafted', 'Food-safe glaze · dishwasher & microwave safe', 'Set of 2 · 6" diameter, perfect for soup or salad', 'Ships in protective foam packaging'] },
    usr: { title: 'What to know before buying', color: '#374151', b: { bg: 'rgba(0,184,148,0.1)', c: '#00B894', s: 'i' }, items: ['Each bowl varies slightly — natural handmade variation', 'Colour may look different on screen vs. real life', 'Heavier than machine-made (~380g) — intentional', 'Small glaze variations are normal, not defects'] },
  };
  const feat = featCfg[featKey];

  // Add-ons
  const showAddons = isBiz || isBal;
  const addonTitle = isBiz ? 'Customers also added' : 'Optional extras';
  const addonTicked = isBiz;
  const addons = [
    { name: 'Gift wrapping', sub: 'Tissue paper & ribbon', price: '+$6' },
    { name: 'Care instruction card', sub: 'Printed card included', price: '+$2' },
  ];

  // CTAs
  const ctaPText = isBiz ? '🛒 Add to Cart — Save 28% Today' : 'Add to Cart';
  const ctaPBg = `linear-gradient(90deg,${brandColor},${brandColor}dd)`;
  const showCtaS = isBiz || isBal;
  const ctaSText = isBiz ? '⚡ Buy Now — Offer Ends Soon' : '♡ Add to Wishlist';
  const ctaSBorder = isBiz ? '1.5px solid brandColor' : '1.5px solid #e5e7eb';
  const ctaSColor = isBiz ? brandColor : '#374151';
  const showCtaNote = isBal || isUsr;
  const ctaNoteText = isBal ? '🔒 Secure checkout · Free 30-day returns' : '🔒 Encrypted payment · 30-day returns · Data never shared';

  // About
  const aboutItems: Record<string, string[]> = {
    biz: ['Award-winning glaze featured in Vogue Living', 'Handcrafted by master ceramicists — a gift to treasure', '10,000+ bowl sets sold worldwide', 'Beautifully packaged, ready to gift'],
    bal: ['Hand-thrown stoneware — each piece slightly unique', 'Food-safe glaze · dishwasher & microwave safe', 'Set of 2 · 6" diameter, perfect for soup or salad', 'Ships in protective foam packaging'],
    usr: ['Each bowl varies — handmade means natural variation', 'Colour may look different on screen vs. real life', 'Weight: ~380g per bowl — heavier than machine-made', 'Kiln-fired at 1280°C — genuinely food-safe and durable'],
  };

  // Reviews
  const showRevBars = isUsr;
  const reviewBody1 = isBiz
    ? 'Absolutely stunning. Best purchase this year. Already bought 3 sets!'
    : isBal
    ? 'Really beautiful bowls. Speckled glaze even nicer in person. Packaged perfectly.'
    : 'Gorgeous bowls — slightly smaller than I expected. Glaze exactly as described.';
  const showVerified = isBal || isUsr;
  const showHelp1 = isBal || isUsr;
  const showHelp2 = isUsr;
  const showReview2 = isBal || isUsr;

  // Related
  const relatedTitle = isBiz ? 'Customers also bought' : isUsr ? 'Compare similar items' : 'You might also like';

  // Trust & Urgency
  const showPrivacy = isBal || isUsr;
  const showUrgency = isBiz;

  const dn = (show: boolean): React.CSSProperties => ({ display: show ? '' : 'none' });
  // hip = "hide in place": collapses element to zero height but keeps it in DOM layout
  // so annotation arrows can still target its position (matches HTML .hide class behaviour)
  const hip = (show: boolean): React.CSSProperties => show ? {} : {
    opacity: 0, maxHeight: 0, overflow: 'hidden', pointerEvents: 'none',
    marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderWidth: 0,
  };
  const bizColor = brandColor;
  const usrColor = brandColor;

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", background: '#fff', color: '#1a1a2e' }}>
      {/* NAV */}
      <div style={{ background: '#fff', padding: '9px 18px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, zIndex: 10 }}>
  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: brandColor, flexShrink: 0 }}>example.</div>
  <input style={{ flex: 1, background: '#f8f8f8', border: '1px solid #e8e8e8', borderRadius: '6px', padding: '5px 9px', fontSize: '0.66rem', color: '#9ca3af', fontFamily: "'Inter',sans-serif" }} placeholder="🔍  Search handmade goods…" readOnly />
  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
    <span style={{ fontSize: '0.66rem', color: '#6b7280', whiteSpace: 'nowrap' }}>Featured</span>
    <span style={{ fontSize: '0.66rem', color: '#6b7280', whiteSpace: 'nowrap' }}>Categories</span>
    <span style={{ fontSize: '0.66rem', color: '#6b7280', whiteSpace: 'nowrap', fontWeight: 400 }}>Deals</span>
    <div style={{ position: 'relative', fontSize: '0.8rem', cursor: 'pointer' }}>
      🛒
      <div style={{ position: 'absolute', top: '-5px', right: '-5px', background: brandColor, color: '#fff', borderRadius: '99px', width: '13px', height: '13px', fontSize: '0.46rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
    </div>
    <div style={{ width: 24, height: 24, borderRadius: '50%', background: brandColor, color: '#fff', fontSize: '0.6rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>G</div>
  </div>
</div>

      {/* BREADCRUMB */}
      <div style={{ padding: '5px 18px', fontSize: '0.58rem', color: '#9ca3af', borderBottom: '1px solid #f8f8f8' }}>
        <span style={{ color: bizColor }}>Home</span> › <span style={{ color: bizColor }}>Ceramics</span> › <span style={{ color: bizColor }}>Bowls</span> › Handmade Speckled Bowl Set
      </div>

      {/* MAIN GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '14px 18px', gap: 0 }}>
        {/* LEFT */}
        <div style={{ paddingRight: '16px', borderRight: '1px solid #f5f5f5' }}>
          <div ref={rr('pImgBox')} style={{ width: '100%', aspectRatio: '4/3', maxHeight: '265px', background: 'linear-gradient(135deg,#f8f7ff,#f0fdf9)', borderRadius: '10px', border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', marginBottom: '7px' }}>
            <BowlSvg s={svgSuffix} />
            <div style={{ position: 'absolute', top: '7px', left: '7px', display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-start' }}>
              <div ref={rr('bdgSale')} style={{ ...dn(showSale), padding: '2px 7px', borderRadius: '99px', fontSize: '0.54rem', fontWeight: 700, background: '#f0fdf4', color: '#16a34a', border: '1px solid rgba(0,184,148,0.25)' }}>SALE</div>
              <div ref={rr('bdgBest')} style={{ ...dn(showBest), padding: '2px 7px', borderRadius: '99px', fontSize: '0.54rem', fontWeight: 700, background: 'rgba(245,158,11,0.15)', color: '#d97706', border: '1px solid rgba(245,158,11,0.3)' }}>BESTSELLER</div>
              <div ref={rr('bdgNew')} style={{ ...dn(showNew), padding: '2px 7px', borderRadius: '99px', fontSize: '0.54rem', fontWeight: 700, background: '#f0fdf4', color: '#16a34a', border: '1px solid rgba(0,184,148,0.25)' }}>NEW</div>
            </div>
            <div ref={rr('pTimer')} style={{ ...dn(showTimer), position: 'absolute', bottom: '7px', right: '7px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '6px', padding: '2px 7px', fontSize: '0.55rem', color: '#ef4444', fontWeight: 600 }}>
              ⏰ Ends <span style={{ animation: 'tp 1s infinite' }}>{timerDisplay}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            {['🥣', '📦', '🎨', '🏺'].map((e, i) => (
              <div key={i} style={{ width: '34px', height: '34px', borderRadius: '6px', background: '#f8f8f8', border: `1.5px solid ${i === 0 ? bizColor : '#e8e8e8'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', cursor: 'pointer', flexShrink: 0 }}>{e}</div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ paddingLeft: '16px' }}>
          <span ref={rr('pBrand')} style={{ ...dn(showBrand), fontSize: '0.57rem', color: bizColor, textDecoration: 'underline', cursor: 'pointer', marginBottom: '4px', display: 'block' }}>Visit the ArtisanCo. Shop</span>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '5px', marginBottom: '6px' }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.3, flex: 1 }}>Handmade Speckled Ceramic Bowl Set — Set of 2, Artisan Stoneware</div>
            <div ref={rr('pTag')} style={{ ...dn(showTag), fontSize: '0.52rem', fontWeight: 700, padding: '2px 7px', borderRadius: '4px', whiteSpace: 'nowrap', flexShrink: 0, marginTop: '2px', background: 'rgba(245,158,11,0.15)', color: '#d97706', border: '1px solid rgba(245,158,11,0.3)' }}>BESTSELLER</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span style={{ color: '#f59e0b', fontSize: '0.65rem' }}>★★★★★</span>
            <span style={{ fontSize: '0.6rem', color: bizColor, textDecoration: 'underline' }}>4.9</span>
            <span ref={rr('pRCnt')} style={{ fontSize: '0.58rem', color: '#9ca3af' }}>· 1,247 reviews</span>
            <span ref={rr('pRExt')} style={{ ...dn(showRExt), fontSize: '0.56rem', color: rExtColor }}>{rExtText}</span>
          </div>
          <div style={{ height: '1px', background: '#f5f5f5', margin: '7px 0' }} />

          {/* PRICE */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexWrap: 'wrap', marginBottom: '3px' }}>
              <span style={{ fontSize: '0.68rem', color: '#9ca3af' }}>$</span>
              <span ref={rr('pPriceBig')} style={{ fontSize: '1.45rem', fontWeight: 800, color: priceBigColor, transition: 'color 0.4s' }}>68</span>
              <span ref={rr('pPriceOrig')} style={{ ...dn(showPriceOrig), fontSize: '0.68rem', color: '#9ca3af', textDecoration: 'line-through' }}>$95</span>
              <span ref={rr('pPriceSave')} style={{ ...dn(showPriceSave), fontSize: '0.54rem', fontWeight: 700, padding: '1px 6px', borderRadius: '99px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}>Save 28%</span>
            </div>
            <div ref={rr('pPriceNote')} style={{ fontSize: '0.58rem', color: '#9ca3af' }}>
              {isBiz ? <>💳 <span style={{ color: bizColor, textDecoration: 'underline', cursor: 'pointer' }}>Pay in 4 installments</span></> : isBal ? <>Includes all taxes. <span style={{ color: bizColor, textDecoration: 'underline' }}>Free shipping.</span></> : 'Price includes all taxes. No hidden fees.'}
            </div>
            <div ref={rr('pPriceEmi')} style={{ ...dn(showPriceEmi), fontSize: '0.58rem', color: '#9ca3af', marginTop: '2px' }}>
              <strong style={{ color: '#1a1a2e' }}>Or 3 × $22.67</strong> with Afterpay
            </div>
          </div>

          {/* DELIVERY */}
          <div style={{ marginBottom: '12px', padding: '7px 9px', borderRadius: '8px', border: '1px solid #f0f0f0', background: '#fafafa' }}>
            <div style={{ display: 'flex', gap: '5px', fontSize: '0.6rem', marginBottom: '3px', alignItems: 'flex-start', color: '#6b7280' }}>
              <span>🚚</span>
              <div ref={rr('pDelMain')}>
                {isBiz ? <><strong style={{ color: usrColor }}>FREE tomorrow</strong> — Order in <strong>2h 14m</strong></> : isUsr ? <><span style={{ color: usrColor }}>Free shipping</span> — estimated Nov 18–20</> : <><span style={{ color: usrColor }}>Free shipping</span> — arrives <strong>tomorrow</strong></>}
              </div>
            </div>
            <div ref={rr('pDelReturn')} style={{ ...dn(showDelReturn), display: showDelReturn ? 'flex' : 'none', gap: '5px', fontSize: '0.6rem', color: '#6b7280', alignItems: 'flex-start', marginBottom: '3px' }}>
              <span>↩️</span><div><span style={{ color: usrColor, fontWeight: 600 }}>Free returns</span> within 30 days</div>
            </div>
            <div ref={rr('pDelNote')} style={{ ...dn(showDelNote), display: showDelNote ? 'flex' : 'none', gap: '5px', fontSize: '0.6rem', color: '#6b7280', alignItems: 'flex-start' }}>
              <span>📦</span><div>{delNoteHtml}</div>
            </div>
          </div>

          {/* STOCK */}
          <div ref={rr('pStockLine')} style={{ ...dn(showStockLine), display: showStockLine ? 'flex' : 'none', alignItems: 'center', gap: '5px', marginBottom: '10px', fontSize: '0.63rem' }}>
            <div ref={rr('pStockDot')} style={{ width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0, background: stockDotBg, transition: 'background 0.4s' }} />
            <span ref={rr('pStockText')} style={{ color: stockTextColor }}>{stockText}</span>
          </div>

          {/* SCARCITY */}
          <div ref={rr('pScarcity')} style={{ ...dn(showScarcity), marginBottom: '12px' }}>
            <div style={{ fontSize: '0.58rem', color: '#ea580c', marginBottom: '3px', fontWeight: 600 }}>🔥 Only 4 left — selling fast</div>
            <div style={{ height: '4px', borderRadius: '99px', background: '#fee2e2', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '60%', borderRadius: '99px', background: 'linear-gradient(90deg,#f97316,#ef4444)' }} />
            </div>
          </div>

          {/* VARIANTS */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '0.56rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>Glaze</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {['Speckled Natural', 'Ocean Blue', 'Sage Green'].map((v, i) => (
                <div key={v} style={{ padding: '4px 8px', borderRadius: '6px', fontSize: '0.58rem', border: `1.5px solid ${i === 0 ? bizColor : '#e5e7eb'}`, background: i === 0 ? 'rgba(108,99,255,0.05)' : '#fff', color: i === 0 ? bizColor : '#6b7280', cursor: 'pointer' }}>{v}</div>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div ref={rr('pFeaturesWrap')} style={{ marginBottom: '12px' }}>
            <div ref={rr('pFeatTitle')} style={{ fontSize: '0.56rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '5px', color: feat.color }}>{feat.title}</div>
            <div>
              {feat.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '5px', fontSize: '0.61rem', color: '#6b7280', marginBottom: '3px', lineHeight: 1.4 }}>
                  <div style={{ width: '13px', height: '13px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.48rem', marginTop: '1px', background: feat.b.bg, color: feat.b.c }}>{feat.b.s}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ADD-ONS */}
          <div ref={rr('pAddonsWrap')} style={{ ...hip(showAddons), marginBottom: showAddons ? '12px' : 0 }}>
            <div ref={rr('pAddonTitle')} style={{ fontSize: '0.56rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px', color: '#9ca3af' }}>{addonTitle}</div>
            {addons.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 8px', borderRadius: '7px', marginBottom: '3px', fontSize: '0.62rem', background: addonTicked ? '#f7fbff' : 'rgba(0,0,0,0.02)', border: `1px solid ${addonTicked ? 'rgba(108,99,255,0.18)' : 'rgba(0,0,0,0.07)'}` }}>
                {addonTicked
                  ? <div style={{ width: '13px', height: '13px', borderRadius: '3px', background: bizColor, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.48rem', color: '#fff', fontWeight: 700 }}>✓</div>
                  : <div style={{ width: '13px', height: '13px', borderRadius: '3px', border: '1.5px solid #d1d5db', flexShrink: 0, background: '#fff' }} />
                }
                <div style={{ flex: 1 }}>
                  <div style={{ color: addonTicked ? '#1a1a2e' : '#6b7280', fontSize: '0.6rem' }}>{a.name}{!addonTicked && <span style={{ fontSize: '0.5rem', color: '#9ca3af' }}> (optional)</span>}</div>
                  <div style={{ fontSize: '0.54rem', color: '#9ca3af', marginTop: '1px' }}>{a.sub}</div>
                </div>
                <span style={{ fontWeight: 600, whiteSpace: 'nowrap', color: addonTicked ? '#1a1a2e' : '#9ca3af' }}>{a.price}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button ref={rr('pCtaP')} style={{ width: '100%', padding: '10px', borderRadius: '9px', border: 'none', fontSize: '0.76rem', fontWeight: 700, cursor: 'pointer', background: ctaPBg, color: '#fff', fontFamily: "'Inter',sans-serif", transition: 'all 0.4s' }}>{ctaPText}</button>
            <button ref={rr('pCtaS')} style={{ ...dn(showCtaS), width: '100%', padding: '9px', borderRadius: '9px', border: ctaSBorder, fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer', background: '#fff', color: ctaSColor, fontFamily: "'Inter',sans-serif", transition: 'all 0.4s' }}>{ctaSText}</button>
            <div ref={rr('pCtaNote')} style={{ ...dn(showCtaNote), fontSize: '0.55rem', color: '#9ca3af', textAlign: 'center', lineHeight: 1.4, marginTop: '3px' }}>{ctaNoteText}</div>
          </div>
        </div>
      </div>

      {/* BELOW FOLD */}
      <div style={{ padding: '14px 18px', borderTop: '1px solid #f5f5f5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
        {/* LEFT: About + Specs */}
        <div>
          <div ref={rr('pAboutWrap')}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, marginBottom: '7px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>About this item</div>
            {aboutItems[featKey].map((t, i) => (
              <div key={i} style={{ fontSize: '0.61rem', color: '#6b7280', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '4px', marginBottom: '3px' }}>
                <span style={{ color: bizColor }}>•</span>{t}
              </div>
            ))}
          </div>
          <div ref={rr('pSpecsWrap')} style={{ ...hip(!isBiz), marginTop: '12px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, marginBottom: '7px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>Details & specs</div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {[['Material', 'Stoneware clay'], ['Size', '6" diameter · 3" deep'], ['Set', '2 bowls'], ['Care', 'Dishwasher safe'], ['Origin', 'Portland, OR']].map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: '1px solid #f5f5f5' }}>
                    <td style={{ padding: '4px 3px', fontSize: '0.6rem', color: '#9ca3af', width: '42%', verticalAlign: 'top' }}>{k}</td>
                    <td style={{ padding: '4px 3px', fontSize: '0.6rem', verticalAlign: 'top' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT: Reviews */}
        <div>
          <div ref={rr('pReviewsWrap')}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>Reviews</div>
              <span style={{ fontSize: '0.6rem', color: '#9ca3af' }}>4.9 ★★★★★</span>
            </div>
            <div ref={rr('pRevBars')} style={{ ...hip(showRevBars) }}>
              {[['5★', '88%'], ['4★', '10%'], ['1★', '2%']].map(([lbl, pct]) => (
                <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.54rem', color: '#9ca3af', marginBottom: '2px' }}>
                  <span style={{ width: '20px', textAlign: 'right' }}>{lbl}</span>
                  <div style={{ flex: 1, height: '4px', borderRadius: '99px', background: '#f5f5f5', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: pct, borderRadius: '99px', background: '#f59e0b' }} />
                  </div>
                  <span style={{ width: '20px' }}>{pct}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '7px 0', borderTop: '1px solid #f5f5f5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#dbeafe', fontSize: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>😊</div>
                <span style={{ fontSize: '0.63rem', fontWeight: 600 }}>Emma R.</span>
                <span ref={rr('pRcV1')} style={{ ...dn(showVerified), fontSize: '0.53rem', color: usrColor, marginLeft: 'auto' }}>✓ Verified</span>
              </div>
              <div style={{ color: '#f59e0b', fontSize: '0.58rem', marginBottom: '2px' }}>★★★★★</div>
              <div style={{ fontSize: '0.63rem', fontWeight: 600, marginBottom: '2px' }}>Absolutely beautiful craftsmanship</div>
              <div style={{ fontSize: '0.6rem', color: '#6b7280', lineHeight: 1.45 }}>{reviewBody1}</div>
              <div ref={rr('pRcHelp1')} style={{ ...dn(showHelp1), fontSize: '0.54rem', color: '#9ca3af', marginTop: '3px' }}>94 found this helpful</div>
            </div>
            <div ref={rr('pReview2')} style={{ ...dn(showReview2), padding: '7px 0', borderTop: '1px solid #f5f5f5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#d1fae5', fontSize: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>🙂</div>
                <span style={{ fontSize: '0.63rem', fontWeight: 600 }}>James T.</span>
                <span ref={rr('pRcV2')} style={{ ...dn(showVerified), fontSize: '0.53rem', color: usrColor, marginLeft: 'auto' }}>✓ Verified</span>
              </div>
              <div style={{ color: '#f59e0b', fontSize: '0.58rem', marginBottom: '2px' }}>★★★★☆</div>
              <div style={{ fontSize: '0.63rem', fontWeight: 600, marginBottom: '2px' }}>Great quality, fast shipping</div>
              <div style={{ fontSize: '0.6rem', color: '#6b7280', lineHeight: 1.45 }}>Really well made. Heavier than expected — good sign.</div>
              <div ref={rr('pRcHelp2')} style={{ ...dn(showHelp2), fontSize: '0.54rem', color: '#9ca3af', marginTop: '3px' }}>67 found this helpful</div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div ref={rr('pRelatedWrap')} style={{ padding: '0 18px 14px' }}>
        <div ref={rr('pRelatedTitle')} style={{ fontSize: '0.7rem', fontWeight: 700, marginBottom: '7px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>{relatedTitle}</div>
        <div style={{ display: 'flex', gap: '7px', overflowX: 'auto', paddingBottom: '3px', scrollbarWidth: 'none' }}>
          {[['🏺', '★★★★★', 'Ceramic Mug', '$42'], ['🫙', '★★★★☆', 'Stoneware Jar', '$38'], ['🍽️', '★★★★★', 'Dinner Plates', '$85'], ['🫖', '★★★★☆', 'Teapot', '$55']].map(([em, st, nm, pr]) => (
            <div key={nm} style={{ flexShrink: 0, width: '82px', background: '#fafafa', border: '1px solid #f0f0f0', borderRadius: '8px', padding: '7px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', marginBottom: '2px' }}>{em}</div>
              <div style={{ fontSize: '0.48rem', color: '#f59e0b', marginBottom: '2px' }}>{st}</div>
              <div style={{ fontSize: '0.54rem', color: '#6b7280', marginBottom: '2px', lineHeight: 1.3 }}>{nm}</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700 }}>{pr}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST */}
      <div ref={rr('pTrustWrap')} style={{ display: 'flex', padding: '9px 18px', borderTop: '1px solid #f5f5f5', flexWrap: 'wrap' }}>
        {[['↩️', '30-day returns'], ['🔒', 'Secure payment'], ['🤝', 'Maker verified']].map(([icon, text]) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.58rem', color: '#6b7280', flex: 1, minWidth: '80px' }}>
            <span style={{ fontSize: '0.78rem' }}>{icon}</span>{text}
          </div>
        ))}
        <div ref={rr('pTrustPrivacy')} style={{ display: showPrivacy ? 'flex' : 'none', alignItems: 'center', gap: '4px', fontSize: '0.58rem', color: '#6b7280', flex: 1, minWidth: '80px' }}>
          <span style={{ fontSize: '0.78rem' }}>🛡️</span>Data protected
        </div>
      </div>

      {/* URGENCY */}
      <div ref={rr('pUrgency')} style={{ ...dn(showUrgency), padding: '8px 18px', background: '#fff8f0', borderTop: '1px solid #fed7aa', display: showUrgency ? 'flex' : 'none', alignItems: 'center', gap: '7px' }}>
        <span style={{ fontSize: '0.6rem', color: '#ea580c', flex: 1 }}>
          <span style={{ animation: 'pulse 1.2s infinite' }}>●</span> <strong>23 people</strong> have this in their cart
        </span>
        <button style={{ fontSize: '0.58rem', fontWeight: 700, padding: '3px 10px', borderRadius: '99px', background: '#ea580c', color: '#fff', border: 'none', cursor: 'pointer' }}>Buy now</button>
      </div>
    </div>
  );
}