import { Download } from "lucide-react";
import FilterDropDown from "./FilterDropDown";
import SearchInput from "./SearchInput";

interface VendorToolbarProps {
  search: string;
  onSearch: (value: string) => void;
  category: string;
  categoryOption: string[];
  onCategoryChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  onExport: () => void;
}

function VendorToolbar({
  search,
  onSearch,
  category,
  categoryOption,
  onCategoryChange,
  status,
  onStatusChange,
  onExport,
}: VendorToolbarProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput value={search} onChange={onSearch} />

        <div className="flex flex-col gap-3 sm:flex-row">
          <FilterDropDown
            value={category}
            options={["All", ...categoryOption, ]}
            onChange={onCategoryChange}
          />
          <FilterDropDown
            value={status}
            options={["All", "Active", "Pending", "BlackListed"]}
            onChange={onStatusChange}
          />
        </div>

        <button
          onClick={onExport}
          className="flex items-center justify-center rounded-lg gap-2 bg-blue-600 px-4 py-2.5 text-white transiton hover:bg-blue-700"
        >
          <Download size={18} />
          Export
        </button>
      </div>
    </div>
  );
}

export default VendorToolbar;
