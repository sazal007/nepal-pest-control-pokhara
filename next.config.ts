import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "nepal-pest-control-pokhara.nepdora.baliyoventures.com",
      },
      {
        protocol: "https",
        hostname: "cpcindia.in",
      },
      {
        protocol: "https",
        hostname: "www.empactgroup.co.za",
      },
      {
        protocol: "https",
        hostname: "environet.com.ph",
      },
      {
        protocol: "https",
        hostname: "sgp1.digitaloceanspaces.com",
      },
    ],
  },
  // ISR is configured per-page using the `revalidate` export
  // See individual page files for revalidation times (default: 3600 seconds / 1 hour)
};

export default nextConfig;
