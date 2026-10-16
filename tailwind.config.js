/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm pigment-inspired palette
        ivory: "#FFF8F0",
        cream: "#F7EBDD",
        terracotta: {
          DEFAULT: "#C76D4A",
          50: "#FBF0EA",
          100: "#F7E1D6",
          200: "#EFCCC0",
          300: "#E5A18D",
          400: "#D7876A",
          500: "#C76D4A",
          600: "#B95332",
          700: "#98421F",
          800: "#7A3616",
          900: "#5E2B11"
        },
        burnt: "#B95332",
        coral: "#E5A18D",
        burgundy: {
          DEFAULT: "#542B32",
          700: "#542B32",
          800: "#421F26",
          900: "#2E151A"
        },
        charcoal: "#352B29",
        sand: "#E8D4BE",
        sage: {
          DEFAULT: "#647C65",
          100: "#E4EAE3",
          500: "#647C65",
          600: "#526A54"
        },
        // Greenish-yellow (citron / chartreuse) page surface family.
        citron: {
          DEFAULT: "#EDF5C4",
          50: "#F8FBE3",
          100: "#F1F7CD",
          200: "#E6EFAA",
          300: "#D8E688",
          400: "#C7DA63",
          500: "#B4C93F",
          600: "#93A632"
        }
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Manrope", "system-ui", "sans-serif"],
        deva: ["'Noto Sans Devanagari'", "Manrope", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 1px 2px rgba(53,43,41,0.05), 0 10px 26px -18px rgba(53,43,41,0.35)",
        lift: "0 2px 6px rgba(53,43,41,0.06), 0 26px 50px -28px rgba(53,43,41,0.45)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.7)",
        glow: "0 0 0 1px rgba(100,124,101,0.25), 0 18px 40px -20px rgba(100,124,101,0.55)",
        citron: "0 18px 48px -24px rgba(147,166,50,0.75)"
      },
      backgroundImage: {
        "citron-mesh":
          "linear-gradient(135deg, #F9FCE6 0%, #F1F7CD 34%, #E4EFA4 66%, #EEF5C6 100%)",
        "citron-wash":
          "radial-gradient(1100px 620px at 12% 6%, rgba(255,255,255,0.9), transparent 62%), radial-gradient(900px 560px at 92% 14%, rgba(216,230,136,0.6), transparent 60%), radial-gradient(1000px 640px at 48% 108%, rgba(100,124,101,0.22), transparent 62%)"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(6deg)" }
        },
        drift: {
          "0%,100%": { transform: "translate(0,0)" },
          "33%": { transform: "translate(10px,-8px)" },
          "66%": { transform: "translate(-8px,6px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        pulseSoft: {
          "0%,100%": { opacity: 0.55 },
          "50%": { opacity: 1 }
        },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        blob: {
          "0%,100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(42px, -34px) scale(1.09)" },
          "66%": { transform: "translate(-30px, 26px) scale(0.95)" }
        },
        blobAlt: {
          "0%,100%": { transform: "translate(0px, 0px) scale(1) rotate(0deg)" },
          "33%": { transform: "translate(-38px, 30px) scale(1.12) rotate(8deg)" },
          "66%": { transform: "translate(30px, -24px) scale(0.93) rotate(-6deg)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        sweep: {
          "0%": { transform: "translateX(-140%) skewX(-18deg)" },
          "58%,100%": { transform: "translateX(260%) skewX(-18deg)" }
        },
        glowPulse: {
          "0%,100%": { opacity: 0.32, transform: "scale(1)" },
          "50%": { opacity: 0.72, transform: "scale(1.07)" }
        },
        ringPulse: {
          "0%": { transform: "scale(0.8)", opacity: 0.55 },
          "100%": { transform: "scale(2)", opacity: 0 }
        },
        tilt: {
          "0%,100%": { transform: "rotate(-2.2deg)" },
          "50%": { transform: "rotate(2.2deg)" }
        },
        bobble: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-9px) rotate(3deg)" }
        },
        sheen: {
          "0%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(160%)" }
        },
        bobX: {
          "0%,100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(16px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 11s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        spinSlow: "spinSlow 9s linear infinite",
        pulseSoft: "pulseSoft 2.2s ease-in-out infinite",
        gradient: "gradientShift 20s ease-in-out infinite",
        blob: "blob 22s ease-in-out infinite",
        blobAlt: "blobAlt 28s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        sweep: "sweep 3.6s ease-in-out infinite",
        glowPulse: "glowPulse 5.4s ease-in-out infinite",
        ringPulse: "ringPulse 2.8s ease-out infinite",
        tilt: "tilt 9s ease-in-out infinite",
        bobble: "bobble 7s ease-in-out infinite",
        sheen: "sheen 3.4s ease-in-out infinite",
        bobX: "bobX 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
