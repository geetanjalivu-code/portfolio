
import { StorySection } from "../StoryPage";

import { useRef, useState, useEffect, useCallback } from "react";


import khoros1 from "../../../imports/khoros1.png";
import khoros2 from "../../../imports/khoros2.png";
import khoros3 from "../../../imports/khoros3.png";
import khoros4 from "../../../imports/khoros4.png"; // add file to enable
import storybook from "../../../imports/storybook.png";
import accessibility from "../../../imports/accessibility.png";

import figma from "../../../imports/figmasetup.png";
// temporary fallback until khorosdark.png is added
import IconLearn1 from "../../../imports/Fi16684073/index";
import IconLearn2 from "../../../imports/Fi13063367/index";
import IconLearn3 from "../../../imports/Fi1534952/index";

import tab1light from "../../../imports/Tab1Light.png";
import tab1dark from "../../../imports/Tab1Dark.png";
import tab2light from "../../../imports/Tab2Light.png";
import tab2dark from "../../../imports/Tab2Dark.png";
import tab3light from "../../../imports/Tab3Light.png";
import tab3dark from "../../../imports/Tab3Dark.png";
import tab4light from "../../../imports/Tab4Light.png";
import tab4dark from "../../../imports/Tab4Dark.png";
import tab5light from "../../../imports/Tab5Light.png";
import tab5dark from "../../../imports/Tab5Dark.png";
import tab6light from "../../../imports/Tab6Light.png";
import tab6dark from "../../../imports/Tab6Dark.png";
import tab7light from "../../../imports/Tab7Light.png";
import tab7dark from "../../../imports/Tab7Dark.png";
import tab8light from "../../../imports/Tab8Light.png";
import tab8dark from "../../../imports/Tab8Dark.png";

// ─── Shared text primitive ────────────────────────────────────────────────────
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
    >
      {children}
    </p>
  );
}


function ThreeImages({
  images,
  caption,
}: {
  images: { src?: string; alt: string }[];
  caption?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {images.map(({ src, alt }) => (
          <div
            key={alt}
            style={{
              borderRadius: 6,
              overflow: "hidden",
              background: "white",
              border: "1px solid rgba(26,26,46,0.08)",
            }}
          >
            {src ? (
              <img
                src={src}
                alt={alt}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            ) : (
              <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(145deg, #d8d0e8 0%, #bfb8cc 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#7c6e96", fontSize: 11, fontWeight: 600, letterSpacing: "0.5px",
              }}>
                {alt}
              </div>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <p style={{
          fontSize: 12, color: "#8d8786", textAlign: "center",
          margin: 0, letterSpacing: "-0.2px",
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}

export function KhorosStory() {
  // Replace the "Selected overview image with Light / Dark toggle" section with this:

const [overviewTheme, setOverviewTheme] = useState<"light" | "dark">("light");
const [activeTab, setActiveTab] = useState(0);

// Define your tabs — add real images when available
const overviewTabs = [
  {
    label: "Navigation",
    light: tab1light,   // replace with specific tab image
    dark: tab1dark,
  },
  {
    label: "Table",
    light: tab2light,
    dark: tab2dark,
  },
  {
    label: "Command palette",
    light: tab3light,
    dark: tab3dark,
  },
  {
    label: "Filters bar",
    light: tab4light,
    dark: tab4dark,
  },
  {
    label: "Notifications",
    light: tab5light,
    dark: tab5dark,
  },
  {
    label: "Comments",
    light: tab6light,
    dark: tab6dark,
  },
  {
    label: "File upload",
    light: tab7light,
    dark: tab7dark,
  },
  {
    label: "Date range picker",
    light: tab8light,
    dark: tab8dark,
  },
  
];

  return (
    <>
      {/* ── SECTION 01: The opportunity identified ────────────────────────── */}
      <StorySection
        eyebrow="The opportunity identified"
        headline="Similar products and similar problems need similar solutions"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <P>
            Khoros had multiple customer engagement products — namely community,
            care (contact center), social media management and cx insights — each
            serving different customer needs, business goals and user workflows.
            The products evolved independently over time, enabling teams to move
            quickly, but it also meant that similar design problems were solved in
            different ways. In some areas of the portfolio, particularly
            community, customers heavily customized and reskinned the UI to match
            their own branding and business requirements. As a result, design
            consistency was viewed as less critical than feature delivery.
          </P>
          <P>
            Teams were repeatedly designing dashboards, filters, reporting
            experiences, navigation models and status indicators. While these
            differences appeared minor when viewed separately, they introduced unnecessary
            complexity and made it difficult to scale design decisions
            consistently across the product ecosystem.
          </P>
        </div>

        {/* 3-image grid — swap src values when real screenshots are available */}
        <ThreeImages
          caption="Different products, similar interaction models, each solved independently"
          images={[
            { src: khoros1, alt: "Product screenshot 1" },
            { src: khoros2, alt: "Product screenshot 2" },
            { src: khoros3, alt: "Product screenshot 3" },
            { src: khoros4, alt: "Product screenshot 4" },
          ]}
        />

        <P style={{ marginTop: 24 }}>
          Recognizing this as an opportunity, I proposed the idea of establishing
          a shared design foundation that could help connect products through
          reusable patterns, common standards and a shared language between design
          and engineering. This idea resonated with the leadership and
          together, we aligned on a broader vision for creating the organization's
          first formal design system initiatives.
        </P>
        <P style={{ marginTop: 16 }}>
    By creating a centralized design system, we aimed to:
  </P>
        <ul  style={{ marginTop: 16 , listStyleType: "disc" }}>
  <li>Give teams a more structured, speedy and scalable way to build products.</li>
  <li>Improve brand perception and user trust through consistent experiences that work for everyone and allow users to accomplish their goals.</li>
  <li>Promote accessibility of our products by building accessibility into our component libraries, both from a design and code repository perspective.</li>
</ul>
      </StorySection>

      {/* ── SECTION 02: Defining the building blocks ──────────────────────── */}
      <StorySection
        eyebrow="Defining the building blocks"
        headline="From aligned vision to a scalable system with reusable patterns"
      >

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <P>
            With design leadership alignment established, the next challenge was
            translating the vision into something tangible that product teams
            could adopt. Rather than starting with a predefined design system
            structure, I began auditing existing products to identify recurring
            patterns, overlapping functionality and opportunity for
            standardization. I screenshotted unique variations of our design elements to build a <b>UI inventory</b> around it. This became the foundation for determining which
            elements should be standardized and which areas required flexibility
            to support individual product needs. 
          </P>
          <P> 
          The outcome of this audit
            became the base for requirements, and 2 more designers were onboarded for creating the system. I setup the file structure to make sure we have an organized approach for consolidating common solutions
            into reusable design assets - foundations, components, modules or pattern templates that can support multiple products.
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
            <img
              src={figma}
              alt="setup"
              style={{ width: "100%", display: "block", border: "1px solid #cfcfcf" }}
            />
          </div>
        </div>
        </div>


        <div style={{ display: 'flex', flexDirection: 'column',  marginTop: 24}}>
           <P> 
              Once the figma file was setup, the next step was to design the actual library. I took ownership of designing the modules and pattern templates, while my colleagues were responsible for the foundations and the components. We began by using the information we collected so far to determine the highest priority modules - the ones which were repeated most across applications. The components needed for these modules were then prioritized to establish a parallel workflow amongst us. While the initial base for the modules were created, the components needed for the prioritized modules started coming in, and as I created modules, I could also create pattern templates while waiting for further components for newer modules. This separation of ownership ensured that we delivered in the most efficient way.
          </P>
        </div>

    
        

        {/* Selected overview image with Light / Dark toggle */}

        {/* Selected overview image with Light / Dark toggle + tabs */}
<div style={{ marginTop: 24 }}>

  {/* ── Header row: title + Light/Dark toggle ── */}
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 12,
  }}>
    <p style={{
      fontSize: "clamp(14px, 2.5vw, 16px)",
      fontWeight: 600,
      color: "#1a1a2e",
      letterSpacing: "-0.5px",
      margin: 0,
    }}>
      Selected overview of modules and templates
    </p>
    <div style={{
      display: "flex",
      borderRadius: 6,
      border: "1px solid rgba(26,26,46,0.12)",
      overflow: "hidden",
    }}>
      {(["light", "dark"] as const).map((theme) => (
        <button
          key={theme}
          onClick={() => setOverviewTheme(theme)}
          style={{
            padding: "4px 14px",
            fontSize: 13,
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            background: overviewTheme === theme ? "#fff" : "#f5f5f5",
            color: overviewTheme === theme ? "#1a1a2e" : "#8d8786",
            boxShadow: overviewTheme === theme
              ? "0 1px 3px rgba(26,26,46,0.10)"
              : "none",
            transition: "all 0.15s ease",
            textTransform: "capitalize",
          }}
        >
          {theme === "light" ? "Light" : "Dark"}
        </button>
      ))}
    </div>
  </div>

  {/* ── Tab row ── */}
  <div style={{
    display: "flex",
    gap: 0,
    borderBottom: "1px solid rgba(26,26,46,0.10)",
    marginBottom: 16,
  }}>
    {overviewTabs.map((tab, i) => (
      <button
        key={tab.label}
        onClick={() => setActiveTab(i)}
        style={{
          padding: "8px 16px",
          fontSize: 13,
          fontWeight: activeTab === i ? 600 : 400,
          color: activeTab === i ? "#3b30cc" : "#8d8786",
          background: "none",
          border: "none",
          borderBottom: activeTab === i
            ? "3px solid #3b30cc"
            : "3px solid transparent",
          marginBottom: "-1.5px",   // sit on top of container border
          cursor: "pointer",
          transition: "color 0.15s ease",
          letterSpacing: "-0.2px",
          whiteSpace: "nowrap",
        }}
      >
        {tab.label}
      </button>
    ))}
  </div>

  {/* ── Tab image panel ── */}
  <div style={{
    border: "1px solid rgba(26,26,46,0.08)",
    borderTop: "none",
    borderRadius: "0 0 8px 8px",
    overflow: "hidden",
    background: overviewTheme === "dark" ? "#1a1a2e" : "#fff",
  }}>
    <img
      key={`${activeTab}-${overviewTheme}`}   // re-triggers fade if you add animation
      src={
        overviewTheme === "light"
          ? overviewTabs[activeTab].light
          : overviewTabs[activeTab].dark
      }
      alt={`${overviewTabs[activeTab].label} — ${overviewTheme} mode`}
      style={{
        width: "100%",
        display: "block",
        transition: "opacity 0.2s ease",
      }}
    />
  </div>

</div>




        
      </StorySection>

      {/* ── SECTION 03: Connecting design and engineering ─────────────────── */}
      <StorySection
        eyebrow="Connecting design and engineering"
        headline="The valuable documentation that created company-wide adoption"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <P>
            As the component library matured, it became clear that designing the
            components was only part of the challenge. The larger challenge was
            ensuring that teams could confidently adopt to the design system.
          </P>
          <P>
            While designers were creating components, engineers were
            simultaneously implementing them. Over time, these two drifted apart,
            making it increasingly difficult to ensure that designed standards
            reflected production experiences. This created a trust issue. Teams
            had become accustomed to solving problems independently and questioned
            whether a centralized approach could accommodate the needs of different
            products when they could easily find differences between design and
            implementation of the same components.
          </P>
          <P>
            To address this challenge, I collaborated closely with the leadership
            team to establish Storybook as the primary documentation platform for
            the design system. Instead of maintaining static design references,
            components were documented alongside their live implementations,
            enabling designers and engineers to review behavior, states and usage
            patterns through a shared environment.
          </P>
        </div>

        {/* Storybook screenshots */}
        <div style={{ marginTop: 24 }}>
          <img
            src={storybook}
            alt="Example screenshots from Storybook library"
            style={{ width: "100%", display: "block", borderRadius: 6 }}
          />
          <p style={{ fontSize: 12, color: "#8d8786", textAlign: "center", margin: "10px 0 0", letterSpacing: "-0.2px" }}>
            Example screenshots from Storybook library
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
           <P style={{ fontWeight: 600, fontSize: 20 }}>
            Accessibility
          </P>
          <P>
            We also made sure that each component followed the accessibility standards and included an auto accessibility check on the storybook tool. 
          </P>
          <img
            src={accessibility}
            alt="Accessibility check"
            style={{ width: "100%", display: "block", borderRadius: 6, border: "1px solid #cfcfcf" }}
          />
          
          <P>
            Furthermore, the Storybook Connect plugin also allowed the designed
            and coded components to be reviewed through a common diagnostic
            process. For the first time, designers and engineers could discuss the
            same component through a common source of truth rather than relying on
            disconnected design files and documentation.
          </P>
         
          <P>
            By making the system easier to trust, understand and validate,
            adoption became a natural outcome. Teams increasingly referenced
            existing components before creating new ones, allowing the design
            system to evolve from a collection of assets into an everyday
            decision-making framework.
          </P>
          <P>
            In addition to this, I also setup a component request workflow which
            ensured that the needs of the teams were constantly listened to and
            addressed, strengthening their trust in the design system. This
            workflow included an active discussion board where the requested
            components were reviewed and voted for by other teams before getting
            into the backlog / pipeline. This also gave teams the visibility of
            knowing whether their requested components were prioritized or had to
            be solved independently.
          </P>
          
        </div>
      </StorySection>

      {/* ── SECTION 04: The impact ────────────────────────────────────────── */}
      <StorySection
        eyebrow="The impact of the design system"
        headline="Standardized workflows, standardized decisions, quicker delivery"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <P>
            As adoption increased, the impact extended far beyond visual
            consistency. Teams were no longer starting from a blank canvas each
            time a new feature was designed. Many recurring decisions had already
            been resolved through the shared foundation, allowing teams to focus
            on product-specific challenges. The design system also changed how
            collaboration happened effectively between designers and engineers —
            the discussions became less about interpreting requirements and more
            about evaluating solutions. Decisions that previously relied on
            individual preferences became grounded in a common set of standards
            understood across teams.
          </P>
          <P>
            The most valuable impact was not the component library itself but the
            alignment it created. What began as an initiative to reduce duplicated
            work evolved into a mechanism that enabled teams to move faster than
            before while maintaining consistency and shared language. It became a
            tool that eased collaboration and communication across teams and
            established a more predictable product development process.
          </P>
        </div>
  
        <div style={{ display: "flex", gap: 24, marginTop: 24 }}>
          {([
            {
              icon: <IconLearn1 />,
              title: "Easy documentation eases adoption",
              desc: "A design system creates value only when teams are able to understand, validated and use what is being created.",
            },
            {
              icon: <IconLearn2 />,
              title: "Shared standards speed up delivery",
              desc: "Teams move faster when recurring problems already have established solutions — moving the focus from redundancy to necessity.",
            },
            {
              icon: <IconLearn3 />,
              title: "Systems enhance cross-functional collaboration",
              desc: "With shared patterns and a discussion board for various teams, isolated workflows are replaced by collaborative ones.",
            },
          ] as const).map(({ icon, title, desc }) => (
            <div key={title} style={{ flex: 1, display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: 17, color: "#1d1d1d", lineHeight: "26px", margin: "0 0 4px", minHeight: 52 }}>{title}</p>
                <p style={{ fontSize: 14, color: "#575352", lineHeight: "22px", margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </StorySection>

      {/* ── SECTION 06: Conclusion ────────────────────────────────────────── */}
      <StorySection
        eyebrow="Conclusion"
        headline="The step into platform thinking"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <P>
            My period at Khoros changed how I approached design. What began as
            identifying repeated frontend challenges evolved into understanding
            how organizational systems influence product quality, delivery
            efficiency and long-term scalability. More importantly, it showed that
            sustainable UX maturity is not built through isolated design efforts.
            It emerges when teams align around shared foundations, commons
            standards and a single source of truth that connects design and
            engineering.
          </P>
          <P>
            This experience became my first glimpse of thinking beyond individual
            interfaces and towards the systems, processes and relationships that
            shape products at scale.
          </P>
        </div>
      </StorySection>
    </>
  );
}
