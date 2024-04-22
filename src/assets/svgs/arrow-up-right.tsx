export const ArrowUpIcon = ({
  className,
  stroke = "#000000",
}: {
  className?: string;
  stroke?: string;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ?? ""}`}
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
