import type { MetadataRoute } from "next";

const routes = ["", "/docs", "/downloads", "/privacy", "/support"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://gob.hadrawi.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/docs" ? 0.9 : 0.7,
  }));
}
