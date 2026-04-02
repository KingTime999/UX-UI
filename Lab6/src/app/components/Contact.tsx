import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email Us", value: "hello@smartbinai.com", color: "#4A90E2" },
    { icon: Phone, label: "Call Us", value: "+1 (800) 123-4567", color: "#059669" },
    { icon: MapPin, label: "Visit Us", value: "123 Green St, San Francisco, CA", color: "#7c3aed" },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
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
            Get In Touch
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
            Contact <span style={{ color: "#4A90E2" }}>Us</span>
          </h2>
          <p
            className="mt-4 text-gray-500"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem", lineHeight: 1.75 }}
          >
            Have questions or want a demo? Our team is ready to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info — 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div
              className="p-8 rounded-3xl"
              style={{ background: "linear-gradient(145deg, #4A90E2 0%, #357abd 100%)", boxShadow: "0 20px 50px rgba(74,144,226,0.3)" }}
            >
              <h3
                className="mb-2"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "white" }}
              >
                Let's Talk
              </h3>
              <p
                className="mb-8"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}
              >
                We're here to help you build a smarter, cleaner future. Reach out anytime!
              </p>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        <Icon size={18} color="white" />
                      </div>
                      <div>
                        <p
                          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}
                        >
                          {info.label}
                        </p>
                        <p
                          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "white" }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form — 8 cols */}
          <div className="lg:col-span-8">
            <div
              className="p-8 rounded-3xl border border-gray-100"
              style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.07)" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(5,150,105,0.12)" }}
                  >
                    <span style={{ fontSize: "2rem" }}>✅</span>
                  </div>
                  <h3
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#1a1a2e" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.9rem", color: "#777" }}
                  >
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#444" }}
                      >
                        Full Name <span style={{ color: "#4A90E2" }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none transition-all duration-200 focus:border-[#4A90E2]"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "0.9rem",
                          color: "#333",
                          backgroundColor: "#fafafa",
                        }}
                        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(74,144,226,0.15)")}
                        onBlur={(e) => (e.target.style.boxShadow = "none")}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#444" }}
                      >
                        Email Address <span style={{ color: "#4A90E2" }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none transition-all duration-200 focus:border-[#4A90E2]"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "0.9rem",
                          color: "#333",
                          backgroundColor: "#fafafa",
                        }}
                        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(74,144,226,0.15)")}
                        onBlur={(e) => (e.target.style.boxShadow = "none")}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#444" }}
                    >
                      Message <span style={{ color: "#4A90E2" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your waste management needs..."
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none transition-all duration-200 focus:border-[#4A90E2] resize-none"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.9rem",
                        color: "#333",
                        backgroundColor: "#fafafa",
                      }}
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(74,144,226,0.15)")}
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-4 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01] cursor-pointer"
                    style={{
                      backgroundColor: "#4A90E2",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      boxShadow: "0 8px 25px rgba(74,144,226,0.35)",
                    }}
                  >
                    Send Message <Send size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
