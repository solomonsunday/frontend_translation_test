import { ReactElement } from "react";

type Props = {
  element: ReactElement;
  text: string;
  backgroundColour: string;
  className: string;
};

export default function ArrowItemGroup({
  element,
  text,
  backgroundColour,
  className,
}: Props) {
  return (
    <div className={` flex items-center gap-x-2 cursor-pointer ${className}`}>
      <div
        className={` ${backgroundColour} w-fit h-fit px-1 py-[.0625rem] flex items-center justify-center rounded-md`}
      >
        {element}
      </div>
      {text}
    </div>
  );
}
