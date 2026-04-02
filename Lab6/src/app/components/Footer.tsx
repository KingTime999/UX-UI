import { Zap, Twitter, Linkedin, Github, Instagram, ArrowRight } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Case Studies", "Changelog", "Roadmap"],
  Company: ["About Us", "Blog", "Careers", "Press", "Partners"],
  Support: ["Documentation", "API Reference", "Help Center", "Community", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f1629" }}>
      {/* CTA Banner */}
      <div
        className="mx-6 lg:mx-auto max-w-7xl -translate-y-px"
        style={{ paddingTop: "0" }}
      >
        <div
          className="mx-auto max-w-7xl rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, #4A90E2 0%, #357abd 100%)",
            boxShadow: "0 20px 60px rgba(74,144,226,0.35)",
          }}
        >
          <div>
            <h3
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.8rem)", color: "white", lineHeight: 1.3 }}
            >
              Ready to go green with AI?
            </h3>
            <p
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", marginTop: "6px" }}
            >
              Start your 14-day free trial. No credit card required.
            </p>
          </div>
          <button
            className="flex items-center gap-2 px-7 py-3.5 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105 cursor-pointer flex-shrink-0"
            style={{
              backgroundColor: "white",
              color: "#4A90E2",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            Get Started Free <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand - 4 cols */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#4A90E2" }}
              >
                <Zap size={16} color="white" fill="white" />
              </div>
              <span
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "white" }}
              >
                SmartBin <span style={{ color: "#4A90E2" }}>AI</span>
              </span>
            </div>
            <p
              className="mb-6"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: "280px" }}
            >
              Transforming waste management with the power of artificial intelligence.
              Smarter bins. Cleaner cities. Better future.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#4A90E2")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)")}
                  >
                    <Icon size={16} color="rgba(255,255,255,0.7)" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links - 8 cols */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="mb-4"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "white", letterSpacing: "0.03em" }}
                >
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="transition-colors duration-200 hover:text-[#4A90E2]"
                        style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.3)" }}
          >
            © 2026 SmartBin AI. All rights reserved. Built with 💙 for the planet.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors duration-200 hover:text-[#4A90E2]"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.3)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
