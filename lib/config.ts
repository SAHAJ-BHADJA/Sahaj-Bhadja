export const siteConfig = {
  name: "Sahaj Bhadja",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  github: "https://github.com/sahajbhadja",
  linkedin: "https://www.linkedin.com/in/sahaj-bhadja",
};

export type SiteConfig = typeof siteConfig;

