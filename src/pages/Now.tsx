
import Layout from "@/components/Layout";
import NowItem from "@/components/NowItem";

const nowItems = [
  {
    title: "Building Advanced Features for 36 Pics",
    description: "Adding film simulation profiles, improved exposure controls, and darkroom-style editing to my film photography app.",
    date: "Updated May 1, 2025",
    progress: 65,
  },
  {
    title: "Learning Rust for Systems Programming",
    description: "Deep diving into Rust to build more efficient and reliable backend systems. Currently working through 'The Rust Programming Language' book and building small utilities.",
    date: "Started April 10, 2025",
    progress: 40,
  },
  {
    title: "Analog Photography Project",
    description: "Shooting a series of portraits on Kodak Portra 400 film. Exploring the differences between analog and digital photography workflows.",
    date: "Ongoing since March 2025",
    progress: 80,
  },
  {
    title: "Setting Up a Home Lab Server",
    description: "Building a self-hosted server for development, testing, and personal projects using Proxmox and Docker.",
    date: "Started February 5, 2025",
    progress: 90,
  },
];

const Now = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="page-heading">Now</h1>
          <p className="max-w-3xl mb-2">
            A snapshot of what I'm currently focused on. This page is inspired by 
            the <a href="https://nownownow.com/about" target="_blank" rel="noreferrer" className="text-amber hover:text-amber-dark underline">
              /now page movement
            </a>.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: May 5, 2025
          </p>
        </div>

        <div className="space-y-6">
          {nowItems.map((item, index) => (
            <NowItem
              key={index}
              {...item}
            />
          ))}
        </div>

        <div className="paper-card p-6 mt-8 film-grain">
          <h2 className="font-playfair font-bold text-xl mb-4">Current Reading List</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>"The Pragmatic Programmer" (revisiting for the third time)</li>
            <li>"Atomic Habits" by James Clear</li>
            <li>"On Photography" by Susan Sontag</li>
            <li>"The Rust Programming Language" by Steve Klabnik and Carol Nichols</li>
          </ul>
        </div>

        <div className="paper-card p-6 mt-8 film-grain">
          <h2 className="font-playfair font-bold text-xl mb-4">Current Music Rotation</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Khruangbin - "Con Todo El Mundo"</li>
            <li>Ryuichi Sakamoto - "async"</li>
            <li>Thom Yorke - "Anima"</li>
            <li>Four Tet - "Sixteen Oceans"</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Now;
