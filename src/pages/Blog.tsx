
import Layout from "@/components/Layout";
import BlogPost from "@/components/BlogPost";

const blogPosts = [
  {
    title: "Building a Film-Inspired Photo App",
    excerpt: "How limiting options can enhance creativity and user experience in photography apps.",
    date: "May 2, 2025",
    slug: "building-film-inspired-photo-app",
    tags: ["Photography", "App Development", "UX Design"],
    featured: true,
  },
  {
    title: "The Joy of Analog Processes in a Digital World",
    excerpt: "Exploring how analog constraints can lead to more meaningful digital experiences.",
    date: "April 15, 2025",
    slug: "analog-processes-digital-world",
    tags: ["Philosophy", "Design", "Digital Minimalism"],
  },
  {
    title: "Creating a Retro-Themed Portfolio",
    excerpt: "The design decisions and technical considerations behind building this nostalgic portfolio site.",
    date: "March 30, 2025",
    slug: "creating-retro-themed-portfolio",
    tags: ["Web Development", "Design", "React"],
  },
  {
    title: "The Surprising Benefits of Limited Tools",
    excerpt: "How working with constraints can boost creativity and productivity in software development.",
    date: "March 10, 2025",
    slug: "benefits-limited-tools",
    tags: ["Productivity", "Development", "Creativity"],
  },
  {
    title: "Photography Techniques for Developers",
    excerpt: "How principles from photography can improve the way we approach software design.",
    date: "February 22, 2025",
    slug: "photography-techniques-developers",
    tags: ["Photography", "Design", "Creativity"],
  },
  {
    title: "My Development Setup 2025",
    excerpt: "A detailed look at the hardware and software tools I use for development work.",
    date: "January 15, 2025",
    slug: "development-setup-2025",
    tags: ["Tools", "Productivity", "Workflow"],
  },
];

const Blog = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="page-heading">Lab Notes</h1>
          <p className="max-w-3xl mb-8">
            My thoughts, experiments, and discoveries in the fields of development, design, and 
            photography. Each post is a snapshot of my learning journey and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              {...post}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
