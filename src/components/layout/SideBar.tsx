import {
  BarChart2,
  Bell,
  Building2,
  ClipboardList,
  LayoutDashboard,
  X,
} from "lucide-react";
import { useNavigate } from "react-router";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

const menus = [
  { name: "DashBoard", icon: LayoutDashboard, path: "/" },
  { name: "Vendors", icon: Building2, path: "/vendors" },
  { name: "Purchase Orders", icon: ClipboardList, path: "/orders" },
  { name: "Performance", icon: BarChart2, path: "/performance" },
  { name: "Notification", icon: Bell, path: "/notification" },
];
function SideBar({ open, onClose }: SideBarProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 transform overflow-y-auto bg-white border-r p-6 transition-transform duration-300 lg:static lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-2">
        <div className="text-2xl font-bold">VendorMS</div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700 lg:hidden"
        >
          <X size={20} />
        </button>
      </div>
      <nav>
        {menus.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="flex w-full items-center gap-3 px-6 py-4 hover:bg-slate-100"
            >
              <Icon size={20}></Icon>
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default SideBar;
