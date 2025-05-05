
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const projects = [
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
  {
    title: "Film Roll",
    description: "A gallery app that organizes photos into 'rolls' with limited edits to preserve authenticity.",
    imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    tags: ["React", "Electron", "ExifTool"],
    githubUrl: "https://github.com/ankit/film-roll",
  },
  {
    title: "Lab Notes",
    description: "A markdown note-taking app with a laboratory notebook aesthetic.",
    tags: ["Vue.js", "Markdown", "IndexedDB"],
    githubUrl: "https://github.com/ankit/lab-notes",
  },
  {
    title: "Retro Calculator",
    description: "A calculator web app with vintage styling and sound effects.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ankit/retro-calculator",
    demoUrl: "#",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="page-heading">Project Archive</h1>
          <p className="max-w-3xl mb-8">
            A collection of my personal projects, experiments, and explorations. Each project 
            represents a different challenge and learning opportunity. Feel free to explore 
            the source code or demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
