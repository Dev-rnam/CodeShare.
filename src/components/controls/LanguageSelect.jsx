import { languages } from "@/options";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import useStore from "@/store";
import { MagicWandIcon } from "@radix-ui/react-icons";


const LanguageSelect = () => {
    const language = useStore(state => state.language)
    const autoDetectLanguage= useStore(state => state.autoDetectLanguage)

    
  const handleChange = (language) => {
    if (language === "auto-detect") {
      useStore.setState({ autoDetectLanguage: true, language: "plaintext" })
    } else {
      useStore.setState({ autoDetectLanguage: false, language })
    }
  }
  return (
    <div>
      <Select value={language}
        onValueChange={handleChange}
        className="vf"
        >
        <SelectTrigger className="w-40">
            {autoDetectLanguage && <MagicWandIcon className="mr-2" />}
            <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent className=" max-h-[500px] fg vf ff text-white">
            <SelectItem value="auto-detect" className="ff">Auto Detect</SelectItem>  
            {
                Object.entries(languages).map(([lang, name]) => (
                <SelectItem key={lang} value={lang} className=" max-h-[500px] fg ff">
                     {name}
                </SelectItem>
                ))
            }
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelect;
