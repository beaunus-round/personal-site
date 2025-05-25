import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // allows access from public URLs
    strictPort: false,
    watch: {
      usePolling: true,
    },
    allowedHosts: [".csb.app"], // ← this is the key fix!
  },
});
