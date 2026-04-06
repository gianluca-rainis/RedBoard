import { createMDX } from "fumadocs-mdx/next";

const nextConfig = {
  
};

const withMDX = createMDX({
  configPath: "source.config.js",
});

export default withMDX(nextConfig);
