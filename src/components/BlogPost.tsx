
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: string[];
  featured?: boolean;
}

const BlogPost = ({
  title,
  excerpt,
  date,
  slug,
  tags,
  featured = false,
}: BlogPostProps) => {
  return (
    <article className={cn(
      "paper-card p-6 animate-fade-in",
      featured ? "md:col-span-2 border-l-4 border-l-amber" : ""
    )}>
      <h3 className="font-playfair font-bold text-xl mb-2">{title}</h3>
      <div className="timestamp mb-3">{date}</div>
      <p className="mb-4 text-sm">{excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="label-tag">
            {tag}
          </span>
        ))}
      </div>
      <Link to={`/blog/${slug}`} className="retro-btn">
        Read More
      </Link>
    </article>
  );
};

export default BlogPost;
