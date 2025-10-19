import { cn } from "@/lib/utils";

function CustomButton({
  disbaled,
  rounded,
}: {
  disbaled: boolean;
  rounded: boolean;
}) {
  return (
    <button
      className={cn(
        "text-sm",
        disbaled ? "bg-gray-400" : "bg-blue-500",
        rounded && "rounded-full"
      )}
    >
      Hello World
    </button>
  );
}

export default CustomButton;
