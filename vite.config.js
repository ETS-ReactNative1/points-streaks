import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";
import { VitePWA } from "vite-plugin-pwa";

// console.tap = (v, ...rest) => (console.log(v, ...rest), v);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        istanbul({
            exclude:   [ "node_modules", "test/" ],
            extension: [ ".js", ".jsx" ],
            include:   "src/*"
        }),
        VitePWA({})
    ],
    resolve: {
        alias: {
            "@": path.resolve( __dirname, "./src" )
        }
    }
});