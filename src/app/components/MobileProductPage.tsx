import React from 'react';
import { type Zone } from './ProductPageContent';

interface Props {
  zone: Zone;
  timerDisplay: string;
}

function MobileBowlSvg() {
  return (
    <svg viewBox="0 0 180 180" style={{ width: '70%', maxWidth: '180px', display: 'block' }}>
      <defs>
        <radialGradient id="mbGxM" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="rgba(108,99,255,0.06)" /><stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="mbOxM" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5C0" /><stop offset="50%" stopColor="#D4B08C" /><stop offset="100%" stopColor="#B8956A" />
        </linearGradient>
        <linearGradient id="mbIxM" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F4E8D8" /><stop offset="100%" stopColor="#C8A87A" />
        </linearGradient>
      </defs>
      <circle cx="90" cy="90" r="72" fill="url(#mbGxM)" />
      <ellipse cx="90" cy="154" rx="46" ry="7" fill="rgba(0,0,0,0.08)" />
      <path d="M32 86 Q32 152 90 152 Q148 152 148 86Z" fill="url(#mbOxM)" />
      <ellipse cx="90" cy="86" rx="58" ry="15" fill="#D4B08C" stroke="#C09070" strokeWidth="1" />
      <ellipse cx="90" cy="86" rx="52" ry="12" fill="url(#mbIxM)" />
      <circle cx="68" cy="108" r="2.5" fill="#8B6040" opacity="0.45" />
      <circle cx="115" cy="116" r="2" fill="#8B6040" opacity="0.4" />
      <circle cx="88" cy="132" r="3" fill="#8B6040" opacity="0.42" />
      <ellipse cx="74" cy="81" rx="16" ry="4.5" fill="rgba(255,255,255,0.22)" transform="rotate(-18,74,81)" />
      <path d="M108 74 Q108 94 124 94 Q140 94 140 74Z" fill="#C89870" opacity="0.8" />
      <ellipse cx="124" cy="74" rx="16" ry="4" fill="#D4A880" stroke="#B88A60" strokeWidth="0.8" />
    </svg>
  );
}

export function MobileProductPage({ zone, timerDisplay }: Props) {
  const isBiz = zone === 'biz';
  const isUsr = zone === 'usr';
  const isBal = zone === 'balanced';

  // Nav
  const navCtaText = isBiz ? 'Shop Sale' : isUsr ? 'Browse All' : 'Start shopping';
  const navCtaBg = isBiz ? '#ef4444' : isUsr ? '#00B894' : '#6C63FF';

  // Badges & timer
  const showSale  = isBiz;
  const showBest  = isBal;
  const showNew   = isUsr;
  const showTimer = isBiz;

  // Price
  const priceBigColor  = isBiz ? '#ef4444' : '#1a1a2e';
  const showPriceOrig  = isBiz || isBal;
  const showPriceSave  = isBiz || isBal;

  // Delivery
  const delMainHtml = isUsr
    ? <><strong>Arrives Fri, May 2.</strong> <span style={{ color: '#00B894', fontWeight: 600 }}>Free delivery</span> with tracking</>
    : isBiz
    ? <><strong>Limited time:</strong> ships today</>
    : <><strong>Arrives Fri, May 2.</strong> <span style={{ color: '#00B894', fontWeight: 600 }}>Free delivery</span></>;
  const showDelReturn = !isBiz;

  // Stock
  const stockDotBg    = isBiz ? '#f97316' : '#00B894';
  const stockText     = isUsr ? 'In stock · Ships within 2 days' : 'In stock · Free shipping';
  const stockTextColor = isBiz ? '#ea580c' : '#6b7280';
  const showScarcity  = isBiz;

  // Features
  const featCfg = {
    biz: { title: 'Why customers love it', color: '#6C63FF', b: { bg: 'rgba(108,99,255,0.1)', c: '#6C63FF', s: '★' }, items: ['Award-winning glaze — featured in Vogue Living', 'Handcrafted by master ceramicists since 2018', 'Over 10,000 bowl sets sold worldwide', "This week's #1 bestselling bowl set"] },
    bal: { title: 'Key features', color: '#374151', b: { bg: 'rgba(0,0,0,0.06)', c: '#6b7280', s: '✓' }, items: ['Hand-thrown stoneware — each piece uniquely crafted', 'Food-safe glaze · dishwasher & microwave safe', 'Set of 2 · 6" diameter, perfect for soup or salad', 'Ships in protective foam packaging'] },
    usr: { title: 'What to know before buying', color: '#00B894', b: { bg: 'rgba(0,184,148,0.1)', c: '#00B894', s: 'i' }, items: ['Each bowl varies slightly — natural handmade variation', 'Colour may look different on screen vs. real life', 'Heavier than machine-made (~380g) — intentional', 'Small glaze variations are normal, not defects'] },
  };
  const feat = featCfg[isBiz ? 'biz' : isUsr ? 'usr' : 'bal'];

  // Add-ons
  const showAddons  = isBiz || isBal;
  const addonTitle  = isBiz ? 'Customers also added' : 'Optional extras';
  const addonTicked = isBiz;
  const addons = [
    { name: 'Gift wrapping', sub: 'Tissue paper & ribbon', price: '+$6' },
    { name: 'Care instruction card', sub: 'Printed card included', price: '+$2' },
  ];

  // CTAs
  const ctaPText = isBiz ? '🛒 Add to Cart — Save 28% Today' : 'Add to Cart';
  const ctaPBg   = isBiz ? 'linear-gradient(90deg,#ef4444,#dc2626)' : isUsr ? 'linear-gradient(90deg,#00B894,#00897B)' : 'linear-gradient(90deg,#6C63FF,#9b8fff)';
  const showCtaS = isBiz || isBal;
  const ctaSText = isBiz ? '⚡ Buy Now — Offer Ends Soon' : '♡ Add to Wishlist';
  const ctaSBorder = isBiz ? '1.5px solid #ef4444' : '1.5px solid #e5e7eb';
  const ctaSColor  = isBiz ? '#ef4444' : '#374151';
  const showCtaNote = isBal || isUsr;
  const ctaNoteText = isBal ? '🔒 Secure checkout · Free 30-day returns' : '🔒 Encrypted payment · 30-day returns · Data never shared';

  // About
  const aboutItems: Record<string, string[]> = {
    biz: ['Award-winning glaze featured in Vogue Living', 'Handcrafted by master ceramicists — a gift to treasure', '10,000+ bowl sets sold worldwide', 'Beautifully packaged, ready to gift'],
    bal: ['Hand-thrown stoneware — each piece slightly unique', 'Food-safe glaze · dishwasher & microwave safe', 'Set of 2 · 6" diameter, perfect for soup or salad', 'Ships in protective foam packaging'],
    usr: ['Each bowl varies — handmade means natural variation', 'Colour may look different on screen vs. real life', 'Weight: ~380g per bowl — heavier than machine-made', 'Kiln-fired at 1280°C — genuinely food-safe and durable'],
  };
  const aboutList = aboutItems[isBiz ? 'biz' : isUsr ? 'usr' : 'bal'];

  // Related
  const relatedTitle = isBiz ? 'Customers also bought' : isUsr ? 'Compare similar items' : 'You might also like';

  // Urgency
  const showUrgency = isBiz;

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", background: '#fff', color: '#1a1a2e' }}>

      {/* NAV */}
      <div style={{ background: '#fff', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#6C63FF' }}>example.</div>
        <button style={{ padding: '4px 10px', borderRadius: '5px', fontSize: '0.62rem', fontWeight: 600, border: 'none', cursor: 'pointer', background: navCtaBg, color: '#fff' }}>{navCtaText}</button>
      </div>

      {/* BREADCRUMB */}
      <div style={{ padding: '5px 12px', fontSize: '0.54rem', color: '#9ca3af', borderBottom: '1px solid #f5f5f5' }}>
        <span style={{ color: '#6C63FF' }}>Home</span> › <span style={{ color: '#6C63FF' }}>Ceramics</span> › Handmade Speckled Bowl Set
      </div>

      {/* PRODUCT IMAGE — full width */}
      <div style={{ width: '100%', background: 'linear-gradient(135deg,#f8f7ff,#f0fdf9)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0', borderBottom: '1px solid #f5f5f5' }}>
        <MobileBowlSvg />
        {/* Badges */}
        <div style={{ position: 'absolute', top: '8px', left: '8px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {showSale && <div style={{ padding: '2px 6px', borderRadius: '99px', fontSize: '0.5rem', fontWeight: 700, background: '#ef4444', color: '#fff' }}>SALE</div>}
          {showBest && <div style={{ padding: '2px 6px', borderRadius: '99px', fontSize: '0.5rem', fontWeight: 700, background: 'rgba(245,158,11,0.15)', color: '#d97706', border: '1px solid rgba(245,158,11,0.3)' }}>BESTSELLER</div>}
          {showNew  && <div style={{ padding: '2px 6px', borderRadius: '99px', fontSize: '0.5rem', fontWeight: 700, background: 'rgba(0,184,148,0.1)', color: '#00B894', border: '1px solid rgba(0,184,148,0.25)' }}>NEW</div>}
        </div>
        {showTimer && (
          <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '5px', padding: '2px 6px', fontSize: '0.5rem', color: '#ef4444', fontWeight: 600 }}>
            ⏰ Ends <span className="tpulse">{timerDisplay}</span>
          </div>
        )}
      </div>

      {/* PRODUCT INFO — single column */}
      <div style={{ padding: '12px 14px' }}>

        {/* Title */}
        <div style={{ fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '6px' }}>
          Handmade Speckled Ceramic Bowl Set — Set of 2, Artisan Stoneware
        </div>

        {/* Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span style={{ color: '#f59e0b', fontSize: '0.65rem' }}>★★★★★</span>
          <span style={{ fontSize: '0.6rem', color: '#6C63FF', textDecoration: 'underline' }}>4.9</span>
          <span style={{ fontSize: '0.58rem', color: '#9ca3af' }}>· 1,247 reviews</span>
          {isBiz && <span style={{ fontSize: '0.56rem', color: '#d97706' }}>| #1 in Ceramics</span>}
          {isUsr && <span style={{ fontSize: '0.56rem', color: '#00B894' }}>(1,189 verified)</span>}
        </div>

        <div style={{ height: '1px', background: '#f5f5f5', margin: '7px 0' }} />

        {/* Price */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexWrap: 'wrap', marginBottom: '3px' }}>
            <span style={{ fontSize: '0.68rem', color: '#9ca3af' }}>$</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: priceBigColor }}>68</span>
            {showPriceOrig && <span style={{ fontSize: '0.68rem', color: '#9ca3af', textDecoration: 'line-through' }}>$95</span>}
            {showPriceSave && <span style={{ fontSize: '0.52rem', fontWeight: 700, padding: '1px 6px', borderRadius: '99px', background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca' }}>Save 28%</span>}
          </div>
        </div>

        {/* Delivery */}
        <div style={{ marginBottom: '8px', padding: '7px 9px', borderRadius: '8px', border: '1px solid #f0f0f0', background: '#fafafa' }}>
          <div style={{ display: 'flex', gap: '5px', fontSize: '0.58rem', marginBottom: showDelReturn ? '3px' : 0, color: '#6b7280', alignItems: 'flex-start' }}>
            <span>🚚</span><div>{delMainHtml}</div>
          </div>
          {showDelReturn && (
            <div style={{ display: 'flex', gap: '5px', fontSize: '0.58rem', color: '#6b7280', alignItems: 'flex-start' }}>
              <span>↩️</span><div><span style={{ color: '#00B894', fontWeight: 600 }}>Free returns</span> within 30 days</div>
            </div>
          )}
        </div>

        {/* Stock */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px', fontSize: '0.62rem' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: stockDotBg, flexShrink: 0 }} />
          <span style={{ color: stockTextColor }}>{stockText}</span>
        </div>

        {/* Scarcity */}
        {showScarcity && (
          <div style={{ marginBottom: '8px' }}>
            <div style={{ fontSize: '0.56rem', color: '#ea580c', marginBottom: '2px', fontWeight: 600 }}>🔥 Only 4 left — selling fast</div>
            <div style={{ height: '4px', borderRadius: '99px', background: '#fee2e2', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '15%', borderRadius: '99px', background: 'linear-gradient(90deg,#f97316,#ef4444)' }} />
            </div>
          </div>
        )}

        {/* Glaze variants */}
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '0.54rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '5px' }}>Glaze</div>
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            <div style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '0.56rem', border: '1.5px solid #6C63FF', color: '#6C63FF', background: 'rgba(108,99,255,0.05)' }}>Speckled Natural</div>
            <div style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '0.56rem', border: '1.5px solid #e5e7eb', background: '#fff', color: '#6b7280' }}>Ocean Blue</div>
            <div style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '0.56rem', border: '1.5px solid #e5e7eb', background: '#fff', color: '#6b7280' }}>Sage Green</div>
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ fontSize: '0.54rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '5px', color: feat.color }}>{feat.title}</div>
          {feat.items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '5px', fontSize: '0.6rem', color: '#6b7280', marginBottom: '3px', lineHeight: 1.4 }}>
              <div style={{ width: '13px', height: '13px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.48rem', marginTop: '1px', background: feat.b.bg, color: feat.b.c }}>{feat.b.s}</div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        {showAddons && (
          <div style={{ marginBottom: '8px' }}>
            <div style={{ fontSize: '0.54rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px', color: '#9ca3af' }}>{addonTitle}</div>
            {addons.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 8px', borderRadius: '7px', marginBottom: '3px', fontSize: '0.62rem', background: addonTicked ? 'rgba(108,99,255,0.05)' : 'rgba(0,0,0,0.02)', border: `1px solid ${addonTicked ? 'rgba(108,99,255,0.18)' : 'rgba(0,0,0,0.07)'}` }}>
                {addonTicked
                  ? <div style={{ width: '13px', height: '13px', borderRadius: '3px', background: '#6C63FF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.48rem', color: '#fff', fontWeight: 700 }}>✓</div>
                  : <div style={{ width: '13px', height: '13px', borderRadius: '3px', border: '1.5px solid #d1d5db', flexShrink: 0, background: '#fff' }} />
                }
                <div style={{ flex: 1 }}>
                  <div style={{ color: addonTicked ? '#1a1a2e' : '#6b7280', fontSize: '0.6rem' }}>
                    {a.name}{!addonTicked && <span style={{ fontSize: '0.5rem', color: '#9ca3af' }}> (optional)</span>}
                  </div>
                  <div style={{ fontSize: '0.54rem', color: '#9ca3af', marginTop: '1px' }}>{a.sub}</div>
                </div>
                <span style={{ fontWeight: 600, whiteSpace: 'nowrap', color: addonTicked ? '#1a1a2e' : '#9ca3af' }}>{a.price}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
          <button style={{ width: '100%', padding: '11px', borderRadius: '9px', border: 'none', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', background: ctaPBg, color: '#fff', fontFamily: "'Inter',sans-serif" }}>{ctaPText}</button>
          {showCtaS && (
            <button style={{ width: '100%', padding: '9px', borderRadius: '9px', fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer', background: '#fff', border: ctaSBorder, color: ctaSColor, fontFamily: "'Inter',sans-serif" }}>{ctaSText}</button>
          )}
          {showCtaNote && (
            <div style={{ fontSize: '0.52rem', color: '#9ca3af', textAlign: 'center', lineHeight: 1.4, marginTop: '2px' }}>{ctaNoteText}</div>
          )}
        </div>

        {/* About this item */}
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, marginBottom: '6px', paddingBottom: '4px', borderBottom: '1px solid #f5f5f5' }}>About this item</div>
          {aboutList.map((item, i) => (
            <div key={i} style={{ fontSize: '0.6rem', color: '#6b7280', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '4px', marginBottom: '3px' }}>
              <span style={{ color: '#6C63FF', flexShrink: 0 }}>•</span>{item}
            </div>
          ))}
        </div>

        {/* Specs */}
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, marginBottom: '6px', paddingBottom: '4px', borderBottom: '1px solid #f5f5f5' }}>Details &amp; specs</div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {[['Material','Stoneware clay'],['Size','6" diameter · 3" deep'],['Set','2 bowls'],['Care','Dishwasher safe'],['Origin','Portland, OR']].map(([k,v]) => (
                <tr key={k} style={{ borderBottom: '1px solid #f5f5f5' }}>
                  <td style={{ padding: '4px 3px', fontSize: '0.6rem', color: '#9ca3af', width: '42%', verticalAlign: 'top' }}>{k}</td>
                  <td style={{ padding: '4px 3px', fontSize: '0.6rem', verticalAlign: 'top' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reviews */}
        <div style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '7px' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700 }}>Reviews</div>
            <span style={{ fontSize: '0.6rem', color: '#9ca3af' }}>4.9 ★★★★★</span>
          </div>
          {isUsr && (
            <div style={{ marginBottom: '6px' }}>
              {[['5★','88%'],['4★','10%'],['1★','2%']].map(([lbl, pct]) => (
                <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.54rem', color: '#9ca3af', marginBottom: '2px' }}>
                  <span style={{ width: '20px', textAlign: 'right' }}>{lbl}</span>
                  <div style={{ flex: 1, height: '4px', borderRadius: '99px', background: '#f5f5f5', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: pct, borderRadius: '99px', background: '#f59e0b' }} />
                  </div>
                  <span style={{ width: '20px' }}>{pct}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ padding: '7px 0', borderTop: '1px solid #f5f5f5' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#dbeafe', fontSize: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>😊</div>
              <span style={{ fontSize: '0.63rem', fontWeight: 600 }}>Emma R.</span>
              {(isBal || isUsr) && <span style={{ fontSize: '0.53rem', color: '#00B894', marginLeft: 'auto' }}>✓ Verified</span>}
            </div>
            <div style={{ color: '#f59e0b', fontSize: '0.58rem', marginBottom: '2px' }}>★★★★★</div>
            <div style={{ fontSize: '0.63rem', fontWeight: 600, marginBottom: '2px' }}>Absolutely beautiful craftsmanship</div>
            <div style={{ fontSize: '0.6rem', color: '#6b7280', lineHeight: 1.45 }}>
              {isBiz ? 'Absolutely stunning. Best purchase this year. Already bought 3 sets!' : isBal ? 'Really beautiful bowls. Speckled glaze even nicer in person. Packaged perfectly.' : 'Gorgeous bowls — slightly smaller than I expected. Glaze exactly as described.'}
            </div>
            {(isBal || isUsr) && <div style={{ fontSize: '0.54rem', color: '#9ca3af', marginTop: '3px' }}>94 found this helpful</div>}
          </div>
          {(isBal || isUsr) && (
            <div style={{ padding: '7px 0', borderTop: '1px solid #f5f5f5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#d1fae5', fontSize: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>🙂</div>
                <span style={{ fontSize: '0.63rem', fontWeight: 600 }}>James T.</span>
                {isUsr && <span style={{ fontSize: '0.53rem', color: '#00B894', marginLeft: 'auto' }}>✓ Verified</span>}
              </div>
              <div style={{ color: '#f59e0b', fontSize: '0.58rem', marginBottom: '2px' }}>★★★★☆</div>
              <div style={{ fontSize: '0.63rem', fontWeight: 600, marginBottom: '2px' }}>Great quality, fast shipping</div>
              <div style={{ fontSize: '0.6rem', color: '#6b7280', lineHeight: 1.45 }}>Really well made. Heavier than expected — good sign.</div>
              {isUsr && <div style={{ fontSize: '0.54rem', color: '#9ca3af', marginTop: '3px' }}>67 found this helpful</div>}
            </div>
          )}
        </div>

        {/* Related */}
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, marginBottom: '6px', paddingBottom: '4px', borderBottom: '1px solid #f5f5f5' }}>{relatedTitle}</div>
          <div style={{ display: 'flex', gap: '7px', overflowX: 'auto', paddingBottom: '3px', scrollbarWidth: 'none' }}>
            {[['🏺','★★★★★','Ceramic Mug','$42'],['🫙','★★★★☆','Stoneware Jar','$38'],['🍽️','★★★★★','Dinner Plates','$85'],['🫖','★★★★☆','Teapot','$55']].map(([emoji, stars, name, price]) => (
              <div key={name} style={{ flexShrink: 0, width: '72px', background: '#fafafa', border: '1px solid #f0f0f0', borderRadius: '7px', padding: '6px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', marginBottom: '2px' }}>{emoji}</div>
                <div style={{ fontSize: '0.46rem', color: '#f59e0b' }}>{stars}</div>
                <div style={{ fontSize: '0.5rem', color: '#6b7280', marginBottom: '1px', lineHeight: 1.3 }}>{name}</div>
                <div style={{ fontSize: '0.54rem', fontWeight: 700 }}>{price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust */}
        <div style={{ display: 'flex', gap: 0, padding: '8px 0', borderTop: '1px solid #f5f5f5', flexWrap: 'wrap', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.54rem', color: '#6b7280', flex: 1, minWidth: '70px' }}>↩️ 30-day returns</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.54rem', color: '#6b7280', flex: 1, minWidth: '70px' }}>🔒 Secure payment</div>
          {(isBal || isUsr) && <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.54rem', color: '#6b7280', flex: 1, minWidth: '70px' }}>🛡️ Data protected</div>}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.54rem', color: '#6b7280', flex: 1, minWidth: '70px' }}>🤝 Maker verified</div>
        </div>

        {/* Urgency */}
        {showUrgency && (
          <div style={{ padding: '7px 10px', background: '#fff8f0', borderTop: '1px solid #fed7aa', display: 'flex', alignItems: 'center', gap: '6px', borderRadius: '6px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.56rem', color: '#ea580c', flex: 1 }}>
              <span className="pulse-dot" style={{ display: 'inline-block' }}>●</span> <strong>23 people</strong> have this in cart
            </span>
            <button style={{ fontSize: '0.52rem', fontWeight: 700, padding: '3px 8px', borderRadius: '99px', background: '#ea580c', color: '#fff', border: 'none' }}>Buy now</button>
          </div>
        )}
      </div>
    </div>
  );
}
