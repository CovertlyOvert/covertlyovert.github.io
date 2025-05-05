
interface NowItemProps {
  title: string;
  description: string;
  date: string;
  progress?: number;
}

const NowItem = ({ title, description, date, progress }: NowItemProps) => {
  return (
    <div className="paper-card p-6 mb-6 film-grain">
      <h3 className="font-playfair font-bold text-xl mb-2">{title}</h3>
      <div className="timestamp mb-3">{date}</div>
      <p className="mb-4">{description}</p>
      {progress !== undefined && (
        <div className="w-full bg-sepia rounded-full h-2">
          <div
            className="bg-amber h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default NowItem;
