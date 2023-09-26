import { fonts} from "@/options";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import useStore from "@/store";
import '../../../src/style.css';

const FontSelect = () => {
    const fontStyle = useStore(state => state.fontStyle)
   
  
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-white">Font </label>
      <Select value={fontStyle}
        onValueChange={(fontStyle) => useStore.setState({ fontStyle })}
        >
        <SelectTrigger className="w-40">
            <SelectValue placeholder="Select Font" />
        </SelectTrigger>
        <SelectContent className="max-h-[500px] fg vf text-white">
            {
                Object.entries(fonts).map(([id, font]) => (
                <SelectItem key={id} value={id} className=" ">
                     {font.name}
                </SelectItem>
                ))
            }
        </SelectContent>
      </Select>
    </div>
  );
}

export default FontSelect;
