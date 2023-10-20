import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "../",
  server: {
    host: true,
  },
  plugins: [react()],
});
