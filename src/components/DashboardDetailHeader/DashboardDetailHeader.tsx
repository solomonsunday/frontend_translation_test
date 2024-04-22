type Props = {
  image: string;
  title: string;
  activityText: string;
};

export default function DashboardDetailHeader({
  image,
  title,
  activityText,
}: Props) {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex gap-x-3 items-center">
          <img
            src={image}
            alt="eyeIcon"
            className="w-5 h-5 cursor-pointer"
          />
          <p className="font-medium">{title}</p>
          <p className=" text-xs self-end text-[#b4b5b6]">{activityText}</p>
        </div>
        <p className=" capitalize text-[#8a2be2] text-[.75rem] font-medium">
          see all
        </p>
      </div>
      <hr className=" mt-4 mb-3" />
    </>
  );
}
