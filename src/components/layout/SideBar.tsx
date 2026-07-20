import {
  BarChart2,
  Bell,
  Building2,
  ClipboardList,
  LayoutDashboard,
} from "lucide-react";
import { useNavigate } from "react-router";

const menus = [
  { name: "DashBoard", icon: LayoutDashboard, path: "/" },
  { name: "Vendors", icon: Building2, path: "/vendors" },
  { name: "Purchase Orders", icon: ClipboardList, path: "/orders" },
  { name: "Performance", icon: BarChart2, path: "/performance" },
  { name: "Notification", icon: Bell, path: "/notification" },
];
function SideBar() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <aside className="w-65 bg-white borde-r">
      <div className="text-2xl font-bold p-6">VendorMS</div>
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
