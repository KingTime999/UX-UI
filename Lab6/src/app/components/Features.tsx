import { Brain, BarChart3, Leaf, Bell, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Sorting",
    description:
      "Our deep learning models identify and sort waste materials with 98% accuracy in real-time, eliminating human error completely.",
    color: "#4A90E2",
    bg: "rgba(74,144,226,0.1)",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Get detailed insights and real-time dashboards on waste generation patterns, helping you make data-driven decisions.",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.1)",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Impact",
    description:
      "Track your carbon footprint reduction and environmental impact. Our platform helps reduce landfill waste by up to 60%.",
    color: "#059669",
    bg: "rgba(5,150,105,0.1)",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Receive instant notifications when bins are full or need attention, optimizing collection schedules automatically.",
    color: "#d97706",
    bg: "rgba(217,119,6,0.1)",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee. Your data is encrypted and protected at all times.",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.1)",
  },
  {
    icon: Truck,
    title: "Route Optimization",
    description:
      "AI-optimized collection routes reduce fuel consumption by 35% and ensure timely waste pickup across all locations.",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.1)",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(74,144,226,0.1)",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              color: "#4A90E2",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Why Choose Us
          </span>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#1a1a2e",
              lineHeight: 1.2,
            }}
          >
            Key <span style={{ color: "#4A90E2" }}>Features</span>
          </h2>
          <p
            className="mt-4 text-gray-500"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem", lineHeight: 1.75 }}
          >
            Everything you need to transform your waste management into a smarter,
            cleaner, and more sustainable operation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 12px 40px rgba(74,144,226,0.15)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(74,144,226,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.06)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#f3f4f6";
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon size={26} color={feature.color} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "#1a1a2e",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-500"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
