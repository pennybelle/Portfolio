/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // For GitHub Pages deployments under a subpath (e.g., your-repo-name/)
    basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/Portfolio/" : "",
  };
  
  export default nextConfig;
  