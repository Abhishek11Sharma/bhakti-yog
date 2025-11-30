export interface Blog {
  title: string;
  excerpt: string;
  link: string;
}

export const blogsData: Record<string, Blog[]> = {
  "Arti": [
    {
      title: "Morning Arti for Devotion",
      excerpt: "Start your day with this beautiful morning arti to connect with the divine.",
      link: "#"
    },
  ],
  "Bhajan Granth": [
    {
      title: "Bhajan Granth Highlights",
      excerpt: "Explore the most soulful bhajans from the Bhajan Granth collection.",
      link: "#"
    }
  ],
  "Shrothram": [
    {
      title: "Shrothram Study Guide",
      excerpt: "Dive deep into Shrothram and understand sacred scriptures with ease.",
      link: "#"
    }
  ],
};
