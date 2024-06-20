export default function AnnounceItem({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  return (
    <div className="grid grid-cols-5 justify-center items-center p-5 rounded-md bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2">
      <div className="col-span-1">
        <img src={icon} alt="icon" className="w-10 h-10" />
      </div>
      <div className="col-span-4 text-start">
        <div className="text-xl font-[600]">{title}</div>
        <div className="font-light">{content}</div>
      </div>
    </div>
  );
}
