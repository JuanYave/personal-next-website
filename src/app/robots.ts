/**
 * Robots.txt configuration
 * Controls search engine crawler access
 */
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://juanjhs.dev/sitemap.xml",
  };
}
