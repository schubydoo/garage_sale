/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Next 16 writes AGENTS.md and CLAUDE.md into the repo root on `next dev`
  // and recreates them when deleted. This repo manages its own agent rules.
  agentRules: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "drive.google.com" }],
  },
};
