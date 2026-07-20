import type { VendorStatus } from "../types/vendor.types";

interface StatusBadgeProps {
  status: VendorStatus;
}

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  BlackListed: "bg-red-100 text-red-700",
};
function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
