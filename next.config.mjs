import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["a0.muscache.com"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("leaflet");
    }
    return config;
  },
});

export default nextConfig;
