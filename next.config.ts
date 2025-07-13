import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';", // Prevents iframe embedding
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Extra layer (not required but helps older browsers)
          },
        ],
      },
    ];
  },
};

export default nextConfig;