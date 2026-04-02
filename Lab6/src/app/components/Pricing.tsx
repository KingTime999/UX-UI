import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started with smart waste management.",
    features: [
      "Up to 5 SmartBin units",
      "Basic AI sorting (85% accuracy)",
      "Monthly analytics report",
      "Email support",
      "Mobile app access",
    ],
    missing: ["Real-time alerts", "Route optimization", "API access"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    price: "$79",
    period: "/month",
    description: "Ideal for growing companies that need powerful AI-driven waste solutions.",
    features: [
      "Up to 25 SmartBin units",
      "Advanced AI sorting (98% accuracy)",
      "Real-time analytics dashboard",
      "Smart alerts & notifications",
      "Route optimization",
      "Priority support",
      "Mobile + web app",
    ],
    missing: ["API access"],
    highlighted: true,
    cta: "Start Free Trial",
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$199",
    period: "/month",
    description: "Full-scale enterprise solution with unlimited capabilities and dedicated support.",
    features: [
      "Unlimited SmartBin units",
      "Enterprise AI (98%+ accuracy)",
      "Advanced analytics & reports",
      "Real-time alerts & notifications",
      "Full route optimization",
      "API & integrations access",
      "24/7 dedicated support",
      "Custom dashboard",
    ],
    missing: [],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}
    >
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
            Transparent Pricing
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
            Pricing <span style={{ color: "#4A90E2" }}>Plans</span>
          </h2>
          <p
            className="mt-4 text-gray-500"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem", lineHeight: 1.75 }}
          >
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={
                plan.highlighted
                  ? {
                      background: "linear-gradient(145deg, #4A90E2 0%, #357abd 100%)",
                      boxShadow: "0 20px 60px rgba(74,144,226,0.4)",
                    }
                  : {
                      background: "#ffffff",
                      border: "1px solid #e8edf5",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    }
              }
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full flex items-center gap-1"
                  style={{ backgroundColor: "#fbbf24", boxShadow: "0 4px 12px rgba(251,191,36,0.4)" }}
                >
                  <Zap size={12} color="white" fill="white" />
                  <span
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "white" }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p
                className="mb-1"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: plan.highlighted ? "rgba(255,255,255,0.8)" : "#888",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mt-2 mb-3">
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 800,
                    fontSize: "3rem",
                    color: plan.highlighted ? "#ffffff" : "#1a1a2e",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                    color: plan.highlighted ? "rgba(255,255,255,0.7)" : "#888",
                    marginBottom: "6px",
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                className="mb-6 pb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.875rem",
                  color: plan.highlighted ? "rgba(255,255,255,0.75)" : "#777",
                  lineHeight: 1.65,
                  borderBottom: plan.highlighted ? "1px solid rgba(255,255,255,0.2)" : "1px solid #f0f0f0",
                }}
              >
                {plan.description}
              </p>

              {/* Features list */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: plan.highlighted ? "rgba(255,255,255,0.25)" : "rgba(74,144,226,0.12)",
                      }}
                    >
                      <Check size={11} color={plan.highlighted ? "white" : "#4A90E2"} strokeWidth={3} />
                    </div>
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.875rem",
                        color: plan.highlighted ? "rgba(255,255,255,0.9)" : "#555",
                      }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="w-full py-3.5 rounded-2xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] cursor-pointer"
                style={
                  plan.highlighted
                    ? {
                        backgroundColor: "white",
                        color: "#4A90E2",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                      }
                    : {
                        backgroundColor: "#4A90E2",
                        color: "white",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        boxShadow: "0 4px 15px rgba(74,144,226,0.3)",
                      }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
