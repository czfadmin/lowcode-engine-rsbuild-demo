import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";

export default defineConfig({
  plugins: [pluginReact(), pluginNodePolyfill()],
  dev: {
    progressBar: true,
  },
  source: {
    entry: {
      index: "./src/index.tsx",
      preview: "./src/preview.tsx",
    },
  },
  html: {
    template(params) {
      const templateEntries: any = {
        index: "./public/index.html",
        preview: "./public/preview.html",
      };
      return templateEntries[params.entryName];
    },
  },
  output: {
    externals: {
      react: "var window.React",
      "react-dom": "var window.ReactDOM",
      "prop-types": "var window.PropTypes",
      "@alifd/next": "var window.Next",
      "@alilc/lowcode-engine": "var window.AliLowCodeEngine",
      "@alilc/lowcode-engine-ext": "var window.AliLowCodeEngineExt",
      moment: "var window.moment",
      lodash: "var window._",
    },
  },
});
