module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"], // Modifiez selon les besoins de votre projet
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Ajoutez cette ligne si vous utilisez React
  ],
  // Ajoutez d'autres configurations ESLint ici
};
