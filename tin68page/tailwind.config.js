module.exports = {
  // mode: "jit",
  // purge: ["./*.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        custom: "750px",
      },
      fontFamily: {
        dm: ['"DM Sans"'],
      },
    },
  },
  plugins: [],
};
