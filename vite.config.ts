import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react(), mode === "development" && null].filter(Boolean);

  return {
    base: "/Portofolio/",
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
