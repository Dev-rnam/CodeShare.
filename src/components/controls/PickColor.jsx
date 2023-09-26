// ColorPicker.js
import useStore from '@/store';

const ColorPicker = () => {
  const background = useStore((state) => state.background);

  const handleBackgroundColorChange = (newColor) => {
    useStore.setState({ background: newColor });
  };


  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-white">
        Background Color
      </label>
      <input
        type="color"
        value={background}
        onChange={(e) => handleBackgroundColorChange(e.target.value)}
        className="cursor-pointer flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};

export default ColorPicker;
