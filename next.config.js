/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, options) {
    // Handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    // Return the modified config
    return config;
  },

};

export default nextConfig;

