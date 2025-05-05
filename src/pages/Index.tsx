
import Layout from "@/components/Layout";
import ProfileSection from "@/components/ProfileSection";
import ProjectCard from "@/components/ProjectCard";
import BlogPost from "@/components/BlogPost";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "36 Pics",
    description: "A minimalist film-inspired photo app that limits you to 36 exposures, simulating the experience of shooting with a film camera.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["React Native", "Firebase", "Camera API"],
    githubUrl: "https://github.com/ankit/36-pics",
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Weather Journal",
    description: "A personal weather tracking app that allows users to record weather conditions alongside their mood and activities.",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    tags: ["React", "Node.js", "Weather API"],
    githubUrl: "https://github.com/ankit/weather-journal",
  },
  {
    title: "Code Archive",
    description: "A searchable archive of useful code snippets with syntax highlighting and categories.",
    imageUrl: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    tags: ["TypeScript", "NextJS", "Prisma"],
    githubUrl: "https://github.com/ankit/code-archive",
  },
];

const recentPosts = [
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
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-16">
        <ProfileSection />

        <section>
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="section-heading">Featured Projects</h2>
            <Link to="/projects" className="text-sm text-amber hover:text-amber-dark transition-colors font-bold typewriter">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="section-heading">Recent Writings</h2>
            <Link to="/blog" className="text-sm text-amber hover:text-amber-dark transition-colors font-bold typewriter">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <BlogPost
                key={index}
                {...post}
              />
            ))}
          </div>
        </section>

        <section className="paper-card p-8 text-center film-grain">
          <h2 className="font-playfair font-bold text-2xl mb-4">
            Currently Working On
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            I'm always exploring new ideas and working on interesting projects. 
            Check out what's currently developing in my lab.
          </p>
          <Link to="/now" className="retro-btn">
            See What I'm Doing Now
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
