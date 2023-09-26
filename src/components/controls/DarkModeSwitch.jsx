import useStore from "@/store"
import { Switch } from "../ui/switch"

const DarkModeSwitch = () => {
    const darkMode = useStore((state) => state.darkMode)
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-white">
        DarkMode
      </label>
      <Switch
        checked={darkMode}
        onCheckedChange={(checked) => useStore.setState({ darkMode: checked })}
        className="my-1.5"
      />
    </div>
  );
}

export default DarkModeSwitch;
