module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".9rem",
      tiny: ".9rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: {
      white: "#fff",
      black: '#000',
      background: "#f2ecf3",
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
      octopus: {
        50: "#8b858d",
        100: "#87798b",
        200: "#876e8d",
        300: "#815b8a",
        400: "#7f4d8a",
        500: "#7e458b",
        600: "#7f3b8f",
        700: "#7d2f8f",
        800: "#7a1e8f",
        900: "#790b92",
      },
      octopus_accent: {
        50: "#f8d6d7",
        100: "#f8bfc1",
        200: "#f8a4a8",
        300: "#f3888d",
        400: "#f87279",
        500: "#f65d65",
        600: "#f84d55",
        700: "#f73741",
        800: "#f7252f",
        900: "#f7111c",
      },
      octopus_bg: {
        50: "#f8ede9",
        100: "#f7ddd6",
        200: "#facdc2",
        300: "#fab9a8",
        400: "#faa590",
        500: "#fb9378",
        600: "#fc8263",
        700: "#fc714e",
        800: "#f85b34",
        900: "#f7471b",
      },
      current_play: "#bb020e",
    },
    extend: {
      gridTemplateRows: {
        footer: "1fr 2fr 1fr 40px auto",
        footer_md: "1fr 40px",
        portada: "1fr 2fr 1fr 50px 50px 50px",
        portada_md: "1rem 100px 100px 1fr 1fr 1fr 40px 40px 40px",
        portada_schedule: "1fr 3fr 2fr 1fr 50px 50px 50px",
        portada_schedule_md: " 1rem 100px 100px 1fr 1fr 1fr 40px 40px 40px"
      },
      gridTemplateColumns: {
        footer: "1fr",
        footer_md: "2rem 1fr 3fr 1fr 2rem",
        portada: "1fr",
        portada_md: "10% 2fr 1fr 1fr 1fr 10% 50px",
        portada_schedule_md: "10% 2fr 1fr 1fr 1fr 10% 50px"
      },
      maxWidth: {
        "150px": "150px",
        "350px": "350px",
        "540px": "540px",
        "720px": "720px",
        "960px": "960px",
        "1140px": "1140px",
        "1200px": "1200px",
      },
      height: {
        "200px":"200px"
      },
      zIndex: {
        1: "1",
      },
      gridRowStart: {
        9: "9",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
      },
      borderWidth: {
        5: "5px",
      },
      inset: {
        "10px": "10px",
      },
      keyframes: {
        move: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-100%,0)" },
        },
      },
      animation: {
        move: "move 30s linear infinite",
        move_delay: "move 30s 15s linear infinite"
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
