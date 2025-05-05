
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  demoUrl,
  featured = false,
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "paper-card film-grain overflow-hidden flex flex-col animate-develop-photo",
      featured ? "md:col-span-2" : ""
    )}>
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover sepia-[.3] hover:sepia-0 transition-all duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair font-bold text-xl">{title}</h3>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-amber-dark hover:text-amber transition-colors"
            aria-label={`View ${title} on GitHub`}
          >
            <Github size={20} />
          </a>
        </div>
        <p className="text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="label-tag">
              {tag}
            </span>
          ))}
        </div>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="retro-btn w-full text-center"
          >
            View Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
