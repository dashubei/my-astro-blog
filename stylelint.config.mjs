import standardConfig from "stylelint-config-standard";
import htmlConfig from "stylelint-config-html/astro";

export default {
  extends: [standardConfig, htmlConfig],
  overrides: [
    {
      files: ["**/*.astro"],
      customSyntax: "postcss-html",
    },
  ],
};
