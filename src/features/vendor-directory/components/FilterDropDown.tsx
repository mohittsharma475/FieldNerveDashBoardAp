interface FilterDropDownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function FilterDropDown({ value, options, onChange }: FilterDropDownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus: border-blue500"
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

export default FilterDropDown;
