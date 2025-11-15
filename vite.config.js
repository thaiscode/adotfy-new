import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", 
  server: {
    proxy: {
      "/pets-api": {
        target: "https://adotfy-api.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        ongs: resolve(__dirname, "ONGs.html"),
        perdidos: resolve(__dirname, "perdidos.html"),
        pets: resolve(__dirname, "pets.html"),
        sobre: resolve(__dirname, "sobre.html"),
      },
    },
  },
});