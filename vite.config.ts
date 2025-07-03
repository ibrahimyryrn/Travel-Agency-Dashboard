import { reactRouter } from "@react-router/dev/vite";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-ct",
  project: "javascript-react",
  // An auth token is required for uploading source maps.
  authToken:
    "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",
  // ...
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      reactRouter(),
      tsconfigPaths(),
      sentryReactRouter(sentryConfig, config),
    ],
    ssr: {
      noExternal: [/@syncfusion/],
    },
  };
});
