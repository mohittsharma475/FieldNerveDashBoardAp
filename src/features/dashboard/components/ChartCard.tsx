// Resubale Chart Card component
import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border">
      <h2 className="mb-6 text-lg font-semibold text-green-800">{title}</h2>
      <div className="h-80">{children}</div>
    </div>
  );
}

export default ChartCard;
