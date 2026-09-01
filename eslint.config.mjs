import next from "eslint-config-next";
import coreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  { ignores: [".next/**", "out/**", "node_modules/**"] },
  ...next,
  ...coreWebVitals,
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];
