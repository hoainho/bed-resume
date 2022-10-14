module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "200px",
      // => @media (min-width: 320px) { ... }
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        "2xl": "139px",
        xl: "50px",
        sm: "16px",
      },
    },
    fontFamily: {
      sans: ["Poppins"],
      poppins: ["Poppins"],
    },
    extend: {
      minHeight: {
        "60px": "60px",
      },
      maxWidth: {
        "2/5": "40%",
        "1/5": "20%",
      },
      colors: {
        bed_agorz_blue: "#2054AC",
        bed_deepblue: "#3086D5",
        bed_blue: "#6CB8FF",
        bed_lightblue: "#F1F6FA",
        bed_green: "#80D921",
        bed_yellow: "#FCFF13",
        bed_red: "#FF2F13",
        bed_btngray: "#B2B2B2",
        bed_text: "#4A545C",
        bed_lightgray: "#D2D2D2",
        bed_darkgray: "#868686",
        bed_text_header: "#7D7D7D",
        bed_bg_download: "#E4F2FF",
      },
      fontSize: {
        "11px": "11px",
        "13px": "13px",
        "30px": "30px",
        "40px": "40px",
      },
      spacing: {
        "fill-available": "-webkit-fill-available",
        "fit-content": "fit-content",
        "1/6": "16.667%",
        "5px": "5px",
        "6px": "6px",
        "10px": "10px",
        "13px": "13px",
        "18px": "18px",
        "26px": "26px",
        "30px": "30px",
        "37px": "37px",
        "38px": "38px",
        "40px": "40px",
        "45px": "45px",
        "52px": "52px",
        "58px": "58px",
        "60px": "60px",
        "68px": "68px",
        "85px": "85px",
        "88px": "88px",
        "100px": "100px",
        "107px": "107px",
        "114px": "114px",
        "120px": "120px",
        "140px": "140px",
        "170px": "170px",
        "183px": "183px",
        "192px": "192px",
        "323px": "323px",
        "345px": "345px",
        "365px": "365px",
        "450px": "450px",
        "543px": "543px",
        "609px": "609px",
        "648px": "648px",
        "748px": "748px",
        "1.12rem": "1.12rem",
        "7rem": "7rem",
        "7.5rem": "7.5rem",
      },
      backgroundPosition: {
        "position-landing-download-sky": "center top -95px",
      },
      boxShadow: {
        "layout-header": "0px 4px 10px rgba(0, 0, 0, 0.15)",
      },
      maxWidth: {
        "294px": "294px",
      },
      inset: {
        "140px": "140px",
      },
      lineHeight: {
        "45px": "45px",
        "60px": "60px",
      },
      height: {
        "198px": "198px",
      },
      width: {
        "198px": "198px",
      },
    },
  },
  variants: {
    transform: ["responsive", "hover", "focus", "active", "group-hover"],
    transformOrigin: ["responsive", "hover", "focus", "active", "group-hover"],
    transitionDelay: ["responsive", "hover", "focus", "active", "group-hover"],
    transitionDuration: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
    transitionProperty: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
    transitionTimingFunction: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    // visible: ["responsive", "hover", "focus", "active", "group-hover"],
    invisible: ["responsive", "hover", "focus", "active", "group-hover"],
    extend: {},
  },
  plugins: [],
};
