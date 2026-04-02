import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0f6ff 0%, #ffffff 60%, #e8f4fd 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">
          {/* Left Content — 6 cols */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-[#4A90E2]/30 bg-[#4A90E2]/8"
              style={{ backgroundColor: "rgba(74,144,226,0.08)" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#4A90E2" }}
              />
              <span
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.8rem", color: "#4A90E2" }}
              >
                AI-Powered Waste Management
              </span>
            </div>

            {/* Headline */}
            <h1
              className="leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                color: "#1a1a2e",
                lineHeight: 1.15,
              }}
            >
              Smart Waste{" "}
              <span style={{ color: "#4A90E2" }}>Management</span>{" "}
              with AI
            </h1>

            {/* Description */}
            <p
              className="text-gray-500 max-w-lg"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.75 }}
            >
              SmartBin AI revolutionizes waste sorting and collection with cutting-edge
              artificial intelligence. Reduce waste, lower costs, and build a cleaner
              future — all in one smart solution.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 py-2">
              {[
                { value: "98%", label: "Sort Accuracy" },
                { value: "3x", label: "Faster Collection" },
                { value: "40%", label: "Cost Reduction" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#4A90E2" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#888" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("Contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: "#4A90E2",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  boxShadow: "0 8px 25px rgba(74,144,226,0.4)",
                }}
              >
                Try Now <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("Features")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full transition-all duration-200 hover:border-[#4A90E2] hover:text-[#4A90E2] cursor-pointer"
                style={{
                  border: "2px solid #e0e0e0",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#555",
                }}
              >
                <Play size={16} fill="currentColor" />
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration — 6 cols */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            {/* Decorative circles */}
            <div
              className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#4A90E2", top: "10%", right: "5%" }}
            />
            <div
              className="absolute w-48 h-48 rounded-full opacity-15 blur-2xl"
              style={{ backgroundColor: "#74b9ff", bottom: "10%", left: "5%" }}
            />

            {/* Image card */}
            <div
              className="relative z-10 rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 30px 80px rgba(74,144,226,0.25)" }}
            >
              <ImageWithFallback
                src={heroImage}
                alt="SmartBin AI in action"
                className="w-full max-w-md object-cover rounded-3xl"
                style={{ height: "420px" }}
              />
              {/* Overlay card */}
              <div
                className="absolute bottom-5 left-5 right-5 px-5 py-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(74,144,226,0.12)" }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>🤖</span>
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#1a1a2e" }}
                    >
                      AI Detection Active
                    </p>
                    <p
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.75rem", color: "#888" }}
                    >
                      Real-time waste classification
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "#22c55e", fontWeight: 600 }}>Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
