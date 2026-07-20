import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

function KPICard({ title, value, icon: Icon }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:show-lg">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h2 className="text-3xl fond-bold mt-3 tracking-tight text-slate-900">
            {value}
          </h2>
        </div>
        <div className="flex h-12 w-12 rounded-xl p-3 items-center justify-center bg-blue-50 text-blue-600 ">
          <Icon className="text-blue-600" />
        </div>
      </div>
    </div>
  );
}

export default KPICard;
