import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      // Versa Digital was rebranded to Gidot Agency; keep old case study links working.
      {
        source: "/work/versadigital",
        destination: "/work/gidot-agency",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
