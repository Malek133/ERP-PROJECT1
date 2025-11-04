import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //  experimental: {
    // ppr: 'incremental'
  //    cacheComponents: true,
  // }
   cacheComponents: true,
   turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
