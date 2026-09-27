/**
 * Sitemap configuration for SEO
 * Defines all public URLs for search engine crawlers
 */
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://juanjhs.dev";

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
