import type { Vendor } from "../types/vendor.types";
import StatusBadge from "./StatusBadge";

interface VendorTableProps {
  loading: boolean;
  vendors: Vendor[];
}

function VendorTable({ loading, vendors }: VendorTableProps) {
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        Loading vendors.....
      </div>
    );
  }

  if (!vendors.length) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">No Vendors Found</div>
    );
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-[1200px] w-full">
        <thead className="sticky top-0 bg-slate-50">
          <tr>
            {Object.keys(vendors[0]).map((header) => (
              <th key={header} className="px-6 py-4 text-left">
                {header.toLocaleUpperCase()}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {vendors.map((vendor) => (
            <tr
              key={vendor.id}
              className="border-t hover:bg-slate-50 transition-colors"
            >
              {Object.values(vendor).map((value, index) => (
                <td className="px-6 py-4" key={index}>
                  {value === "Active" ||
                  value === "Pending" ||
                  value === "BlackListed" ? (
                    <StatusBadge status={value} />
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorTable;
