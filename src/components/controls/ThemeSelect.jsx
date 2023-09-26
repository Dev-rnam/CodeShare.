import { themes } from "@/options";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import '../../../src/style.css'

const ThemeSelect = () => {
    const theme = useStore(state => state.theme)
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-white">Theme</label>
      <Select value={theme}
        onValueChange={(theme) => useStore.setState({ theme })}
        >
        <SelectTrigger className="w-60">
            <SelectValue placeholder="Select Theme" />
        </SelectTrigger>
        <SelectContent className="bg-[ffffff4c] box-container">
            {
                Object.entries(themes).map(([name, theme]) => (
                    <SelectItem key={name} value={name} className="fg">
                        <div className="flex gap-2 items-center fg ">
                            <div className={cn("h-4 w-4 rounded-full", theme.background)} />
                            <span className="capitalize text-gray-300 fg">{name}</span>
                        </div>
                    </SelectItem>
                ))
            }
        </SelectContent>
      </Select>
    </div>
  );
}

export default ThemeSelect;
