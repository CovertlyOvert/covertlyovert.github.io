
import { Github, Link } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
      <div className="w-48 h-48 overflow-hidden rounded-sm film-border animate-develop-photo">
        <img
          src="/profile-image.jpg"
          alt="Ankit"
          className="w-full h-full object-cover sepia-[.5]"
        />
      </div>
      <div className="flex-1">
        <h1 className="font-playfair font-bold text-4xl md:text-5xl text-amber-dark mb-3">
          Ankit
        </h1>
        <div className="mb-4 text-lg font-bold typewriter">
          Developer. Experimenter. Photographer.
        </div>
        <p className="mb-6 max-w-2xl">
          Welcome to my lab! I'm Ankit, a developer with a passion for building useful tools and 
          experimenting with new technologies. I believe in the power of simple design
          and efficient code. When I'm not coding, you can find me behind a camera,
          capturing moments that tell a story.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ankit"
            target="_blank"
            rel="noreferrer"
            className="retro-btn flex items-center space-x-2"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="#"
            className="retro-btn flex items-center space-x-2"
          >
            <Link size={16} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
