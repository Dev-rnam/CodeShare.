import { themes } from "@/options";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import '../../../src/style.css'

const ThemeSelected = () => {
    const theme = useStore(state => state.theme)
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-white">Theme</label>
      <select value={theme}
        onChange={(theme) => useStore.setState({ theme })}
        placeholder="Select Theme"
        className="w-60"
        >
            {
                Object.entries(themes).map(([name, theme]) => (
                    <option key={name} value={name} className="">
                        <div className="flex gap-2 items-center fg vf">
                            <div className={cn("h-4 w-4 rounded-full", theme.background)} />
                            <span className="capitalize text-[#000] fg">{name}</span>
                        </div>
                    </option>
                ))
            }
        
      </select>
    </div>
  );
}

export default ThemeSelected;
