module.exports = {
  plugins: [
    require("postcss-import")({
      plugins: [],
      path: ["./node_modules"],
    }),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": true,
        "nesting-rules": true,
      },
      browsers: ["> 1%", "last 2 versions", "Firefox ESR", "not ie < 10"],
    }),
  ],
};
