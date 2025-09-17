import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectMode, toggleMode } from "@/features/modeSlice";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

function ToggleMode() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(selectMode);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div className="flex items-center gap-3">
      <Sun className="w-5 h-5 text-indigo-500 dark:text-gray-400" />
      <Switch
        aria-label="Toggle dark mode"
        checked={mode === "dark"}
        onCheckedChange={() => dispatch(toggleMode())}
        className="data-[state=checked]:bg-indigo-500 data-[state=unchecked]:bg-gray-300"
      />
      <Moon className="w-5 h-5 text-gray-500 dark:text-indigo-400" />
    </div>
  );
}

export default ToggleMode;
