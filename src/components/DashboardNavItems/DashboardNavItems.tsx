import { ReactElement } from "react";

type Props = {
  text: string;
  image: ReactElement;
  activeItem: string;
  setActiveItem: (a: string) => void;
  className?: string;
};
export default function DashboardNavItems({
  text,
  image,
  activeItem,
  setActiveItem,
  className,
}: Props) {
  return (
    <div
      className={` flex items-center gap-x-2 px-3 capitalize text-sm cursor-pointer hover:bg-[#8a2be2] hover:text-white ${className} ${
        activeItem === text && "bg-[#8a2be2] text-white"
      }`}
      onClick={() => setActiveItem(text)}
    >
      {image}
      {text}
    </div>
  );
}
