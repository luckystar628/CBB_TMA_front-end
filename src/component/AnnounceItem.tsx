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
    <div className={`grid grid-cols-5 max-sm:grid-cols-9 justify-center items-center p-5 rounded-md bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2 max-sm:py-2 max-sm:px-3`}>
      <div className="col-span-1">
        <img src={icon} alt="icon" className="w-10 h-10 max-sm:w-6 max-sm:h-6" />
      </div>
      <div className="col-span-4 max-sm:col-span-8 text-start">
        <div className="text-xl max-sm:text-[15px] font-[600]">{title}</div>
        <div className="font-light max-sm:text-[12px] max-sm:text-wrap max-sm:break-all">{content}</div>
      </div>
    </div>
  );
}
