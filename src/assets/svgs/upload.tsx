export const Upload = ({
  className,
  stroke = "#000000",
}: {
  className?: string;
  stroke?: string;
}) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      className={`${className ?? ""} download-animate absolute`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
